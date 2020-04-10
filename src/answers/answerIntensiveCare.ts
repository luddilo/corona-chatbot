import { BotTurn, BridgeTurn } from "narratory"

export const answerIntensiveCare: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            region: true
        }, 
        say: "Tyvärr har jag ingen regional data från intensivvården, men i hela Sverige har vi sammanlagt haft _intensive_care patienter i intensivvård till följd av covid19.",
    },
    {
        cond: {
            day: "idag"
        },
        say: "Jag kan tyvärr inte svara hur många som intensivvårdas just nu, men sedan utbrottet har vi i Sverige sammanlagt haft _intensive_care patienter i intensivvård till följd av covid19"
    },
    {
        say: "Sedan utbrottet har vi i Sverige sammanlagt haft _intensive_care patienter i intensivvård till följd av covid19."
    }
]
