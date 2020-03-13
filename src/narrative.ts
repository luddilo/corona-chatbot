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
        "Jag är en bot som kan hjälpa dig svara på frågor om Coronaviruset. Jag är ny på jobbet men lär mig snabbt, så ha tålamod är du snäll."
    },
    {
      text:
        "Jag kan hjälpa dig svara på frågor om Coronaviruset. Jag är ny på jobbet men lär mig snabbt, så ha tålamod är du snäll!"
    }
  ]
}

const querySymptoms: BotTurn = {
  say: {
    text: "Inledningsvis vill jag fråga, har du något av följande symptom? Hosta, luftvägar, feber?",
    suggestions: ["Ja", "Nej, ingen av dessa symptom"]
  },
  user: [
    {
      intent: {
        ...nlu.hasSymptoms, // Combining two intents (Yes and hasSymptoms) since lists of intents are not yet supported by the platform
        examples: [...nlu.hasSymptoms.examples, ...nlu.yes.examples]
      },
      bot: {
        say:
          "Okej. Då är det viktigt att du ringer din vårdcentral och stannar hemma för att förhindra spridning. Du kan också ringa 11313, och få rådgivning från en människa."
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
        say:
          "Ok. Tänk på att det kan ta 2 veckor för symptom att visa sig, så det är väldigt viktigt att hålla social distans, undvika större sammanhang och inte minst att tänka på personlig hygien och tvätta händerna ofta."
      }
    }
  ]
}

const queryQuestions: BotTurn = {
  label: "QUERY_QUESTION",
  say: [
    {
      cond: {
        helped: false
      },
      text: ["Har du några frågor till mig?", "Undrar du någonting?"]
    },
    {
      text: ["Har du någon mer fråga till mig?", "Undrar du något annat?"]
    }
  ],
  user: [
    {
      intent: nlu.yes,
      bot: {
        say: "Vad undrar du?"
      }
    },
    {
      intent: nlu.no,
      bot: {
        say: "Okej",
        goto: "END"
      }
    },
    ...simpleQuestionAnswers,
    {
      intent: nlu.queryHowToProtect,
      bot: answerProtect
    },
    {
      intent: nlu.queryRegionStatus,
      bot: answerRegion
    },
    {
      intent: nlu.queryStayHome,
      bot: answerStayHome
    },
    {
      intent: nlu.queryTakeCareOfFamily,
      bot: answerFamily
    },
    {
      intent: nlu.queryHelp,
      bot: answerHelp
    },
    {
      intent: ANYTHING,
      bot: answerFallback
    }
  ]
}

export const queryMoreQuestions: BotTurn = {
  say: [""],
  set: {
    helped: true
  },
  goto: "QUERY_QUESTION"
}

const goodbye: BridgeTurn = {
  label: "END",
  say: "Tack så länge",
  bot: [
    {
      cond: {
        platform: "voximplant"
      },
      say: "Hör av dig igen om du har mer frågor. Hejdå!",
      goto: EXIT
    },
    {
      say: "Om du ändrar dig är det bara att säga till!",
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

export default [init, greeting, intro, querySymptoms, queryQuestions, queryMoreQuestions, goodbye]
