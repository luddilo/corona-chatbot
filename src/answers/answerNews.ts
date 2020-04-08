import { BotTurn, Card, BridgeTurn, Image } from "narratory"
import { getNamedIntentsFromFolder } from "narratory/out/helpers"
import * as nlu from "../nlu"

const card = new Card({
    title: "Statistik",
    subtitle: "Uppdaterad den 8:e april",
    image: new Image("https://gdurl.com/0Glf9", "Statistik"),
})

export const answerNews: Array<BotTurn | BridgeTurn> = [
    {
        cond: {
            platform: "voximplant"
        },
        say: "På Folkhälsomyndighetens dagliga presskonferens onsdagen den 8 april nämnde stadsepidemolog Anders Tegnell bland annat att av de avlidna över 70 år i Stockholmsregionen, har ungefär 40% varit folkbokförda på ett äldreboende, vilket kan jämföras med 4% i resten av landet. Vad gäller diskussionen om de vårdanställda som testats positivt för coronaviruset trots att de har varit helt symptomfria, påpekade Tegnell att de det framför allt är de med symptom som smittar andra. Vill du ha de senaste siffrorna?",
        user: [
            {
                intent: nlu.yes, bot: {
                    say: "Globalt är cirka 1,4 miljoner människor bekräftat smittade och 81000 döda, varav ungefär hälften i Europa. I Sverige har vi ungefär 8400 bekräftade fall av covid19, varav 678 har intensivvårdats, och vi är nu uppe i 687 rapporterade dödsfall."
                }
            },
            {
                intent: nlu.no, bot: {
                    say: "Okej."
                }
            }
        ]
    },
    {
        say: "På Folkhälsomyndighetens dagliga presskonferens onsdagen den 8 april nämnde stadsepidemolog Anders Tegnell bland annat att av de avlidna över 70 år i Stockholmsregionen, har ungefär 40% varit folkbokförda på ett äldreboende, vilket kan jämföras med 4% i resten av landet.",
        bot: {
            say: "Vad gäller diskussionen om de vårdanställda som testats positivt för coronaviruset trots att de har varit helt symptomfria, påpekade Tegnell att det framför allt är de med symptom som smittar andra.",
            bot: {
                say: {
                    text: "Vill du ha de senaste siffrorna?",
                    suggestions: ["Ja", "Nej"],
                },
                user: [
                    {
                        intent: nlu.yes, bot: {
                            say: "Globalt är cirka 1,4 miljoner människor bekräftat smittade och 81000 döda, varav ungefär hälften i Europa.",
                            bot: {
                                say: {
                                    text: "I Sverige är kurvan plan och siffrorna ser ut såhär",
                                    content: card
                                }
                            }
                        }
                    },
                    {
                        intent: nlu.no, bot: {
                            say: "Okej."
                        }
                    }
                ]
            }
        }
    }
]