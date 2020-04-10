import { BotTurn, BridgeTurn } from "narratory"

// Generated at Friday, April 10th 2020, 2:55:25 pm

export const presentNews : BridgeTurn[] = [
  {
    "say": {
      "text": "På den senaste pressträffen nämnde Folkhälsomyndighetens Karin Tegmark Wihsehll ännu en undersökning som kan ge en ledtråd över hur samhällsspridningen ser ut. <break time=\\\"1s\\\"/> Av de personer som sökte sig till öppenvården för luftvägssymtom under vecka 13, var det 7% som hade covid19, en siffra som hade fördubblats till veckan därpå.<break time=\\\"1s\\\"/>"
    },
    "cond": {
      "platform": "voximplant"
    },
    "bot": {
      "say": {
        "text": "Att de insatser som gjorts hittills har fått önskad effekt, kan man se på att den årliga nedgången av t.ex. vanlig influensa och vinterkräksjuka har varit tvärare än någonsin, och det är fortsatt viktigt att stanna hemma vid minsta lilla sjukdomssymtom.<break time=\\\"1s\\\"/>"
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
      "text": "På dagens pressträff fredagen den 10 april, nämnde Folkhälsomyndighetens Karin Tegmark-Wisell ännu en undersökning som kan ge en ledtråd över hur samhällsspridningen ser ut. Av de personer som sökte sig till öppenvården för luftvägssymtom under vecka 13 var det 7% som hade covid19, en siffra som hade fördubblats till veckan därpå."
    },
    "bot": {
      "say": {
        "text": "Att de insatser som gjorts hittills har fått önskad effekt kan man se på att den årliga nedgången av t.ex. vanlig influensa och vinterkräksjuka har varit tvärare än någonsin och det är fortsatt viktigt att stanna hemma vid minsta lilla sjukdomssymtom."
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
    "text": "Globalt är cirka 1,56 miljoner människor bekräftat smittade och 95000 döda."
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
          "url": "https://kinti.se/coronaguiden/Statistik_FHM_1400.png",
          "alt": "Statistik"
        }
      }
    }
  }
}

export const voiceStats : BotTurn = {
  "say": {
    "text": "Globalt är cirka 1,56 miljoner människor bekräftat smittade, och 95000 döda.<break time=\\\"1s\\\"/> I Sverige har vi ungefär 9700 bekräftade fall av covid19, och vi är uppe i 870 rapporterade dödsfall."
  },
  "label": "SHARE_STATS_VOICE"
}