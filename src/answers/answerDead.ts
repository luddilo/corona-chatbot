import { BotTurn, ANYTHING, BridgeTurn } from "narratory"
import * as nlu from "../nlu"

//just copied from answerInfected for now

export const answerDead: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            region: true
        }, 
        say: "Tyvärr har jag ingen regional data över dödsfall, men i hela Sverige har sammanlagt _deceased dött av covid19 ",
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
        say: "Sverige har __deceased rapporterade dödsfall, varav _deceased_yesterday nya rapporterades in igår."
    },
    {
        cond: {
            country: true
        },
        say: "_country har _deceased rapporterade dödsfall."
    },
    {
        say: "Tyvärr har jag ingen global siffra ännu, men Sverige har _deceased rapporterade dödsfall."
    }
]
