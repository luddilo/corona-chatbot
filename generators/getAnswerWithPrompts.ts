import { UserTurn, Intent } from "narratory"

export const getAnswerWithPrompts = (userTurn: UserTurn) => {
  return {
    say: userTurn.bot as string[],
    set: {
      classifiedIntentName: (userTurn.intent as Intent).name,
      classifiedUtterance: "_user_text",
      botResponse: userTurn.bot
    },
    goto: "VERIFY_ANSWER"
  }
}
