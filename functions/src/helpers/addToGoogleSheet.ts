import { LogTurn } from "narratory"
const { GoogleSpreadsheet } = require("google-spreadsheet")
const googleCredentials = require("../../google_credentials.json")

export const addLogToGoogleSheet = async ({
  sessionId,
  turn,
  platform,
  googleSheetId,
  googleSheetTabId,
}: {
  sessionId: string,
  turn: LogTurn
  platform: string
  googleSheetId: string
  googleSheetTabId: string
}) => {
  await addRow({ row: {
    "User input": turn.userInput,
    "Classified intent": turn.intentName,
    "Confidence": turn.confidence,
    "Parameters": JSON.stringify(turn.parameters),
    "Bot response": turn.botReplies.join(". "),
    "Platform": platform,
    "Timestamp": turn.timestamp,
    "SessionId": sessionId
  }, googleSheetId, googleSheetTabId })
}

export const addErrorToGoogleSheet = async ({
  type,
  botUtterance,
  userUtterance,
  botReply,
  intentName,
  confidence,
  googleSheetId,
  googleSheetTabId,
}: {
  type: string
  botUtterance?: string
  userUtterance: string
  botReply: string
  intentName?: string
  confidence?: number
  googleSheetId: string
  googleSheetTabId: string
}) => {
  await addRow({
    row: {
      "Typ av error": type,
      "Botten sa": botUtterance ? botUtterance : "<Inte loggat>",
      "Användaren sa": userUtterance,
      "Botten svarade": botReply,
      "Fråga som matchades": intentName,
    },
    googleSheetId,
    googleSheetTabId,
  })
}

const addRow = async ({
  row,
  googleSheetId,
  googleSheetTabId,
}: {
  row: any
  googleSheetId: string
  googleSheetTabId: string
}) => {
  const doc = new GoogleSpreadsheet(googleSheetId)

  // OR load directly from json file if not in secure environment
  await doc.useServiceAccountAuth(googleCredentials)

  await doc.loadInfo() // loads document properties and worksheets

  const sheet = doc.sheetsById[googleSheetTabId]

  await sheet.addRow(row)
}
