import { BotTurn, BridgeTurn } from "narratory"
import * as nlu from "../nlu"

export const answerIntensiveCare: Array<BridgeTurn | BotTurn> = [
    {
        label: "IC_AGAIN",
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
                                    goto: "IC_AGAIN"
                                }
                            }
                        ]
                    },
                    {
                        cond: {
                            intensive_care: null
                        },
                        say: "Tyvärr saknar jag data för hur många som har fått intensivvård i _region_label",
                        goto: "VERIFY_ANSWER"
                    },
                    {
                        cond: {
                            intensive_care: 1
                        },
                        say: "I _region_label har 1 patient fått intensivvård till följd av covid19.",
                        goto: "VERIFY_ANSWER"
                    },
                    {
                        say: "I _region_label har sammanlagt _intensive_care patiender fått intensivvård till följd av covid19.",
                        goto: "VERIFY_ANSWER"
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
                            intensive_care: null
                        },
                        say: "Tyvärr saknar jag data på hur många som har fått intensivvård i _country.",
                        goto: "VERIFY_ANSWER"
                    },
                    {
                        cond: {
                            day: "idag"
                        },
                        say: "Jag kan tyvärr inte svara hur många som får intensivvård just nu, men i Sverige har sammanlagt _intensive_care patienter fått intensivvård till följd av covid19.",
                        goto: "VERIFY_ANSWER"
                    },
                    {
                        say: "I _country har sammanlagt _intensive_care patienter fått intensivvård till följd av covid19.",
                        goto: "VERIFY_ANSWER"
                    }
                ]
            },
            {
                say: "Tyvärr har jag ingen global siffra, men i Sverige har sammanlagt _intensive_care patienter fått intensivvård till följd av covid19",
                goto: "VERIFY_ANSWER"
            }
        ]
    }
]

