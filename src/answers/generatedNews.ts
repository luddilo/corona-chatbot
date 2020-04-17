import { BotTurn, BridgeTurn } from "narratory"

// Generated at Friday, April 17th 2020, 8:54:17 am

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "Torsdagen den 16 april meddelade Folkhälsomyndigheten att matchspel för barn och ungdomsidrotten kommer att få genomföras så länge enbart friska och symptomfria personer deltar. <break time=\\\"500ms\\\"/> Tillgång till att tvätta händer måste finnas på plats och trängsel får ej uppstå. <break time=\\\"1s\\\"/>"
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "En tredjedel av alla anmälda fall i Stockholm kommer från äldreboenden. Detta är en miljö som behöver skyddas bättre framöver.<break time=\\\"1s\\\"/>"
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
      "text": "Torsdagen den 16 april meddelade Folkhälsomyndigheten att matchspel för barn och ungdomsidrotten kommer att få genomföras så länge enbart friska och symptomfria personer deltar. Tillgång till att tvätta händer måste finnas på plats och trängsel får ej uppstå."
    },
    "bot": {
      "say": {
        "text": "En tredjedel av alla anmälda fall i Stockholm kommer från äldreboenden. Detta är en miljö som behöver skyddas bättre framöver."
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
    "text": "Globalt är drygt 2 miljoner människor bekräftat smittade och 136 000 döda."
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
          "url": "http://kinti.se/coronaguiden/Statistik_FHM_16april.png",
          "alt": "Statistik"
        }
      }
    }
  }
}

export const voiceStats : BotTurn = {
  "say": {
    "text": "Globalt är drygt två miljoner människor bekräftat smittade, och hundratrettiosextusen döda.<break time=\\\"500ms\\\"/> I Sverige har vi drygt tolvtusen bekräftade fall av covid19, och vi är uppe i 1333 rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}