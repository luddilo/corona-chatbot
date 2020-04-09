import { BotTurn, BridgeTurn } from "narratory"

// Generated at Thursday, April 9th 2020, 3:06:01 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "På Folkhälsomyndighetens senaste presskonferens ville stattseppidämolog Anders Täggh hnel klargöra att trots att kurvan är plan, så ökar det totala antalet fall, och trycket på vården kommer inte att minska i första taget. <break time=\\\"1s\\\"/> Täggh hnel påpekade även att trängsel på restauranger och i butiker inte bara är verksamhetens ansvar, utan vi har alla ett personligt ansvar."
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Resultat har kommit från förra veckans undersökning som gjordes på slumpvis utvalda personer i Stockholm, och av dessa var det då 2,5% som bar på viruset. Samma undersökning ska göras i hela Sverige, och användas för att räkna ut hur många som är immuna. <break time=\\\"1s\\\"/> "
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
      "text": "På Folkhälsomyndighetens dagliga presskonferens onsdagen den 9 april ville stadsepidemolog Anders Tegnell klargöra att trots att kurvan är plan så ökar det totala antalet fall och trycket på vården kommer inte att minska i första taget. Tegnell påpekade även att trängsel på restauranger och i butiker inte bara är verksamhetens ansvar utan vi har alla ett personligt ansvar."
    },
    "bot": {
      "say": {
        "text": "Resultat har kommit från förra veckans undersökning som gjordes på slumpvis utvalda personer i Stockholm och av dessa var det då 2,5% som bar på viruset. Samma undersökning ska göras i hela Sverige och användas för att räkna ut hur många som är immuna."
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
    "text": "Globalt är cirka 1,48 miljoner människor bekräftat smittade och 88000 döda."
  },
  "label": "SHARE_STATS_TEXT",
  "bot": {
    "say": {
      "text": "I Sverige är kurvan fortsatt stabil siffrorna ser ut såhär",
      "content": {
        "type": "card",
        "title": "Statistik",
        "image": {
          "type": "image",
          "url": "https://ibb.co/Y2NT2fn",
          "alt": "Statistik"
        }
      }
    }
  }
}

export const voiceStats : BotTurn = {
  "say": {
    "text": "Globalt är cirka en komma fyrtioåtta miljoner människor bekräftat smittade och åttioåttatusen döda. I Sverige har vi ungefär 9100 bekräftade fall av covid19. Vi är nu uppe i 793 rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}