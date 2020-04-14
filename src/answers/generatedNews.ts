import { BotTurn, BridgeTurn } from "narratory"

// Generated at Tuesday, April 14th 2020, 2:52:36 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "Tisdagen den 14 april bekräftade Folkhälsomyndigheten att det bland anmälda fall finns en överrepresentation av personer som är födda i andra länder. <break time=\\\"500ms\\\"/> Fokus framöver behöver därför läggas på att information når ut till just dessa. <break time=\\\"1s\\\"/> "
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Många svenskar har följt rekommendationerna och stannat hemma under påsken. <break time=\\\"500ms\\\"/> Enligt Telia har långväga resor minskat drastiskt under helgen. <break time=\\\"1s\\\"/> "
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
      "text": "Tisdagen den 14 april bekräftade Folkhälsomyndigheten att det bland anmälda fall finns en överrepresentation av personer som är födda i andra länder. Fokus framöver behöver därför läggas på att information når ut till just dessa."
    },
    "bot": {
      "say": {
        "text": "Många svenskar har följt rekommendationerna och stannat hemma under påsken. Enligt Telia har långväga resor minskat drastiskt under helgen."
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
    "text": "Globalt är cirka 1,9 miljoner människor bekräftat smittade och runt 120 000 döda."
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
          "url": "https://kinti.se/coronaguiden/Statistik_FHM_14april.png",
          "alt": "Statistik"
        }
      }
    }
  }
}

export const voiceStats : BotTurn = {
  "say": {
    "text": "Globalt är drygt en komma nio miljoner människor bekräftat smittade, och runt hundratjugotusen döda.<break time=\\\"500ms\\\"/> I Sverige har vi drygt elvatusen bekräftade fall av covid19, och vi är uppe i 1033 rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}