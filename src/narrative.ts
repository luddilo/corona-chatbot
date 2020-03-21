import { BotTurn, ANYTHING, BridgeTurn, List, Item, EXIT } from "narratory"
import * as nlu from "./nlu"
import { answerRegion } from "./answers/answerRegion"
import { answerFamily } from "./answers/answerFamily"
import { answerProtect } from "./answers/answerProtect"
import { answerHelp } from "./answers/answerHelp"
import { answerFallback } from "./answers/fallback"
import { answerStayHome } from "./answers/answerStayhome"
import { simpleQuestionAnswers } from "./answers/generatedFAQ"

/* 
    Narrative, i.e the bot-driven interaction
*/

const init: BotTurn = {
  // This only exists so that we can reset the bot mid-session with "welcome"
  set: {
    helped: false
  },
  say: ""
}

const greeting = ["Hej", "Hej", "Hallå"]

const intro = {
  say: [
    {
      cond: {
        platform: "voximplant"
      },
      text:
        "Jag kan svara på frågor om Coronaviruset. Jag är ny på jobbet men lär mig snabbt, så ha gärna tålamod!"
    },
    {
      text:
        "Jag kan svara på frågor om Coronaviruset. Jag är ny på jobbet men lär mig snabbt, så ha tålamod är du snäll!"
    }
  ]
}

const queryQuestions: BotTurn = {
  label: "QUERY_QUESTION",
  say: [
    {
      cond: { 
        platform: "voximplant",
        turnCount: 0 
      },
      text: ["Har du några frågor?", "Undrar du nånting?", "Undrar du nånting om Corona-viruset?"]
    },
    {
      cond: {
        turnCount: 0
      },
      text: ["Har du några frågor till mig?", "Undrar du någonting?", "Undrar du någonting om Corona-viruset?"]
    },
    {
      text: ["Har du någon mer fråga till mig?", "Undrar du något annat?", "Undrar du något mer?"]
    }
  ],
  set: {
    ended: false
  },
  user: [
    {
      intent: nlu.yes,
      bot: {
        say: "Vad undrar du?",
        repair: true
      }
    },
    {
      intent: nlu.no,
      bot: {
        say: "Okej",
        goto: "END"
      }
    },
    {
      intent: ANYTHING,
      bot: answerFallback
    }
  ]
}

export const queryMoreQuestions: BotTurn = {
  say: "Varför kommer jag aldrig hit???",
  set: {
    helped: true
  },
  goto: "QUERY_QUESTION"
}

const goodbye: BridgeTurn = {
  label: "END",
  say: "Tack så länge",
  set: {
    ended: true
  },
  bot: [
    {
      cond: {
        platform: "voximplant"
      },
      say: "Hör av dig igen om du har mer frågor. Hejdå!",
      goto: EXIT
    },
    {
      say: [
        "Säg till om du har någon mer fråga. Annars är du välkommen tillbaka!",
        "Säg till om du har andra frågor, annars är du välkommen tillbaka"
      ],
      user: [
        {
          intent: ANYTHING,
          bot: {
            say: "Hej igen",
            goto: "QUERY_QUESTION"
          }
        }
      ]
    }
  ]
}

const continueTalking: BotTurn = {
  say: "",
  goto: "QUERY_QUESTION"
}

export default [init, greeting, intro, queryQuestions, queryMoreQuestions, goodbye, continueTalking]
