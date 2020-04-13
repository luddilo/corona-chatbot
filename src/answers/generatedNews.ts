import { BotTurn, BridgeTurn } from "narratory"

// Generated at Monday, April 13th 2020, 9:53:16 am

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "Idag, söndag den 12 april, visar preliminära siffror att över 80 procent av de som intensivårdas på sjukhus överlever. .<break time=\\\"500ms\\\"/>David Konrad, överläkare på Iva Karolinska Universitetssjukhuset, säger att situationen ser betydligt bättre ut än anat. .<break time=\\\"1s\\\"/>"
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Biltrafiken fortsätter att minska i landet. <break time=\\\"500ms\\\"/>Under påskafton var det närmare 40 procent mindre trafik i Stockholms och Göteborgsområdet jämfört med en vanlig lördag. .<break time=\\\"1s\\\"/>"
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
      "text": "Idag, söndag den 12 april, visar preliminära siffror att över 80 procent av de som intensivvårdas på sjukhus överlever. David Konrad, överläkare på Iva Karolinska Universitetssjukhuset, säger att situationen ser betydligt bättre ut än anat."
    },
    "bot": {
      "say": {
        "text": "Biltrafiken fortsätter att minska. Under påskafton var det närmare 40 procent mindre trafik i Stockholms- och Göteborgsområdet jämfört med en vanlig lördag. "
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
    "text": "Globalt är nästan 1,8 miljoner människor bekräftat smittade och runt 110 000 döda."
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
          "url": "https://kinti.se/coronaguiden/Statistik_FHM_12april.png",
          "alt": "Statistik"
        }
      }
    }
  }
}

export const voiceStats : BotTurn = {
  "say": {
    "text": "Globalt är nästan en komma åtta miljoner människor bekräftat smittade, och runt hundratiotusen döda.<break time=\\\"1s\\\"/> I Sverige har vi drygt tiotusen bekräftade fall av covid19, och vi är uppe i 899 rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}