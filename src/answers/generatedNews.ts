import { BotTurn, BridgeTurn } from "narratory"

// Generated at Wednesday, April 22nd 2020, 3:00:04 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "På Folkhälsomyndighetens dagliga pressträff, onsdagen den 22 april, bekräftades att kurvan är fortsatt plan, men att man ser en ökning utanför Stockholm, bland annat i Uppsala och Jönköping. ||Detta tros dock bero på att mer vårdpersonal testas. ||"
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Den modell av smittspridningen som presenterades på gårdagens pressträff har dragits tillbaka då den innehöll felaktigheter. ||En ny version förväntas komma på torsdag. ||"
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
      "text": "På Folkhälsomyndighetens dagliga pressträff, onsdagen den 22 april, bekräftades att kurvan är fortsatt plan men att man ser en ökning utanför Stockholm, bland annat i Uppsala och Jönköping. Detta kan dock bero på att mer vårdpersonal testas. "
    },
    "bot": {
      "say": {
        "text": "Den modell av smittspridningen som presenterades på gårdagens pressträff har dragits tillbaka då den innehöll felaktigheter. En ny version förväntas komma på torsdag."
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
    "text": "Globalt är runt 2,5 miljoner människor bekräftat smittade och 178 000 döda."
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
    "text": "Globalt är runt två och en halv miljoner människor bekräftat smittade, och 178000 döda.|| I Sverige har vi drygt 16000 bekräftade fall av covid19, och vi är uppe i ettusen niohundratrettiosju rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}