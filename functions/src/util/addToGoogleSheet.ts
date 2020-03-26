import { LogTurn } from "narratory"
const { GoogleSpreadsheet } = require("google-spreadsheet")
const config = require("../../config.json")
const googleCredentials = require("../../google_credentials.json")

export const addTurnToGoogleSheet = async (turn: LogTurn, lastTurn?: LogTurn) => {
  await addToGoogleSheet({
    type: turn.isFallback ? "fallback" : "miss classification",
    botUtterance: turn.isFallback && lastTurn ? lastTurn.botReplies.join(". ") : "<Not logged>",
    userUtterance: turn.userInput,
    botReply: turn.botReplies.join(". "),
    intentName: turn.intentName,
    confidence: turn.confidence
  })
}

export const addToGoogleSheet = async ({
  type,
  botUtterance,
  userUtterance,
  botReply,
  intentName,
  confidence
}: {
  type: string
  botUtterance?: string
  userUtterance: string
  botReply: string
  intentName?: string
  confidence?: number
}) => {
  const doc = new GoogleSpreadsheet(config.googleSheetId)

  // OR load directly from json file if not in secure environment
  await doc.useServiceAccountAuth(googleCredentials)

  await doc.loadInfo() // loads document properties and worksheets

  const sheet = doc.sheetsById[config.googleSheetLogsTabId]

  await sheet.addRow({
    "Typ av error": type,
    "Botten sa": botUtterance ? botUtterance : "<Inte loggat>",
    "Användaren sa": userUtterance,
    "Botten svarade": botReply,
    "Fråga som matchades": intentName
  })
}
