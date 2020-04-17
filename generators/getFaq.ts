import { getLinesFromTsv } from "./getLines"
import { RichSay } from "narratory"
import * as XLSX from "xlsx"
const { GoogleSpreadsheet } = require("google-spreadsheet")
const googleCredentials = require("../../functions/google_credentials.json")

// https://docs.google.com/spreadsheets/d/1PAf9wmSxVnCBjIHft_-n0HOlRaq_LRlNMHeMPvYb2GU/edit#gid=901191674

interface QA {
  formulations: string[]
  category: string
  shouldVerify: boolean
  staticAnswer: boolean
  answers: RichSay[]
}

export async function getFaq() {
  try {
    const googleSheetId = "1PAf9wmSxVnCBjIHft_-n0HOlRaq_LRlNMHeMPvYb2GU"
    const googleSheetTabId = "901191674"
    const doc = new GoogleSpreadsheet(googleSheetId)

    await doc.useServiceAccountAuth(googleCredentials)

    await doc.loadInfo() 

    const sheet = doc.sheetsById[googleSheetTabId]

    const lines = await sheet.getRows()

    const filtered = lines.filter((row) => {
      return row["OK (for bot)"].toLowerCase() === "ok" && row["Dynamic answer"].toLowerCase() !== "yes"
    })

    const qas = []

    filtered.forEach((row) => {
      let qa: QA = { formulations: [], category: "", answers: [], shouldVerify: true, staticAnswer: true }
      let answer: RichSay = { text: null }

      for (let i = 0; i < 100; i++) {
        const label = `Q${i}`
        if (label in row && row[label]) {
          qa.formulations.push(row[label])
        }
      }

      qa.category = row.category
      
      answer.text = row["Bot-answer"]
      if (row["Voice-answer"]) {
        answer.ssml = row["Voice-answer"]
      }
      qa.answers.push(answer)

      if (row["Skip verification"].toLowerCase() === "yes") {
        qa.shouldVerify = false
      }
      qas.push(qa)
    })
    return qas
  } catch (err) {
    throw err
  }
}