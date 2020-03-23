import { BotTurn } from "narratory"
import * as nlu from "../nlu"
import { normalize } from "path"

export const followupRiskGroup : BotTurn = {
    say: [
      {
        cond: {
          platform: "voximplant"
        },
        text:
          "Är du över 70 år eller tillhör du en riskgrupp?"
      },
      {
        text: "Är du över 70 år eller tillhör du en riskgrupp?",
      }
    ],
    user: [
        { intent: nlu.yes, bot: "Du är gammal."
        },
        { intent: nlu.no, bot: "Du är ung."
      }
    ] 
  }