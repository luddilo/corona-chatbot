import { BotTurn } from "narratory"

// We only want this bridge for the phone integration
export const bridge: BotTurn = {
  say: [
    {
      cond: {
        platform: "voximplant"
      },
      text: "Så"
    }, 
  ]
}
