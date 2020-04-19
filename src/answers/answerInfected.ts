import { BotTurn, BridgeTurn } from "narratory"
import * as nlu from "../nlu"

const resetLocation: BotTurn[] = [
    {
        cond: {
            region: true
        },
        say: "",
        set: {
            region: null
        },
        goto: "VERIFY_ANSWER"
    },
    {
        cond: {
            country: true
        },
        say: "",
        set: {
            country: null
        },
        goto: "VERIFY_ANSWER"
    },
    {
        say: "",
        goto: "VERIFY_ANSWER"
    }
]

const infectedYesterday: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            infected_yesterday: "inga",
        },
        say: "Inga nya fall rapporterades igår.",
        bot: resetLocation
    },
    {
        cond: {
            infected_yesterday: true,
        },
        say: "_infected_yesterday nya fall rapporerades igår.",
        bot: resetLocation
    },
    {
        say: "",
        bot: resetLocation
    }
]

const rememberDifference: BridgeTurn = {
    say: "Kom ihåg att olika länder inte är jämförbara eftersom testerna utförs på olika sätt.",
    bot: resetLocation
}

export const answerInfected: Array<BridgeTurn | BotTurn> = [
    {
        label: "INFECTED_AGAIN",
        bot: [
            {
                cond: {
                    infected: null,
                },
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
                                bot: resetLocation
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
                                say: "Tyvärr saknar jag data för antal bekräftade fall i _region_label.",
                                bot: resetLocation
                            }
                        ],
                    },
                    {
                        cond: {
                            country: true
                        },
                        say: "Tyvärr saknar jag data för antal bekräftade fall i _country.",
                        bot: resetLocation
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
                        say: "_region_label har totalt _infected bekräftade fall av covid19, vilket motsvarar _infected_per_100000_ppl per 100 000 invånare.",
                        bot: infectedYesterday
                    },
                    {
                        say: "Sverige har totalt _infected bekräftade fall av covid19, vilket motsvarar _infected_per_100000_ppl per 100 000 invånare.",
                        bot: infectedYesterday
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
                        say: "_region_label har totalt _infected bekräftade fall av covid19",
                        bot: infectedYesterday
                    },
                    {
                        cond: { country: "sverige" },
                        say: "Sverige har totalt _infected bekräftade fall av covid19",
                        bot: infectedYesterday
                    },
                    {
                        cond: { country: true },
                        bot: [
                            {
                                cond: {
                                    recovered: true
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
                        bot: resetLocation
                    }
                ]
            }
        ]
    }
]
