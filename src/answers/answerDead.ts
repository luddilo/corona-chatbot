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

export const answerDead: Array<BridgeTurn | BotTurn> = [
    {
        label: "DEAD_AGAIN",
        bot: [
            {
                cond: {
                    deceased: null
                },
                bot: [
                    {
                        cond: { region: true },
                        bot: [
                            {
                                cond: {
                                    region: "norrland",
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
                                            goto: "DEAD_AGAIN"
                                        }
                                    }
                                ]
                            },
                            {

                                say: "Tyvärr saknar jag data för antal rapporterade dödsfall i _region_label.",
                                bot: resetLocation
                            }
                        ]
                    },
                    {
                        cond: { country: true },
                        say: "Tyvärr saknar jag data för antal rapporterade dödsfall i _country.",
                        bot: resetLocation
                    }

                ]
            },
            {
                cond: {
                    region: true
                },
                bot: [
                    {
                        cond: {
                            deceased: 1
                        },
                        say: "I _region_label har 1 person dött av covid19",
                        bot: resetLocation
                    },
                    {
                        say: "I _region_label har _deceased personer dött av covid19.",
                        bot: resetLocation
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
                            deceased_yesterday: true
                        },
                        bot: [
                            {
                                cond: {
                                    day: true
                                },
                                say: "Igår rapporterades _deceased_yesterday dödsfall i _country.",
                                bot: resetLocation
                            },
                            {
                                say: "_country har _deceased rapporterade dödsfall, varav _deceased_yesterday rapporterades igår.",
                                bot: resetLocation
                            }
                        ]
                    },
                    {
                        say: "_country har _deceased rapporterade dödsfall.",
                        bot: resetLocation
                    }
                ]
            },
            {
                say: "Tyvärr har jag ingen global siffra i nuläget, men Sverige har _deceased rapporterade dödsfall.",
                bot: resetLocation
            }
        ]
    }
]
