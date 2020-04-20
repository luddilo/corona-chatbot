import { BotTurn, BridgeTurn } from "narratory"
import * as nlu from "../nlu"

const infectedYesterday: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            infected_yesterday: "inga",
        },
        say: "Inga nya fall rapporterades igår.",
        goto: "VERIFY_ANSWER"
    },
    {
        cond: {
            infected_yesterday: true,
        },
        say: "_infected_yesterday nya fall rapporterades igår.",
        goto: "VERIFY_ANSWER"
    },
    {
        say: "",
        goto: "VERIFY_ANSWER"
    }
]

const rememberDifference: BotTurn = {
    say: "Kom ihåg att olika länder inte är jämförbara eftersom testerna utförs på olika sätt.",
    goto: "VERIFY_ANSWER"
}

export const answerInfected: Array<BridgeTurn | BotTurn> = [
    {
        label: "INFECTED_AGAIN",
        bot: [
            {
                cond: {
                    region: true
                },
                bot: [
                    {
                        cond: {
                            region: "norrland"
                        },
                        say: "Jag har tyvärr bara statistik per län och inte för hela Norrland.",
                        goto: "VERIFY_ANSWER"
                    },
                    {
                        cond: {
                            region: "min region"
                        },
                        say: {
                            text: "I vilket län/region bor du?",
                            ssml: "I vilken region bor du?"
                        },
                        user: [
                            {
                                intent: nlu.regionAnswer, bot: {
                                    url: "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/statistics",
                                    params: ["region"],
                                    goto: "INFECTED_AGAIN"
                                }
                            }
                        ]
                    },
                    {
                        cond: {
                            infected: null,
                        },
                        say: "Tyvärr saknar jag data för antal bekräftade fall i _region_label.",
                        goto: "VERIFY_ANSWER"
                    },
                    {
                        cond: {
                            infected_per_100000_ppl: true
                        },

                        say: "_region_label har totalt _infected bekräftade fall av covid19, vilket motsvarar _infected_per_100000_ppl per 100 000 invånare.",
                        bot: infectedYesterday
                    },
                    {
                        say: "_region_label har totalt _infected bekräftade fall av covid19",
                        bot: infectedYesterday
                    }
                ]
            },
            {
                cond: {
                    country: true
                },
                bot: [
                    {
                        cond: {
                            infected: "okänt antal"
                        },
                        say: "Tyvärr saknar jag data för antal bekräftade fall i _country.",
                        goto: "VERIFY_ANSWER"
                    },
                    {
                        cond: {
                            country: "sverige"
                        },
                        bot: [
                            {
                                cond: {
                                    infected_per_100000_ppl: true
                                },
                                say: "Sverige har totalt _infected bekräftade fall av covid19, vilket motsvarar _infected_per_100000_ppl per 100 000 invånare.",
                                bot: infectedYesterday
                            },
                            {
                                say: "Sverige har totalt _infected bekräftade fall av covid19",
                                bot: infectedYesterday

                            }
                        ]
                    },
                    {
                        cond: {
                            NOT: {
                                recovered: "okänt antal"
                            }
                        },
                        say: "_country har totalt _infected bekräftade fall av covid19, av vilka _recovered har tillfrisknat.",
                        bot: rememberDifference
                    },
                    {
                        say: "_country har totalt _infected bekräftade fall av covid19.",
                        bot: rememberDifference
                    }
                ]
            },
            {
                say: "Tyvärr har jag ingen global siffra i nuläget, men Sverige har totalt _infected bekräftade fall av covid19.",
                goto: "VERIFY_ANSWER"
            }
        ]
    }
]
