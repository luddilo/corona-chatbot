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

const greeting = ["Hej", "Hallå", "Hej"]

const intro = {
  say: [
    {
      cond: {
        platform: "voximplant"
      },
      text:
        "Detta är en testversion av en chatbot för att svara på frågor om Coronaviruset. Förhoppningsvis kan du hjälpa mig bli bättre!"
    },
    {
      text:
        "Detta är en testversion av en chatbot för att svara på frågor om Coronaviruset. Förhoppningsvis kan du hjälpa mig bli bättre!"
    }
  ]
}

const querySymptoms: BridgeTurn = {
  say: {
    text: [
      "Inledningsvis vill jag säga att om du har symptom som hosta, problem med luftvägarna, feber eller halsont ska du stanna hemma. Om du har problem med andning, ring 112."
    ],
  },
  bot: {
    say: "Så"
  }
}

const queryQuestions: BotTurn = {
  label: "QUERY_QUESTION",
  say: [
    {
      // Otherwise, if it is the first time we state this question
      cond: {
        turnCount: 0
      },
      text: ["Har du några frågor till mig?", "Undrar du någonting?", "Undrar du någonting om Corona-viruset?"]
    },
    {
      // And on repetitive questions this question
      text: ["Har du någon mer fråga till mig?", "Undrar du något annat?"]
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
  say: "",
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

export default [init, greeting, intro, querySymptoms, queryQuestions, queryMoreQuestions, goodbye, continueTalking]
