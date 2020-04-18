import { BotTurn, BridgeTurn } from "narratory"

// Generated at Saturday, April 18th 2020, 2:56:25 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "Lördagen den 18 april rapporterar Ekot att majoriteten av de som gått bort till följd av covid19 i Sverige varit personer mellan åttio till nittio år. <break time=\\\"1s\\\"/>"
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Det rapporteras vidare att trehundrafyrtiotvå av de avlidna varit över nittio år. <break time=\\\"500ms\\\"/> Endast tjugotre personer under femtio år har avlidit av covid19. <break time=\\\"500ms\\\"/> Ingen under tjugo år har avlidit. <break time=\\\"1s\\\"/>"
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
      "text": "Lördagen den 18 april rapporterar Ekot att majoriteten av de som gått bort till följd av covid-19 i Sverige varit personer mellan 80 till 90 år."
    },
    "bot": {
      "say": {
        "text": "Det rapporteras vidare att 342 av de avlidna varit över 90 år. Endast 23 personer under 50 år har avlidit av covid-19. Ingen under 20 år har avlidit. "
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
    "text": "Globalt är drygt 2,2 miljoner människor bekräftat smittade och 155 000 döda."
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
    "text": "Globalt är drygt två komma två miljoner människor bekräftat smittade, och hundrafemtiofemtusen döda.<break time=\\\"500ms\\\"/> I Sverige har vi nästan fjortontusen bekräftade fall av covid19, och  vi är uppe i ettusenfemhundraelva rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}