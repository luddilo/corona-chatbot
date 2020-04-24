import { BotTurn, BridgeTurn } from "narratory"

// Generated at Friday, April 24th 2020, 3:01:28 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "På Folkhälsomyndighetens dagliga pressträff, torsdagen den 23 april, meddelades att det har rapporterats ovanligt många fall det senaste dygnet, särskilt i Stockholm.||"
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Faran är långt ifrån öfver, och trycket på vården är fortsatt högt. ||För att skydda våra äldre och sköra, måste vi vara noga med att stanna hemma vid minsta symptom, och hålla avstånd när vi går ut.||"
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
      "text": "På Folkhälsomyndighetens dagliga pressträff, torsdagen den 23 april, meddelades att det har rapporterats ovanligt många fall det senaste dygnet, särskilt i Stockholm."
    },
    "bot": {
      "say": {
        "text": "Faran är långt ifrån över och trycket på vården är fortsatt högt, så för att skydda våra äldre och sköra måste vi vara noga med att stanna hemma vid minsta symptom och hålla avstånd när vi går ut."
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
    "text": "Globalt är runt 2,6 miljoner människor bekräftat smittade och 180 000 döda."
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
    "text": "Globalt är runt 2,6 miljoner människor bekräftat smittade, och 180000 döda.|| I Sverige har vi knappt 16800 bekräftade fall av covid19, och vi är uppe i tvåtusen tjugoett rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}