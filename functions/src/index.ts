import { cloudFunction } from "narratory-cloud"
import { LogTurn } from "narratory"
import Axios from "axios"

// The cloud function, defined here using a Narratory-cloud helper-method
export const regions = cloudFunction(async (req, res) => {
  res.send({
    set: {
      foo: "bar"
    }
  })
})

const stack: string[] = []

// https://abfbb529.eu.ngrok.io/healthadvisor-nnbwwd/europe-west1/log
export const log = cloudFunction(async (req, res) => {
  //const { sessionId, turn } : { sessionId: string, turn: LogTurn } = req.body

  // if (turn.intentName.startsWith("question:")) {
  //   stack.push(turn.intentName)
  // } else if (turn.intentName == "confirmWrong") {
  //   console.log(stack.pop() + "was classified wrongly")
  // }

  res.json("logged!")
})

export const confirmWrong = cloudFunction(async (req, res) => {
  const { classifiedQuestion, classifiedUtterance } = req.body

  const message = `"${classifiedUtterance}" was *classified wrongly* to the question "${classifiedQuestion.replace(
    "question: ",
    ""
  )}"`
  const notificationUrl = require("../config.json").slackWebhook

  Axios.post(notificationUrl, {
    text: message
  }).catch(err => {
    if (err) {
      console.error("Notification failed to ", notificationUrl)
      console.log(err.message)
    }
  })

  res.json("confirmed wrong")
})
