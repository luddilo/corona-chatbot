import { UserTurn, EXIT } from "narratory"
import * as nlu from "./nlu"

/*
    Questions and other user-driven initiatives
*/

const hasSymptoms : UserTurn = {
  intent: nlu.hasSymptoms,
  bot: "Okej. Då är det viktigt att du stannar hemma för att förhindra spridning. Du kan också ringa 1177, och få rådgivning från en sjuksköterska."
}

const exit : UserTurn = {
  intent: nlu.exit,
  bot: {
    say: "Hejdå!",
    goto: EXIT
  }
}

export default [hasSymptoms, exit]
