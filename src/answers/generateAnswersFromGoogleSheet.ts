import Axios from "axios"

// https://docs.google.com/spreadsheets/d/1PAf9wmSxVnCBjIHft_-n0HOlRaq_LRlNMHeMPvYb2GU/edit#gid=901191674
const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSz98tc6sPBHgaU1PIyDggLhfQ0G5tBc5PyEsgKfxV-u4ybAEtSp9o-qLylGh_cO9BiJXtKOiKTDa0M/pub?gid=901191674&single=true&output=tsv"

const NUMBER_OF_TOP_ROWS_TO_SKIP = 1

async function getFaq(url: string) {
  const response = await Axios.get(url)

  let allTextLines = response.data.split(/\r/).slice(NUMBER_OF_TOP_ROWS_TO_SKIP)

  let numberOfDataRows = allTextLines.length
  let numberOfCols = allTextLines[0].split("\t").length

  let lines = []

  for (let i = 0; i < numberOfDataRows; i++) {
    // split content based on comma
    let data = allTextLines[i].split("\t")

    if (data.length >= numberOfCols) {
      let tarr = []
      for (let j = 0; j < numberOfCols; j++) {
        tarr.push(data[j].replace("\n", ""))
      }

      // log each row to see output
      lines.push(tarr)
    }
  }
  console.log(lines)

  const qas: { formulations: string[]; answers: string[] }[] = []

  lines.forEach(arr => {
    let qa = { formulations: [], answers: [] }
    
    arr.forEach((text, colNumber) => {
      if (colNumber >= 2 && colNumber <= 12 && text) {
        console.log("adding formulation")

        qa.formulations.push(text)
      } else if (colNumber === 15 && text) {
        qa.answers.push(text)
      }
    })
    
    if (qa.formulations.length > 0 && qa.answers.length > 0) {
      qas.push(qa)
    }
  })
  console.log(qas)

  return qas
}

export const generateSimpleAnswers = async () => {
  const faq = await getFaq(url)
  const userTurns = faq
    .filter(qa => qa.answers.length > 0 && qa.formulations.length > 0)
    .map(qa => {
      return {
        intent: qa.formulations,
        bot: qa.answers
      }
    })
  const str = `import { UserTurn } from "narratory"\nexport const simpleQuestionAnswers : UserTurn[] = ${JSON.stringify(
    userTurns,
    null,
    2
  )}`

  require("fs").writeFile("src/answers/generatedFAQ.ts", str, (err: any) => {
    if (err) console.log("Failed writing generated FAQ file. Err:", err)
  })
}

generateSimpleAnswers()
