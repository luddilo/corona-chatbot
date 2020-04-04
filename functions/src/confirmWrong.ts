import { cloudFunction } from "narratory-cloud"
import { notifySlack } from "./util/notifySlack"
import { addErrorToGoogleSheet } from "./util/addToGoogleSheet"
const config = require("../config.json")

export const confirmWrong = cloudFunction(async (req, res) => {
  try {
    const { classifiedIntentName, classifiedUtterance, botResponse } = req.body
    const { googleSheetId, googleSheetTabIdErrors } = config

    const promises: Promise<any>[] = []
    const message = `"${classifiedUtterance}" was *classified wrongly* to the question "${classifiedIntentName.replace(
      "question: ",
      ""
    )}"`
    promises.push(notifySlack(message))
    promises.push(
      addErrorToGoogleSheet({
        type: "miss classification",
        userUtterance: classifiedUtterance,
        botReply: Array.isArray(botResponse) ? botResponse.join(". ") : botResponse,
        intentName: classifiedIntentName,
        googleSheetId,
        googleSheetTabId: googleSheetTabIdErrors
      })
    )
    await Promise.all(promises)
    res.json({
      status: "confirmed wrong"
    })
  } catch (err) {
    console.log("Something went wrong logging a wrong-confirmation: " + err)
    console.log(JSON.stringify(err.stack))
    res.status(400).json({
      status: "ERROR",
      message: err.message
    })
  }
})
