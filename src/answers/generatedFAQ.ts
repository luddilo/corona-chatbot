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
        "Enligt Folkhälsomyndigheten är de vanligaste symtomen feber och hosta, men även andningspåverkan, halsont, huvudvärk, muskel- och ledvärk är vanliga symtom. De flesta får lindriga besvär som går över av sig själva med egenvård i hemmet. En del blir allvarligt sjuka med exempelvis svårigheter att andas och lunginflammation."
      ],
      "set": {
        "classifiedIntentName": "question: Vad är symptomen av CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Enligt Folkhälsomyndigheten är de vanligaste symtomen feber och hosta, men även andningspåverkan, halsont, huvudvärk, muskel- och ledvärk är vanliga symtom. De flesta får lindriga besvär som går över av sig själva med egenvård i hemmet. En del blir allvarligt sjuka med exempelvis svårigheter att andas och lunginflammation."
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
        "Viruset smittar i första hand genom kontakt med droppar och sekret från luftvägarna. Smitta kan därför ske vid hostningar och nysningar, eller vid kontakt med personer. Det är fortfarande oklart om viruset kan smitta via droppar som landat på ytor eller föremål. Genom att tvätta händerna och undvika att röra vid ansiktet samt att undvika nära kontakt med sjuka människor minskar risken för smitta. "
      ],
      "set": {
        "classifiedIntentName": "question: Hur smittar CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Viruset smittar i första hand genom kontakt med droppar och sekret från luftvägarna. Smitta kan därför ske vid hostningar och nysningar, eller vid kontakt med personer. Det är fortfarande oklart om viruset kan smitta via droppar som landat på ytor eller föremål. Genom att tvätta händerna och undvika att röra vid ansiktet samt att undvika nära kontakt med sjuka människor minskar risken för smitta. "
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
        "Alla kan få coronavirus. Många får bara milda symptom, men vissa blir väldigt sjuka och behöver vård. Även de med milda symptom kan smitta, vilket kan bli farligt om de smittar människor i riskgrupper. Enligt Folkhälsomyndigheten visar studier att hög ålder är den främsta riskfaktorn för att bli väldigt sjuk. Personer med hög ålder i kombination med andra sjukdomar, såsom högt blodtryck, hjärt- kärlsjukdom, lungsjukdom, cancer eller diabetes är extra utsatta.  Just nu rekommenderas du som är över 70 år att försöka undvika platser med många människor, för att vara extra försiktig. Det kan exempelvis vara kollektivtrafiken, affärer eller apotek. Har du någon i din närhet som kan hjälpa dig med ärenden, så fråga dem. Men undvik nära kontakt med andra människor. Du kan också kontakta kommunen där du bor om du behöver hjälp."
      ],
      "set": {
        "classifiedIntentName": "question: Finns det några särskilda riskgrupper?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Alla kan få coronavirus. Många får bara milda symptom, men vissa blir väldigt sjuka och behöver vård. Även de med milda symptom kan smitta, vilket kan bli farligt om de smittar människor i riskgrupper. Enligt Folkhälsomyndigheten visar studier att hög ålder är den främsta riskfaktorn för att bli väldigt sjuk. Personer med hög ålder i kombination med andra sjukdomar, såsom högt blodtryck, hjärt- kärlsjukdom, lungsjukdom, cancer eller diabetes är extra utsatta.  Just nu rekommenderas du som är över 70 år att försöka undvika platser med många människor, för att vara extra försiktig. Det kan exempelvis vara kollektivtrafiken, affärer eller apotek. Har du någon i din närhet som kan hjälpa dig med ärenden, så fråga dem. Men undvik nära kontakt med andra människor. Du kan också kontakta kommunen där du bor om du behöver hjälp."
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
        "Undvik att röra vid ansiktet och ögonen, och undvik kontakt med sjuka människor. Tvätta händerna väldigt ofta med tvål och varmt vatten. Om du är ute där du inte har tvål och vatten så kan du använda handsprit. Genom att hosta och nysa i armvecket eller i en pappersnäsduk hindrar du smitta från att spridas i din omgivning eller från att förorena dina händer. Stanna hemma om du känner dig krasslig, även om det bara är väldigt lätta symtom. Även personer som inte känner sig så sjuka och bara har lite hosta eller feber kan smitta andra. Du kan smitta så länge du har symtom, och även några dagar efteråt, så stanna hemma i några dagar även om du känner dig frisk igen."
      ],
      "set": {
        "classifiedIntentName": "question: Hur skyddar du dig själv och andra?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Undvik att röra vid ansiktet och ögonen, och undvik kontakt med sjuka människor. Tvätta händerna väldigt ofta med tvål och varmt vatten. Om du är ute där du inte har tvål och vatten så kan du använda handsprit. Genom att hosta och nysa i armvecket eller i en pappersnäsduk hindrar du smitta från att spridas i din omgivning eller från att förorena dina händer. Stanna hemma om du känner dig krasslig, även om det bara är väldigt lätta symtom. Även personer som inte känner sig så sjuka och bara har lite hosta eller feber kan smitta andra. Du kan smitta så länge du har symtom, och även några dagar efteråt, så stanna hemma i några dagar även om du känner dig frisk igen."
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
        "Det är oklart hur länge man kommer att vara immun. Utifrån tidigare erfarenheter så är bedömningen att immuniteten varar så länge att man inte kommer att smittas fler gånger under en och samma säsong."
      ],
      "set": {
        "classifiedIntentName": "question: Kan man smittas flera gånger av CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det är oklart hur länge man kommer att vara immun. Utifrån tidigare erfarenheter så är bedömningen att immuniteten varar så länge att man inte kommer att smittas fler gånger under en och samma säsong."
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
        "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Det gäller även om du bara känner dig lite sjuk. Du ska inte gå till jobbet eller skolan, inte resa med buss, tåg, tunnelbana eller flyg och inte heller gå ut för att handla. Om du känner dig det minsta sjuk, stanna hemma. När du känner dig helt frisk, stanna hemma i minst två dagar till.  Folkhälsomyndigheten ger också rådet att du jobbar hemifrån i den mån det är möjligt, även om du är frisk. Syftet är att minska hastigheten i smittspridningen och att hålla nere antalet personer som behöver sjukhusvård. Många länder i världen uppmanar människor att hålla sig hemma även om de är friska för att sakta ner smittspridningen."
      ],
      "set": {
        "classifiedIntentName": "question: Vem ska stanna hemma?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Det gäller även om du bara känner dig lite sjuk. Du ska inte gå till jobbet eller skolan, inte resa med buss, tåg, tunnelbana eller flyg och inte heller gå ut för att handla. Om du känner dig det minsta sjuk, stanna hemma. När du känner dig helt frisk, stanna hemma i minst två dagar till.  Folkhälsomyndigheten ger också rådet att du jobbar hemifrån i den mån det är möjligt, även om du är frisk. Syftet är att minska hastigheten i smittspridningen och att hålla nere antalet personer som behöver sjukhusvård. Många länder i världen uppmanar människor att hålla sig hemma även om de är friska för att sakta ner smittspridningen."
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
        "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Det gäller även om du bara känner dig lite sjuk. Du ska inte gå till jobbet eller skolan, inte resa med buss, tåg, tunnelbana eller flyg och inte heller gå ut för att handla. Om du känner dig det minsta sjuk, stanna hemma. När du känner dig helt frisk, stanna hemma i minst två dagar till.  Folkhälsomyndigheten ger också rådet att du jobbar hemifrån i den mån det är möjligt, även om du är frisk. Syftet är att minska hastigheten i smittspridningen och att hålla nere antalet personer som behöver sjukhusvård. Många länder i världen uppmanar människor att hålla sig hemma även om de är friska för att sakta ner smittspridningen."
      ],
      "set": {
        "classifiedIntentName": "question: är det okej att jag går till OCCUPATION",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Det gäller även om du bara känner dig lite sjuk. Du ska inte gå till jobbet eller skolan, inte resa med buss, tåg, tunnelbana eller flyg och inte heller gå ut för att handla. Om du känner dig det minsta sjuk, stanna hemma. När du känner dig helt frisk, stanna hemma i minst två dagar till.  Folkhälsomyndigheten ger också rådet att du jobbar hemifrån i den mån det är möjligt, även om du är frisk. Syftet är att minska hastigheten i smittspridningen och att hålla nere antalet personer som behöver sjukhusvård. Många länder i världen uppmanar människor att hålla sig hemma även om de är friska för att sakta ner smittspridningen."
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
        "Stanna hemma tills du är helt frisk och i minst två dygn till innan du går till jobbet, åker i kollektivtrafiken eller går och handlar. Om du har äldre släktingar, kan du som anhörig och närstående undvika att träffa dem, särskilt om du har varit sjuk. Det är för att skydda dem från virus."
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge ska jag stanna hemma?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Stanna hemma tills du är helt frisk och i minst två dygn till innan du går till jobbet, åker i kollektivtrafiken eller går och handlar. Om du har äldre släktingar, kan du som anhörig och närstående undvika att träffa dem, särskilt om du har varit sjuk. Det är för att skydda dem från virus."
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
        "Enligt Vårdguiden blir de allra flesta som smittas lindrigt sjuka med luftvägssymtom som går över av sig själva, men vissa drabbas av allvarligare sjukdom som lunginflammation. De som blir allvarligt sjuka kan behöva läggas in på sjukhus och få hjälp med andningen. Därför är det viktigt att inte för många blir sjuka samtidigt."
      ],
      "set": {
        "classifiedIntentName": "question: Hur sjuk blir man av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Enligt Vårdguiden blir de allra flesta som smittas lindrigt sjuka med luftvägssymtom som går över av sig själva, men vissa drabbas av allvarligare sjukdom som lunginflammation. De som blir allvarligt sjuka kan behöva läggas in på sjukhus och få hjälp med andningen. Därför är det viktigt att inte för många blir sjuka samtidigt."
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
        "Enligt Folkhälsomyndigheten blir flesta som fått lindriga symtom  friska efter två veckor. För de som blev allvarligt sjuka tog det mellan tre och sex veckor innan de var friska igen.   De som blev allvarligt sjuka hade andningssvårigheter, som snabb andning och låg syresättning av blodet. En del av dem behövde intensivvård, till exempel med respirator. Dessa allvarliga symtom kom vanligen en vecka efter insjuknandet."
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge är man sjuk av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Enligt Folkhälsomyndigheten blir flesta som fått lindriga symtom  friska efter två veckor. För de som blev allvarligt sjuka tog det mellan tre och sex veckor innan de var friska igen.   De som blev allvarligt sjuka hade andningssvårigheter, som snabb andning och låg syresättning av blodet. En del av dem behövde intensivvård, till exempel med respirator. Dessa allvarliga symtom kom vanligen en vecka efter insjuknandet."
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
        "Många har dött i sjukdomen, främst äldre och sjuka. WHO uppskattar idag att dödligheten är 1–2 % av de redan smittade men uppskattningarna är fortfarande osäkra. Det kan finnas fler fall än vad som har rapporterats vilket kan innebära att dödligheten kommer att sjunka. Det är mycket ovanligt att unga friska människor dör, men äldre och sjuka är en riskgrupp som dör mycket oftare. Enligt den Brittiska regeringens expertråd kan dödligheten bland människor över 80 år vara över 8%, medans den bland människor yngre än 50 år är mindre än 0.5%. Bland dem som behöver läggas in på sjukhus uppskattar expertrådet att det kan vara 12% som dör."
      ],
      "set": {
        "classifiedIntentName": "question: Hur stor är dödligheten till följd av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Många har dött i sjukdomen, främst äldre och sjuka. WHO uppskattar idag att dödligheten är 1–2 % av de redan smittade men uppskattningarna är fortfarande osäkra. Det kan finnas fler fall än vad som har rapporterats vilket kan innebära att dödligheten kommer att sjunka. Det är mycket ovanligt att unga friska människor dör, men äldre och sjuka är en riskgrupp som dör mycket oftare. Enligt den Brittiska regeringens expertråd kan dödligheten bland människor över 80 år vara över 8%, medans den bland människor yngre än 50 år är mindre än 0.5%. Bland dem som behöver läggas in på sjukhus uppskattar expertrådet att det kan vara 12% som dör."
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
        "För närvarande finns det begränsad information om covid-19 och graviditet. Vi rekommenderar att gravida kvinnor vidtar samma försiktighetsåtgärder som med alla smittsamma sjukdomar."
      ],
      "set": {
        "classifiedIntentName": "question: Ingår gravida i riskgrupperna?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "För närvarande finns det begränsad information om covid-19 och graviditet. Vi rekommenderar att gravida kvinnor vidtar samma försiktighetsåtgärder som med alla smittsamma sjukdomar."
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
        "Folkhälsomyndighetens bedömning av forskningen är att viruset smittar när man är sjuk och i samband med insjuknandet, och inte under inkubationstiden. De som har varit utsatta för smitta ska vara uppmärksamma på tidiga sjukdomstecken, eftersom du smittar så fort du har även milda symtom. "
      ],
      "set": {
        "classifiedIntentName": "question: Smittar covid-19 under inkubationstiden?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Folkhälsomyndighetens bedömning av forskningen är att viruset smittar när man är sjuk och i samband med insjuknandet, och inte under inkubationstiden. De som har varit utsatta för smitta ska vara uppmärksamma på tidiga sjukdomstecken, eftersom du smittar så fort du har även milda symtom. "
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
        "Enligt Folkhälsomyndigheten drivs smittspridningen av personer med symptom på sjukdom, men en del som är sjuka får bara milda symptom. Man kan därför bli smittad av någon som inte känner sig sjuk, men som har t. ex. mild hosta. "
      ],
      "set": {
        "classifiedIntentName": "question: Kan man bli smittad av en person som har covid-19 men som inte har några symtom?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Enligt Folkhälsomyndigheten drivs smittspridningen av personer med symptom på sjukdom, men en del som är sjuka får bara milda symptom. Man kan därför bli smittad av någon som inte känner sig sjuk, men som har t. ex. mild hosta. "
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
        "Regeringen beslutade den 11:e mars att stoppa alla allmänna sammankomster och offentliga tillställningar med fler än 500 personer. Syftet är att förhindra att ett stort antal människor från olika ställen kommer och samlas på en och samma plats. Även mindre arrangemang ska följa Folkhälsomyndighetens riskbedömning och ställas in om de inte kan göras säkra. Skälet till att många mindre evenemang ställs in är att arrangörer vill ta sitt ansvar i att minska smittspridningen."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för stora evenemang? regulations in Sweden",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Regeringen beslutade den 11:e mars att stoppa alla allmänna sammankomster och offentliga tillställningar med fler än 500 personer. Syftet är att förhindra att ett stort antal människor från olika ställen kommer och samlas på en och samma plats. Även mindre arrangemang ska följa Folkhälsomyndighetens riskbedömning och ställas in om de inte kan göras säkra. Skälet till att många mindre evenemang ställs in är att arrangörer vill ta sitt ansvar i att minska smittspridningen."
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
        "Den omfattande spridningen av det nya coronaviruset gör att situationen för resenärer och pendlare snabbt kan förändras. I Stockholm gäller reducerad trafik i kollektivtrafiken. Håll minst 1 meters avstånd till andra resenärer.  Folkhälsomyndighetens råd är därför att du jobbar hemifrån i den mån det är möjligt, i samråd med din arbetsgivare. Syftet är att minska hastigheten i smittspridningen och att hålla nere antalet personer som behöver sjukhusvård."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för kollektivtrafik, arbetsplatser och skolor?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Den omfattande spridningen av det nya coronaviruset gör att situationen för resenärer och pendlare snabbt kan förändras. I Stockholm gäller reducerad trafik i kollektivtrafiken. Håll minst 1 meters avstånd till andra resenärer.  Folkhälsomyndighetens råd är därför att du jobbar hemifrån i den mån det är möjligt, i samråd med din arbetsgivare. Syftet är att minska hastigheten i smittspridningen och att hålla nere antalet personer som behöver sjukhusvård."
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
        "Det är Utrikesdepartementet (UD) som utfärdar reseavrådan till andra länder. Sedan i början på mars avråder UD från icke nödvändiga resor till alla länder. Besök deras webbplats för att få den senaste informationen. Det är dessutom många länder som inte tar emot inresande just nu för att begränsa smittspridningen."
      ],
      "set": {
        "classifiedIntentName": "question: Vilka råd finns det för resa till andra länder?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det är Utrikesdepartementet (UD) som utfärdar reseavrådan till andra länder. Sedan i början på mars avråder UD från icke nödvändiga resor till alla länder. Besök deras webbplats för att få den senaste informationen. Det är dessutom många länder som inte tar emot inresande just nu för att begränsa smittspridningen."
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
        "Om du inte har hosta, andningssvårigheter eller feber kan du leva precis som vanligt. Däremot är det jätteviktigt att stanna hemma om man känner sig sjuk."
      ],
      "set": {
        "classifiedIntentName": "question: Behöver jag vidta några åtgärder även om jag känner mig frisk efter resa från drabbade länder?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Om du inte har hosta, andningssvårigheter eller feber kan du leva precis som vanligt. Däremot är det jätteviktigt att stanna hemma om man känner sig sjuk."
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
        "Det är mycket viktigt att du stannar hemma om du känner dig sjuk. Klarar du dig inte med egenvård i hemmet ska du ringa 1177 för sjukvårdsrådgivning. Besök inte någon vårdinrättning, utan kontakta alltid 1177 Vårdguiden först."
      ],
      "set": {
        "classifiedIntentName": "question: Jag har nyligen varit i ett land där smittspridning pågår och nu har jag hosta och feber. Vad ska jag göra?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det är mycket viktigt att du stannar hemma om du känner dig sjuk. Klarar du dig inte med egenvård i hemmet ska du ringa 1177 för sjukvårdsrådgivning. Besök inte någon vårdinrättning, utan kontakta alltid 1177 Vårdguiden först."
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
        "Den svenska beredskapen anses vara mycket bra. Hälso- och sjukvården samt landets smittskyddsenheter har sedan lång tid tillbaka en hög medvetenhet. Det finns rutiner för hur både misstänkta och bekräftade fall ska tas omhand på ett bra och säkert sätt. Privata aktörer är också medvetna om beredskap och krishantering, och det finns möjlighet till utökade provanalyser på andra laboratorier än Folkhälsomyndigheten vid behov."
      ],
      "set": {
        "classifiedIntentName": "question: Hur ser Sveriges beredskap ut?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Den svenska beredskapen anses vara mycket bra. Hälso- och sjukvården samt landets smittskyddsenheter har sedan lång tid tillbaka en hög medvetenhet. Det finns rutiner för hur både misstänkta och bekräftade fall ska tas omhand på ett bra och säkert sätt. Privata aktörer är också medvetna om beredskap och krishantering, och det finns möjlighet till utökade provanalyser på andra laboratorier än Folkhälsomyndigheten vid behov."
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
        "Erfarenheter från influensasäsonger med många smittade som behöver vård, visar att påfrestning på sjukvården då uppstår med behov av omprioriteringar och samarbeten inom och mellan regioner. Liknande situation kan uppstå om covid-19 får omfattande spridning i befolkningen. Sjukvårdens pandemiplanering kan då behöva användas."
      ],
      "set": {
        "classifiedIntentName": "question: Om många personer som blir smittade av CORONA skulle behöva sjukhusvård, hur kommer sjukvården att hantera det?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Erfarenheter från influensasäsonger med många smittade som behöver vård, visar att påfrestning på sjukvården då uppstår med behov av omprioriteringar och samarbeten inom och mellan regioner. Liknande situation kan uppstå om covid-19 får omfattande spridning i befolkningen. Sjukvårdens pandemiplanering kan då behöva användas."
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
        "Eftersom inget av de utbrott vi hittills sett av coronaviruset har haft koppling till skolor eller barn anses det osannolikt att friska barn skulle orsaka smittspridning."
      ],
      "set": {
        "classifiedIntentName": "question: Varför stänger ni inte av skolbarn som har varit i drabbade områden?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom inget av de utbrott vi hittills sett av coronaviruset har haft koppling till skolor eller barn anses det osannolikt att friska barn skulle orsaka smittspridning."
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
        "Eftersom covid-19 numera är klassad som samhällsfarlig, kan smittskyddsläkaren i respektive sjukvårdsregion ta beslut om karantän för friska personer. Om en mindre ingripande åtgärd, t.ex. förhållningsregler, kan få samma effekt ska den väljas istället."
      ],
      "set": {
        "classifiedIntentName": "question: kommer det bli karantän i sverige",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom covid-19 numera är klassad som samhällsfarlig, kan smittskyddsläkaren i respektive sjukvårdsregion ta beslut om karantän för friska personer. Om en mindre ingripande åtgärd, t.ex. förhållningsregler, kan få samma effekt ska den väljas istället."
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
        "Det finns inget vaccin och i nuläget finns det inget specifikt läkemedel mot covid-19. Internationella studier av olika typer av läkemedelsbehandlingar pågår och forskning sker kring utveckling av ett vaccin."
      ],
      "set": {
        "classifiedIntentName": "question: Kan man vaccinera",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det finns inget vaccin och i nuläget finns det inget specifikt läkemedel mot covid-19. Internationella studier av olika typer av läkemedelsbehandlingar pågår och forskning sker kring utveckling av ett vaccin."
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
        "Det finns ett stort antal virus som tillhör coronavirusfamiljen, men endast sju av dessa kan smitta och ge upphov till sjukdom hos människor. I slutet av 2019 upptäcktes ett nytt coronavirus i Kina som kan smitta människor, detta nya virus ger upphov till sjukdomen covid-19."
      ],
      "set": {
        "classifiedIntentName": "question: Vad är corona-viruset?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det finns ett stort antal virus som tillhör coronavirusfamiljen, men endast sju av dessa kan smitta och ge upphov till sjukdom hos människor. I slutet av 2019 upptäcktes ett nytt coronavirus i Kina som kan smitta människor, detta nya virus ger upphov till sjukdomen covid-19."
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
        "Covid-19 står för coronavirus disease 2019, och är det officiella namnet på sjukdomen som orsakas av det nya coronaviruset."
      ],
      "set": {
        "classifiedIntentName": "question: Vad är covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Covid-19 står för coronavirus disease 2019, och är det officiella namnet på sjukdomen som orsakas av det nya coronaviruset."
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
        "Coronaviruset är helt nytt vilket gör det svårt att jämföra med influensan som är återkommande. De är liknande i symptom men covid-19 sprider sig otroligt mycket snabbare då ingen har utvecklat immunitet ännu."
      ],
      "set": {
        "classifiedIntentName": "question: vad skiljer covid-19 från säsongsinfluensa?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Coronaviruset är helt nytt vilket gör det svårt att jämföra med influensan som är återkommande. De är liknande i symptom men covid-19 sprider sig otroligt mycket snabbare då ingen har utvecklat immunitet ännu."
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
        "Nej, munskydd skyddar inte den som är frisk mot covid-19. Däremot kan den som är sjuk till viss del skydda sin omgivning från att viruset sprids vid till exempel hosta och nysningar."
      ],
      "set": {
        "classifiedIntentName": "question: Skyddar munskydd mot Covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Nej, munskydd skyddar inte den som är frisk mot covid-19. Däremot kan den som är sjuk till viss del skydda sin omgivning från att viruset sprids vid till exempel hosta och nysningar."
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
        "I nuläget finns det inget vaccin eller speciellt läkemedel mot covid-19. Internationella studier av olika typer av läkemedelsbehandlingar pågår och forskning sker kring utveckling av ett vaccin."
      ],
      "set": {
        "classifiedIntentName": "question: Finns det vaccin eller behandling mot covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "I nuläget finns det inget vaccin eller speciellt läkemedel mot covid-19. Internationella studier av olika typer av läkemedelsbehandlingar pågår och forskning sker kring utveckling av ett vaccin."
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
        "Majoriteten av de som smittas blir friska förutom en mycket liten andel personer som kan bli allvarligt sjuka, varav de flesta tillhör någon riskgrupp."
      ],
      "set": {
        "classifiedIntentName": "question: Hur många blir friska från covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Majoriteten av de som smittas blir friska förutom en mycket liten andel personer som kan bli allvarligt sjuka, varav de flesta tillhör någon riskgrupp."
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
        "I ett hushåll där någon smittats av det nya coronaviruset räcker det att man städar så som man gör i normala fall. Det är viktigt att tvätta händerna noga när man har städat eller hanterat sopor."
      ],
      "set": {
        "classifiedIntentName": "question: Behöver jag städa eller hantera mina sopor på något särskilt sätt?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "I ett hushåll där någon smittats av det nya coronaviruset räcker det att man städar så som man gör i normala fall. Det är viktigt att tvätta händerna noga när man har städat eller hanterat sopor."
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
        "Det finns inga vetenskapliga studier som visar att stängning av skolor får någon större betydelse. Det finns heller inte några uppgifter som pekar på någon större spridning av covid-19 i skolor någonstans i världen. Stängda skolor skulle tvinga många inom hälso- och sjukvården att stanna hemma med sina barn, och känsliga grupper som mor- och farföräldrar skulle hos vissa familjer behöva ta hand om barnen."
      ],
      "set": {
        "classifiedIntentName": "question: Varför stänger vi inte skolorna i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det finns inga vetenskapliga studier som visar att stängning av skolor får någon större betydelse. Det finns heller inte några uppgifter som pekar på någon större spridning av covid-19 i skolor någonstans i världen. Stängda skolor skulle tvinga många inom hälso- och sjukvården att stanna hemma med sina barn, och känsliga grupper som mor- och farföräldrar skulle hos vissa familjer behöva ta hand om barnen."
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
        "Det är ännu inte klarlagt hur länge viruset kan överleva utanför kroppen. Forskningsstudier som utförts på närbesläktade coronavirus visar att de kan överleva flera dagar på ytor och föremål men för detta krävs särskilda förhållanden, så som rätt temperatur, solljus och luftfuktighet."
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge kan viruset som orsakar covid-19 överleva utanför människokroppen?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det är ännu inte klarlagt hur länge viruset kan överleva utanför kroppen. Forskningsstudier som utförts på närbesläktade coronavirus visar att de kan överleva flera dagar på ytor och föremål men för detta krävs särskilda förhållanden, så som rätt temperatur, solljus och luftfuktighet."
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
        "Kunskap från liknande tidigare utbrott visar att denna typ av virus smittar från sjuka människor, och inte genom paket och postförsändelser."
      ],
      "set": {
        "classifiedIntentName": "question: Kan viruset smitta till människa via post och paket?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Kunskap från liknande tidigare utbrott visar att denna typ av virus smittar från sjuka människor, och inte genom paket och postförsändelser."
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
        "Det är troligt att en djurkälla från en djurmarknad i Kina orsakade några av de första rapporterade mänskliga infektionerna. Det finns inga uppgifter idag om att covid-19 kan smitta från människa till djur."
      ],
      "set": {
        "classifiedIntentName": "question: Kan covid-19 smitta mellan djur och människa och kan mitt husdjur smittas av viruset?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det är troligt att en djurkälla från en djurmarknad i Kina orsakade några av de första rapporterade mänskliga infektionerna. Det finns inga uppgifter idag om att covid-19 kan smitta från människa till djur."
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
        "Covid-19 är nu en pandemi, vilket innebär att den finns eller kommer finnas i alla världsdelar. Sannolikt kommer covid-19 att drabba alla världens länder."
      ],
      "set": {
        "classifiedIntentName": "question: I vilka länder pågår det smittspridning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Covid-19 är nu en pandemi, vilket innebär att den finns eller kommer finnas i alla världsdelar. Sannolikt kommer covid-19 att drabba alla världens länder."
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
        "I Region Stockholm og i Västra Götalandsregionen ser vi nu tecken på samhällsspridning. Det innebär att du ska försöka låta bli att träffa andra människor, och inte gå till jobbet eller skolan - även om du bara känner dig lite sjuk. Stanna hemma så länge du känner dig sjuk så du inte riskerar att smitta andra."
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär det att vi har en samhällsspridning av covid-19 i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "I Region Stockholm og i Västra Götalandsregionen ser vi nu tecken på samhällsspridning. Det innebär att du ska försöka låta bli att träffa andra människor, och inte gå till jobbet eller skolan - även om du bara känner dig lite sjuk. Stanna hemma så länge du känner dig sjuk så du inte riskerar att smitta andra."
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
        "Smittspårning kan ha en avgörande betydelse för att förhindra smittspridning och minska risken för större utbrott. Den behandlande läkaren ska ta reda på hur en smittad person har blivit smittad, och vem eller vilka andra som kan vara smittade eller har blivit utsatta för smitta."
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär smittspårning av personer?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Smittspårning kan ha en avgörande betydelse för att förhindra smittspridning och minska risken för större utbrott. Den behandlande läkaren ska ta reda på hur en smittad person har blivit smittad, och vem eller vilka andra som kan vara smittade eller har blivit utsatta för smitta."
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
        "Större evenemang riskerar att öka smittspridningen eftersom de lockar till sig åskådare från olika delar av landet. Folkhälsomyndigheten har därför bedömt att gränsen bör gå vid 500 personer. Norge valde samma gräns."
      ],
      "set": {
        "classifiedIntentName": "question: Varför just 500 personer?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Större evenemang riskerar att öka smittspridningen eftersom de lockar till sig åskådare från olika delar av landet. Folkhälsomyndigheten har därför bedömt att gränsen bör gå vid 500 personer. Norge valde samma gräns."
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
        "Folkhälsomyndigheten baserar sina rekommendationer om hälsokontroller bland annat på information från WHO och ECDC. Erfarenhet från SARS-epidemin visar att hälsokontroller på flygplatser inte är ett effektivt sätt att begränsa smittspridningen. Det är även resurskrävande, och fångar enbart upp smittade personer som redan har symtom."
      ],
      "set": {
        "classifiedIntentName": "question: Skulle hälsokontroller av resenärer med flyg från länder där smittspridning pågår kunna begränsa smittspridningen i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Folkhälsomyndigheten baserar sina rekommendationer om hälsokontroller bland annat på information från WHO och ECDC. Erfarenhet från SARS-epidemin visar att hälsokontroller på flygplatser inte är ett effektivt sätt att begränsa smittspridningen. Det är även resurskrävande, och fångar enbart upp smittade personer som redan har symtom."
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
        "Eftersom det nya coronaviruset är klassat som samhällsfarligt kan friska personer sättas i karantän. Beslutet tas av smittskyddsläkaren i respektive sjukvårdsregion, och det är noga reglerad i smittskyddslagen. Karantän kan innebära att placeras i hemmet, en avgränsad del av en byggnad eller ett område."
      ],
      "set": {
        "classifiedIntentName": "question: Vilka regler gäller för att sätta någon i karantän i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom det nya coronaviruset är klassat som samhällsfarligt kan friska personer sättas i karantän. Beslutet tas av smittskyddsläkaren i respektive sjukvårdsregion, och det är noga reglerad i smittskyddslagen. Karantän kan innebära att placeras i hemmet, en avgränsad del av en byggnad eller ett område."
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
        "Folkhälsomyndigheten (FHM) ska ta fram och förmedla vetenskapligt grundad kunskap som förebygger ohälsa och sjukdomar, och som ger samhället stöd i arbetet mot hälsohot. FHM följer händelseutvecklingen av covid-19 noga, och gör riskbedömningar samt bedömer hur utbrottet utvecklas. Sjukvård, regionala smittskyddsenheter och andra aktörer får information om det aktuella läget, och FHM tar ställning till vilka åtgärdar som är relevanta att genomföra."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gör Folkhälsomyndigheten?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Folkhälsomyndigheten (FHM) ska ta fram och förmedla vetenskapligt grundad kunskap som förebygger ohälsa och sjukdomar, och som ger samhället stöd i arbetet mot hälsohot. FHM följer händelseutvecklingen av covid-19 noga, och gör riskbedömningar samt bedömer hur utbrottet utvecklas. Sjukvård, regionala smittskyddsenheter och andra aktörer får information om det aktuella läget, och FHM tar ställning till vilka åtgärdar som är relevanta att genomföra."
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
        "En pandemi innebär en omfattande spridning till alla världens kontinenter av en helt ny typ av smittsam sjukdom. Vid en pandemi kommer sjukdomen med stor sannolikhet påverka stora delar av vårt samhälle och världens befolkning. Det är WHO som deklarerar om en smittspridning bedöms vara en pandemi, och detta gjordes den 11:e mars 2020."
      ],
      "set": {
        "classifiedIntentName": "question: Vad är en pandemi?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "En pandemi innebär en omfattande spridning till alla världens kontinenter av en helt ny typ av smittsam sjukdom. Vid en pandemi kommer sjukdomen med stor sannolikhet påverka stora delar av vårt samhälle och världens befolkning. Det är WHO som deklarerar om en smittspridning bedöms vara en pandemi, och detta gjordes den 11:e mars 2020."
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
        "Att klassa smittan som allmänfarlig och samhällsfarlig stärker den svenska beredskapen vid samhällsspridning av covid-19, eftersom det gör det möjligt att vidta de förebyggande åtgärder som är relevanta för att hindra en spridning av smitta i samhället. För allmänfarlig och samhällsfarlig smitta finns möjligheter att besluta om åtgärder som exempelvis karantän, isolering, hälsoundersökningar vid inresa och avspärrningar av områden."
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär det att covid-19 klassas som allmänfarlig och samhällsfarlig sjukdom enligt smittskyddslagen?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Att klassa smittan som allmänfarlig och samhällsfarlig stärker den svenska beredskapen vid samhällsspridning av covid-19, eftersom det gör det möjligt att vidta de förebyggande åtgärder som är relevanta för att hindra en spridning av smitta i samhället. För allmänfarlig och samhällsfarlig smitta finns möjligheter att besluta om åtgärder som exempelvis karantän, isolering, hälsoundersökningar vid inresa och avspärrningar av områden."
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
        "Vid droppsmitta sprids smittan via droppar i luften, t.ex. när någon antingen hostar, nyser eller kräks. Dessa droppar når som regel inte längre än någon meter. Luftburen smitta rör sig om små, intorkade droppar som håller sig kvar i luften, färdas långa sträckor och smittar den som andas in dem."
      ],
      "set": {
        "classifiedIntentName": "question: vad skiljer en droppsmitta från en luftburen smitta?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Vid droppsmitta sprids smittan via droppar i luften, t.ex. när någon antingen hostar, nyser eller kräks. Dessa droppar når som regel inte längre än någon meter. Luftburen smitta rör sig om små, intorkade droppar som håller sig kvar i luften, färdas långa sträckor och smittar den som andas in dem."
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
        "Direkt kontaktsmitta kan ske vid direkt fysisk kontakt mellan en smittbärare och en annan person. Vid indirekt kontaktsmitta överförs smittämnet istället via mellanled från en person till en annan. Kontaktsmitta är den vanligaste smittvägen i vården."
      ],
      "set": {
        "classifiedIntentName": "question: vad är direkt och indirekt kontaktsmitta?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Direkt kontaktsmitta kan ske vid direkt fysisk kontakt mellan en smittbärare och en annan person. Vid indirekt kontaktsmitta överförs smittämnet istället via mellanled från en person till en annan. Kontaktsmitta är den vanligaste smittvägen i vården."
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
        "Andningsskydd används inom sjukvården där det finns hög smittrisk. Ofta har de inbyggda filter som filtrerar bort smittämnen och andra partiklar från luften man andas in. För att andningsskyddet ska ge avsett skydd måste det anpassas till den som ska använda det plus att personen behöver träning i hur det ska användas."
      ],
      "set": {
        "classifiedIntentName": "question: Vad är ett andningsskydd?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Andningsskydd används inom sjukvården där det finns hög smittrisk. Ofta har de inbyggda filter som filtrerar bort smittämnen och andra partiklar från luften man andas in. För att andningsskyddet ska ge avsett skydd måste det anpassas till den som ska använda det plus att personen behöver träning i hur det ska användas."
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
        "Om patienten blir provtagen innan sjukdomen brutit ut kan detta hända. Negativa provsvar under inkubationstiden utesluter alltså inte att man är smittad. Om fortsatt misstanke om covid-19 kvarstår bör provtagning upprepas när eventuella symtom utvecklats."
      ],
      "set": {
        "classifiedIntentName": "question: Hur kan ett provsvar som först blev negativt och visar att man är frisk         vid en andra provtagning ge ett positivt svar         att man är sjuk och bär på smittan?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Om patienten blir provtagen innan sjukdomen brutit ut kan detta hända. Negativa provsvar under inkubationstiden utesluter alltså inte att man är smittad. Om fortsatt misstanke om covid-19 kvarstår bör provtagning upprepas när eventuella symtom utvecklats."
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
        "Enligt Folkhälsomyndigheten drivs smittspridningen av personer med symtom på sjukdom, men en del som är sjuka får bara milda symtom. Man kan därför bli smittad av någon som inte känner sig sjuk, men som har t. ex. mild hosta. Om man varit sjuk men inte vet om man haft coronavirus, så ska man vara hemma tills man är frisk och sedan ytterligare minst två dagar. "
      ],
      "set": {
        "classifiedIntentName": "question: hur länge smittar det",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Enligt Folkhälsomyndigheten drivs smittspridningen av personer med symtom på sjukdom, men en del som är sjuka får bara milda symtom. Man kan därför bli smittad av någon som inte känner sig sjuk, men som har t. ex. mild hosta. Om man varit sjuk men inte vet om man haft coronavirus, så ska man vara hemma tills man är frisk och sedan ytterligare minst två dagar. "
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
        "Social distansering syftar till att förhindra sjuka människor från att komma i nära kontakt med friska människor för att minska möjligheterna till överföring av sjukdomar. Just nu är målet med social distansering att bromsa utbrottet för att minska risken för infektion bland högrisk-grupper samt minska belastningen på sjukvårdssystem och arbetstagare."
      ],
      "set": {
        "classifiedIntentName": "question: vad betyder social distansiering",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Social distansering syftar till att förhindra sjuka människor från att komma i nära kontakt med friska människor för att minska möjligheterna till överföring av sjukdomar. Just nu är målet med social distansering att bromsa utbrottet för att minska risken för infektion bland högrisk-grupper samt minska belastningen på sjukvårdssystem och arbetstagare."
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
        "Undvik offentliga, folktäta platser som t.ex. shopping-centrum, bio eller arenor. Håll avstånd (ungefär 2 meter, eller 6 fot) från andra om möjligt."
      ],
      "set": {
        "classifiedIntentName": "question: Hur kan jag utöva social distansering?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Undvik offentliga, folktäta platser som t.ex. shopping-centrum, bio eller arenor. Håll avstånd (ungefär 2 meter, eller 6 fot) från andra om möjligt."
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
        "Tvätta händerna regelbundet och ordentligt med tvål och vatten minst 20 sekunder. Använd alcogel om tvål och vatten inte finns tillgängligt. Vidrör varken ögon, näsa eller mun med otvättade händer. Rengör och desinfektera ytor och saker som människor vanligtvis rör. Hosta och nys i böjd armbåge eller näsduk. Se alltid till att slänga näsduken i soporna."
      ],
      "set": {
        "classifiedIntentName": "question: Vad mer kan jag göra för att förhindra spridning av viruset?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Tvätta händerna regelbundet och ordentligt med tvål och vatten minst 20 sekunder. Använd alcogel om tvål och vatten inte finns tillgängligt. Vidrör varken ögon, näsa eller mun med otvättade händer. Rengör och desinfektera ytor och saker som människor vanligtvis rör. Hosta och nys i böjd armbåge eller näsduk. Se alltid till att slänga näsduken i soporna."
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
        "För närvarande är det inte känt om spridningen av Covid-19 kommer att minska när vädret blir varmare. Utredningar gällande överförbarhet, svårighetsgrad och andra funktioner förknippade med Covid-19 pågår just nu. "
      ],
      "set": {
        "classifiedIntentName": "question: Kan varmare väder stoppa virusutbrottet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "För närvarande är det inte känt om spridningen av Covid-19 kommer att minska när vädret blir varmare. Utredningar gällande överförbarhet, svårighetsgrad och andra funktioner förknippade med Covid-19 pågår just nu. "
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
        "Från och med den 19 mars och 30 dagar framåt kommer icke nödvändiga resor till Sverige från länder utanför Europa att stoppas. Detta efter beslut från den svenska regeringen i ett försök att minska spridningen av Covid-19. Vid behov kan beslutet komma att förlängas."
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär inreseförbudet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Från och med den 19 mars och 30 dagar framåt kommer icke nödvändiga resor till Sverige från länder utanför Europa att stoppas. Detta efter beslut från den svenska regeringen i ett försök att minska spridningen av Covid-19. Vid behov kan beslutet komma att förlängas."
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
        "Inreseförbudet gäller för alla utländska medborgare som försöker resa in i Sverige från ett land som inte ingår i Schengensamarbetet samt Schweiz. Undantag görs för svenska medborgare och andra personer som är bosatta med eget hem i Sverige samt diplomater och personer som är i behov av internationellt skydd. Även personer som utför nödvändiga funktioner i Sverige, t.ex hälso- och sjukvårdspersonal som transporterar varor till Sverige undantas från inreseförbudet. "
      ],
      "set": {
        "classifiedIntentName": "question: Vilka gäller inreseförbudet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Inreseförbudet gäller för alla utländska medborgare som försöker resa in i Sverige från ett land som inte ingår i Schengensamarbetet samt Schweiz. Undantag görs för svenska medborgare och andra personer som är bosatta med eget hem i Sverige samt diplomater och personer som är i behov av internationellt skydd. Även personer som utför nödvändiga funktioner i Sverige, t.ex hälso- och sjukvårdspersonal som transporterar varor till Sverige undantas från inreseförbudet. "
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
        "Just nu finns det tillverkare som marknadsför självtester för covid-19. I nuläget är det dock inte klart hur exakta eller känsliga dessa tester är. Folkhälsomyndigheten rekommenderar därför att dessa självtester inte används och hänvisar istället till sjukvårdens egna tester för en mer exakt och pålitlig sjukdomsbild."
      ],
      "set": {
        "classifiedIntentName": "question: Finns det självtester för CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Just nu finns det tillverkare som marknadsför självtester för covid-19. I nuläget är det dock inte klart hur exakta eller känsliga dessa tester är. Folkhälsomyndigheten rekommenderar därför att dessa självtester inte används och hänvisar istället till sjukvårdens egna tester för en mer exakt och pålitlig sjukdomsbild."
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
        "För att bromsa spridningen av covid-19 rekommenderar Folkhälsomyndigheten från den 17 mars 2020 att undervisningen i gymnasieskolor, universitet, högskolor, yrkeshögskolor och komvux ska ske på distans."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller angående att läsa på distans?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "För att bromsa spridningen av covid-19 rekommenderar Folkhälsomyndigheten från den 17 mars 2020 att undervisningen i gymnasieskolor, universitet, högskolor, yrkeshögskolor och komvux ska ske på distans."
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
        "Nej. Folkhälsomyndigheten rekommendationer gällande distansundervisning gäller endast från gymnasiet och uppåt. Detta för att gymnasieskolor, universitet och högskolor samlar elever och studenter från upptagningsområden som är mycket större än grundskolans. Gymnasieelever och studenter är inte heller i behov av omsorg, till skillnad från barn i grundskolan."
      ],
      "set": {
        "classifiedIntentName": "question: Behöver elever i grundskolan också läsa på distans?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Nej. Folkhälsomyndigheten rekommendationer gällande distansundervisning gäller endast från gymnasiet och uppåt. Detta för att gymnasieskolor, universitet och högskolor samlar elever och studenter från upptagningsområden som är mycket större än grundskolans. Gymnasieelever och studenter är inte heller i behov av omsorg, till skillnad från barn i grundskolan."
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
        "Folkhälsomyndigheten uppmanar personer som är 70 år och äldre att hålla sig hemma och begränsa närmare kontakt med andra de kommande veckorna. Äldre bör även undvika folksamlingar i exempelvis kollektivtrafik, affärer eller offentliga lokaler. Promenader utomhus är ok, bara inte i grupp. Be om hjälp för att göra ärenden som exempelvis handla mat ."
      ],
      "set": {
        "classifiedIntentName": "question: Jag är 70 år, hur ska jag bete mig nu när det pågår smittspridning ute i samhället? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Folkhälsomyndigheten uppmanar personer som är 70 år och äldre att hålla sig hemma och begränsa närmare kontakt med andra de kommande veckorna. Äldre bör även undvika folksamlingar i exempelvis kollektivtrafik, affärer eller offentliga lokaler. Promenader utomhus är ok, bara inte i grupp. Be om hjälp för att göra ärenden som exempelvis handla mat ."
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
        "Det är viktigt att skydda de äldre från smitta. Ha därför ingen närkontakt med personer som är 70 år och äldre om det inte är helt nödvändigt. Stanna hemma när du känner dig sjuk, även om du bara är lite förkyld. Covid-19 kan ge lindriga symtom som liknar en förkylning, så det är viktigt att vara vaksam."
      ],
      "set": {
        "classifiedIntentName": "question: Nu när det pågår samhällsspridning av det nya coronaviruset, hur ska vi ta hand om och skydda personer som är 70 år och äldre?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det är viktigt att skydda de äldre från smitta. Ha därför ingen närkontakt med personer som är 70 år och äldre om det inte är helt nödvändigt. Stanna hemma när du känner dig sjuk, även om du bara är lite förkyld. Covid-19 kan ge lindriga symtom som liknar en förkylning, så det är viktigt att vara vaksam."
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
        "Personer som är i behov av vård på sjukhus, alternativt personal inom sjukvård och äldreomsorg med misstänkt smitta av det nya coronaviruset. Alla som är sjuka i förkylning eller influensaliknande symtom ska vara hemma för att inte riskera att sprida smitta vidare till andra."
      ],
      "set": {
        "classifiedIntentName": "question: Vilka personer bör testas för det nya coronaviruset?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Personer som är i behov av vård på sjukhus, alternativt personal inom sjukvård och äldreomsorg med misstänkt smitta av det nya coronaviruset. Alla som är sjuka i förkylning eller influensaliknande symtom ska vara hemma för att inte riskera att sprida smitta vidare till andra."
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
        "Så länge andra familjemedlemmar inte har symtom kan de göra som vanligt. Det är dock väldigt viktigt att vara uppmärksam på symptom och stanna hemma vid första tecken på sjukdom."
      ],
      "set": {
        "classifiedIntentName": "question: Om en person i familjen är sjuk - måste alla stanna hemma då? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Så länge andra familjemedlemmar inte har symtom kan de göra som vanligt. Det är dock väldigt viktigt att vara uppmärksam på symptom och stanna hemma vid första tecken på sjukdom."
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
        "Än så länge pratar jag bara svenska, men det kan mycket väl hända att jag lär mig fler språk i framtiden."
      ],
      "set": {
        "classifiedIntentName": "question: Talar du engelska?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Än så länge pratar jag bara svenska, men det kan mycket väl hända att jag lär mig fler språk i framtiden."
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
        "Om du har mycket svårt att andas ska du ringa 112."
      ],
      "set": {
        "classifiedIntentName": "question: Jag kan inte andas",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Om du har mycket svårt att andas ska du ringa 112."
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
        "Eftersom frågan inte täcks av någon av våra källor kan vi tyvärr inte svara på den i nuläget."
      ],
      "set": {
        "classifiedIntentName": "question: Vad är det senaste?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte täcks av någon av våra källor kan vi tyvärr inte svara på den i nuläget."
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
        "Mitt namn är Coronaguiden och jag kan svara på frågor om det nya coronaviruset."
      ],
      "set": {
        "classifiedIntentName": "question: Vad heter du?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Mitt namn är Coronaguiden och jag kan svara på frågor om det nya coronaviruset."
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
        "De flesta insjuknar ungefär 5 dagar efter smittotillfället, men inkubationstiden kan variera mellan 2 och 14 dagar."
      ],
      "set": {
        "classifiedIntentName": "question: Hur lång är inkubationstiden?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "De flesta insjuknar ungefär 5 dagar efter smittotillfället, men inkubationstiden kan variera mellan 2 och 14 dagar."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  }
]