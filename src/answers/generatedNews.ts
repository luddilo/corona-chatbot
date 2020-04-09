import { BotTurn, BridgeTurn } from "narratory"

// Generated at Thursday, April 9th 2020, 10:41:22 am

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "På Folkhälsomyndighetens senaste presskonferens nämnde stads epidemolog Anders Täg nell bland annat att 40% av de avlidna över 70 år i Stockholm har varit folkbokförda på ett äldreboende. För resten av landet är samma siffra bara 4%. "
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Vad gäller diskussionen om de vårdanställda som testats positivt för coronaviruset trots att de har varit helt symptomfria, påpekade Täg nell att de det framför allt är de med symptom som smittar andra. <break time=\\\"1s\\\"/> "
      },
      "bot": {
        "say": {
          "text": "Vill du ha de senaste siffrorna?",
          "suggestions": [
            "Yes",
            "No"
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
      "text": "På Folkhälsomyndighetens dagliga presskonferens den 8 april nämnde stadsepidemolog Anders Tegnell bland annat att av de avlidna över 70 år i Stockholmsregionen, har ungefär 40% varit folkbokförda på ett äldreboende, vilket kan jämföras med 4% i resten av landet."
    },
    "bot": {
      "say": {
        "text": "Vad gäller diskussionen om de vårdanställda som testats positivt för coronaviruset trots att de har varit helt symptomfria, påpekade Tegnell att det framför allt är de med symptom som smittar andra"
      },
      "bot": {
        "say": {
          "text": "Vill du ha de senaste siffrorna?",
          "suggestions": [
            "Yes",
            "No"
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
    "text": "Globalt är cirka 1,4 miljoner människor bekräftat smittade och 81000 döda, varav ungefär hälften i Europa."
  },
  "label": "SHARE_STATS_TEXT",
  "bot": {
    "say": {
      "text": "I Sverige är kurvan plan och siffrorna ser ut såhär",
      "content": {
        "type": "card",
        "title": "Statistik",
        "image": {
          "type": "image",
          "url": "https://i.ibb.co/XDb5KGZ/Corona-liggande-8april-1.png",
          "alt": "Statistik"
        }
      }
    }
  }
}

export const voiceStats : BotTurn = {
  "say": {
    "text": "Globalt är cirka 1,4 miljoner människor bekräftat smittade och 81000 döda, varav ungefär hälften i Europa. I Sverige har vi ungefär 8400 bekräftade fall av covid19, varav 678 har intensivvårdats. Vi är nu uppe i 687 rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}