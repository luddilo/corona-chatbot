import { UserTurn, EXIT } from "narratory"
import * as nlu from "./nlu"
import { simpleQuestionAnswers } from "./answers/generatedFAQ"
import { answerProtect } from "./answers/answerProtect"
import { answerRegion } from "./answers/answerRegion"
import { answerStayHome } from "./answers/answerStayhome"
import { answerFamily } from "./answers/answerFamily"
import { answerHelp } from "./answers/answerHelp"
import { answerDiagnosis } from "./answers/answerDiagnosis"
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
  { intent: nlu.queryNews,
    bot: presentNews
  },
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
  }
]

export default [...questions, exit]
