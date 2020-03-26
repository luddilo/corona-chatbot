import Axios from "axios"
const notificationUrl = require("../../config.json").slackWebhook

export const notifySlack = async (message: string) => {
  await Axios.post(notificationUrl, {
    text: message
  }).catch(err => {
    if (err) {
      console.error("Notification failed to ", notificationUrl)
      console.log(err.message)
    }
  })
}