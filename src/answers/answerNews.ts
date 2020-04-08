import { BotTurn, Card, BridgeTurn, Image } from "narratory"
import { getNamedIntentsFromFolder } from "narratory/out/helpers"
import * as nlu from "../nlu"

const card = new Card({
    title: "Statistik",
    description: "",
    image: new Image("https://gdurl.com/ntGx", "some alt"),
})

export const answerNews: Array<BotTurn | BridgeTurn> = [
    {
        cond: {
            platform: "voximplant"
        },
        say: "På Folkhälsomyndighetens dagliga presskonferens tisdagen den 7 april påpekade stadsepidemilog Anders Tegnell att det är viktigt att vi försöker undvika sociala sammanhang under den kommande påskhelgen och han nämnde särskilt att de regler som gäller på verksamheter som barer och caféer för att undvika trängsel även gäller på uteserveringar. Vill du ha de senaste siffrorna?",
        user: [
            {
                intent: nlu.yes, bot: {
                    say: "Globalt är 1,3 miljoner människor bekräftat smittade och 74000 döda, med en något minskad andel från Europa då smittan har börjat sakta ner i Italien och Spanien, samtidigt som den ökar kraftigt i USA. I Sverige har vi ungefär 7700 bekräftade fall av covid19, varav 640 har intensivvårdats, och vi är nu uppe i 591 rapporterade dödsfall."
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
        say: "På Folkhälsomyndighetens dagliga presskonferens tisdagen den 7 april påpekade stadsepidemilog Anders Tegnell att det är viktigt att vi försöker undvika sociala sammanhang under den kommande påskhelgen och han nämnde särskilt att de regler som gäller på verksamheter som barer och caféer för att undvika trängsel även gäller på uteserveringar.",
        bot: {
            say: {
                text: "Vill du ha de senaste siffrorna?",
                suggestions: ["Ja", "Nej"],
            },
            user: [
                {
                    intent: nlu.yes, bot: {
                        say: "Globalt är 1,3 miljoner människor bekräftat smittade och 74000 döda, med en något minskad andel från Europa då smittan har börjat sakta ner i Italien och Spanien, samtidigt som den ökar kraftigt i USA.",
                        bot: {
                            say: {
                                text: "I Sverige ser statistiken ut såhär:",
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
]