import { UserTurn } from "narratory"
import * as nlu from "./nlu"

/*
    Questions and other user-driven initiatives
*/

const queryRepeat : UserTurn = {
  intent: ["Kan du repetera?", "vad sa du?", "vadå?", "vad sa du?"],
  bot: "Jag kommer kunna göra detta i framtiden!"
}

export default [queryRepeat]
