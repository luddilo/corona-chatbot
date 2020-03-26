import { BotTurn, ANYTHING } from "narratory"
import { confirmWrong, confirmRight } from "./nlu"
const config = require("../../config.json")

export const verifyAnswer : BotTurn = {
    label: "VERIFY_ANSWER",
    say: {
      text: "Förstod jag din fråga korrekt?",
      suggestions: ["Ja", "Nej"]
    },
    user: [
      { intent: confirmRight, bot: "Tack!" },
      {
        intent: confirmWrong,
        bot: {
          say: [
            "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
            "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
          ],
          url: config.confirmWrongAnswerWebhook,
          params: ["classifiedIntentName", "classifiedUtterance", "botResponse"],
          asyncWebhook: true
        }
      },
      {
        intent: ANYTHING,
        bot: [
          {
            cond: {
              retryCount: 0
            },
            say: "Förlåt, var det rätt eller fel svar?",
            repair: true
          },
          {
            say: "Jag förstod inte, men låt oss gå vidare"
          }
        ]
      }
    ]
  }