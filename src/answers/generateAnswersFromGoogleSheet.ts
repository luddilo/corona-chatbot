import Axios from "axios"

// https://docs.google.com/spreadsheets/d/1PAf9wmSxVnCBjIHft_-n0HOlRaq_LRlNMHeMPvYb2GU/edit#gid=0
const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSz98tc6sPBHgaU1PIyDggLhfQ0G5tBc5PyEsgKfxV-u4ybAEtSp9o-qLylGh_cO9BiJXtKOiKTDa0M/pub?gid=0&single=true&output=tsv"

async function getFaq(url: string) {
  const response = await Axios.get(url)

  let allTextLines = response.data.split(/\r/)

  let headers = allTextLines[0].split("\t")
  let lines = []
  const length = headers.length

  for (let i = 0; i < allTextLines.length; i++) {
    // split content based on comma
    let data = allTextLines[i].split("\t")

    if (data.length >= headers.length) {
      let tarr = []
      for (let j = 0; j < headers.length; j++) {
        tarr.push(data[j].replace("\n", ""))
      }

      // log each row to see output
      lines.push(tarr)
    }
  }

  const QAs: { formulations: string[]; answers: string[] }[] = []

  for (let i = 0; i < length; i++) {
    QAs.push({
      formulations: [],
      answers: []
    })
  }

  lines.slice(4).forEach((arr, rowNumber) => {
    arr.forEach((text, colNumber) => {
      if (colNumber > 0 && text) {
        if (rowNumber < 6) {
          QAs[colNumber].formulations.push(text)
        } else {
          QAs[colNumber].answers.push(text)
        }
      }
    })
  })

  return QAs.slice(1)
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
