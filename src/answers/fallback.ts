import { listOptions } from "../visuals"
import { EXIT } from "narratory"

export const answerFallback = [
  {
    cond: { retryCount: 1 },
    say: [
      {
        cond: {
          platform: "voximplant"
        },
        text:
          "Jag förstod inte. Du kan till exempel fråga hur du skyddar dig, om din region har hög risk eller om du bör stanna hemma"
      },
      {
        text: "Tyvärr förstod jag inte din fråga. Prova igen",
        content: listOptions
      }
    ],
    repair: true
  },
  {
    cond: { retryCount: 2 },
    say: [
      {
        cond: {
          platform: "voximplant"
        },
        text: "Jag förstod faktiskt inte nu heller. Prova igen eller ring 11313 istället för att prata med en människa"
      },
      {
        text: "Nej, jag förstod faktiskt inte nu heller. Testa att trycka på någon av knapparna nedan",
        content: listOptions
      }
    ],
    repair: true
  },
  {
    say: "Sorry, jag förstod inte. Prova att ringa 11313 istället för att prata med en människa",
    goto: EXIT
  }
]
