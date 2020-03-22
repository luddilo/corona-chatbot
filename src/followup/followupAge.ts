import { BotTurn } from "narratory"
import * as nlu from "../nlu"

export const followupAge : BotTurn = {
    say: [
      {
        cond: {
          platform: "voximplant"
        },
        text:
          "Får jag fråga hur gammal du är?"
      },
      {
        text: "Får jag fråga hur gammal du är?",
      }
    ],
    user: [
        { intent: nlu.ageIntent , bot: "Okej. Du är _age."
        }
    ] 
  }