import { cloudFunction } from "narratory-cloud"
import { LogTurn } from "narratory"
import { notifySlack } from "./util/notifySlack"
import { addTurnToGoogleSheet } from "./util/addToGoogleSheet"

export const log = cloudFunction(async (req, res) => {
    const { message, turn }: { message: string; turn: LogTurn } = req.body
    const promises: Promise<any>[] = []
  
    try {
      if (turn.isFallback) {
        promises.push(notifySlack(message))
        promises.push(addTurnToGoogleSheet(turn))
  
        await Promise.all(promises)
  
        res.json({
          status: "Logged fallback"
        })
      } else {
        res.json({
          status: "Not a fallback so not logging"
        })
      }
    } catch (err) {
      console.log("Something went wrong: " + err)
      res.status(400).json({
        status: "ERROR",
        message: err.message
      })
    }
  })