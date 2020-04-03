import { UserTurn } from "narratory"
import * as moment from "moment"
import { getAnswerWithPrompts } from "./getAnswerWithPrompts"
import { getUserTurn, entityDelimiter } from "./getUserTurn"
import { getFaq } from "./getFaq"
import { getEntities } from "./generateEntities"
import * as fs from "fs"

export const generateSimpleAnswers = async () => {
  console.log("Generating src/answers/generatedFAQ.ts")
  const faq = await getFaq()
  console.log("Got faq from Google sheet")

  const entities = await getEntities()
  console.log("Got entites from Google sheet")

  let userTurns: UserTurn[] = faq
    .filter(qa => qa.answers.length > 0 && qa.formulations.length > 0)
    .map(qa =>
      getUserTurn({
        intentName: "question: " + qa.formulations[0],
        examples: qa.formulations,
        answers: qa.answers,
        entities: entities
      })
    )

  const args = process.argv.slice(2)

  if (args.includes("--withPrompts")) {
    userTurns = userTurns.map(userTurn => {
      return {
        ...userTurn,
        bot: getAnswerWithPrompts(userTurn)
      }
    })
  }

  const importStr = `import { UserTurn, Entity } from "narratory"`

  const timestampStr = `// Generated at ${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}`

  const faqStr = `export const simpleQuestionAnswers : UserTurn[] = ${JSON.stringify(userTurns, null, 2)}`
    .split(`"${entityDelimiter}`)
    .join("")
    .split(`${entityDelimiter}"`)
    .join("")

  const entityStr = entities.map(entity => `export const ${entity.name} : Entity = ${JSON.stringify(entity, null, 2)}`)

  const str = [importStr, timestampStr, ...entityStr, faqStr].join("\n\n")

  fs.writeFileSync("src/answers/generatedFAQ.ts", str)

  console.log("Printed file")
}
