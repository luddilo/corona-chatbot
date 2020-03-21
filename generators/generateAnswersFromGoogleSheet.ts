import Axios from "axios"
import { UserTurn, ANYTHING, Intent } from "narratory"
import { confirmRight, confirmWrong } from "../src/nlu"
const narratoryOptions = require("../../config.json")

// https://docs.google.com/spreadsheets/d/1PAf9wmSxVnCBjIHft_-n0HOlRaq_LRlNMHeMPvYb2GU/edit#gid=901191674
const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSz98tc6sPBHgaU1PIyDggLhfQ0G5tBc5PyEsgKfxV-u4ybAEtSp9o-qLylGh_cO9BiJXtKOiKTDa0M/pub?gid=901191674&single=true&output=tsv"

const NUMBER_OF_TOP_ROWS_TO_SKIP = 1

const FIRST_QUESTION_COLUMN_INDEX = 4
const LAST_QUESTION_COLUMN_INDEX = 13
const DYNAMIC_ANSWER_BOOLEAN_COLUMN_INDEX = 16
const ANSWER_COLUMN_INDEX = 17

async function getFaq(url: string) {
  try {
    const response = await Axios.get(url)

    let allTextLines = response.data.split(/\r/).slice(NUMBER_OF_TOP_ROWS_TO_SKIP)

    let numberOfDataRows = allTextLines.length
    let numberOfCols = allTextLines[0].split("\t").length

    let lines = []

    for (let i = 0; i < numberOfDataRows; i++) {
      // split content based on tab
      let data = allTextLines[i].split("\t")

      if (data.length >= numberOfCols) {
        let tarr = []
        for (let j = 0; j < numberOfCols; j++) {
          tarr.push(data[j].replace("\n", ""))
        }
        lines.push(tarr)
      }
    }

    const qas: { formulations: string[]; answers: string[] }[] = []

    lines.forEach(arr => {
      let qa = { formulations: [], answers: [], staticAnswer: true }

      arr.forEach((text, colNumber) => {
        if (colNumber >= FIRST_QUESTION_COLUMN_INDEX && colNumber <= LAST_QUESTION_COLUMN_INDEX && text) {
          qa.formulations.push(text)
        } else if (colNumber === ANSWER_COLUMN_INDEX && text) {
          qa.answers.push(text)
        } else if (colNumber === DYNAMIC_ANSWER_BOOLEAN_COLUMN_INDEX && text.toLowerCase() === "yes") {
          qa.staticAnswer = false
        }
      })

      if (qa.formulations.length > 0 && qa.answers.length > 0 && qa.staticAnswer) {
        qas.push(qa)
      }
    })
    return qas
  } catch (err) {
    console.log(err)
    return null
  }
}

const generateSimpleAnswers = async () => {
  console.log("Generating src/answers/generatedFAQ.ts")
  const faq = await getFaq(url)
  console.log("Got faq from Google sheet")
  
  let userTurns: UserTurn[] = faq
    .filter(qa => qa.answers.length > 0 && qa.formulations.length > 0)
    .map(qa => {
      return {
        intent: {
          name: "question: " + qa.formulations[0],
          examples: qa.formulations
        },
        bot: qa.answers
      }
    })

  const args = process.argv.slice(2)

  if (args.includes("--withPrompts")) {
    userTurns = userTurns.map(userTurn => {
      return {
        ...userTurn,
        bot: {
          say: userTurn.bot + ". Var det ett korrekt svar?",
          set: {
            classifiedQuestion: (userTurn.intent as Intent).name,
            classifiedUtterance: "_user_text"
          },
          user: [
            { intent: confirmRight, bot: "Tack!" },
            { intent: confirmWrong, bot: {
              say: "Tack!",
              url: narratoryOptions.confirmWrongAnswerWebhook,
              params: ["classifiedQuestion", "classifiedUtterance"],
              asyncWebhook: true
            }},
            {
              intent: ANYTHING,
              bot: {
                say: "Förlåt, var det rätt eller fel svar?",
                repair: true
              }
            }
          ]
        }
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
