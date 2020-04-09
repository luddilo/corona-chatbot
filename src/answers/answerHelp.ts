import { listOptions } from "../visuals";
import { BotTurn } from "narratory"

export const answerHelp : BotTurn = {
    say: [
      {
        cond: {
          platform: "voximplant"
        },
        text:
          "Du kan till exempel fråga hur du skyddar dig, om din region har hög risk eller om du bör stanna hemma"
      },
      {
        cond: {
          platform: "facebook"
        },
        text: 
        "Du kan till exempel fråga hur du skyddar dig, om din region har hög risk eller om du bör stanna hemma"
      },
      {
        text: "Du kan t.ex fråga om nedan saker",
        content: listOptions
      }
    ]
  }