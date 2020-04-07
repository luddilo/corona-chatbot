import { BotTurn, ANYTHING } from "narratory"
import { confirmWrong, confirmRight } from "./nlu"
const config = require("../../config.json")

export const verifyAnswer: BotTurn = {
  label: "VERIFY_ANSWER",
  say: {
    text: "Förstod jag din fråga korrekt?",
    suggestions: ["Ja", "Nej"],
  },
  expectShortAnswer: true,
  user: [
    { intent: confirmRight, bot: ["Okej. Tack ska du ha!", "Härligt. Tack för hjälpen!"] },
    {
      intent: confirmWrong,
      bot: {
        say: [
          "Okej. Jag förstår. Tack för hjälpen att bli bättre!",
          "Okej. Sorry. Tack för att du hjälper mig bli bättre!",
        ],
        url: config.confirmWrongAnswerWebhook,
        params: ["classifiedIntentName", "classifiedUtterance", "botResponse"],
        asyncWebhook: true,
      },
    },
    {
      intent: ANYTHING,
      bot: [
        {
          cond: {
            retryCount: 0,
          },
          say: "Förlåt, var det rätt eller fel svar?",
          repair: true,
        },
        {
          say: "Jag förstod inte, men låt oss gå vidare",
        },
      ],
    },
  ],
}
