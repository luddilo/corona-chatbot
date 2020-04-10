import { BotTurn, ANYTHING } from "narratory"
import * as nlu from "../nlu"

/*
export const answerInfectedLocation: BotTurn = {
    say: [
        { cond: {
            city: true
        }}
    ]
}
*/

export const answerStatistics: BotTurn[] = [
  {
    cond: {
      city: true
    },
    say: "I dagsläget vet jag inte vad status är i _city, men jag lär mig varje dag"
  },
  {
    cond: {
      state: true
    },
    say: "Just nu vet jag inte vad status är i _state, men jag lär mig varje dag"
  },
  {
    say: "Var bor du någonstans?",
    user: [
      {
        intent: nlu.regionAnswer,
        bot: [
          {
            cond: {
              city: true
            },
            say:
              "I dagsläget vet jag inte vad status är i _city, men jag lär mig varje dag. Region Stockholm och Göteborg är högst risk i just nu."
          },
          {
            cond: {
              state: true
            },
            say:
              "Just nu vet jag inte vad status är i _state, men jag lär mig varje dag. Region Stockholm och Göteborg är högst risk i just nu."
          },
          "Just nu har jag inte koll på det tyvärr, men jag lär mig varje dag. Region Stockholm och Göteborg är högst risk i just nu."
        ]
      },
      {
        intent: ANYTHING,
        bot: [
          {
            cond: { turnCount: 0 },
            say: "Jag förstod inte. Prova säga det igen!",
            repair: true
          },
          {
            say: "Jag förstod inte tyvärr. Låt oss gå vidare"
          }
        ]
      }
    ]
  }
]