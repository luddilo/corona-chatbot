import { BotTurn, BridgeTurn } from "narratory"

// Generated at Monday, April 20th 2020, 3:00:21 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "På Folkhälsomyndighetens dagliga pressträff, måndagen den 20 april, framhölls vikten av att vi fortsätter att följa deras restriktioner. <break time=\\\"500ms\\\"/>Detta efter en del oroande rapporter från runt om i landet att det har börjat bli trångt i utelivet igen.<break time=\\\"1s\\\"/>"
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Enligt en undersökning från MSB är fler människor oroliga för ekonomin och den ökade arbetslösheten, än för att sjukvårdens kapacitet inte ska vara tillräcklig.<break time=\\\"1s\\\"/>"
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
      "text": "På Folkhälsomyndighetens dagliga pressträff, måndagen den 20 april, framhölls vikten av att vi fortsätter att följa deras restriktioner. Detta efter en del oroande rapporter från runt om i landet att det har börjat bli trångt i utelivet igen."
    },
    "bot": {
      "say": {
        "text": "Enligt en undersökning från MSB är fler människor oroliga för ekonomin och den ökade arbetslösheten än för att sjukvårdens kapacitet inte ska vara tillräcklig."
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
    "text": "Globalt är runt 2,4 miljoner människor bekräftat smittade och drygt 165 000 döda."
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
          "url": "https://c.robin.se/storage/stats/total.png",
          "alt": "Statistik"
        }
      }
    }
  }
}

export const voiceStats : BotTurn = {
  "say": {
    "text": "Globalt är runt 2,4 miljoner människor bekräftat smittade, och hundrasextiofemtusen döda.<break time=\\\"500ms\\\"/> I Sverige har vi knappt fjortontusenåttahundra bekräftade fall av covid19, och vi är uppe i ettusen femhundraåttio rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}