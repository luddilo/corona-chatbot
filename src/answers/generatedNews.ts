import { BotTurn, BridgeTurn } from "narratory"

// Generated at Monday, April 13th 2020, 3:09:49 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "Idag, måndagen den 13 april, höll Folkhälsomyndigheten återigen en pressträff om Coronaläget efter helgens uppehåll. <break time=\\\"500ms\\\"/> Siffrorna har dock inte förändrats särskilt mycket, då en stor efterrapportering är att vänta.<break time=\\\"1s\\\"/> "
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Flera kommuner har beslutat att ställa in årets studentfiranden eftersom nuvarande regler vad gäller folksamlingar kommer att ligga kvar åtminstone fram till juni.<break time=\\\"1s\\\"/> "
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
      "text": "Idag, måndagen den 13 april, höll Folkhälsomyndigheten återigen en pressträff om Coronaläget efter helgens uppehåll. Siffrorna har dock inte förändrats särskilt mycket då en stor efterrapportering är att vänta."
    },
    "bot": {
      "say": {
        "text": "Flera kommuner har beslutat att ställa in årets studentfiranden eftersom nuvarande regler vad gäller folksamlingar kommer att ligga kvar åtminstone fram till juni."
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
    "text": "Globalt är cirka 1,8 miljoner människor bekräftat smittade och runt 114 000 döda."
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
          "url": "https://kinti.se/coronaguiden/Statistik_FHM_13april.png",
          "alt": "Statistik"
        }
      }
    }
  }
}

export const voiceStats : BotTurn = {
  "say": {
    "text": "Globalt är cirka en komma åtta miljoner människor bekräftat smittade, och runt hundrafjortontusen döda.<break time=\\\"500ms\\\"/> I Sverige har vi nästan elvatusen bekräftade fall av covid19, och vi är uppe i 919 rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}