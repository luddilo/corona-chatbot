import { getLinesFromTsv } from "./getLines"

// https://docs.google.com/spreadsheets/d/1PAf9wmSxVnCBjIHft_-n0HOlRaq_LRlNMHeMPvYb2GU/edit#gid=901191674
const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSz98tc6sPBHgaU1PIyDggLhfQ0G5tBc5PyEsgKfxV-u4ybAEtSp9o-qLylGh_cO9BiJXtKOiKTDa0M/pub?gid=901191674&single=true&output=tsv"

const NUMBER_OF_TOP_ROWS_TO_SKIP = 1

const FIRST_QUESTION_COLUMN_INDEX = 3
const LAST_QUESTION_COLUMN_INDEX = 13
const DYNAMIC_ANSWER_BOOLEAN_COLUMN_INDEX = 19
const ANSWER_COLUMN_INDEX = 20


export async function getFaq() {
  try {
    const qas: { formulations: string[]; answers: string[] }[] = []

    const lines = await getLinesFromTsv({ url, skipRows: NUMBER_OF_TOP_ROWS_TO_SKIP })

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