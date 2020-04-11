import { BotTurn, BridgeTurn } from "narratory"

export const answerDead: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            region: true
        }, 
        say: "I _region har _deceased personer dött av covid19.",
    },
    {
        cond: {
            country: "sverige",
            day: "igår"
        },
        say: "Igår rapporterades _deceased_yesterday dödsfall i Sverige."
    },
    {
        cond: {
            country: "sverige"
        },
        say: "Sverige har _deceased rapporterade dödsfall, varav _deceased_yesterday nya rapporterades in igår."
    },
    {
        cond: {
            country: true
        },
        say: "_country har _deceased rapporterade dödsfall."
    },
    {
        say: "Tyvärr har jag ingen global siffra i nuläget, men Sverige har _deceased rapporterade dödsfall."
    }
]
