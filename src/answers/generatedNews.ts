import { BotTurn, BridgeTurn } from "narratory"

// Generated at Saturday, April 11th 2020, 3:00:34 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "Idag, lördag den 11 april, uppger Folkhälsomyndigheten att 17 nya dödsfall rapporterats det senaste dygnet -  Sedan igår har även 98 nya smittade bekräftats runt om i landet. "
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Eftersom det är helg kan det ske en viss eftersläpning i antalet rapporterade fall. "
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
      "text": "Idag, lördag den 11 april, uppger Folkhälsomyndigheten att 17 nya dödsfall rapporterats det senaste dygnet. Sedan igår har även 98 nya smittade bekräftats runt om i landet. "
    },
    "bot": {
      "say": {
        "text": "Eftersom det är helg kan det ske en viss eftersläpning i antalet rapporterade fall. "
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
    "text": "Globalt är cirka 1,7 miljoner människor bekräftat smittade och drygt 100 000 döda."
  },
  "label": "SHARE_STATS_TEXT",
  "bot": {
    "say": {
      "text": "I Sverige ser siffrorna ut såhär",
      "content": {
        "type": "card",
        "title": "Statistik",
        "image": {
          "type": "image",
          "url": "https://i.ibb.co/ysngtcT/11-april.png",
          "alt": "Statistik"
        }
      }
    }
  }
}

export const voiceStats : BotTurn = {
  "say": {
    "text": "Globalt är cirka en komma sju miljoner människor bekräftat smittade, och drygt hundratusen döda.<break time=\\\"1s\\\"/> I Sverige har vi ungefär tiotusen bekräftade fall av covid19, och vi är uppe i 887 rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}