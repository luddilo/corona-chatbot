import { UserTurn, Entity } from "narratory"
const CORONA : Entity = {
  "name": "CORONA",
  "enums": [
    {
      "name": "CORONA",
      "alts": [
        "covid",
        "covid19",
        "covid-19",
        "corona viruset",
        "coronavirus",
        "covid 19",
        "corona"
      ]
    }
  ]
}
const INFECTING_ACTIVITY : Entity = {
  "name": "INFECTING_ACTIVITY",
  "enums": [
    {
      "name": "INFECTING_ACTIVITY",
      "alts": [
        "hålla i handen",
        "kyssar",
        "kyssa",
        "puss",
        "pussa",
        "kyss",
        "pussar",
        "kram",
        "kramar",
        "kramas",
        "pussas",
        "kyssas",
        "hostar"
      ]
    }
  ]
}
const OCCUPATION : Entity = {
  "name": "OCCUPATION",
  "enums": [
    {
      "name": "OCCUPATION",
      "alts": [
        "jobbet",
        "skolan",
        "dagis",
        "förskolan",
        "arbetet"
      ]
    }
  ]
}
const MEDICAL_CERTIFICATE : Entity = {
  "name": "MEDICAL_CERTIFICATE",
  "enums": [
    {
      "name": "MEDICAL_CERTIFICATE",
      "alts": [
        "sjukintyg",
        "läkarintyg",
        "intyg"
      ]
    }
  ]
}
const PRONOMEN : Entity = {
  "name": "PRONOMEN",
  "enums": [
    {
      "name": "PRONOMEN",
      "alts": [
        "jag",
        "man",
        "en",
        "vi"
      ]
    }
  ]
}
const AUXILIARY : Entity = {
  "name": "AUXILIARY",
  "enums": [
    {
      "name": "AUXILIARY",
      "alts": [
        "ska",
        "borde",
        "behöver",
        "bör",
        "måste"
      ]
    }
  ]
}
export const simpleQuestionAnswers : UserTurn[] = [
  {
    "intent": {
      "name": "question: Vad är symptomen av CORONA?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Vad är symptomen av _CORONA?",
        "vad är symptomen",
        "hur märker man om man har _CORONA",
        "hur mår man om man har _CORONA",
        "vad innebär _CORONA",
        "vad är symptom för _CORONA"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad är symptomen av CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur smittar CORONA?",
      "entities": {
        "CORONA": CORONA,
        "INFECTING_ACTIVITY": INFECTING_ACTIVITY
      },
      "examples": [
        "Hur smittar _CORONA?",
        "hur smittar det",
        "är jag smittsam",
        "hur kan jag undvika att smitta andra",
        "hur vet jag om jag smittar",
        "smittar det genom _INFECTING_ACTIVITY",
        "smittar _CORONA genom _INFECTING_ACTIVITY",
        "smittar det att _INFECTING_ACTIVITY",
        "smittar det om man får en _INFECTING_ACTIVITY",
        "smittar det via _INFECTING_ACTIVITY",
        "smittar _CORONA med _INFECTING_ACTIVITY"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur smittar CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Finns det några särskilda riskgrupper?",
      "entities": {},
      "examples": [
        "Finns det några särskilda riskgrupper?",
        "vilka är i riskzonen",
        "vilka är riskgrupperna",
        "vem är i riskgruppen",
        "riskgrupper vilka är i dem",
        "vilka är mest i riskzonen",
        "vem riskerar få corona"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Finns det några särskilda riskgrupper?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur skyddar du dig själv och andra?",
      "entities": {},
      "examples": [
        "Hur skyddar du dig själv och andra?",
        "hur skyddar man sig",
        "hur kan jag skydda mig",
        "hur kan jag skydda min familj",
        "vilka försiktighetsåtgärder kan jag ta",
        "hur kan jag minimera risken"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur skyddar du dig själv och andra?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan man smittas flera gånger av CORONA?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Kan man smittas flera gånger av _CORONA?",
        "Kan man smittas flera gånger",
        "kan man ha _CORONA flera gånger",
        "hur många gånger kan man ha _CORONA",
        "kan jag ha _CORONA två gånger",
        "kan _CORONA smitta två gånger på samma person",
        "kan _CORONA återkomma",
        "kan _CORONA komma igen",
        "kan det komma igen",
        "kan jag bli smittad igen"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Kan man smittas flera gånger av CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vem ska stanna hemma?",
      "entities": {},
      "examples": [
        "Vem ska stanna hemma?",
        "ska jag stanna hemma",
        "bör jag stanna hemma",
        "är det viktigt att stanna hemma",
        "måste jag vara hemma",
        "när ska jag stanna hemma",
        "borde jag vara i husarrest",
        "borde jag vara i karantän",
        "ska jag vara i karantän"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vem ska stanna hemma?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: är det okej att jag går till OCCUPATION",
      "entities": {
        "OCCUPATION": OCCUPATION
      },
      "examples": [
        "är det okej att jag går till _OCCUPATION",
        "får jag gå till _OCCUPATION",
        "kan jag gå till _OCCUPATION"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: är det okej att jag går till OCCUPATION",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur länge ska jag stanna hemma?",
      "entities": {},
      "examples": [
        "Hur länge ska jag stanna hemma?",
        "hur många dagar ska jag stanna hemma",
        "hur många dagar ska man vara i karantän",
        "måste jag vara hemma en hel vecka",
        "hur vet jag hur länge jag måste stanna hemma",
        "hur långt ska jag vara hemma",
        "hur länge ska jag vara hemma"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge ska jag stanna hemma?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur sjuk blir man av covid-19?",
      "entities": {},
      "examples": [
        "Hur sjuk blir man av covid-19?",
        "hur sjuk blir man av corona",
        "blir man jättesjuk av corona",
        "hur pass sjuk blir man",
        "hur sjuk kan jag bli",
        "blir man alltid väldigt sjuk"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur sjuk blir man av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur länge är man sjuk av covid-19?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Hur länge är man sjuk av covid-19?",
        "hur pass länge är man sjuk",
        "hur länge har man corona",
        "hur lång tid kan man ha corona",
        "hur lång tid tar det innan _CORONA går över",
        "när går corona över"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge är man sjuk av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur stor är dödligheten till följd av covid-19?",
      "entities": {},
      "examples": [
        "Hur stor är dödligheten till följd av covid-19?",
        "hur många dör av corona",
        "kan man dö av corona",
        "hur många har dött av corona",
        "är det många som dör av covid-19",
        "vad är risken att dö av corona"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur stor är dödligheten till följd av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Ingår gravida i riskgrupperna?",
      "entities": {},
      "examples": [
        "Ingår gravida i riskgrupperna?",
        "är det större risk om man är gravid",
        "hur stor är risken om man är gravid",
        "hur ska man göra om man är gravid",
        "är graviditet en riskgrupp",
        "är gravida kvinnor i riskgruppen"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Ingår gravida i riskgrupperna?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Smittar covid-19 under inkubationstiden?",
      "entities": {},
      "examples": [
        "Smittar covid-19 under inkubationstiden?",
        "smittar corona hela tiden",
        "smittar corona direkt",
        "blir jag smittsam direkt om jag har fått corona",
        "är corona genast smittsamt",
        "hur snabbt smittar jag om jag fått covid-19",
        "smittar jag under inkubationstiden"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Smittar covid-19 under inkubationstiden?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan man bli smittad av en person som har covid-19 men som inte har några symtom?",
      "entities": {},
      "examples": [
        "Kan man bli smittad av en person som har covid-19 men som inte har några symtom?",
        "smittar corona utan symtom",
        "kan jag bli smittad av en person utan symtom",
        "är corona smittsamt fastän en person inte känner sig sjuk",
        "måste det finnas symtom för att det ska vara smittsamt",
        "är corona smittsamt om man bara hostar lite"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Kan man bli smittad av en person som har covid-19 men som inte har några symtom?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller för stora evenemang? regulations in Sweden",
      "entities": {},
      "examples": [
        "Vad gäller för stora evenemang? regulations in Sweden",
        "vad är reglerna för stora evenemang",
        "vilka regler gäller för evenemang",
        "vad gäller för event",
        "är alla evenemang inställda",
        "kommer alla event ställas in"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för stora evenemang? regulations in Sweden",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller för kollektivtrafik, arbetsplatser och skolor?",
      "entities": {},
      "examples": [
        "Vad gäller för kollektivtrafik, arbetsplatser och skolor?",
        "vilka regler gäller för kollektivtrafik  arbetsplatser och skolor?",
        "hur många får det vara på tunnelbanan",
        "vad gäller för tunnelbanan",
        "vad gäller för kollektivtrafiken",
        "hur många får det vara på en arbetsplats"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för kollektivtrafik, arbetsplatser och skolor?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vilka råd finns det för resa till andra länder?",
      "entities": {},
      "examples": [
        "Vilka råd finns det för resa till andra länder?",
        "får man resa till andra länder",
        "är det okej att resa utomlands",
        "vad gäller om man ska resa utomlands",
        "är det ok att åka utomlands",
        "måste jag ställa in min semester utomlands"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vilka råd finns det för resa till andra länder?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Behöver jag vidta några åtgärder även om jag känner mig frisk efter resa från drabbade länder?",
      "entities": {},
      "examples": [
        "Behöver jag vidta några åtgärder även om jag känner mig frisk efter resa från drabbade länder?",
        "behöver jag göra något särskilt om jag är frisk",
        "ska jag göra något särskilt om jag känner mig frisk"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Behöver jag vidta några åtgärder även om jag känner mig frisk efter resa från drabbade länder?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag har nyligen varit i ett land där smittspridning pågår och nu har jag hosta och feber. Vad ska jag göra?",
      "entities": {},
      "examples": [
        "Jag har nyligen varit i ett land där smittspridning pågår och nu har jag hosta och feber. Vad ska jag göra?",
        "jag tror jag har fått corona vad ska jag göra",
        "vad gör jag om jag tror att jag har fått corona",
        "hur gör jag om jag har fått corona",
        "vad ska jag göra jag har fått corona",
        "om jag tror jag har corona vad ska jag göra",
        "jag har corona vad ska jag göra",
        "jag misstänker att jag kanske har corona vad gör jag nu"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Jag har nyligen varit i ett land där smittspridning pågår och nu har jag hosta och feber. Vad ska jag göra?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur ser Sveriges beredskap ut?",
      "entities": {},
      "examples": [
        "Hur ser Sveriges beredskap ut?",
        "har sverige beredskap",
        "hur stor beredskap har sverige",
        "hur är sveriges beredskap just nu",
        "har sverige någon beredskap"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur ser Sveriges beredskap ut?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Om många personer som blir smittade av CORONA skulle behöva sjukhusvård, hur kommer sjukvården att hantera det?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Om många personer som blir smittade av _CORONA skulle behöva sjukhusvård, hur kommer sjukvården att hantera det?",
        "kommer sjukhusen att klara det",
        "hur många orkar sjukhusen ta emot",
        "hur mycket klarar vården i sverige",
        "kommer alla kunna få vård mot corona i sverige",
        "får alla vård om många är smittade samtidigt"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Om många personer som blir smittade av CORONA skulle behöva sjukhusvård, hur kommer sjukvården att hantera det?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Varför stänger ni inte av skolbarn som har varit i drabbade områden?",
      "entities": {},
      "examples": [
        "Varför stänger ni inte av skolbarn som har varit i drabbade områden?",
        "varför blir inte barn avstängda",
        "kan barn som varit i drabbade områden bli avstängda från skolan",
        "kan barn som har en sjuk familjemedlem bli avstängda",
        "kan ett barn bli avstängt"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Varför stänger ni inte av skolbarn som har varit i drabbade områden?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: kommer det bli karantän i sverige",
      "entities": {},
      "examples": [
        "kommer det bli karantän i sverige",
        "kan sverige sättas i karantän?",
        "blir det karantän i sverige?",
        "riskerar sverige att sättas i karantän?",
        "finns det risk att bli karantän i sverige?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: kommer det bli karantän i sverige",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan man vaccinera",
      "entities": {},
      "examples": [
        "Kan man vaccinera",
        "finns det vaccin?",
        "kan jag vaccinera mig mot coronaviruset?",
        "när kommer vaccin mot corona?",
        "finns det vaccin mot corona?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Kan man vaccinera",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: vem står bakom denna bot",
      "entities": {},
      "examples": [
        "vem står bakom denna bot"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: vem står bakom denna bot",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad är corona-viruset?",
      "entities": {},
      "examples": [
        "Vad är corona-viruset?",
        "vad är coronavirus",
        "vad är corona",
        "vad är ett coronavirus",
        "förklara vad corona är",
        "vad betyder corona"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad är corona-viruset?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad är covid-19?",
      "entities": {},
      "examples": [
        "Vad är covid-19?",
        "vad är covid-19",
        "vad är covid",
        "kan du förklara vad covid-19 är"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad är covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: vad skiljer covid-19 från säsongsinfluensa?",
      "entities": {},
      "examples": [
        "vad skiljer covid-19 från säsongsinfluensa?",
        "är corona influensa",
        "vad skiljer corona från influensa",
        "vad skiljer covid från influensa",
        "är influensa samma sak som corona",
        "corona och influensa är det samma sak",
        "är corona och influensa olika"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: vad skiljer covid-19 från säsongsinfluensa?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Skyddar munskydd mot Covid-19?",
      "entities": {},
      "examples": [
        "Skyddar munskydd mot Covid-19?",
        "funkar munskydd",
        "skyddar munskydd mot corona",
        "hjälper munskydd",
        "kan jag skydda mig med munskydd",
        "är det bra att ha munskydd",
        "borde jag ha munskydd",
        "borde jag ha skydd för munnen"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Skyddar munskydd mot Covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Finns det vaccin eller behandling mot covid-19?",
      "entities": {},
      "examples": [
        "Finns det vaccin eller behandling mot covid-19?",
        "finns det botemedel",
        "finns det något coronavaccin",
        "finns det något läkemedel mot corona",
        "kan man bli botad",
        "finns det vaccin än",
        "Kan man vaccinera sig mot corona"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Finns det vaccin eller behandling mot covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur många blir friska från covid-19?",
      "entities": {},
      "examples": [
        "Hur många blir friska från covid-19?",
        "kommer alla bli friska från corona",
        "hur pass många blir friska",
        "hur stor är chansen att klara sig",
        "hur många tillfrisknar från coronavirus",
        "hur många blir friska"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur många blir friska från covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Behöver jag städa eller hantera mina sopor på något särskilt sätt?",
      "entities": {},
      "examples": [
        "Behöver jag städa eller hantera mina sopor på något särskilt sätt?",
        "ska jag städa på något särskilt sätt",
        "måste jag städa extra noga",
        "vad ska jag göra med mina sopor",
        "kan mina sopor vara infekterade",
        "hur städar jag om jag tror att det finns corona i hemmet"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Behöver jag städa eller hantera mina sopor på något särskilt sätt?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Varför stänger vi inte skolorna i Sverige?",
      "entities": {},
      "examples": [
        "Varför stänger vi inte skolorna i Sverige?",
        "varför stängs inte skolorna",
        "kommer skolorna att stängas",
        "hur länge kommer skolorna att vara öppna",
        "hur kommer det sig att skolorna i sverige inte stängs",
        "varför är skolorna öppna"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Varför stänger vi inte skolorna i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur länge kan viruset som orsakar covid-19 överleva utanför människokroppen?",
      "entities": {},
      "examples": [
        "Hur länge kan viruset som orsakar covid-19 överleva utanför människokroppen?",
        "hur länge överlever corona",
        "kan corona leva utanför kroppen",
        "kan viruset leva på ytor",
        "kan coronavirus överleva på ett handtag",
        "hur snabbt dör corona utanför kroppen"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge kan viruset som orsakar covid-19 överleva utanför människokroppen?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan viruset smitta till människa via post och paket?",
      "entities": {},
      "examples": [
        "Kan viruset smitta till människa via post och paket?",
        "kan paket vara smittade med corona",
        "kan det vara corona på min post",
        "hur desinfierar jag min post",
        "kan det finnas corona på mina brev",
        "kan jag bli smittad av min post"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Kan viruset smitta till människa via post och paket?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan covid-19 smitta mellan djur och människa och kan mitt husdjur smittas av viruset?",
      "entities": {},
      "examples": [
        "Kan covid-19 smitta mellan djur och människa och kan mitt husdjur smittas av viruset?",
        "kan jag smittas av mitt husdjur",
        "jag jag få smittan av djur",
        "kan jag smitta mina husdjur",
        "smittar corona mellan människor och husdjur",
        "hur skyddar jag mina husdjur"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Kan covid-19 smitta mellan djur och människa och kan mitt husdjur smittas av viruset?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: I vilka länder pågår det smittspridning?",
      "entities": {},
      "examples": [
        "I vilka länder pågår det smittspridning?",
        "vilka länder är smittade",
        "i vilka länder kan jag få corona",
        "finns det några säkra länder",
        "är alla länder drabbade",
        "vilka länder har blivit smittade"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: I vilka länder pågår det smittspridning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär det att vi har en samhällsspridning av covid-19 i Sverige?",
      "entities": {},
      "examples": [
        "Vad innebär det att vi har en samhällsspridning av covid-19 i Sverige?",
        "vad innebär det att vi har en samhällsspridning av corona i Sverige?",
        "vad innebär samhällsspridning",
        "vad betyder samhällsspridning",
        "vad betyder spridning i samhället",
        "har vi samhällsspridning i sverige"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär det att vi har en samhällsspridning av covid-19 i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär smittspårning av personer?",
      "entities": {},
      "examples": [
        "Vad innebär smittspårning av personer?",
        "vad är smittspårning",
        "vad betyder smittspårning",
        "vad betyder det att vara smittspårad",
        "hur smittspårar man",
        "vad är smittspårning av corona"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär smittspårning av personer?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Varför just 500 personer?",
      "entities": {},
      "examples": [
        "Varför just 500 personer?",
        "vad är det för särskilt med 500 personer",
        "varför är det 500 personer",
        "hur kommer det sig att det är just 500",
        "vad händer efter 500",
        "vad är problemet med fler än 500 personer"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Varför just 500 personer?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Skulle hälsokontroller av resenärer med flyg från länder där smittspridning pågår kunna begränsa smittspridningen i Sverige?",
      "entities": {},
      "examples": [
        "Skulle hälsokontroller av resenärer med flyg från länder där smittspridning pågår kunna begränsa smittspridningen i Sverige?",
        "kan flygkontroller minska spridningen",
        "kan flygplatserna påverka smittspridningen",
        "kollas alla på flygplatsen",
        "blir alla kontrollerade på flygplatser",
        "är det hälsokoll på flygplatsen"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Skulle hälsokontroller av resenärer med flyg från länder där smittspridning pågår kunna begränsa smittspridningen i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vilka regler gäller för att sätta någon i karantän i Sverige?",
      "entities": {},
      "examples": [
        "Vilka regler gäller för att sätta någon i karantän i Sverige?",
        "vem bestämmer vem som ska sättas i karantän",
        "kan man bli tvingad att sitta i karantän",
        "måste jag vara i karantän",
        "vad innebär karantän",
        "vad innebär att sitta i karantän"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vilka regler gäller för att sätta någon i karantän i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gör Folkhälsomyndigheten?",
      "entities": {},
      "examples": [
        "Vad gör Folkhälsomyndigheten?",
        "vad är Folkhälsomyndigheten",
        "vilken roll har Folkhälsomyndigheten",
        "vilket ansvar har Folkhälsomyndigheten",
        "vad gör Folkhälsomyndigheten"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad gör Folkhälsomyndigheten?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad är en pandemi?",
      "entities": {},
      "examples": [
        "Vad är en pandemi?",
        "vad betyder pandemi",
        "vad innebär en pandemi",
        "vad innebär pandemi",
        "vad händer vid en pandemi"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad är en pandemi?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär det att covid-19 klassas som allmänfarlig och samhällsfarlig sjukdom enligt smittskyddslagen?",
      "entities": {},
      "examples": [
        "Vad innebär det att covid-19 klassas som allmänfarlig och samhällsfarlig sjukdom enligt smittskyddslagen?",
        "vad betyder det att corona är allmänfarlig",
        "vad innebär samhällsfarlig sjukdom",
        "vad är en samhällsfarlig sjukdom",
        "vad är allmänfarlig",
        "är corona samhällsfarlig"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär det att covid-19 klassas som allmänfarlig och samhällsfarlig sjukdom enligt smittskyddslagen?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: vad skiljer en droppsmitta från en luftburen smitta?",
      "entities": {},
      "examples": [
        "vad skiljer en droppsmitta från en luftburen smitta?",
        "vad betyder droppsmitta",
        "vad innebär droppsmitta",
        "hur smittar droppsmitta",
        "vad är luftburen smitta?",
        "vad är droppsmitta?",
        "hur smittar luftburen smitta?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: vad skiljer en droppsmitta från en luftburen smitta?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: vad är direkt och indirekt kontaktsmitta?",
      "entities": {},
      "examples": [
        "vad är direkt och indirekt kontaktsmitta?",
        "vad är direktkontakt?",
        "vad är indirekt kontaktsmitta?",
        "hur smittar man genom direktkontakt?",
        "hur smittar viruset via indirekt kontakt?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: vad är direkt och indirekt kontaktsmitta?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad är ett andningsskydd?",
      "entities": {},
      "examples": [
        "Vad är ett andningsskydd?",
        "hur använder jag ett andningsskydd",
        "vad innebär andningsskydd",
        "vad är andningsskydd mot corona",
        "vad är skydd för andning",
        "vem bär andningsskydd"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad är ett andningsskydd?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur kan ett provsvar som först blev negativt och visar att man är frisk         vid en andra provtagning ge ett positivt svar         att man är sjuk och bär på smittan?",
      "entities": {},
      "examples": [
        "Hur kan ett provsvar som först blev negativt och visar att man är frisk         vid en andra provtagning ge ett positivt svar         att man är sjuk och bär på smittan?",
        "hur kan provsvaret för corona ändras",
        "varför ändrades provsvaret",
        "kan provsvaret för corona ändras",
        "hur är det möjligt att olika coronaprov ger olika resultat",
        "kan jag få olika besked från två  olika coronatest"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur kan ett provsvar som först blev negativt och visar att man är frisk         vid en andra provtagning ge ett positivt svar         att man är sjuk och bär på smittan?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: hur länge smittar det",
      "entities": {},
      "examples": [
        "hur länge smittar det",
        "hur länge kan man smitta andra?",
        "när smittar man?",
        "hur länge smittar en person med coronaviruset?",
        "hur lång tid smittar corona?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: hur länge smittar det",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: vad betyder social distansiering",
      "entities": {},
      "examples": [
        "vad betyder social distansiering",
        "vad är social distansiering?",
        "vad är syftet med social distansering?",
        "hur fungerar social distansering?",
        "vad är målet med social distansering?",
        "vad gäller vid social distansering?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: vad betyder social distansiering",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur kan jag utöva social distansering?",
      "entities": {},
      "examples": [
        "Hur kan jag utöva social distansering?",
        "hur gör man social distansering?",
        "vad kan man göra för social distansering?",
        "hur göra social distansering?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur kan jag utöva social distansering?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad mer kan jag göra för att förhindra spridning av viruset?",
      "entities": {},
      "examples": [
        "Vad mer kan jag göra för att förhindra spridning av viruset?",
        "hur förhindrar jag spridning av virus?",
        "vad kan jag göra för att förhindra virusspridning?",
        "hur stoppar jag virusspridning?",
        "hur förebygger jag virusspridning?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad mer kan jag göra för att förhindra spridning av viruset?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan varmare väder stoppa virusutbrottet?",
      "entities": {},
      "examples": [
        "Kan varmare väder stoppa virusutbrottet?",
        "kommer corona sluta spridas till sommaren?",
        "kommer virusutbrottet avstanna när det blir varmt?",
        "kommer spridningen av corona avta till sommaren?",
        "kan spridningen av corona minska när vädret blir varmare?",
        "sprids corona långsammare i varmt väder?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Kan varmare väder stoppa virusutbrottet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär inreseförbudet?",
      "entities": {},
      "examples": [
        "Vad innebär inreseförbudet?",
        "vad är inreseförbudet?",
        "vad händer vid inreseförbudet?",
        "när är inreseförbudet?",
        "varför har vi inreseförbud?",
        "när börjar inreseförbudet?",
        "när slutar inreseförbudet?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär inreseförbudet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vilka gäller inreseförbudet?",
      "entities": {},
      "examples": [
        "Vilka gäller inreseförbudet?",
        "vem rörs av inreseförbudet?",
        "vem rörs inte av inreseförbudet?",
        "vilka undantag gäller för inreseförbudet?",
        "görs det undantag för inreseförbudet?",
        "vem görs undantag för gällande inreseförbudet?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vilka gäller inreseförbudet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Finns det självtester för CORONA?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Finns det självtester för _CORONA?",
        "kan man testa sig hemma för _CORONA?",
        "går det att testa sig hemma?",
        "är självtester pålitliga?",
        "kan man lita på självtester?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Finns det självtester för CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller angående att läsa på distans?",
      "entities": {},
      "examples": [
        "Vad gäller angående att läsa på distans?",
        "behöver man läsa via distans nu?",
        "varför behöver skolorna läsa på distans?",
        "kommer all undervisning nu bedrivas på distans?",
        "bedrivs undervisning på distans?",
        "Varför ska  undervisningen för gymnasieelever och studenter ske på distans?",
        "erbjuder skolorna undervisning på distans?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller angående att läsa på distans?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Behöver elever i grundskolan också läsa på distans?",
      "entities": {},
      "examples": [
        "Behöver elever i grundskolan också läsa på distans?",
        "vad gäller angående undervisning i grundskolor?",
        "behöver elever i grundskolan läsa på distans?",
        "behöver elever i grundskolan stanna hemifrån?",
        "kommer distansundervisning ske för elever i grundskolan?",
        "är det aktuellt för elever i grundskolan att läsa på distans?",
        "varför bedrivs inte undervisning på distans för elever i grundskolan?",
        "vad gäller för grundskoleelever?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Behöver elever i grundskolan också läsa på distans?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag är 70 år, hur ska jag bete mig nu när det pågår smittspridning ute i samhället? ",
      "entities": {},
      "examples": [
        "Jag är 70 år, hur ska jag bete mig nu när det pågår smittspridning ute i samhället? ",
        "hur ska man bete sig om man är över 70 år?",
        "hur ska äldre bete sig?",
        "vad  bör äldre göra under pågående smittspridning?",
        "vad bör äldre undvika?",
        "kan äldre gå på promenad utomhus?",
        "vad ska äldre göra i nuläget?",
        "jag är 70 år, vad gör jag nu?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Jag är 70 år, hur ska jag bete mig nu när det pågår smittspridning ute i samhället? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Nu när det pågår samhällsspridning av det nya coronaviruset, hur ska vi ta hand om och skydda personer som är 70 år och äldre?",
      "entities": {},
      "examples": [
        "Nu när det pågår samhällsspridning av det nya coronaviruset, hur ska vi ta hand om och skydda personer som är 70 år och äldre?",
        "hur skyddar vi de äldre?",
        "hur skyddar vi de som är 70 år eller äldre?",
        "hur kan man ta hand om äldre?",
        "hur håller man äldre borta från viruset?",
        "kan jag ha närkontakt med äldre?",
        "hur skyddar jag äldre från smitta?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Nu när det pågår samhällsspridning av det nya coronaviruset, hur ska vi ta hand om och skydda personer som är 70 år och äldre?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vilka personer bör testas för det nya coronaviruset?",
      "entities": {},
      "examples": [
        "Vilka personer bör testas för det nya coronaviruset?",
        "vem kan testas för corona?",
        "vilka personer kan testa sig för corona?",
        "kan jag testa mig för corona?",
        "när kan man testa sig för corona?",
        "ska man stanna hemma när man uppvisar symptom på corona?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vilka personer bör testas för det nya coronaviruset?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Om en person i familjen är sjuk - måste alla stanna hemma då? ",
      "entities": {},
      "examples": [
        "Om en person i familjen är sjuk - måste alla stanna hemma då? ",
        "måste alla i familjen stanna hemma om en är sjuk?",
        "måste man stanna hemma om någon i hushållet är sjuk?",
        "om någon i hushållet är sjuk utan symptom, måste resten av hushållet stanna hemma då?",
        "kan man gå till skolan även om någon i familjen är sjuk?",
        "kan man gå till jobbet även fast någon i hushållet är sjuk?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Om en person i familjen är sjuk - måste alla stanna hemma då? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: hur många är smittade",
      "entities": {},
      "examples": [
        "hur många är smittade"
      ]
    },
    "bot": {
      "say": [
        "yes"
      ],
      "set": {
        "classifiedIntentName": "question: hur många är smittade",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "yes"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: jag når inte 1177",
      "entities": {},
      "examples": [
        "jag når inte 1177",
        "jag kommer inte fram till 1177",
        "1177 svarar inte"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: jag når inte 1177",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur bör jag bete mig",
      "entities": {},
      "examples": [
        "Hur bör jag bete mig"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur bör jag bete mig",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: får jag träffa vänner?",
      "entities": {},
      "examples": [
        "får jag träffa vänner?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: får jag träffa vänner?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Har jag CORONA?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Har jag _CORONA?",
        "hur vet jag om jag har _CORONA?",
        "hur vet man att man har _CORONA",
        "när ska man söka vård"
      ]
    },
    "bot": {
      "say": [
        "yes"
      ],
      "set": {
        "classifiedIntentName": "question: Har jag CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "yes"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Talar du engelska?",
      "entities": {},
      "examples": [
        "Talar du engelska?",
        "Kan du prata engelska?",
        "Finns du på engelska?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Talar du engelska?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag kan inte andas",
      "entities": {},
      "examples": [
        "Jag kan inte andas",
        "Jag får inte luft",
        "Jag har problem med andningen"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Jag kan inte andas",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad är det senaste?",
      "entities": {},
      "examples": [
        "Vad är det senaste?",
        "Vad är senaste nytt?",
        "Vad är nytt?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad är det senaste?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad heter du?",
      "entities": {},
      "examples": [
        "Vad heter du?",
        "Vad är ditt namn?",
        "Vem är du?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Vad heter du?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur lång är inkubationstiden?",
      "entities": {},
      "examples": [
        "Hur lång är inkubationstiden?",
        "Hur lång tid kan det ta innan symptom visar sig?",
        "Hur lång tid efter att man har blivit smittad blir man sjuk?"
      ]
    },
    "bot": {
      "say": [
        "no"
      ],
      "set": {
        "classifiedIntentName": "question: Hur lång är inkubationstiden?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "no"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  }
]