import { BotTurn, BridgeTurn } from "narratory"
import * as nlu from "../nlu"

const resetLocation: BotTurn = {
    say: "",
    set: {
        country: null,
        region: null
    },
    goto: "VERIFY_ANSWER"
}

export const answerIntensiveCare: Array<BridgeTurn | BotTurn> = [
    {
        label: "IC_AGAIN",
        bot: [
            {
                cond: {
                    intensive_care: null
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
                                            goto: "IC_AGAIN"
                                        }
                                    }
                                ]
                            },
                            {
                                say: "Tyvärr saknar jag data för hur många som har fått intensivvård i _region_label",
                                bot: resetLocation
                            },
                        ]
                    },
                    {
                        say: "Tyvärr saknar jag data på hur många som har fått intensivvård.",
                        bot: resetLocation
                    }
                ]
            },
            {
                cond: {
                    region: true
                },
                say: "I _region_label har sammanlagt _intensive_care patiender fått intensivvård till följd av covid19.",
                bot: resetLocation
            },
            {
                cond: {
                    day: "idag"
                },
                say: "Jag kan tyvärr inte svara hur många som får intensivvård just nu, men i Sverige har sammanlagt _intensive_care patienter fått intensivvård till följd av covid19.",
                bot: resetLocation
            },
            {
                say: "I Sverige har sammanlagt _intensive_care patienter fått intensivvård till följd av covid19.",
                bot: resetLocation
            }
        ]
    }
]
