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
        "Jag kan hjälpa dig svara på frågor om Coronaviruset. Jag är ny på jobbet men lär mig snabbt, så ha gärna tålamod!"
    },
    {
      text:
        "Jag kan hjälpa dig svara på frågor om Coronaviruset. Jag är ny på jobbet men lär mig snabbt, så ha tålamod är du snäll!"
    }
  ]
}
/*
const querySymptoms: BotTurn = {
  say: {
    text: [
      "Jag vill börja med att fråga, har du feber, problem med luftvägarna eller hosta?",
      "Inledningsvis vill jag fråga, har du något av följande symptom? Hosta, problem med luftvägarna, feber?"
    ],
    suggestions: ["Ja", "Nej, ingen av dessa symptom"]
  },
  user: [
    {
      intent: {
        ...nlu.hasSymptoms, // Combining two intents (Yes and hasSymptoms) since lists of intents are not yet supported by the platform
        examples: [...nlu.hasSymptoms.examples, ...nlu.yes.examples]
      },
      bot: {
        set: {
          hasSymptoms: true
        },
        say:
          "Okej. Då är det viktigt att du stannar hemma för att förhindra spridning. Du kan också ringa 11 77, och få rådgivning från en sjuksköterska."
      }
    },
    {
      intent: nlu.no,
      bot: {
        say:
          "Skönt. Tänk på att det kan ta 2 veckor för symptom att visa sig, så det är väldigt viktigt att hålla social distans, undvika större sammanhang och inte minst att tänka på personlig hygien och tvätta händerna ofta."
      }
    },
    {
      intent: ANYTHING,
      bot: {
        set: {
          retryCount: null // To avoid counting this as a fallback
        },
        say:
          "Ok. Tänk på att det kan ta 2 veckor för symptom att visa sig, så det är väldigt viktigt att hålla social distans, undvika större sammanhang och inte minst att tänka på personlig hygien och tvätta händerna ofta."
      }
    }
  ]
}
*/

const queryQuestions: BotTurn = {
  label: "QUERY_QUESTION",
  say: [
    {
      cond: { turnCount: 0 },
      text: ["Har du några frågor till mig?", "Undrar du någonting?", "Undrar du någonting om Corona-viruset?"]
    },
    {
      text: ["Har du någon mer fråga till mig?", "Undrar du något annat?", "Undrar du något mer"]
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
