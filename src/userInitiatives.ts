import { UserTurn, EXIT } from "narratory"
import * as nlu from "./nlu"
import { simpleQuestionAnswers } from "./answers/generatedFAQ"
import { answerProtect } from "./answers/answerProtect"
import { answerHelp } from "./answers/answerHelp"
import { answerDiagnosis } from "./answers/answerDiagnosis"
import { answerInfected } from "./answers/answerInfected"
import { answerIntensiveCare } from "./answers/answerIntensiveCare"
import { answerDead } from "./answers/answerDead"
import { answerRanking } from "./answers/answerRanking"
import { presentNews } from "./answers/generatedNews"

/*
    Questions and other user-driven initiatives
*/

const exit: UserTurn = {
  intent: nlu.exit,
  bot: {
    say: "Hejdå!",
    goto: EXIT
  }
}

const questions: UserTurn[] = [
  ...simpleQuestionAnswers,
  {
    intent: nlu.queryDiagnosis,
    bot: answerDiagnosis
  },
  {
    intent: nlu.queryNeedCare,
    bot: answerDiagnosis
  },
  {
    intent: nlu.queryNews,
    bot: presentNews
  },
  {
    intent: nlu.queryInfected, bot: {
      url: "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/statistics",
      params: ["region", "country"],
      bot: answerInfected
    }
  },
  {
    intent: nlu.queryIntensiveCare, bot: {
      url: "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/statistics",
      params: ["region"],
      bot: answerIntensiveCare
    }
  },
  {
    intent: nlu.queryDead, bot: {
      url: "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/statistics",
      params: ["region", "country"],
      bot: answerDead
    }
  },
  {
    intent: nlu.queryRanking, bot: {
      set: {
        type: "RANKING"
      },
      url: "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/statistics",
      params: ["type"],
      bot: answerRanking
    }
  },
  {
    intent: nlu.queryHowToProtect,
    bot: answerProtect
  },
  {
    intent: nlu.queryHelp,
    bot: answerHelp
  }
]

export default [...questions, exit]
