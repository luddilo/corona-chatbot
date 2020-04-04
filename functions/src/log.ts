import { cloudFunction } from "narratory-cloud"
import { LogTurn } from "narratory"
import { notifySlack } from "./util/notifySlack"
import { addErrorToGoogleSheet, addLogToGoogleSheet } from "./util/addToGoogleSheet"
const config = require("../config.json")

export const log = cloudFunction(async (req, res) => {
  const { sessionId, message, turn, platform }: { sessionId: string; message: string; platform: string, turn: LogTurn } = req.body
  const promises: Promise<any>[] = []

  try {
    const { googleSheetId, googleSheetTabIdStats, googleSheetTabIdErrors } = config
    promises.push(addLogToGoogleSheet({ sessionId, turn, platform, googleSheetId, googleSheetTabId: googleSheetTabIdStats }))

    if (turn.isFallback) {
      promises.push(notifySlack(message))
      promises.push(
        addErrorToGoogleSheet({
          type: turn.isFallback ? "fallback" : "miss classification",
          botUtterance: "<Not logged>",
          userUtterance: turn.userInput,
          botReply: turn.botReplies.join(". "),
          intentName: turn.intentName,
          confidence: turn.confidence,
          googleSheetId,
          googleSheetTabId: googleSheetTabIdErrors,
        })
      )

      await Promise.all(promises)

      res.json({
        status: "Logged fallback",
      })
    } else {
      res.json({
        status: "Not a fallback so not logging",
      })
    }
  } catch (err) {
    console.log("Something went wrong: " + err)
    res.status(400).json({
      status: "ERROR",
      message: err.message,
    })
  }
})
