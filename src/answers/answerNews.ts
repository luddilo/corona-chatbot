import { BotTurn, Card, BridgeTurn, Image } from "narratory"

const card = new Card({
    title: "Statistik",
    description: "",
    image: new Image("https://files.slack.com/files-pri/TVCDNNBNG-F011BSZM0GK/statistik_fhm_7april.png", "some alt"),
})

export const answerNews: Array<BotTurn | BridgeTurn> = [
    {
        cond: {
            platform: "voximplant"
        },
        say: "Okej, här är senaste nytt från Folkhälsomyndighetens dagliga presskonferens från tisdagen den 7 april. Globalt är 1,3 miljoner människor bekräftat smittade och 74000 döda, men en minskad andel kommer från Europa då smittan har börjat sakta ner i Italien och Spanien, samtidigt som den ökar kraftigt i USA. I Sverige har vi ungefär 7700 bekräftade fall av covid19, varav 640 har intensivvårdats, och vi är nu uppe i 591 rapporterade dödsfall. Enligt stadsepidemilog Anders Tegnell  är det viktigt att vi försöker undvika sociala sammanhang under den kommande påskhelgen och han påpekade särskilt att de regler som gäller på verksamheter som barer och caféer för att undvika trängsel även gäller på uteserveringar.",
        goto: "VERIFY_ANSWER"
    },
    {
        cond: {
            platform: "voximplant"
        },
        say: "Okej, här är senaste nytt från Folkhälsomyndighetens dagliga presskonferens från tisdagen den 7 april. Globalt är 1,3 miljoner människor bekräftat smittade och 74000 döda, men en minskad andel kommer från Europa då smittan har börjat sakta ner i Italien och Spanien, samtidigt som den ökar kraftigt i USA.",
        bot: {
            say: {
                text: "I Sverige har vi ungefär 7700 bekräftade fall av covid19, varav 640 har intensivvårdats, och vi är nu uppe i 591 rapporterade dödsfall.",
                content: card
            },
            bot: {
                say: "Enligt stadsepidemilog Anders Tegnell  är det viktigt att vi försöker undvika sociala sammanhang under den kommande påskhelgen och han påpekade särskilt att de regler som gäller på verksamheter som barer och caféer för att undvika trängsel även gäller på uteserveringar.",
                goto: "VERIFY_ANSWER"
            }
        }
    }
]