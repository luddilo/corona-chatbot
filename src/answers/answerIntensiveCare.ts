import { BotTurn, BridgeTurn } from "narratory"

export const answerIntensiveCare: Array<BridgeTurn | BotTurn> = [
    {
        cond: {
            intensive_care: null
        },
        bot: [
            {
                cond: {
                    region: true
                },
                say: "Tyvärr saknar jag data för hur många som har fått intensivvård i _region_label",
                goto: "VERIFY_ANSWER"
            },
            {
                say: "Tyvärr saknar jag data på hur många som har fått intensivvård.",
                goto: "VERIFY_ANSWER"
            }
        ]
    },
    {
        cond: {
            region: true
        },
        say: "I _region_label har sammanlagt _intensive_care patiender fått intensivvård till följd av covid19.",
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
        say: "I Sverige har sammanlagt _intensive_care patienter fått intensivvård till följd av covid19.",
        goto: "VERIFY_ANSWER"
    }
]
