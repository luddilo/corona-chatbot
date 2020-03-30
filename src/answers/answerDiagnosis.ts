import { BotTurn, Card, Button } from "narratory"

const card = new Card({ //this should be changed to a Link Button once Ludvig has implemented it
    title: "Coronavirus/covid19 - Behöver jag ringa vården?",
    description:
      "",
    buttons: [
      new Button(
        "Till självskattningstjänsten",
        "https://corona.sll.se/"
      )
    ]
  }) 

export const answerDiagnosis: BotTurn = {
    say: [
      {
        cond: {
          platform: "voximplant"
        },
        text:
          "Det kan jag tyvärr inte svara på. Däremot har Region Stockholm utvecklat en tjänst där du kan göra en självskattning för att se om du behöver kontakta vården eller kan egenvårda dig. Du hittar den på corona.sll.se."
      },
      {
        text:
          "Region Stockholm har utvecklat en tjänst där du kan göra en självskattning för att se om du behöver kontakta vården eller kan egenvårda dig. Du hittar den via länken nedan.",
        content: card
      }
    ]
  }