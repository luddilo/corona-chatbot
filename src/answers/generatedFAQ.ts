import { UserTurn, Entity } from "narratory"

// Generated at Thursday, April 2nd 2020, 10:42:29 am

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
        "corona",
        "viruset"
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

const PERS_PRON : Entity = {
  "name": "PERS_PRON",
  "enums": [
    {
      "name": "PERS_PRON",
      "alts": [
        "jag",
        "man",
        "en",
        "vi",
        "du",
        "ni",
        "han",
        "hon"
      ]
    }
  ]
}

const REF_PRON : Entity = {
  "name": "REF_PRON",
  "enums": [
    {
      "name": "REF_PRON",
      "alts": [
        "mig",
        "sig",
        "oss",
        "dig"
      ]
    }
  ]
}

const POS_PRON : Entity = {
  "name": "POS_PRON",
  "enums": [
    {
      "name": "POS_PRON",
      "alts": [
        "min",
        "mitt ",
        "mina",
        "vår",
        "vårt",
        "våra",
        "din",
        "ditt ",
        "dina",
        "er",
        "ert",
        "era",
        "sin",
        "sitt ",
        "sina"
      ]
    }
  ]
}

const AUX : Entity = {
  "name": "AUX",
  "enums": [
    {
      "name": "AUX",
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

const ACTIVITY : Entity = {
  "name": "ACTIVITY",
  "enums": [
    {
      "name": "ACTIVITY",
      "alts": [
        "gå ut",
        "handla",
        "gå och handla",
        "åka buss",
        "ta tunnelbana",
        "åka tåg",
        "ta tåget",
        "åka tunnelbana",
        "träffa vänner",
        "träffa folk",
        "träffa familj",
        "besöka vänner",
        "besöka familj",
        "ta flyget",
        "flyga",
        "fika",
        "jobba"
      ]
    }
  ]
}

export const simpleQuestionAnswers : UserTurn[] = [
  {
    "intent": {
      "name": "question: Vad är symtomen av CORONA?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Vad är symtomen av _CORONA?",
        "vad är symtomen",
        "hur märker _PERS_PRON om _PERS_PRON har _CORONA",
        "hur mår _PERS_PRON om _PERS_PRON har _CORONA",
        "vad innebär _CORONA",
        "vad är symtom för _CORONA",
        "vad är symtomen för _CORONA",
        "hur vet _PERS_PRON om _PERS_PRON har _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "De vanligaste symtomen för covid-19 är feber och hosta. Även andningsbesvär, snuva, halsont, huvudvärk, illamående, muskel- och ledvärk är vanliga symtom. En person som insjuknar i covid-19 behöver inte uppvisa samtliga symtom."
      ],
      "set": {
        "classifiedIntentName": "question: Vad är symtomen av CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "De vanligaste symtomen för covid-19 är feber och hosta. Även andningsbesvär, snuva, halsont, huvudvärk, illamående, muskel- och ledvärk är vanliga symtom. En person som insjuknar i covid-19 behöver inte uppvisa samtliga symtom."
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
        "PERS_PRON": PERS_PRON,
        "INFECTING_ACTIVITY": INFECTING_ACTIVITY
      },
      "examples": [
        "Hur smittar _CORONA?",
        "hur smittar det",
        "är _PERS_PRON smittsam",
        "hur kan _PERS_PRON undvika att smitta andra",
        "hur vet _PERS_PRON om _PERS_PRON smittar",
        "smittar det genom _INFECTING_ACTIVITY",
        "smittar _CORONA genom _INFECTING_ACTIVITY",
        "smittar det att _INFECTING_ACTIVITY",
        "smittar det om man får en _INFECTING_ACTIVITY",
        "smittar det via _INFECTING_ACTIVITY",
        "smittar _CORONA med _INFECTING_ACTIVITY",
        "smittar _PERS_PRON ",
        ""
      ]
    },
    "bot": {
      "say": [
        "Covid-19 smittar främst via droppar och sekret från luftvägarna, som sprids när någon hostar eller nyser. Viruset kan också spridas vid direkt kontakt mellan personer."
      ],
      "set": {
        "classifiedIntentName": "question: Hur smittar CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Covid-19 smittar främst via droppar och sekret från luftvägarna, som sprids när någon hostar eller nyser. Viruset kan också spridas vid direkt kontakt mellan personer."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan PERS_PRON smittas flera gånger av CORONA?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Kan _PERS_PRON smittas flera gånger av _CORONA?",
        "Kan _PERS_PRON smittas flera gånger",
        "kan _PERS_PRON ha _CORONA flera gånger",
        "hur många gånger kan _PERS_PRON ha _CORONA",
        "kan _PERS_PRON ha _CORONA två gånger",
        "kan _CORONA smitta två gånger på samma person",
        "kan _CORONA återkomma",
        "kan _CORONA komma igen",
        "kan det komma igen",
        "kan _PERS_PRON bli smittad igen",
        "kan _PERS_PRON få _CORONA om _PERS_PRON redan haft _CORONA en gång",
        "är _PERS_PRON immun mot _CORONA ifall _PERS_PRON haft det",
        "blir _PERS_PRON immun ifall _PERS_PRON haft _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "Det är oklart hur länge du är immun. Bedömningen utifrån tidigare erfarenheter är att immuniteten varar så länge du inte kommer att smittas fler gånger under en och samma säsong."
      ],
      "set": {
        "classifiedIntentName": "question: Kan PERS_PRON smittas flera gånger av CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det är oklart hur länge du är immun. Bedömningen utifrån tidigare erfarenheter är att immuniteten varar så länge du inte kommer att smittas fler gånger under en och samma säsong."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vem AUX stanna hemma?",
      "entities": {
        "AUX": AUX,
        "PERS_PRON": PERS_PRON,
        "REF_PRON": REF_PRON
      },
      "examples": [
        "Vem _AUX stanna hemma?",
        "_AUX _PERS_PRON stanna hemma",
        "är det viktigt att stanna hemma",
        "_AUX jag vara hemma",
        "när _AUX _PERS_PRON stanna hemma",
        "_AUX _PERS_PRON vara i husarrest",
        "_AUX _PERS_PRON vara i karantän",
        "_AUX _PERS_PRON stanna hemma om _PERS_PRON känner _REF_PRON sjuk",
        "_AUX _PERS_PRON stanna hemma om _PERS_PRON hostar",
        "_AUX _PERS_PRON stanna hemma om _PERS_PRON är snuvig",
        "_AUX _PERS_PRON stanna hemma om _PERS_PRON har feber",
        "_PERS_PRON känner _REF_PRON sjuk, _AUX _PERS_PRON stanna hemma",
        ""
      ]
    },
    "bot": {
      "say": [
        "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Du ska inte gå till jobbet eller skolan. Detta gäller även om du bara känner dig lite sjuk eftersom det är viktigt att inte riskera att smitta andra."
      ],
      "set": {
        "classifiedIntentName": "question: Vem AUX stanna hemma?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Du ska inte gå till jobbet eller skolan. Detta gäller även om du bara känner dig lite sjuk eftersom det är viktigt att inte riskera att smitta andra."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: är det okej att PERS_PRON går till OCCUPATION?",
      "entities": {
        "OCCUPATION": OCCUPATION,
        "PERS_PRON": PERS_PRON,
        "ACTIVITY": ACTIVITY
      },
      "examples": [
        "är det okej att _PERS_PRON går till _OCCUPATION?",
        "får _PERS_PRON gå till _OCCUPATION",
        "kan _PERS_PRON gå till _OCCUPATION",
        "är det okej att _ACTIVITY ",
        "kan _PERS_PRON _ACTIVITY ",
        "får _PERS_PRON _ACTIVITY",
        ""
      ]
    },
    "bot": {
      "say": [
        "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Du ska inte gå till jobbet eller skolan. Detta gäller även om du bara känner dig lite sjuk eftersom det är viktigt att inte riskera att smitta andra."
      ],
      "set": {
        "classifiedIntentName": "question: är det okej att PERS_PRON går till OCCUPATION?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Du ska inte gå till jobbet eller skolan. Detta gäller även om du bara känner dig lite sjuk eftersom det är viktigt att inte riskera att smitta andra."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur länge ska PERS_PRON stanna hemma?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "AUX": AUX
      },
      "examples": [
        "Hur länge ska _PERS_PRON stanna hemma?",
        "hur många dagar ska _PERS_PRON stanna hemma",
        "hur många dagar ska _PERS_PRON vara i karantän",
        "_AUX _PERS_PRON vara hemma en hel vecka",
        "hur vet _PERS_PRON hur länge _PERS_PRON _AUX stanna hemma",
        "hur långt ska _PERS_PRON vara hemma",
        "hur länge ska _PERS_PRON vara hemma",
        "hur länge _AUX _PERS_PRON karantän",
        ""
      ]
    },
    "bot": {
      "say": [
        "Stanna hemma tills du är helt frisk och i minst två dygn till innan du går till jobbet, åker i kollektivtrafiken eller går och handlar. Om du har äldre släktingar bör du som anhörig och närstående undvika att träffa dem, särskilt om du har varit sjuk. Det är för att skydda dem från virus."
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge ska PERS_PRON stanna hemma?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Stanna hemma tills du är helt frisk och i minst två dygn till innan du går till jobbet, åker i kollektivtrafiken eller går och handlar. Om du har äldre släktingar bör du som anhörig och närstående undvika att träffa dem, särskilt om du har varit sjuk. Det är för att skydda dem från virus."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur sjuk blir PERS_PRON av CORONA?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Hur sjuk blir _PERS_PRON av _CORONA?",
        "blir _PERS_PRON jättesjuk av _CORONA",
        "hur pass sjuk blir _PERS_PRON ",
        "hur sjuk kan _PERS_PRON bli",
        "blir _PERS_PRON alltid väldigt sjuk",
        "vad händer om _PERS_PRON får _CORONA",
        "behöver _PERS_PRON läggas in på sjukhus om _PERS_PRON får _CORONA",
        "hur sjuk blir _PERS_PRON om jag får _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "De allra flesta som har smittats, blir lindrigt sjuka med luftvägssymtom som går över av sig själva, men vissa drabbas av allvarligare sjukdom som lunginflammation. "
      ],
      "set": {
        "classifiedIntentName": "question: Hur sjuk blir PERS_PRON av CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "De allra flesta som har smittats, blir lindrigt sjuka med luftvägssymtom som går över av sig själva, men vissa drabbas av allvarligare sjukdom som lunginflammation. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur länge är PERS_PRON sjuk av CORONA?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Hur länge är _PERS_PRON sjuk av _CORONA?",
        "hur pass länge är _PERS_PRON sjuk",
        "hur länge har _PERS_PRON _CORONA",
        "hur lång tid kan _PERS_PRON ha _CORONA",
        "hur lång tid tar det innan _CORONA går över",
        "när går _CORONA över",
        "hur länge varar _CORONA?",
        "är _PERS_PRON sjuk jättelänge",
        "är _PERS_PRON sjuk länge om _PERS_PRON får _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "De flesta personer som får lindriga sjukdomssymtom blir friska efter två veckor. För de som blir allvarligt sjuka tar det mellan tre och sex veckor innan de är friska igen."
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge är PERS_PRON sjuk av CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "De flesta personer som får lindriga sjukdomssymtom blir friska efter två veckor. För de som blir allvarligt sjuka tar det mellan tre och sex veckor innan de är friska igen."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur stor är dödligheten till följd av CORONA?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Hur stor är dödligheten till följd av _CORONA?",
        "hur många dör av _CORONA",
        "kan _PERS_PRON dö av _CORONA",
        "hur många har dött av _CORONA ",
        "är det många som dör av _CORONA ?",
        "vad är risken att dö av _CORONA ?",
        "dör _PERS_PRON om _PERS_PRON får _CORONA",
        "hur dödligt är _CORONA?",
        "kommer _PERS_PRON dö av _CORONA",
        "är det farligt att få _CORONA",
        "är det livsfarligt att få _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "Många har dött i sjukdomen, främst äldre och sjuka. WHO uppskattar idag att dödligheten är 1–2 % av de redan smittade men uppskattningarna är fortfarande osäkra. "
      ],
      "set": {
        "classifiedIntentName": "question: Hur stor är dödligheten till följd av CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Många har dött i sjukdomen, främst äldre och sjuka. WHO uppskattar idag att dödligheten är 1–2 % av de redan smittade men uppskattningarna är fortfarande osäkra. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Ingår gravida i riskgrupperna?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "CORONA": CORONA,
        "AUX": AUX
      },
      "examples": [
        "Ingår gravida i riskgrupperna?",
        "är det större risk om _PERS_PRON är gravid",
        "hur stor är risken om _PERS_PRON är gravid",
        "hur ska _PERS_PRON göra om _PERS_PRON är gravid",
        "är graviditet en riskgrupp",
        "är gravida kvinnor i riskgruppen",
        "är det farligt att få _CORONA om _PERS_PRON är gravid",
        "_AUX _PERS_PRON vara orolig om _PERS_PRON är gravid",
        ""
      ]
    },
    "bot": {
      "say": [
        "För närvarande finns det begränsad information om covid-19 och graviditet. Som med alla lunginflammationer kan risken för allvarlig sjukdom vara något större, särskilt i slutet av graviditeten. Det finns få rapporteringar av barn som blivit smittade under graviditet eller förlossning."
      ],
      "set": {
        "classifiedIntentName": "question: Ingår gravida i riskgrupperna?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "För närvarande finns det begränsad information om covid-19 och graviditet. Som med alla lunginflammationer kan risken för allvarlig sjukdom vara något större, särskilt i slutet av graviditeten. Det finns få rapporteringar av barn som blivit smittade under graviditet eller förlossning."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan PERS_PRON bli smittad av en person som har CORONA men som inte har några symtom?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Kan _PERS_PRON bli smittad av en person som har _CORONA men som inte har några symtom?",
        "smittar _CORONA utan symtom",
        "kan _PERS_PRON bli smittad av en person utan symtom",
        "är _CORONA smittsamt fastän en person inte känner sig sjuk",
        "måste det finnas symtom för att det ska vara smittsamt",
        "är _CORONA smittsamt om _PERS_PRON bara hostar lite",
        ""
      ]
    },
    "bot": {
      "say": [
        "Smittspridningen drivs av personer med symtom på sjukdom, men en del som är sjuka får bara milda symtom. Du kan därför bli smittad av någon som inte känner sig sjuk, men som har t.ex. mild hosta. "
      ],
      "set": {
        "classifiedIntentName": "question: Kan PERS_PRON bli smittad av en person som har CORONA men som inte har några symtom?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Smittspridningen drivs av personer med symtom på sjukdom, men en del som är sjuka får bara milda symtom. Du kan därför bli smittad av någon som inte känner sig sjuk, men som har t.ex. mild hosta. "
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
        "hur många får det vara på en arbetsplats",
        ""
      ]
    },
    "bot": {
      "say": [
        "Kollektivtrafik, arbetsplatser och skolor omfattas inte av förbudet mot allmänna sammankomster med fler än 50 personer. Friska personer kan åka till jobbet och skolan. På arbetsplatser och skolor kan du tänka på att minimera aktiviteter som samlar många personer."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för kollektivtrafik, arbetsplatser och skolor?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Kollektivtrafik, arbetsplatser och skolor omfattas inte av förbudet mot allmänna sammankomster med fler än 50 personer. Friska personer kan åka till jobbet och skolan. På arbetsplatser och skolor kan du tänka på att minimera aktiviteter som samlar många personer."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vilka råd finns det för resa till andra länder?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "REF_PRON": REF_PRON
      },
      "examples": [
        "Vilka råd finns det för resa till andra länder?",
        "får _PERS_PRON resa till andra länder",
        "är det okej att resa utomlands",
        "vad gäller om _PERS_PRON ska resa utomlands",
        "är det ok att åka utomlands",
        "måste _PERS_PRON ställa in _REF_PRON semester utomlands",
        "kan _PERS_PRON åka utomlands",
        "vad rekommenderas gällande utlandsresor",
        "får _PERS_PRON åka utomlands",
        ""
      ]
    },
    "bot": {
      "say": [
        "Sedan 14 mars 2020 avråder UD från icke nödvändiga resor till alla länder. Du som resenär behöver göra en egen bedömning av ditt resande utifrån behovet av att resa och den information om smittspridningen som finns. Tänk också på att många länder inte tar emot inresande just nu för att begränsa smittspridningen."
      ],
      "set": {
        "classifiedIntentName": "question: Vilka råd finns det för resa till andra länder?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Sedan 14 mars 2020 avråder UD från icke nödvändiga resor till alla länder. Du som resenär behöver göra en egen bedömning av ditt resande utifrån behovet av att resa och den information om smittspridningen som finns. Tänk också på att många länder inte tar emot inresande just nu för att begränsa smittspridningen."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Behöver PERS_PRON vidta några åtgärder även om PERS_PRON känner REF_PRON frisk efter resa från drabbade länder?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "REF_PRON": REF_PRON
      },
      "examples": [
        "Behöver _PERS_PRON vidta några åtgärder även om _PERS_PRON känner _REF_PRON frisk efter resa från drabbade länder?",
        "behöver _PERS_PRON göra något särskilt om jag är frisk efter resa",
        "ska _PERS_PRON göra något särskilt om jag känner mig frisk efter resa",
        "vad gör _PERS_PRON om _PERS_PRON inte känner _REF_PRON sjuk efter resa",
        "vad gör _PERS_PRON om _PERS_PRON känner _REF_PRON frisk efter resa",
        ""
      ]
    },
    "bot": {
      "say": [
        "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Du ska inte gå till jobbet eller skolan. Detta gäller även om du bara känner dig lite sjuk eftersom det är viktigt att inte riskera att smitta andra."
      ],
      "set": {
        "classifiedIntentName": "question: Behöver PERS_PRON vidta några åtgärder även om PERS_PRON känner REF_PRON frisk efter resa från drabbade länder?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Du ska inte gå till jobbet eller skolan. Detta gäller även om du bara känner dig lite sjuk eftersom det är viktigt att inte riskera att smitta andra."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: PERS_PRON  har nyligen varit i ett land där smittspridning pågår och nu har PERS_PRON hosta och feber. Vad ska PERS_PRON göra?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "CORONA": CORONA,
        "AUX": AUX
      },
      "examples": [
        "_PERS_PRON  har nyligen varit i ett land där smittspridning pågår och nu har _PERS_PRON hosta och feber. Vad ska _PERS_PRON göra?",
        "_PERS_PRON tror jag har fått _CORONA vad ska _PERS_PRON göra",
        "vad gör _PERS_PRON om _PERS_PRON tror att _PERS_PRON har fått _CORONA",
        "hur gör _PERS_PRON om _PERS_PRON har fått _CORONA",
        "vad _AUX _PERS_PRON göra om _PERS_PRON har fått _CORONA",
        "om _PERS_PRON tror _PERS_PRON har _CORONA vad ska _PERS_PRON göra",
        "_PERS_PRON har corona vad ska _PERS_PRON göra",
        "_PERS_PRON misstänker att _PERS_PRON kanske har _CORONA vad gör _PERS_PRON nu",
        ""
      ]
    },
    "bot": {
      "say": [
        "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Du ska inte gå till jobbet eller skolan. Detta gäller även om du bara känner dig lite sjuk eftersom det är viktigt att inte riskera att smitta andra."
      ],
      "set": {
        "classifiedIntentName": "question: PERS_PRON  har nyligen varit i ett land där smittspridning pågår och nu har PERS_PRON hosta och feber. Vad ska PERS_PRON göra?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Du ska inte gå till jobbet eller skolan. Detta gäller även om du bara känner dig lite sjuk eftersom det är viktigt att inte riskera att smitta andra."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan PERS_PRON vaccinera",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "CORONA": CORONA,
        "REF_PRON": REF_PRON
      },
      "examples": [
        "Kan _PERS_PRON vaccinera",
        "finns det vaccin",
        "kan _PERS_PRON vaccinera _REF_PRON mot _CORONA",
        "när kommer vaccin mot _CORONA",
        "finns det vaccin mot _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "I nuläget finns det inget vaccin eller speciellt läkemedel mot covid-19. Internationella studier av olika typer av läkemedelsbehandlingar pågår och forskning sker kring utveckling av ett vaccin."
      ],
      "set": {
        "classifiedIntentName": "question: Kan PERS_PRON vaccinera",
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
      "name": "question: Vad är CORONA?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Vad är _CORONA?",
        "förklara vad _CORONA är",
        "vad betyder _CORONA",
        "vad gör _CORONA",
        "vad innebär _CORONA",
        "var kommer _CORONA ifrån?",
        "kan du förklara vad _CORONA är",
        ""
      ]
    },
    "bot": {
      "say": [
        "Det finns ett stort antal virus som tillhör coronavirusfamiljen. Sju av dessa kan smitta och ge upphov till sjukdom hos människor. I slutet av 2019 upptäcktes ett nytt coronavirus i Kina som kan smitta människor, detta nya virus ger upphov till sjukdomen covid-19. "
      ],
      "set": {
        "classifiedIntentName": "question: Vad är CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det finns ett stort antal virus som tillhör coronavirusfamiljen. Sju av dessa kan smitta och ge upphov till sjukdom hos människor. I slutet av 2019 upptäcktes ett nytt coronavirus i Kina som kan smitta människor, detta nya virus ger upphov till sjukdomen covid-19. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: vad skiljer CORONA från säsongsinfluensa?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "vad skiljer _CORONA från säsongsinfluensa?",
        "är _CORONA influensa",
        "vad skiljer _CORONA från influensa",
        "är influensa samma sak som _CORONA",
        "är _CORONA samma sak som influensa?",
        "_CORONA och influensa är det samma sak",
        "är _CORONA och influensa olika",
        "är _CORONA och influensa samma?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Det är svårt att jämföra en helt ny sjukdom som covid-19, med den återkommande säsongsinfluensan. Utifrån vad vi vet idag är att sjudomarna är liknande i symtom men covid-19 sprider sig mycket snabbare eftersom ingen har utvecklat immunitet ännu."
      ],
      "set": {
        "classifiedIntentName": "question: vad skiljer CORONA från säsongsinfluensa?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det är svårt att jämföra en helt ny sjukdom som covid-19, med den återkommande säsongsinfluensan. Utifrån vad vi vet idag är att sjudomarna är liknande i symtom men covid-19 sprider sig mycket snabbare eftersom ingen har utvecklat immunitet ännu."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Skyddar munskydd mot CORONA",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Skyddar munskydd mot _CORONA",
        "funkar munskydd",
        "skyddar munskydd mot _CORONA",
        "hjälper munskydd",
        "kan jag skydda mig med munskydd",
        "är det bra att ha munskydd",
        "borde jag ha munskydd",
        "borde jag ha skydd för munnen",
        ""
      ]
    },
    "bot": {
      "say": [
        "Munskydd behövs inte i vanliga situationer ute i samhället, då är det bättre att hålla avstånd till andra människor och att vara noga med att tvätta händerna."
      ],
      "set": {
        "classifiedIntentName": "question: Skyddar munskydd mot CORONA",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Munskydd behövs inte i vanliga situationer ute i samhället, då är det bättre att hålla avstånd till andra människor och att vara noga med att tvätta händerna."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Finns det vaccin eller behandling mot CORONA?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON,
        "REF_PRON": REF_PRON
      },
      "examples": [
        "Finns det vaccin eller behandling mot _CORONA?",
        "finns det botemedel",
        "finns det något CORONAvaccin",
        "finns det något läkemedel mot _CORONA",
        "kan _PERS_PRON bli botad",
        "finns det vaccin än",
        "Kan _PERS_PRON vaccinera _REF_PRON mot _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "I nuläget finns det inget vaccin eller speciellt läkemedel mot covid-19. Internationella studier av olika typer av läkemedelsbehandlingar pågår och forskning sker kring utveckling av ett vaccin."
      ],
      "set": {
        "classifiedIntentName": "question: Finns det vaccin eller behandling mot CORONA?",
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
      "name": "question: Hur många blir friska från CORONA?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Hur många blir friska från _CORONA?",
        "kommer alla bli friska från _CORONA?",
        "hur pass många blir friska",
        "hur stor är chansen att klara sig",
        "hur många tillfrisknar från _CORONA",
        "hur många blir friska",
        "hur många blir friska efter _CORONA",
        "kan _PERS_PRON bli frisk efter _CORONA",
        "blir _PERS_PRON efter _CORONA",
        "vad är chansen för att bli frisk efter _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "Majoriteten av de som smittas av covid-19 blir friska. Ytterst få personer löper risk att bli allvarligt sjuka."
      ],
      "set": {
        "classifiedIntentName": "question: Hur många blir friska från CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Majoriteten av de som smittas av covid-19 blir friska. Ytterst få personer löper risk att bli allvarligt sjuka."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Behöver PERS_PRON städa eller hantera POS_PRON sopor på något särskilt sätt?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "POS_PRON": POS_PRON,
        "CORONA": CORONA
      },
      "examples": [
        "Behöver _PERS_PRON städa eller hantera _POS_PRON sopor på något särskilt sätt?",
        "ska _PERS_PRON städa på något särskilt sätt",
        "måste _PERS_PRON städa extra noga",
        "vad ska _PERS_PRON göra med _POS_PRON sopor",
        "kan sopor vara infekterade",
        "hur städar _PERS_PRON om _PERS_PRON tror att det finns _CORONA i hemmet",
        ""
      ]
    },
    "bot": {
      "say": [
        "Det räcker med att städa så som du gör i normala fall. Om någon i ditt hushåll har smittats av det nya coronaviruset är det viktigt att du tvättar händerna noga efter att du har städat eller hanterat sopor."
      ],
      "set": {
        "classifiedIntentName": "question: Behöver PERS_PRON städa eller hantera POS_PRON sopor på något särskilt sätt?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det räcker med att städa så som du gör i normala fall. Om någon i ditt hushåll har smittats av det nya coronaviruset är det viktigt att du tvättar händerna noga efter att du har städat eller hanterat sopor."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Varför stänger PERS_PRON inte för- och grundskolorna i Sverige?",
      "entities": {
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Varför stänger _PERS_PRON inte för- och grundskolorna i Sverige?",
        "varför stängs inte skolorna",
        "kommer skolorna att stängas",
        "hur länge kommer skolorna att vara öppna",
        "hur kommer det sig att skolorna i sverige inte stängs",
        "varför är skolorna öppna",
        "kommer grundskolorna att stängas",
        "kommer skolan stängas",
        "kommer grundskolan stängas",
        "kommer förskolan stängas",
        "kommer förskolorna stängas?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Det finns inga vetenskapliga studier som visar att stängning av skolor får någon större betydelse. För många barn är skolan en viktig fast punkt i tillvaron, därför måste det finnas en plan för vart barnen ska ta vägen ifall skolorna stängs. Om barn och skolpersonal känner symtom av covid-19, så som hosta eller feber, är det mycket viktigt att stanna hemma."
      ],
      "set": {
        "classifiedIntentName": "question: Varför stänger PERS_PRON inte för- och grundskolorna i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det finns inga vetenskapliga studier som visar att stängning av skolor får någon större betydelse. För många barn är skolan en viktig fast punkt i tillvaron, därför måste det finnas en plan för vart barnen ska ta vägen ifall skolorna stängs. Om barn och skolpersonal känner symtom av covid-19, så som hosta eller feber, är det mycket viktigt att stanna hemma."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur länge kan CORONA överleva utanför människokroppen?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Hur länge kan _CORONA överleva utanför människokroppen?",
        "hur länge överlever _CORONA",
        "kan _CORONA leva utanför kroppen",
        "kan _CORONA leva på ytor",
        "kan _CORONA överleva på ett handtag",
        "hur snabbt dör _CORONA utanför kroppen",
        ""
      ]
    },
    "bot": {
      "say": [
        "Det är ännu inte klarlagt hur länge viruset kan överleva utanför kroppen. Forskningsstudier som utförts på närbesläktade coronavirus visar att de kan överleva flera dagar på ytor och föremål. Därför är det viktigt att ha god handhygien."
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge kan CORONA överleva utanför människokroppen?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det är ännu inte klarlagt hur länge viruset kan överleva utanför kroppen. Forskningsstudier som utförts på närbesläktade coronavirus visar att de kan överleva flera dagar på ytor och föremål. Därför är det viktigt att ha god handhygien."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan CORONA smitta via post och paket?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Kan _CORONA smitta via post och paket?",
        "kan paket vara smittade med _CORONA",
        "kan det vara _CORONA på min post",
        "kan jag bli smittad av min post",
        "kan det finnas _CORONA på mina brev",
        ""
      ]
    },
    "bot": {
      "say": [
        "Kunskap från liknande tidigare utbrott visar att denna typ av virus smittar mellan sjuka människor, inte genom paket och postförsändelser."
      ],
      "set": {
        "classifiedIntentName": "question: Kan CORONA smitta via post och paket?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Kunskap från liknande tidigare utbrott visar att denna typ av virus smittar mellan sjuka människor, inte genom paket och postförsändelser."
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
        "hur skyddar jag mina husdjur",
        ""
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
        "vilka länder har blivit smittade",
        ""
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
        "har vi samhällsspridning i sverige",
        ""
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
        "vad är smittspårning av corona",
        ""
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
        "vad är problemet med fler än 500 personer",
        ""
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
        "är det hälsokoll på flygplatsen",
        ""
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
        "vad innebär att sitta i karantän",
        ""
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
        "vad gör Folkhälsomyndigheten",
        ""
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
        "vad händer vid en pandemi",
        ""
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
        "är corona samhällsfarlig",
        ""
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
        "hur smittar luftburen smitta?",
        ""
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
      "name": "question: Vad är ett andningsskydd?",
      "entities": {},
      "examples": [
        "Vad är ett andningsskydd?",
        "hur använder jag ett andningsskydd",
        "vad innebär andningsskydd",
        "vad är andningsskydd mot corona",
        "vad är skydd för andning",
        "vem bär andningsskydd",
        ""
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
        "kan jag få olika besked från två  olika coronatest",
        ""
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
        "hur lång tid smittar corona?",
        ""
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
      "name": "question: Finns det självtester för CORONA?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Finns det självtester för _CORONA?",
        "kan man testa sig hemma för _CORONA?",
        "går det att testa sig hemma?",
        "är självtester pålitliga?",
        "kan man lita på självtester?",
        ""
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
        "erbjuder skolorna undervisning på distans?",
        ""
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
        "vad gäller för grundskoleelever?",
        ""
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
        "jag är 70 år, vad gör jag nu?",
        ""
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
        "hur skyddar jag äldre från smitta?",
        ""
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
        "ska man stanna hemma när man uppvisar symtom på corona?",
        ""
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
        "om någon i hushållet är sjuk utan symtom, måste resten av hushållet stanna hemma då?",
        "kan man gå till skolan även om någon i familjen är sjuk?",
        "kan man gå till jobbet även fast någon i hushållet är sjuk?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Så länge andra familjemedlemmar inte har symtom kan de göra som vanligt. Det är dock väldigt viktigt att vara uppmärksam på symtom och stanna hemma vid första tecken på sjukdom."
      ],
      "set": {
        "classifiedIntentName": "question: Om en person i familjen är sjuk - måste alla stanna hemma då? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Så länge andra familjemedlemmar inte har symtom kan de göra som vanligt. Det är dock väldigt viktigt att vara uppmärksam på symtom och stanna hemma vid första tecken på sjukdom."
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
        "1177 svarar inte",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: jag når inte 1177",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
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
        "Hur bör jag bete mig",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Hur bör jag bete mig",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
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
        "vad gäller vid social distansering?",
        ""
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
        "hur göra social distansering?",
        ""
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
        "hur förebygger jag virusspridning?",
        ""
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
        "sprids corona långsammare i varmt väder?",
        ""
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
        "när slutar inreseförbudet?",
        ""
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
        "vem görs undantag för gällande inreseförbudet?",
        ""
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
      "name": "question: vad är direkt och indirekt kontaktsmitta?",
      "entities": {},
      "examples": [
        "vad är direkt och indirekt kontaktsmitta?",
        "vad är direktkontakt?",
        "vad är indirekt kontaktsmitta?",
        "hur smittar man genom direktkontakt?",
        "hur smittar viruset via indirekt kontakt?",
        ""
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
      "name": "question: får jag träffa vänner?",
      "entities": {},
      "examples": [
        "får jag träffa vänner?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: får jag träffa vänner?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
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
        "Finns du på engelska?",
        ""
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
        "Jag har problem med andningen",
        ""
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
        "Vad är nytt?",
        ""
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
        "Vem är du?",
        ""
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
      "name": "question: vem står bakom denna bot",
      "entities": {},
      "examples": [
        "vem står bakom denna bot",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: vem står bakom denna bot",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
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
        "Hur lång tid kan det ta innan symtom visar sig?",
        "Hur lång tid efter att man har blivit smittad blir man sjuk?",
        ""
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
  },
  {
    "intent": {
      "name": "question: Smittar CORONA under inkubationstiden?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Smittar _CORONA under inkubationstiden?",
        "smittar _CORONA hela tiden",
        "smittar _CORONA direkt",
        "blir _PERS_PRON smittsam direkt om _PERS_PRON har fått _CORONA",
        "är _CORONA genast smittsamt",
        "hur snabbt smittar _PERS_PRON om jag fått _CORONA",
        "smittar _PERS_PRON under inkubationstiden",
        "hur fort smittar _PERS_PRON om jag fått _CORONA",
        "hur mycket smittar _CORONA",
        "kan _CORONA smitta under inkubationstiden?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Folkhälsomyndighetens bedömning av forskningen är att viruset smittar när man är sjuk och i samband med insjuknandet, och inte under inkubationstiden. De som har varit utsatta för smitta ska vara uppmärksamma på tidiga sjukdomstecken, eftersom du smittar så fort du har även milda symtom. "
      ],
      "set": {
        "classifiedIntentName": "question: Smittar CORONA under inkubationstiden?",
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
      "name": "question: Hur ser Sveriges beredskap ut?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Hur ser Sveriges beredskap ut?",
        "har sverige beredskap",
        "hur stor beredskap har sverige",
        "hur är sveriges beredskap just nu",
        "har sverige någon beredskap",
        "är sverige redo",
        "kan sverige hantera _CORONA",
        ""
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
        "får alla vård om många är smittade samtidigt",
        ""
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
        "kan ett barn bli avstängt",
        ""
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
      "name": "question: Kommer det bli karantän i Sverige",
      "entities": {},
      "examples": [
        "Kommer det bli karantän i Sverige",
        "kan sverige sättas i karantän?",
        "blir det karantän i sverige?",
        "riskerar sverige att sättas i karantän?",
        "finns det risk att bli karantän i sverige?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom covid-19 numera är klassad som samhällsfarlig, kan smittskyddsläkaren i respektive sjukvårdsregion ta beslut om karantän för friska personer. Om en mindre ingripande åtgärd, t.ex. förhållningsregler, kan få samma effekt ska den väljas istället."
      ],
      "set": {
        "classifiedIntentName": "question: Kommer det bli karantän i Sverige",
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
      "name": "question: Hur vet jag om mina symtom beror på pollenallergi eller på covid-19? ",
      "entities": {},
      "examples": [
        "Hur vet jag om mina symtom beror på pollenallergi eller på covid-19? ",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Hur vet jag om mina symtom beror på pollenallergi eller på covid-19? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag känner mig orolig för det nya coronaviruset, hur ska jag hantera min oro?",
      "entities": {},
      "examples": [
        "Jag känner mig orolig för det nya coronaviruset, hur ska jag hantera min oro?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Jag känner mig orolig för det nya coronaviruset, hur ska jag hantera min oro?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur många är sjuka i Sverige?",
      "entities": {},
      "examples": [
        "Hur många är sjuka i Sverige?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Hur många är sjuka i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur många har avlidit i Sverige av covid-19?",
      "entities": {},
      "examples": [
        "Hur många har avlidit i Sverige av covid-19?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Hur många har avlidit i Sverige av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan vaccin mot pneumokocker ge skydd mot covid-19?",
      "entities": {},
      "examples": [
        "Kan vaccin mot pneumokocker ge skydd mot covid-19?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Kan vaccin mot pneumokocker ge skydd mot covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan covid-19 smitta via sedlar och mynt? ",
      "entities": {},
      "examples": [
        "Kan covid-19 smitta via sedlar och mynt? ",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Kan covid-19 smitta via sedlar och mynt? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Smittar covid-19 via vatten och mat?",
      "entities": {},
      "examples": [
        "Smittar covid-19 via vatten och mat?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Smittar covid-19 via vatten och mat?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär karantän?",
      "entities": {},
      "examples": [
        "Vad innebär karantän?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär karantän?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan man sätta en hel stad i karantän?",
      "entities": {},
      "examples": [
        "Kan man sätta en hel stad i karantän?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Kan man sätta en hel stad i karantän?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär avspärrning?",
      "entities": {},
      "examples": [
        "Vad innebär avspärrning?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär avspärrning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur länge kan en avspärrning pågå?",
      "entities": {},
      "examples": [
        "Hur länge kan en avspärrning pågå?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge kan en avspärrning pågå?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Bör jag som symtomfri jobba hemma?",
      "entities": {},
      "examples": [
        "Bör jag som symtomfri jobba hemma?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Bör jag som symtomfri jobba hemma?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Varför ska undervisningen för gymnasieelever och studenter ske på distans?",
      "entities": {},
      "examples": [
        "Varför ska undervisningen för gymnasieelever och studenter ske på distans?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Varför ska undervisningen för gymnasieelever och studenter ske på distans?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur övervakar vi spridningen av covid-19?",
      "entities": {},
      "examples": [
        "Hur övervakar vi spridningen av covid-19?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Hur övervakar vi spridningen av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller för sammankomster med färre än 50 personer?",
      "entities": {},
      "examples": [
        "Vad gäller för sammankomster med färre än 50 personer?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för sammankomster med färre än 50 personer?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Privata sammankomster såsom studentskivor, bröllop, m.m.",
      "entities": {},
      "examples": [
        "Privata sammankomster såsom studentskivor, bröllop, m.m.",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Privata sammankomster såsom studentskivor, bröllop, m.m.",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan idrotts- och träningsaktiviteter fortsätta som vanligt",
      "entities": {},
      "examples": [
        "Kan idrotts- och träningsaktiviteter fortsätta som vanligt",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Kan idrotts- och träningsaktiviteter fortsätta som vanligt",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär de nya reglerna för restauranger och deras gäster?",
      "entities": {},
      "examples": [
        "Vad innebär de nya reglerna för restauranger och deras gäster?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär de nya reglerna för restauranger och deras gäster?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller vid resa inom Sverige?",
      "entities": {},
      "examples": [
        "Vad gäller vid resa inom Sverige?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller vid resa inom Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad ska jag tänka på när jag åker tåg, buss och taxi?",
      "entities": {},
      "examples": [
        "Vad ska jag tänka på när jag åker tåg, buss och taxi?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad ska jag tänka på när jag åker tåg, buss och taxi?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller för vistelse i fjällen?",
      "entities": {},
      "examples": [
        "Vad gäller för vistelse i fjällen?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för vistelse i fjällen?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur drabbas barn av covid-19?",
      "entities": {},
      "examples": [
        "Hur drabbas barn av covid-19?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Hur drabbas barn av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan barn och ungdomar vaccineras som vanligt enligt vaccinationsprogrammet under pågående utbrott av covid-19?",
      "entities": {},
      "examples": [
        "Kan barn och ungdomar vaccineras som vanligt enligt vaccinationsprogrammet under pågående utbrott av covid-19?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Kan barn och ungdomar vaccineras som vanligt enligt vaccinationsprogrammet under pågående utbrott av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Varför stänger vi inte för- och grundskolorna i Sverige?",
      "entities": {},
      "examples": [
        "Varför stänger vi inte för- och grundskolorna i Sverige?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Varför stänger vi inte för- och grundskolorna i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Att prata med barn om det nya coronaviruset?",
      "entities": {},
      "examples": [
        "Att prata med barn om det nya coronaviruset?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Att prata med barn om det nya coronaviruset?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  }
]