import { BotTurn, ANYTHING, BridgeTurn } from "narratory"
import * as nlu from "../nlu"

export const answerInfectedLocation: Array<BridgeTurn | BotTurn> = [
    {
        say: [
            {
                cond: {
                    region: true
                },
                text: "_region har totalt _infected_total bekräftade fall av covid19."
            },
            {
                cond: {
                    country: "sverige",
                },
                text: "Sverige har _infected_total bekräftade fall av covid19."
            },
            {
                cond: {
                    country: null
                },
                text: "Sverige har _infected_total bekräftade fall av covid19."
            }
        ],
        bot: {
            say: [
                {
                    cond: {
                        platform: "kommunicate"
                    },
                    text: "Vill du veta hur många nya fall som rapporterades igår?",
                    suggestions: ["Ja", "Nej"],
                },
                {
                    text: "Vill du veta hur många nya fall som rapporterades igår?"
                }
            ],
            user: [
                {
                    intent: nlu.yes, bot: {
                        say: [
                            {
                                cond: {
                                    region: true
                                },
                                text: "Igår rapporterades _infected_yesterday nya fall i _region."
                            },
                            {
                                text: "Igår rapporterades _infected_yesterday nya fall i Sverige."
                            }
                        ]

                    }
                },
                {
                    intent: nlu.no, bot: {
                        say: "Okej"
                    }
                }
            ]
        }
    },
    {
        say: "Jag kan tyvärr inte svara på det eftersom vi i nuläget bara har statistik från Sverige"
    },
]
