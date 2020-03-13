import { BotTurn } from "narratory"

export const answerFamily: BotTurn[] = [
  {
    cond: {
      family: "äldre"
    },
    say:
      "Studier i Kina och Italien visar att äldre personer och personer med underliggande sjukdomar, såsom högt blodtryck, hjärt- kärlsjukdom, lungsjukdom, cancer eller diabetes, är överrepresenterade bland de svåra fallen. Om någon närstående till dig tillhör denna grupp bör du kontakta 11313 omgående för att prata med en människa."
  },
  {
    cond: {
      family: "barn"
    },
    say:
      "Barn är ingen riskgrupp för Coronaviruset men om ditt barn är sjukt och har symptom som problem med andning, hög feber eller ansträngd hosta bör du kontakta 11313."
  },
  {
    say:
      "I den mån det går bör du försöka vårda sjuka närstående hemma för att sjukvården ska kunna fokusera på de allra sjukaste."
  }
]
