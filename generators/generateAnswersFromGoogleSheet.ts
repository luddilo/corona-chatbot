import Axios from "axios"
import { UserTurn, ANYTHING, Intent } from "narratory"
import { confirmRight, confirmWrong } from "../src/nlu"
import { getLinesFromTsv } from "./getLines"
import { getAnswerWithPrompts } from "./getAnswerWithPrompts"
import { getUserTurn } from "./getUserTurn"
import { getFaq } from "./getFaq"
import { getEntities } from "./generateEntities"

const generateSimpleAnswers = async () => {
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

  const str = `import { UserTurn } from "narratory"\nexport const simpleQuestionAnswers : UserTurn[] = ${JSON.stringify(
    userTurns,
    null,
    2
  )}`

  await require("fs").writeFile("src/answers/generatedFAQ.ts", str, (err: any) => {
    if (err) console.log("Failed writing generated FAQ file. Err:", err)
  })
  console.log("Printed file")
  //process.exit()
}

generateSimpleAnswers()
