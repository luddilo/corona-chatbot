import { getLinesFromTsv } from "./getLines"

// https://docs.google.com/spreadsheets/d/1PAf9wmSxVnCBjIHft_-n0HOlRaq_LRlNMHeMPvYb2GU/edit#gid=901191674
const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSz98tc6sPBHgaU1PIyDggLhfQ0G5tBc5PyEsgKfxV-u4ybAEtSp9o-qLylGh_cO9BiJXtKOiKTDa0M/pub?gid=901191674&single=true&output=tsv"

const NUMBER_OF_TOP_ROWS_TO_SKIP = 0

export async function getFaq() {
  try {
    const qas: { formulations: string[]; answers: string[] }[] = []

    const lines = await getLinesFromTsv({ url, skipRows: NUMBER_OF_TOP_ROWS_TO_SKIP })
    const headers = lines.splice(0, 1)[0]

    lines.forEach(arr => {
      let qa = { formulations: [], answers: [], staticAnswer: true }

      arr.forEach((text, index) => {
        const header = headers[index]
        if (header.toLowerCase() === "question formulations" || header.toLowerCase() === "q") {
          qa.formulations.push(text)
        } else if (header.toLowerCase() === "bot-answer") {
          qa.answers.push(text)
        } else if (header.toLowerCase() === "dynamic answer") {
          if (text.toLowerCase() === "yes") {
            qa.staticAnswer = false
          }
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