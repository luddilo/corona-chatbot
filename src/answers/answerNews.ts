import { BotTurn, Card } from "narratory"

const card = new Card({
    title: "Statistik 7 april",
    description: "",
  })

export const answerNews: BotTurn = {
    say: [
        {
        cond: {
          platform: "voximplant"
        },
        text:
          "Okej, här är senaste nytt från Folkhälsomyndighetens dagliga presskonferens från tisdagen den 7 april. Globalt är 1,3 miljoner människor bekräftat smittade och 74000 döda, med en minskad andel från Europa då smittan har börjat sakta ner i Italien och Spanien, samtidigt som den ökar kraftigt i USA. I Sverige har vi ungefär 7700 bekräftade fall av covid19, varav 640 har vårdats i på intensivvård, och vi är nu uppe i 591 rapporterade dödsfall. Folkhälsomyndighetens Anders Tegnell sa att är viktigt att vi försöker undvika sociala sammanhang under den kommande påskhelgen och påpekade att de regler som gäller på verksamheter som barer och caféer för att undvika trängsel även gäller på uteserveringar."
      },
      {
        text:
          "Okej, här är senaste nytt från Folkhälsomyndighetens dagliga presskonferens från tisdagen den 7 april. Folkhälsomyndighetens Anders Tegnell redovisade aktuella siffror (se nedan) och nämnde att vi globalt ser en minskad andel från Europa då smittan har börjat sakta ner i Italien och Spanien, samtidigt som den ökar kraftigt i USA. Här i Sverige är det viktigt att vi försöker undvika sociala sammanhang under den kommande påskhelgen och Tegnell påpekade även att de regler som gäller på verksamheter som barer och caféer för att undvika trängsel även gäller på uteserveringar",
        content: card
      }
    ],
    goto: "VERIFY_ANSWER"
  }