import { listOptions } from "../visuals"
import { EXIT } from "narratory"

export const answerFallback = [
  {
    cond: { retryCount: 0 },
    say: [
      {
        cond: { platform: "voximplant" },
        text:
          "Jag förstod inte. Du kan till exempel fråga hur coronavirus smittar, vilka symptomen är och hur man skyddar sig."
      },
      {
        text: "Tyvärr förstod jag inte din fråga. Ställ gärna en ny.",
        content: listOptions
      }
    ],
    repair: true
  },
  {
    //cond: { retryCount: 1 },
    say: [
      {
        cond: { platform: "voximplant" },
        text: "Förlåt, men jag förstod inte nu heller. Försök igen, eller ring 113 13 för att prata med en människa."
      },
      {
        text: "Förlåt, men jag förstod inte nu heller. Testa att trycka på någon av knapparna nedan.",
        content: listOptions
      }
    ],
    repair: true
  },
  /* //removed while testing
  {
    cond: { platform: "voximplant" },
    say:
      "Vi verkar ha lite svårt att förstå varandra. Mitt råd är att ringa 113 13 där du kan få prata med en människa. Hejdå!"
  },
  {
    say:
      "Vi verkar ha lite svårt att förstå varandra, så jag föreslår att du letar upp den information du söker på Folkhälsomyndighetens hemsida i stället.",
    goto: EXIT
  }
  */
]
