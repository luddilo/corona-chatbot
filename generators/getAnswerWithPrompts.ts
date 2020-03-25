import { UserTurn, Intent, ANYTHING } from "narratory"
import { confirmRight, confirmWrong } from "../src/nlu"
const config = require("../../config.json")

export const getAnswerWithPrompts = (userTurn: UserTurn) => {
  return {
    say: userTurn.bot as string[],
    set: {
      classifiedQuestion: (userTurn.intent as Intent).name,
      classifiedUtterance: "_user_text"
    },
    bot: {
      say: "Var det ett korrekt svar?",
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
            params: ["classifiedQuestion", "classifiedUtterance"],
            asyncWebhook: true
          }
        },
        {
          intent: ANYTHING,
          bot: [
            {
              cond: {
                turnCount: 0
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
  }
}
