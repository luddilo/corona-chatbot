import { BotTurn, BridgeTurn } from "narratory"

// Generated at Sunday, April 19th 2020, 3:05:56 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "Söndagen den 19 april rapporterar Ekot att trafiken på landets stödtelefoner har ökat. <break time=\"500ms\"/> Äldrelinjen tar nu emot upp till hundra samtal om dagen rörande närstående, ensamhet och osäkerhet kring ekonomin.  <break time=\\\"1s\\\"/>"
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Covid19 fortsätter att slå hårt mot turismen uppe i fjällen. STF stänger nu alla sina fjällstationer. <break time=\\\"500ms\\\"/> Detta ungefär en och en halv vecka tidigare än planerat. <break time=\\\"1s\\\"/>"
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
      "text": "Söndagen den 19 april rapporterar Ekot att trafiken på landets stödtelefoner har ökat. Äldrelinjen tar nu emot upp till hundra samtal om dagen rörande närstående, ensamhet och osäkerhet kring ekonomin. "
    },
    "bot": {
      "say": {
        "text": "Covid-19 fortsätter att slå hårt mot turismen uppe i fjällen. STF stänger nu alla sina fjällstationer, ungefär en och en halv vecka tidigare än planerat."
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
    "text": "Globalt är runt 2,3 miljoner människor bekräftat smittade och drygt 160 000 döda."
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
    "text": "Globalt är runt två komma tre miljoner människor bekräftat smittade, och hundrasextiotusen döda.<break time=\\\"500ms\\\"/> I Sverige har vi drygt fjortontusen bekräftade fall av covid19, och vi är uppe i ettusenfemhundrafyrtio rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}