import { UserTurn, Intent, BotTurn, RichSay } from "narratory"

export const getAnswerWithPrompts = (userTurn: UserTurn) : BotTurn => {  
  const richSay = (userTurn.bot as BotTurn).say as RichSay
  const singleSay = Array.isArray(richSay) ? richSay[0] : richSay

  return {
    say: singleSay,
    set: {
      classifiedIntentName: (userTurn.intent as Intent).name,
      classifiedUtterance: "_user_text",
      botResponse: singleSay.text
    },
    goto: "VERIFY_ANSWER"
  }
}
