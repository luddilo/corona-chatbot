import { BotTurn, BridgeTurn } from "narratory"

export const answerInfected: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            region: true
        }, 
        say: "_region har totalt _infected bekräftade fall av covid19, varav _infected_yesterday nya fall rapporerades igår.",
    },
    {
        cond: {
            country: "sverige"
        },
        say: "Sverige har totalt _infected bekräftade fall av covid19, varav _infected_yesterday nya fall rapporerades igår."
    },
    {
        cond: {
            country: true
        },
        say: "_country har totalt _infected bekräftade fall av covid19. Kom ihåg att olika länder inte är jämförbara eftersom testerna utförs på olika sätt."
    },
    {
        say: "Tyvärr har jag ingen global siffra i nuläget, men Sverige har totalt _infected bekräftade fall av covid19."
    }
]



