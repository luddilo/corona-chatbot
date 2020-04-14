import { BotTurn, BridgeTurn } from "narratory"

export const answerDead: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            deceased: null
        },
        bot: [
            {
                cond: { region: true },
                say: "Tyvärr saknar jag data för antal rapporterade dödsfall i _region_label.",
                goto: "VERIFY_ANSWER"
            },
            {
                cond: { country: true },
                say: "Tyvärr saknar jag data för antal rapporterade dödsfall i _country.",
                goto: "VERIFY_ANSWER"
            }

        ]
    },
    {
        cond: {
            region: true
        },
        say: "I _region_label har _deceased personer dött av covid19.",
        goto: "VERIFY_ANSWER"
    },
    {
        cond: {
            country: true
        },
        bot: [
            {
                cond: {
                    deceased_yesterday: true
                },
                bot: [
                    {
                        cond: {
                            day: true
                        },
                        say: "Igår rapporterades _deceased_yesterday dödsfall i _country.",
                        goto: "VERIFY_ANSWER"
                    },
                    {
                        say: "_country har _deceased rapporterade dödsfall, varav _deceased_yesterday rapporterades igår.",
                        goto: "VERIFY_ANSWER"
                    }
                ]
            },
            {
                say: "_country har _deceased rapporterade dödsfall.",
                goto: "VERIFY_ANSWER"
            }
        ]
    },
    {
        say: "Tyvärr har jag ingen global siffra i nuläget, men Sverige har _deceased rapporterade dödsfall.",
        goto: "VERIFY_ANSWER"
    }
]
