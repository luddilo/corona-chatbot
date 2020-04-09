import { UserTurn, Intent, BridgeTurn, AbstractBotTurn, RichSay, ConditionMap } from "narratory"
import * as moment from "moment"
import { getAnswerWithPrompts } from "./getAnswerWithPrompts"
import { getUserTurn, entityDelimiter } from "./getUserTurn"
import { getEntities } from "./getEntities"
import * as fs from "fs"
import { getNews } from "./getNews"
import * as nlu from "../src/nlu"

const recursivelyCreateBridgeTurns = ({
  says,
  outputEvent,
  inputEvent,
  initialCond,
}: {
  says: RichSay[]
  outputEvent?: string
  inputEvent?: string
  initialCond?: ConditionMap
}) : BridgeTurn => {
  const turn: any = {
    say: says.splice(0, 1)[0],
  }
  if (inputEvent) turn.label = inputEvent
  if (initialCond) turn.cond = initialCond

  if (says.length > 0) {
    turn.bot = recursivelyCreateBridgeTurns({ says, outputEvent })
  } else {
    if (outputEvent) {
      const userTurns: UserTurn[] = [
        {
          intent: [...nlu.yes.examples, "jag"],
          bot: {
            say: "",
            goto: outputEvent,
          },
        },
        {
          intent: nlu.no,
          bot: "Okej",
        },
      ]
      turn.expectShortAnswer = true
      turn.say.suggestions = ["Yes", "No"]
      turn.user = userTurns
    }
  }

  return turn
}

const printPretty = (something: any) => {
  console.log(JSON.stringify(something, null, 2))
}

export const generateNews = async () => {
  console.log("Generating src/answers/generatedNews.ts")
  const news = await getNews()

  let textIntros = recursivelyCreateBridgeTurns({
    says: news.text.intro,
    outputEvent: news.text.stats.length > 0 ? "SHARE_STATS_TEXT" : undefined,
  })

  let textStats = recursivelyCreateBridgeTurns({
    says: news.text.stats,
    inputEvent: "SHARE_STATS_TEXT"
  })

  let voiceIntros = recursivelyCreateBridgeTurns({
    initialCond: {
      platform: "voximplant",
    },
    says: news.voice.intro,
    outputEvent: news.voice.stats.length > 0 ? "SHARE_STATS_VOICE" : undefined,
  })

  let voiceStats = recursivelyCreateBridgeTurns({
    says: news.voice.stats,
    inputEvent: "SHARE_STATS_VOICE"
  })

  const importStr = `import { BotTurn, BridgeTurn } from "narratory"`

  const timestampStr = `// Generated at ${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}`

  const newsStr = `export const presentNews : BridgeTurn[] = ${JSON.stringify([voiceIntros, textIntros], null, 2)}`

  const textStatsStr = `export const textStats : ${textStats.bot ? "BridgeTurn" : "BotTurn" } = ${JSON.stringify(textStats, null, 2)}`

  const voiceStatsStr = `export const voiceStats : ${voiceStats.bot ? "BridgeTurn" : "BotTurn" } = ${JSON.stringify(voiceStats, null, 2)}`

  const str = [importStr, timestampStr, newsStr, textStatsStr, voiceStatsStr].join("\n\n")

  fs.writeFileSync("src/answers/generatedNews.ts", str)

  console.log("Printed file")
}
