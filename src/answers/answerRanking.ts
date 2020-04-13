import { BotTurn, BridgeTurn } from "narratory"

export const answerRanking: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            country: "sverige"
        }, 
        say: "Högst antal bekräftat smittade har _region_most_cases med _infected fall, medan _region_most_cases_per_capita har störst andel med _infected_per_100000_ppl fall per 100000 invånare.",
        goto: "VERIFY_ANSWER"
    },
    {
        say: "Tyvärr har jag ingen global siffra i nuläget. I Sverige har _region_most_cases störst antal fall, medan _region_most_cases_per_capita har flest fall per invånare.",
        goto: "VERIFY_ANSWER"
    },
]



