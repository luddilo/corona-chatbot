import { BotTurn, BridgeTurn } from "narratory"

// Generated at Saturday, April 18th 2020, 1:21:18 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "Fredagen den 17 april meddelade Folkhälsomyndigheten att den ökade kapaciteten av provtagning främst gäller sjukvård, omsorg och institutionsboenden.  <break time=\\\"500ms\\\"/> Detta för att lindra de negativa effekter som kan uppstå vid bortfall av personer med samhällsviktiga jobb. <break time=\\\"1s\\\"/>"
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Det är viktigt att fortsätta följa rekommendationerna. <break time=\\\"500ms\\\"/> Var noga med att händerna, stanna hemma, hålla avstånd och skydda de som är i riskgrupp. <break time=\\\"1s\\\"/>"
      },
      "bot": {
        "say": {
          "text": "Vill du ha de senaste siffrorna?",
          "suggestions": [
            "Ja",
            "Nej"
          ]
        },
        "expectShortAnswer": true,
        "user": [
          {
            "intent": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "jag"
            ],
            "bot": {
              "say": "",
              "goto": "SHARE_STATS_VOICE"
            }
          },
          {
            "intent": {
              "examples": [
                "nej",
                "nope",
                "no",
                "jag vill inte",
                "nej det är bra så",
                "näpp"
              ]
            },
            "bot": "Okej"
          }
        ]
      }
    }
  },
  {
    "say": {
      "text": "Fredagen den 17 april meddelade Folkhälsomyndigheten att den ökade kapaciteten av provtagning främst gäller sjukvård, omsorg och institutionsboenden. Detta för att lindra de negativa effekter som kan uppstå vid bortfall av personer med samhällsviktiga jobb."
    },
    "bot": {
      "say": {
        "text": "Det är viktigt att fortsätta följa rekommendationerna. Var noga med att tvätta händerna, stanna hemma, hålla avstånd och skydda de som är i riskgrupp. "
      },
      "bot": {
        "say": {
          "text": "Vill du ha de senaste siffrorna?",
          "suggestions": [
            "Ja",
            "Nej"
          ]
        },
        "expectShortAnswer": true,
        "user": [
          {
            "intent": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "jag"
            ],
            "bot": {
              "say": "",
              "goto": "SHARE_STATS_TEXT"
            }
          },
          {
            "intent": {
              "examples": [
                "nej",
                "nope",
                "no",
                "jag vill inte",
                "nej det är bra så",
                "näpp"
              ]
            },
            "bot": "Okej"
          }
        ]
      }
    }
  }
]

export const textStats : BridgeTurn = {
  "say": {
    "text": "Globalt är nästan 2,2 miljoner människor bekräftat smittade och 147 000 döda."
  },
  "label": "SHARE_STATS_TEXT",
  "bot": {
    "say": {
      "text": "I Sverige ser siffrorna ut såhär:",
      "content": {
        "type": "card",
        "title": "Statistik",
        "image": {
          "type": "image",
          "url": "https://kinti.se/coronaguiden/Statistik_FHM_17april.png",
          "alt": "Statistik"
        }
      }
    }
  }
}

export const voiceStats : BotTurn = {
  "say": {
    "text": "Globalt är nästan två komma två miljoner människor bekräftat smittade, och hundrafyrtiosjutusen döda.<break time=\\\"500ms\\\"/> I Sverige har vi drygt trettontusen bekräftade fall av covid19, och  vi är uppe i 1400 rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}