import { BotTurn, BridgeTurn } from "narratory"

export const fixVariables: BotTurn[] = [
    {
        cond: {
            infected: 0
        },
        say: "",
        set: {
            infected: "inga"
        }
    },
    {
        cond: {
            infected_yesterday: 0
        },
        say: "",
        set: {
            infected_yesterday: "inga"
        }
    }
]

export const answerInfected: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            infected: null,
        },
        bot: [
            {
                cond: {
                    region: true
                },
                say: "Tyvärr saknar jag data för antal bekräftade fall i _region_label.",
                goto: "VERIFY_ANSWER"
            },
            {
                cond: {
                    country: true
                },
                say: "Tyvärr saknar jag data för antal bekräftade fall i _country",
                goto: "VERIFY_ANSWER"
            }
        ]
    },
    {
        cond: {
            infected_per_100000_ppl: true
        },
        bot: [
            {
                cond: {
                    region: true
                },
                say: "_region_label har totalt _infected bekräftade fall av covid19, vilket motsvarar _infected_per_100000_ppl per 100000 invånare."
            },
            {
                say: "Sverige har totalt _infected bekräftade fall av covid19, vilket motsvarar _infected_per_100000_ppl per 100000 invånare."
            }
        ]
    },
    {
        cond: {
            infected_per_100000_ppl: null
        }, bot: [
            {
                cond:
                    { region: true },
                say: "_region_label har totalt _infected bekräftade fall av covid19"
            },
            {
                cond: { country: "sverige" },
                say: "Sverige har totalt _infected bekräftade fall av covid19"
            },
            {
                cond: { country: true },
                say: "_country har totalt _infected bekräftade fall av covid19. Kom ihåg att olika länder inte är jämförbara eftersom testerna utförs på olika sätt."
            },
            {
                say: "Tyvärr har jag ingen global siffra i nuläget, men Sverige har totalt _infected bekräftade fall av covid19."
            }
        ]
    }
]

export const infectedYesterday: BotTurn = {
    cond: {
        infected_yesterday: true,
    },
    say: "_infected_yesterday nya fall rapporerades igår."
}

export const infectedArray = [fixVariables, answerInfected, infectedYesterday]



