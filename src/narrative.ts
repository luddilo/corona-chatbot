import { BotTurn, ANYTHING, EXIT, BridgeTurn } from "narratory"
import * as nlu from "./nlu"
import { answerFallback } from "./answers/fallback"

/* 
    Narrative, i.e the bot-driven interaction
*/

const greeting: BotTurn = {
  cond: {
    user_hotStarted: false
  },
  say: {
    text: "Hej",
    ssml: "Hej och välkommen till Coronaguiden."
  }
}

const intro = {
  cond: {
    user_hotStarted: false
  },
  say: {
    text: "Jag är en chatbot som kan svara på frågor om coronaviruset.",
    ssml: "Jag är en chatt-bått som kan svara på frågor om coronaviruset."
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
      text: [
        "Har du några frågor till mig om COVID-19?",
        "Undrar du någonting om COVID-19?",
        "Undrar du någonting om coronaviruset?"
      ],
      ssml: [
        "Har du några frågor till mig?",
        "Undrar du någonting?",
        "Undrar du någonting om det nya coronaviruset?" // Since pronounciation of COVID-19 isn't great..
      ]
    },
    {
      // On repetitive questions, or if we hotStarted
      text: ["Har du någon mer fråga till mig?", "Undrar du något annat?", "Undrar du något mer?"]
    }
  ],
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
        say: "Okej"
      }
    },
    {
      intent: ANYTHING,
      bot: answerFallback
    }
  ]
}

const goodbye: BotTurn[] = [
  {
    cond: {
      platform: "voximplant"
    },
    say: "Tack så länge. Hör av dig igen om du har mer frågor. Hejdå!",
    goto: EXIT
  },
  {
    say: [
      "Säg till om du har någon mer fråga. Annars är du välkommen tillbaka!",
      "Säg till om du har andra frågor, annars är du välkommen tillbaka"
    ],
    user: [
      {
        intent: ANYTHING, // This stops us from exiting the conversation, which we otherwise would if we don't hit a question here
        bot: {
          say: "Förlåt, jag förstod inte.",
          goto: "QUERY_QUESTION"
        }
      }
    ]
  }
]

export default [greeting, intro, queryQuestions, ...goodbye]
