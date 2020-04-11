import { BotTurn, BridgeTurn } from "narratory"

export const answerIntensiveCare: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            region: true
        }, 
        say: "I _region har sammanlagt _intensive_care patiender fått intensivvård till följd av covid19.",
    },
    {
        cond: {
            day: "idag"
        },
        say: "Jag kan tyvärr inte svara hur många som får intensivvård just nu, men i Sverige har sammanlagt _intensive_care patienter fått intensivvård till följd av covid19."
    },
    {
        say: "I Sverige har sammanlagt _intensive_care patienter fått intensivvård till följd av covid19."
    }
]
