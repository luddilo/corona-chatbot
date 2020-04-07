import { getLinesFromTsv } from "./getLines"
import { RichSay } from "narratory"

// https://docs.google.com/spreadsheets/d/1PAf9wmSxVnCBjIHft_-n0HOlRaq_LRlNMHeMPvYb2GU/edit#gid=901191674
const url =
  //"https://docs.google.com/spreadsheets/d/e/2PACX-1vSz98tc6sPBHgaU1PIyDggLhfQ0G5tBc5PyEsgKfxV-u4ybAEtSp9o-qLylGh_cO9BiJXtKOiKTDa0M/pub?gid=901191674&single=true&output=tsv"
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQmhiwOlSlURDChBMlFXSkoMh7xA5L03X39X1R4U8eF1LsIlFpLf4qt_4W1Grrmf1x-lKS3ejZcu69G/pub?gid=901191674&single=true&output=tsv"

const NUMBER_OF_TOP_ROWS_TO_SKIP = 0

interface QA {
  formulations: string[]
  category: string
  shouldVerify: boolean
  staticAnswer: boolean
  answers: RichSay[]
}

export async function getFaq() {
  try {
    const qas: QA[] = []

    const lines = await getLinesFromTsv({ url, skipRows: NUMBER_OF_TOP_ROWS_TO_SKIP })
    const headers = lines.splice(0, 1)[0]

    lines.forEach((row) => {
      let qa: QA = { formulations: [], category: "", answers: [], shouldVerify: true, staticAnswer: true }
      let skip = false
      let answer : RichSay = { text: null }
      row.forEach((text: string, index) => {
        const header = headers[index]
        if (index == 0 && text !== "OK") {
          skip = true
        } else if (header.toLowerCase() === "skip verification") {
          if (text.toLowerCase() === "yes") {
            qa.shouldVerify = false
          }
        } else if (header.toLowerCase() === "") {
        } else if (header.toLowerCase() === "category") {
          qa.category = text
        } else if (header.toLowerCase() === "question formulations" || header.toLowerCase() === "q") {
          qa.formulations.push(text)
        } else if (header.toLowerCase() === "bot-answer") {
          answer.text = text
        } else if (header.toLowerCase() === "voice-answer" && text) {
          answer.ssml = text
        } else if (header.toLowerCase() === "dynamic answer") {
          if (text.toLowerCase() === "yes") {
            qa.staticAnswer = false
          }
        }
      })

      if (!skip && qa.formulations.length > 0 && answer.text && qa.staticAnswer) {
        qa.answers.push(answer)
        qas.push(qa)
      }
    })
    return qas
  } catch (err) {
    console.log(err)
    return null
  }
}
