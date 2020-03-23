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

const greeting: BotTurn = {
  cond: {
    user_hotStarted: false
  },
  say: ["Hej", "Hallå", "Hej"]
}

const intro = {
  cond: {
    user_hotStarted: false
  },
  say: [
    {
      cond: {
        platform: "voximplant"
      },
      text:
        "Jag är en testversion av en chatt-bått för att svara på frågor om Coronaviruset"
    },
    {
      text:
        "Detta är en testversion av en chatbot för att svara på frågor om Coronaviruset"
    }
  ]
}

const querySymptoms: BridgeTurn = {
  cond: {
    user_hotStarted: false
  },
  say: {
    text: [
      "Inledningsvis vill jag säga att om du har symptom som problem med luftvägarna, hosta, feber eller halsont ska du stanna hemma. Om du har problem med andning, ring 1 1 2."
    ]
  },
  bot: {
    say: "Så"
  }
}

const queryQuestions: BotTurn = {
  label: "QUERY_QUESTION",
  say: [
    {
      // If it is the first time we state this question and we haven't hotStarted, i.e jumped directly to a
      cond: {
        turnCount: 0,
        hotStarted: false
      },
      text: ["Har du några frågor till mig?", "Undrar du någonting?", "Undrar du någonting om Corona-viruset?"]
    },
    {
      // On repetitive questions or if we hotStarted
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

export default [greeting, intro, querySymptoms, queryQuestions, queryMoreQuestions, goodbye, continueTalking]
