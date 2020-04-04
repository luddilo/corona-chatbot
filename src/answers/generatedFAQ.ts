import { UserTurn, Entity } from "narratory"

// Generated at Friday, April 3rd 2020, 6:28:34 pm

export const CORONA : Entity = {
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
        "viruset",
        "coranen",
        "koranen",
        "på råna",
        "på Roma",
        "koroma",
        "kollat",
        "krona",
        "kod 19",
        "korean viruset",
        "kolumn virus",
        "virus"
      ]
    }
  ]
}

export const INFECTING_ACTIVITY : Entity = {
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
        "hostar",
        "ta i hand"
      ]
    }
  ]
}

export const OCCUPATION : Entity = {
  "name": "OCCUPATION",
  "enums": [
    {
      "name": "OCCUPATION",
      "alts": [
        "jobbet",
        "skolan",
        "dagis",
        "förskolan",
        "arbetet",
        "fritids",
        "kontoret",
        "fsk",
        "förskola"
      ]
    }
  ]
}

export const MEDICAL_CERTIFICATE : Entity = {
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

export const PERS_PRON : Entity = {
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

export const REF_PRON : Entity = {
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

export const POS_PRON : Entity = {
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

export const AUX : Entity = {
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

export const ACTIVITY : Entity = {
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
        "jobba",
        "gymmet",
        "ärende"
      ]
    }
  ]
}

export const MY_CHILD : Entity = {
  "name": "MY_CHILD",
  "enums": [
    {
      "name": "MY_CHILD",
      "alts": [
        "min dotter",
        "min son",
        "mina söner",
        "mina döttrar",
        "min flicka ",
        "min pojke",
        "mina barn",
        "barnen",
        "barnet"
      ]
    }
  ]
}

export const SKA : Entity = {
  "name": "SKA",
  "enums": [
    {
      "name": "SKA",
      "alts": [
        "bör",
        "måste",
        "borde ",
        "skulle",
        "behöver"
      ]
    }
  ]
}

export const FAMILYMEMBER : Entity = {
  "name": "FAMILYMEMBER",
  "enums": [
    {
      "name": "FAMILYMEMBER",
      "alts": [
        "man",
        "fru",
        "sambo",
        "partner",
        "fästmö",
        "fästman",
        "son",
        "dotter",
        "syster",
        "bror",
        "tjej",
        "kille ",
        "lillasyster",
        "lillebror",
        "storasyster",
        "storebror"
      ]
    }
  ]
}

export const HELLO : Entity = {
  "name": "HELLO",
  "enums": [
    {
      "name": "HELLO",
      "alts": [
        "Hej ",
        "hejsan",
        "hej hej ",
        "hej där ",
        "hei",
        "tjena",
        "tjabba",
        "hi ",
        "goddag",
        "hej botten",
        "halloj"
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
        "vilka är de vanligaste symptomen?",
        "hur vet _PERS_PRON om _PERS_PRON är sjuk?",
        "_PERS_PRON undrar om symtomer",
        "Vilka är de vanligaste symptomen?",
        "Symptom?",
        "har jag _CORONA?",
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
        "smittar det om _PERS_PRON får en _INFECTING_ACTIVITY",
        "smittar det via _INFECTING_ACTIVITY",
        "smittar _CORONA med _INFECTING_ACTIVITY",
        "smittar _PERS_PRON ",
        "Hur kan jag smitta andra",
        "Hur smittas corona?",
        "Hur smittar det?",
        "Smittar _CORONA genom luften?",
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
      "name": "question: hur skyddar PERS_PRON REF_PRON själv och andra",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "REF_PRON": REF_PRON,
        "POS_PRON": POS_PRON,
        "CORONA": CORONA,
        "AUX": AUX
      },
      "examples": [
        "hur skyddar _PERS_PRON _REF_PRON själv och andra",
        "hur skyddar vi oss själva och andra",
        "hur skyddar _PERS_PRON _REF_PRON",
        "hur kan _PERS_PRON skydda _REF_PRON",
        "hur kan _PERS_PRON skydda _POS_PRON familj",
        "vilka försiktighetsåtgärder kan _PERS_PRON ta",
        "hur kan _PERS_PRON minimera risken",
        "hur kan _PERS_PRON agera med försiktighet",
        "vad kan _PERS_PRON för att skydda andra",
        "hur kan _PERS_PRON att _CORONA sprids",
        "hur kan _PERS_PRON minska smittspridningen",
        "hur minskar _PERS_PRON smittspridningen",
        "hur minskar _PERS_PRON spridningen av _CORONA",
        "vad _AUX _PERS_PRON göra för att minska smittspridningen",
        "vad _AUX _PERS_PRON göra för att minska spridningen av _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "Tvätta händerna ofta med tvål och varmt vatten. Hosta och nys i armvecket eller i en pappersnäsduk, undvik att röra vid ansiktet eller ögonen. Avstå från att delta i större sociala sammanhang, undvik onödiga resor och håll avstånd till andra. Stanna hemma om du känner dig sjuk. "
      ],
      "set": {
        "classifiedIntentName": "question: hur skyddar PERS_PRON REF_PRON själv och andra",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Tvätta händerna ofta med tvål och varmt vatten. Hosta och nys i armvecket eller i en pappersnäsduk, undvik att röra vid ansiktet eller ögonen. Avstå från att delta i större sociala sammanhang, undvik onödiga resor och håll avstånd till andra. Stanna hemma om du känner dig sjuk. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: PERS_PRON undrar om PERS_PRON kan gå på en stor fest?",
      "entities": {
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "_PERS_PRON undrar om _PERS_PRON kan gå på en stor fest?",
        "Kan _PERS_PRON gå på bröllop i april?",
        "Kan _PERS_PRON gå på bröllop i maj?",
        "_PERS_PRON undrar om _PERS_PRON kan gå på konsert?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Rekommendationen är att avstå från att delta i större sociala sammanhang."
      ],
      "set": {
        "classifiedIntentName": "question: PERS_PRON undrar om PERS_PRON kan gå på en stor fest?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Rekommendationen är att avstå från att delta i större sociala sammanhang."
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
        "REF_PRON": REF_PRON,
        "OCCUPATION": OCCUPATION,
        "POS_PRON": POS_PRON,
        "MY_CHILD": MY_CHILD
      },
      "examples": [
        "Vem _AUX stanna hemma?",
        "_AUX _PERS_PRON stanna hemma",
        "är det viktigt att stanna hemma",
        "_AUX _PERS_PRON vara hemma",
        "när _AUX _PERS_PRON stanna hemma",
        "_AUX _PERS_PRON vara i husarrest",
        "_AUX _PERS_PRON vara i karantän",
        "_AUX _PERS_PRON stanna hemma om _PERS_PRON känner _REF_PRON sjuk",
        "_AUX _PERS_PRON stanna hemma om _PERS_PRON hostar",
        "_AUX _PERS_PRON stanna hemma om _PERS_PRON är snuvig",
        "_AUX _PERS_PRON stanna hemma om _PERS_PRON har feber",
        "_PERS_PRON känner _REF_PRON sjuk, _AUX _PERS_PRON stanna hemma",
        "_PERS_PRON har hosta börja stanna hemma? ",
        "_PERS_PRON har ont i halsen ska vara i karantän? ",
        "Kan _POS_PRON _MY_CHILD gå till _OCCUPATION?",
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
      "name": "question: Hur länge AUX PERS_PRON stanna hemma?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "AUX": AUX
      },
      "examples": [
        "Hur länge _AUX _PERS_PRON stanna hemma?",
        "hur många dagar _AUX _PERS_PRON stanna hemma",
        "hur många dagar _AUX _PERS_PRON vara i karantän",
        "_AUX _PERS_PRON vara hemma en hel vecka",
        "hur vet _PERS_PRON hur länge _PERS_PRON _AUX stanna hemma",
        "hur långt _AUX _PERS_PRON vara hemma",
        "hur länge _AUX _PERS_PRON vara hemma",
        "hur länge _AUX _PERS_PRON karantän",
        ""
      ]
    },
    "bot": {
      "say": [
        "Stanna hemma tills du är helt frisk och i minst två dygn till innan du går till jobbet, åker i kollektivtrafiken eller går och handlar. Om du har äldre släktingar bör du som anhörig och närstående undvika att träffa dem, särskilt om du har varit sjuk. Det är för att skydda dem från virus."
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge AUX PERS_PRON stanna hemma?",
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
        "PERS_PRON": PERS_PRON,
        "AUX": AUX
      },
      "examples": [
        "Hur sjuk blir _PERS_PRON av _CORONA?",
        "blir _PERS_PRON jättesjuk av _CORONA",
        "hur pass sjuk blir _PERS_PRON ",
        "hur sjuk kan _PERS_PRON bli",
        "blir _PERS_PRON alltid väldigt sjuk",
        "vad händer om _PERS_PRON får _CORONA",
        "_AUX _PERS_PRON läggas in på sjukhus om _PERS_PRON får _CORONA",
        "hur sjuk blir _PERS_PRON om _PERS_PRON får _CORONA",
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
        "AUX": AUX,
        "CORONA": CORONA
      },
      "examples": [
        "Ingår gravida i riskgrupperna?",
        "är det större risk om _PERS_PRON är gravid",
        "hur stor är risken om _PERS_PRON är gravid",
        "hur _AUX _PERS_PRON göra om _PERS_PRON är gravid",
        "är graviditet en riskgrupp",
        "är gravida kvinnor i riskgruppen",
        "är det farligt att få _CORONA om _PERS_PRON är gravid",
        "_AUX _PERS_PRON vara orolig om _PERS_PRON är gravid",
        "Vad gäller när jag är gravid? ",
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
        "PERS_PRON": PERS_PRON,
        "AUX": AUX
      },
      "examples": [
        "Kan _PERS_PRON bli smittad av en person som har _CORONA men som inte har några symtom?",
        "smittar _CORONA utan symtom",
        "kan _PERS_PRON bli smittad av en person utan symtom",
        "är _CORONA smittsamt fastän en person inte känner sig sjuk",
        "_AUX det finnas symtom för att det ska vara smittsamt",
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
      "name": "question: Vad gäller för stora evenemang? ",
      "entities": {},
      "examples": [
        "Vad gäller för stora evenemang? ",
        "vad är reglerna för stora evenemang",
        "vilka regler gäller för evenemang",
        "vad gäller för event",
        "är alla evenemang inställda",
        "kommer alla event ställas in",
        "Kan jag gå på bröllop? ",
        "Får jag gå på ett bröllop?",
        "Vad gäller för större sammankomster?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Regeringen har beslutat att stoppa alla allmänna sammankomster och offentliga tillställningar med fler än 50 personer. Syftet är att förhindra tillfällen då ett stort antal människor kommer från olika delar av landet och samlas på en och samma plats. Den nya regleringen gäller ej skolor, kollektivtrafik, privata evenemang och besök i affärer. "
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för stora evenemang? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Regeringen har beslutat att stoppa alla allmänna sammankomster och offentliga tillställningar med fler än 50 personer. Syftet är att förhindra tillfällen då ett stort antal människor kommer från olika delar av landet och samlas på en och samma plats. Den nya regleringen gäller ej skolor, kollektivtrafik, privata evenemang och besök i affärer. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller för kollektivtrafik och allmänna färdmedel?",
      "entities": {
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Vad gäller för kollektivtrafik och allmänna färdmedel?",
        "vilka regler gäller för kollektivtrafik         arbetsplatser och skolor?",
        "hur många får det vara på tunnelbanan",
        "vad gäller för tunnelbanan",
        "vad gäller för kollektivtrafiken",
        "hur många får det vara på en arbetsplats",
        "Vad ska _PERS_PRON tänka på när _PERS_PRON åker buss tåg och taxi?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Kollektivtrafik omfattas inte av förbudet mot allmänna sammankomster med fler än 50 personer. Friska personer kan åka till jobbet och skolan. "
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för kollektivtrafik och allmänna färdmedel?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Kollektivtrafik omfattas inte av förbudet mot allmänna sammankomster med fler än 50 personer. Friska personer kan åka till jobbet och skolan. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller för arbetsplatser och skolor?",
      "entities": {
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Vad gäller för arbetsplatser och skolor?",
        "hur många får det vara på en arbetsplats",
        "vad gäller skolor",
        "vad gäller jobbet",
        "kan _PERS_PRON gå till skolan",
        "kan _PERS_PRON gå till jobbet?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Arbetsplatser och skolor omfattas inte av förbudet mot allmänna sammankomster med fler än 50 personer men man kan tänka på att minimera aktiviteter som samlar många personer."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för arbetsplatser och skolor?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Arbetsplatser och skolor omfattas inte av förbudet mot allmänna sammankomster med fler än 50 personer men man kan tänka på att minimera aktiviteter som samlar många personer."
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
        "REF_PRON": REF_PRON,
        "AUX": AUX
      },
      "examples": [
        "Vilka råd finns det för resa till andra länder?",
        "får _PERS_PRON resa till andra länder",
        "är det okej att resa utomlands",
        "vad gäller om _PERS_PRON vill resa utomlands",
        "är det ok att åka utomlands",
        "_AUX _PERS_PRON ställa in _REF_PRON semester utomlands",
        "kan _PERS_PRON åka utomlands",
        "vad rekommenderas gällande utlandsresor",
        "får _PERS_PRON åka utomlands",
        "vad gäller om _PERS_PRON tänkt resa utomlands",
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
      "name": "question: AUX PERS_PRON vidta några åtgärder även om PERS_PRON känner REF_PRON frisk efter resa från drabbade länder?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "REF_PRON": REF_PRON,
        "AUX": AUX
      },
      "examples": [
        "_AUX _PERS_PRON vidta några åtgärder även om _PERS_PRON känner _REF_PRON frisk efter resa från drabbade länder?",
        "_AUX _PERS_PRON göra något särskilt om _PERS_PRON är frisk efter resa",
        "ska _PERS_PRON göra något särskilt om _PERS_PRON känner _REF_PRON frisk efter resa",
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
        "classifiedIntentName": "question: AUX PERS_PRON vidta några åtgärder även om PERS_PRON känner REF_PRON frisk efter resa från drabbade länder?",
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
        "_PERS_PRON tror _PERS_PRON har fått _CORONA vad _AUX _PERS_PRON göra",
        "vad gör _PERS_PRON om _PERS_PRON tror att _PERS_PRON har fått _CORONA",
        "hur gör _PERS_PRON om _PERS_PRON har fått _CORONA",
        "vad _AUX _PERS_PRON göra om _PERS_PRON har fått _CORONA",
        "om _PERS_PRON tror _PERS_PRON har _CORONA vad _AUX _PERS_PRON göra",
        "_PERS_PRON har corona vad _AUX _PERS_PRON göra",
        "_PERS_PRON misstänker att _PERS_PRON kanske har _CORONA vad gör _PERS_PRON nu",
        "_PERS_PRON har varit i Italien ska _PERS_PRON vara i karantän?",
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
        "hur går det med vaccinet?",
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
      "name": "question: AUX PERS_PRON som symtomfri jobba hemma?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "AUX": AUX
      },
      "examples": [
        "_AUX _PERS_PRON som symtomfri jobba hemma?",
        "_AUX _PERS_PRON jobba hemma även fast _PERS_PRON inte har några symtom?",
        "_AUX _PERS_PRON jobba hemma även fast _PERS_PRON inte uppvisar symtom?",
        "Ska _PERS_PRON jobba hemma om _PERS_PRON är fullt frisk?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Jobba hemifrån i den mån det är möjligt, i samråd med din arbetsgivare."
      ],
      "set": {
        "classifiedIntentName": "question: AUX PERS_PRON som symtomfri jobba hemma?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Jobba hemifrån i den mån det är möjligt, i samråd med din arbetsgivare."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller privata sammankomster såsom studentskivor eller bröllop?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "POS_PRON": POS_PRON
      },
      "examples": [
        "Vad gäller privata sammankomster såsom studentskivor eller bröllop?",
        "kan _PERS_PRON ha studentskiva",
        "kan _PERS_PRON ha studentmottagning",
        "kan _PERS_PRON ha _POS_PRON studentskiva",
        "kan _PERS_PRON ha _POS_PRON studentmottagning",
        "kan _PERS_PRON ha _POS_PRON bröllop",
        "kan _PERS_PRON ha _POS_PRON begravning",
        "kan _PERS_PRON ha bröllop",
        "kan _PERS_PRON ha begravning",
        ""
      ]
    },
    "bot": {
      "say": [
        "Gör en riskbedömning. Se till att informera personer att stanna hemma om de känner sig sjuka. Se även till att det finns tillgång till tvål och vatten, alternativt handsprit, under sammankomsten eller eventet."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller privata sammankomster såsom studentskivor eller bröllop?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Gör en riskbedömning. Se till att informera personer att stanna hemma om de känner sig sjuka. Se även till att det finns tillgång till tvål och vatten, alternativt handsprit, under sammankomsten eller eventet."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan idrotts- och träningsaktiviteter fortsätta som vanligt?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "AUX": AUX
      },
      "examples": [
        "Kan idrotts- och träningsaktiviteter fortsätta som vanligt?",
        "kan _PERS_PRON fortsätta träna",
        "kan _PERS_PRON fortsätta idrotta",
        "kan _PERS_PRON gå och träna",
        "kan _PERS_PRON fortfarande idrotta?",
        "_AUX _PERS_PRON sluta träna?",
        "_AUX _PERS_PRON undvika att träna?",
        "Kan _PERS_PRON idrotta som vanligt?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Du kan fortsätta idrotta, men vissa försiktighetsåtgärder bör vidtas för att minska risken för spridning av covid-19. Minska moment med närkontakt, torka av utrustning med desinfektionsmedel och idrotta utomhus om det är möjligt. "
      ],
      "set": {
        "classifiedIntentName": "question: Kan idrotts- och träningsaktiviteter fortsätta som vanligt?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Du kan fortsätta idrotta, men vissa försiktighetsåtgärder bör vidtas för att minska risken för spridning av covid-19. Minska moment med närkontakt, torka av utrustning med desinfektionsmedel och idrotta utomhus om det är möjligt. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär de nya reglerna för restauranger och deras gäster?",
      "entities": {
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Vad innebär de nya reglerna för restauranger och deras gäster?",
        "vad gäller för restauranger",
        "kan _PERS_PRON gå på restaurang",
        "kan _PERS_PRON gå ut och äta",
        "kan _PERS_PRON besöka restaurang",
        "kan _PERS_PRON göra restaurangsbesök",
        ""
      ]
    },
    "bot": {
      "say": [
        "Trängsel mellan människor i köer, vid bord, bufféer eller bardiskar får inte förekomma. Gäster ska kunna hålla avstånd till varandra samt äta och dricka sittandes vid bord, inte ståendes vid ståbord eller bardiskar. Personal ska helst bära ut beställningarna. Det är möjligt att hämta och lämna egen mat och dryck om det finns tillräckligt med utrymme."
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär de nya reglerna för restauranger och deras gäster?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Trängsel mellan människor i köer, vid bord, bufféer eller bardiskar får inte förekomma. Gäster ska kunna hålla avstånd till varandra samt äta och dricka sittandes vid bord, inte ståendes vid ståbord eller bardiskar. Personal ska helst bära ut beställningarna. Det är möjligt att hämta och lämna egen mat och dryck om det finns tillräckligt med utrymme."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller vid resa inom Sverige?",
      "entities": {
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Vad gäller vid resa inom Sverige?",
        "kan _PERS_PRON resa i sverige",
        "kan _PERS_PRON resa inom sverige?",
        "är det ok att resa i sverige?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Om resan är nödvändig är det ok att resa inom Sverige. Känner du dig minsta sjuk ska du dock hålla dig hemma och riskgrupper bör överväga att resa eller ta emot besök. Tänk över om du måste resa eller ifall det kan vänta."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller vid resa inom Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Om resan är nödvändig är det ok att resa inom Sverige. Känner du dig minsta sjuk ska du dock hålla dig hemma och riskgrupper bör överväga att resa eller ta emot besök. Tänk över om du måste resa eller ifall det kan vänta."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad ska PERS_PRON tänka på när PERS_PRON åker tåg, buss och taxi?",
      "entities": {
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Vad ska _PERS_PRON tänka på när _PERS_PRON åker tåg, buss och taxi?",
        "Vad ska _PERS_PRON tänka på när _PERS_PRON åker kommunalt?",
        "Vad ska _PERS_PRON tänka på när _PERS_PRON åker tåg?",
        "Vad ska _PERS_PRON tänka på när _PERS_PRON åker buss?",
        "Vad ska _PERS_PRON tänka på när _PERS_PRON åker taxi?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Håll avstånd till andra resenärer. Se till att tvätta händerna med tvål och varmt vatten, alternativt handsprit. Hosta och nys i armvecket eller i en pappersnäsduk, undvik att röra vid ansiktet eller ögonen. Stanna hemma om du känner dig sjuk. "
      ],
      "set": {
        "classifiedIntentName": "question: Vad ska PERS_PRON tänka på när PERS_PRON åker tåg, buss och taxi?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Håll avstånd till andra resenärer. Se till att tvätta händerna med tvål och varmt vatten, alternativt handsprit. Hosta och nys i armvecket eller i en pappersnäsduk, undvik att röra vid ansiktet eller ögonen. Stanna hemma om du känner dig sjuk. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller handeln?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "POS_PRON": POS_PRON
      },
      "examples": [
        "Vad gäller handeln?",
        "kan _PERS_PRON handla i butiker",
        "kan _PERS_PRON handla i affärer",
        "kan _PERS_PRON gå i köpcentrum",
        "kan _PERS_PRON gå i gallerior",
        "kan _PERS_PRON shoppa",
        "kan _PERS_PRON ha _POS_PRON butik öppen?",
        "måste _PERS_PRON stänga _POS_PRON butik?",
        "måste _PERS_PRON stänga _POS_PRON affär",
        ""
      ]
    },
    "bot": {
      "say": [
        "Butiker, köpcentrum och gallerior bör begränsa antalet kunder som vistas i lokalen samtidigt. Det bör också tas fram alternativa lösningar till kassaköer och det ska anvisas hur långt kunderna får stå mellan varandra. Kunderna ska även erbjudas handtvätt med tvål och vatten, alternativt handsprit."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller handeln?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Butiker, köpcentrum och gallerior bör begränsa antalet kunder som vistas i lokalen samtidigt. Det bör också tas fram alternativa lösningar till kassaköer och det ska anvisas hur långt kunderna får stå mellan varandra. Kunderna ska även erbjudas handtvätt med tvål och vatten, alternativt handsprit."
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
        "what is _CORONA?",
        "Vad är det för skillnad på _CORONA och Covid-19?",
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
        "kan jag få _CORONA från influensa?",
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
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON,
        "REF_PRON": REF_PRON,
        "AUX": AUX
      },
      "examples": [
        "Skyddar munskydd mot _CORONA",
        "funkar munskydd",
        "skyddar munskydd mot _CORONA",
        "hjälper munskydd",
        "kan _PERS_PRON skydda _REF_PRON med munskydd",
        "är det bra att ha munskydd",
        "_AUX _PERS_PRON ha munskydd",
        "_AUX _PERS_PRON ha skydd för munnen",
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
        "REF_PRON": REF_PRON,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Hur många blir friska från _CORONA?",
        "kommer alla bli friska från _CORONA?",
        "hur pass många blir friska",
        "hur stor är chansen att klara _REF_PRON",
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
      "name": "question: AUX PERS_PRON städa eller hantera POS_PRON sopor på något särskilt sätt?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "POS_PRON": POS_PRON,
        "AUX": AUX,
        "CORONA": CORONA
      },
      "examples": [
        "_AUX _PERS_PRON städa eller hantera _POS_PRON sopor på något särskilt sätt?",
        "_AUX _PERS_PRON städa på något särskilt sätt",
        "_AUX _PERS_PRON städa extra noga",
        "vad _AUX _PERS_PRON göra med _POS_PRON sopor",
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
        "classifiedIntentName": "question: AUX PERS_PRON städa eller hantera POS_PRON sopor på något särskilt sätt?",
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
        "varför stänger du inte grundskolorna i Sverige",
        "varför stänger vinter grundskolor?",
        "ska MINA BARN stanna hemma från skolan?",
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
      "name": "question: Kan CORONA smitta mellan djur och människa och kan POS_PRON husdjur smittas av viruset?",
      "entities": {
        "CORONA": CORONA,
        "POS_PRON": POS_PRON,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Kan _CORONA smitta mellan djur och människa och kan _POS_PRON husdjur smittas av viruset?",
        "kan _PERS_PRON smittas av POS_PRONOMEN husdjur",
        "kan _PERS_PRON få _CORONA av djur",
        "kan _PERS_PRON smitta _POS_PRON husdjur",
        "smittar _CORONA mellan människor och husdjur",
        "hur skyddar _PERS_PRON _POS_PRON husdjur",
        "kan _PERS_PRON få _CORONA av _POS_PRON hund?",
        "kan _PERS_PRON få _CORONA av _POS_PRON katt?",
        "smittar _POS_PRON hund?",
        "smittar _POS_PRON katt?",
        "kan jag bli smittad av ett djur?",
        "kan jag smitta mitt husdjur?",
        "Kan djur bli smittade av _CORONA",
        "Kan _POS_PRON husdjur ha _CORONA",
        "Smittar _CORONA från människa till djur",
        ""
      ]
    },
    "bot": {
      "say": [
        "Det finns inga uppgifter om att covid-19 kan smitta från människa till djur."
      ],
      "set": {
        "classifiedIntentName": "question: Kan CORONA smitta mellan djur och människa och kan POS_PRON husdjur smittas av viruset?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det finns inga uppgifter om att covid-19 kan smitta från människa till djur."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: I vilka länder pågår det smittspridning?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "I vilka länder pågår det smittspridning?",
        "vilka länder är smittade",
        "i vilka länder kan _PERS_PRON få _CORONA",
        "finns det några säkra länder",
        "är alla länder drabbade",
        "vilka länder har blivit smittade",
        "vilka länder har blivit drabbade",
        "var finns _CORONA",
        "vilka länder har _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "Covid-19 finns eller kommer finnas i alla världsdelar. Detta kallas pandemi. "
      ],
      "set": {
        "classifiedIntentName": "question: I vilka länder pågår det smittspridning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Covid-19 finns eller kommer finnas i alla världsdelar. Detta kallas pandemi. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär det att vi har en samhällsspridning av CORONA i Sverige?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Vad innebär det att vi har en samhällsspridning av _CORONA i Sverige?",
        "vad innebär samhällsspridning",
        "vad betyder samhällsspridning",
        "vad betyder spridning i samhället",
        "har vi samhällsspridning i sverige",
        "har vi samhällsspridning",
        "är det samhällsspridning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Det innebär att det finns ett flertal fall i Sverige där man kunnat spåra smittan till resa eller att den som smittats varit kontakt med ett annat känt fall av covid-19."
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär det att vi har en samhällsspridning av CORONA i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det innebär att det finns ett flertal fall i Sverige där man kunnat spåra smittan till resa eller att den som smittats varit kontakt med ett annat känt fall av covid-19."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär smittspårning av personer?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Vad innebär smittspårning av personer?",
        "vad är smittspårning",
        "vad betyder smittspårning",
        "vad betyder det att vara smittspårad",
        "hur smittspårar man",
        "vad är smittspårning av _CORONA",
        "vad händer vid smittspårning?",
        "vad innebär smittspårning?",
        "hur smittspårar ni",
        "hur smittspårar de",
        "hur smittspårar dem",
        ""
      ]
    },
    "bot": {
      "say": [
        "Smittspårning innebär att den behandlande läkaren är skyldig att ta reda på hur en smittad person har blivit smittad, samt vem eller vilka andra som kan vara smittade eller har blivit utsatta för smittan. Smittspårning kan ha en avgörande betydelse för att förhindra smittspridning och minska risken för större utbrott."
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär smittspårning av personer?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Smittspårning innebär att den behandlande läkaren är skyldig att ta reda på hur en smittad person har blivit smittad, samt vem eller vilka andra som kan vara smittade eller har blivit utsatta för smittan. Smittspårning kan ha en avgörande betydelse för att förhindra smittspridning och minska risken för större utbrott."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller för sammankomster med färre än 50 personer?",
      "entities": {
        "AUX": AUX,
        "PERS_PRON": PERS_PRON,
        "POS_PRON": POS_PRON
      },
      "examples": [
        "Vad gäller för sammankomster med färre än 50 personer?",
        "hur arrangeras en sammankomst med färre än 50 personer?",
        "hur _AUX en sammankomst med färre än 50 personer arrangeras?",
        "vad _AUX _PERS_PRON vid ett evenemang?",
        "vad _AUX _PERS_PRON vid en sammankomst?",
        "_AUX _PERS_PRON göra en riskbedömning av _POS_PRON sammankomst?",
        "_AUX _PERS_PRON göra en riskbedömning av _POS_PRON event?",
        "vad finns det för alternativ till event?",
        "vad finns det för alternativ till möte?",
        "vad finns det för alternativ till sammankomst?",
        "Vad gäller för event  med färre än 50 personer?",
        "hur håller _PERS_PRON event för färre än 50 personer?",
        "Vad gäller för sammankomster i samhället?",
        "Vad gäller för sammankomster?",
        "Vad gäller för event ?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Digitala möten, såsom Skype-möten eller webbseminarier, bör generellt övervägas som alternativ. Vid sammankomst eller event, informera personer att stanna hemma om de känner sig sjuka. Se även till att det finns tillgång till tvål och vatten, alternativt handsprit. "
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för sammankomster med färre än 50 personer?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Digitala möten, såsom Skype-möten eller webbseminarier, bör generellt övervägas som alternativ. Vid sammankomst eller event, informera personer att stanna hemma om de känner sig sjuka. Se även till att det finns tillgång till tvål och vatten, alternativt handsprit. "
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
        "Hälsokontroller av resenärer som anländer på flygplatser har tidigare inte visat sig ge någon effektiv åtgärd för att begränsa smittspridning. För passagerare på flygplan med symtom på covid-19 är befälhavaren skyldig att informera den ankommande flygplatsen."
      ],
      "set": {
        "classifiedIntentName": "question: Skulle hälsokontroller av resenärer med flyg från länder där smittspridning pågår kunna begränsa smittspridningen i Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Hälsokontroller av resenärer som anländer på flygplatser har tidigare inte visat sig ge någon effektiv åtgärd för att begränsa smittspridning. För passagerare på flygplan med symtom på covid-19 är befälhavaren skyldig att informera den ankommande flygplatsen."
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
        "vilka är Folkhälsomyndigheten?",
        "vad är Folkhälsomyndighetens jobb?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Folkhälsomyndigheten tar fram och förmedlar vetenskapligt grundad kunskap som förebygger ohälsa och sjukdomar. Folkhälsomyndigheten följer händelseutvecklingen av covid-19, och gör riskbedömningar samt bedömer hur utbrottet utvecklas. Folkhälsomyndigheten tar ställning till vilka åtgärdar som är relevanta att genomföra och informerar sjukvård, regionala smittsskyddsenheter samt andra aktörer.."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gör Folkhälsomyndigheten?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Folkhälsomyndigheten tar fram och förmedlar vetenskapligt grundad kunskap som förebygger ohälsa och sjukdomar. Folkhälsomyndigheten följer händelseutvecklingen av covid-19, och gör riskbedömningar samt bedömer hur utbrottet utvecklas. Folkhälsomyndigheten tar ställning till vilka åtgärdar som är relevanta att genomföra och informerar sjukvård, regionala smittsskyddsenheter samt andra aktörer.."
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
      "name": "question: Vad innebär det att CORONA klassas som allmänfarlig och samhällsfarlig sjukdom enligt smittskyddslagen?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Vad innebär det att _CORONA klassas som allmänfarlig och samhällsfarlig sjukdom enligt smittskyddslagen?",
        "vad betyder det att corona är allmänfarlig",
        "vad innebär samhällsfarlig sjukdom",
        "vad är en samhällsfarlig sjukdom",
        "vad är allmänfarlig",
        "är _CORONA samhällsfarlig",
        ""
      ]
    },
    "bot": {
      "say": [
        "Att klassa smittan som allmänfarlig och samhällsfarlig stärker den svenska beredskapen eftersom det gör det möjligt att vidta de förebyggande åtgärder som är relevanta för att hindra smittspridning i samhället. För allmänfarlig och samhällsfarlig smitta finns möjligheter att besluta om åtgärder som exempelvis karantän, isolering, hälsoundersökningar vid inresa och avspärrningar av områden."
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär det att CORONA klassas som allmänfarlig och samhällsfarlig sjukdom enligt smittskyddslagen?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Att klassa smittan som allmänfarlig och samhällsfarlig stärker den svenska beredskapen eftersom det gör det möjligt att vidta de förebyggande åtgärder som är relevanta för att hindra smittspridning i samhället. För allmänfarlig och samhällsfarlig smitta finns möjligheter att besluta om åtgärder som exempelvis karantän, isolering, hälsoundersökningar vid inresa och avspärrningar av områden."
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
      "name": "question: Finns det självtester för CORONA?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON,
        "REF_PRON": REF_PRON
      },
      "examples": [
        "Finns det självtester för _CORONA?",
        "kan _PERS_PRON testa _REF_PRON hemma för _CORONA?",
        "går det att testa sig hemma?",
        "är självtester pålitliga?",
        "kan _PERS_PRON lita på självtester?",
        "kan _PERS_PRON testa _REF_PRON för _CORONA hemma?",
        "kan _PERS_PRON testa om _PERS_PRON har _CORONA hemma?",
        "kan _PERS_PRON testa _REF_PRON för _CORONA i hemmet?",
        "kan _PERS_PRON testa om _PERS_PRON har _CORONA i hemmet?",
        "går det att testa sig för _CORONA hemifrån?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Just nu finns det tillverkare som marknadsför självtester för covid-19. Det är dock inte klart hur exakta eller känsliga dessa tester är. Det rekommenderas därför inte att använda dessa självtester."
      ],
      "set": {
        "classifiedIntentName": "question: Finns det självtester för CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Just nu finns det tillverkare som marknadsför självtester för covid-19. Det är dock inte klart hur exakta eller känsliga dessa tester är. Det rekommenderas därför inte att använda dessa självtester."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller angående att läsa på distans?",
      "entities": {
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Vad gäller angående att läsa på distans?",
        "behöver _PERS_PRON läsa via distans nu?",
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
        "Gymnasieelever och studenter är inte i behov av omsorg på samma sätt som barn. För att bromsa spridningen av covid-19 rekommenderar Folkhälsomyndigheten därför från den 17 mars 2020 att undervisningen i gymnasieskolor, universitet, högskolor, yrkeshögskolor och komvux ska ske på distans."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller angående att läsa på distans?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Gymnasieelever och studenter är inte i behov av omsorg på samma sätt som barn. För att bromsa spridningen av covid-19 rekommenderar Folkhälsomyndigheten därför från den 17 mars 2020 att undervisningen i gymnasieskolor, universitet, högskolor, yrkeshögskolor och komvux ska ske på distans."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag är 70 år, hur AUX jag bete mig nu när det pågår samhällsspridning av CORONA ute i samhället? ",
      "entities": {
        "CORONA": CORONA,
        "AUX": AUX,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Jag är 70 år, hur _AUX jag bete mig nu när det pågår samhällsspridning av _CORONA ute i samhället? ",
        "hur _AUX _PERS_PRON bete sig om  _PERS_PRON är över 70 år?",
        "hur _AUX äldre bete sig?",
        "vad _AUX äldre göra under pågående smittspridning?",
        "vad _AUX äldre undvika?",
        "kan äldre gå på promenad utomhus?",
        "vad _AUX äldre göra i nuläget?",
        "jag är 70 år, vad gör jag nu?",
        "vi är 70 år, vad gör vi nu?",
        "vi är 70 år, hur _AUX vi bete oss nu när det pågår samhällsspridning av _CORONA ute i samhället? ",
        ""
      ]
    },
    "bot": {
      "say": [
        "Folkhälsomyndigheten uppmanar personer som är 70 år och äldre att, under en avgränsad tid, minska närmare kontakt med andra. Undvik folksamlingar i exempelvis kollektivtrafik, affärer, apotek eller offentliga lokaler och be om hjälp för att göra ärenden som exempelvis handla mat. För att slippa känna dig isolerad kan du prata i telefon med nära och kära eller hålla kontakt via sociala medier eller dator. "
      ],
      "set": {
        "classifiedIntentName": "question: Jag är 70 år, hur AUX jag bete mig nu när det pågår samhällsspridning av CORONA ute i samhället? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Folkhälsomyndigheten uppmanar personer som är 70 år och äldre att, under en avgränsad tid, minska närmare kontakt med andra. Undvik folksamlingar i exempelvis kollektivtrafik, affärer, apotek eller offentliga lokaler och be om hjälp för att göra ärenden som exempelvis handla mat. För att slippa känna dig isolerad kan du prata i telefon med nära och kära eller hålla kontakt via sociala medier eller dator. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Nu när det pågår samhällsspridning av CORONA, hur ska PERS_PRON ta hand om och skydda personer som är 70 år och äldre?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON,
        "POS_PRON": POS_PRON
      },
      "examples": [
        "Nu när det pågår samhällsspridning av _CORONA, hur ska _PERS_PRON ta hand om och skydda personer som är 70 år och äldre?",
        "hur skyddar _PERS_PRON de äldre?",
        "hur skyddar _PERS_PRON de som är 70 år eller äldre?",
        "hur kan _PERS_PRON ta hand om äldre?",
        "hur håller _PERS_PRON äldre borta från _CORONA?",
        "kan _PERS_PRON ha närkontakt med äldre?",
        "hur skyddar _PERS_PRON äldre från smitta?",
        "kan _PERS_PRON träffa _POS_PRON föräldrar",
        "kan _PERS_PRON träffa _POS_PRON mamma",
        "kan _PERS_PRON träffa _POS_PRON pappa",
        "kan _PERS_PRON träffa _POS_PRON mormor",
        "kan _PERS_PRON träffa _POS_PRON farmor",
        "kan _PERS_PRON träffa _POS_PRON morfar",
        "kan _PERS_PRON träffa _POS_PRON farfar",
        ""
      ]
    },
    "bot": {
      "say": [
        "Sedan den 1 april råder det besöksförbud på landets samtliga äldreboenden, detta eftersom det är av allra största vikt att skydda de äldre från smitta. Ha ingen närkontakt med personer utanför äldreboenden som är 70 år och äldre om du absolut inte måste. Stanna hemma när du känner dig sjuk, även om du bara är lite förkyld. "
      ],
      "set": {
        "classifiedIntentName": "question: Nu när det pågår samhällsspridning av CORONA, hur ska PERS_PRON ta hand om och skydda personer som är 70 år och äldre?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Sedan den 1 april råder det besöksförbud på landets samtliga äldreboenden, detta eftersom det är av allra största vikt att skydda de äldre från smitta. Ha ingen närkontakt med personer utanför äldreboenden som är 70 år och äldre om du absolut inte måste. Stanna hemma när du känner dig sjuk, även om du bara är lite förkyld. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vilka personer AUX testas för det CORONA?",
      "entities": {
        "CORONA": CORONA,
        "AUX": AUX,
        "PERS_PRON": PERS_PRON,
        "REF_PRON": REF_PRON
      },
      "examples": [
        "Vilka personer _AUX testas för det _CORONA?",
        "vem kan testas för _CORONA?",
        "vilka personer kan testa sig för _CORONA?",
        "kan _PERS_PRON testa _REF_PRON för _CORONA",
        "när kan _PERS_PRON testa _REF_PRON för _CORONA?",
        "_AUX _PERS_PRON stanna hemma när _PERS_PRON uppvisar symtom på _CORONA?",
        "vem _AUX testas för _CORONA?",
        "_AUX _PERS_PRON stanna hemma om _PERS_PRON uppvisar symtom på _CORONA?",
        "_AUX _PERS_PRON stanna hemma ifall _PERS_PRON uppvisar symtom på _CORONA?",
        "kan _PERS_PRON testa _REF_PRON för _CORONA?",
        "vilka testas för _CORONA?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Personer som är i behov av vård på sjukhus, alternativt personal inom sjukvård och äldreomsorg med misstänkt smitta av det nya coronaviruset. Alla som är sjuka i förkylning eller influensaliknande symtom ska vara hemma för att inte riskera att sprida smittan."
      ],
      "set": {
        "classifiedIntentName": "question: Vilka personer AUX testas för det CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Personer som är i behov av vård på sjukhus, alternativt personal inom sjukvård och äldreomsorg med misstänkt smitta av det nya coronaviruset. Alla som är sjuka i förkylning eller influensaliknande symtom ska vara hemma för att inte riskera att sprida smittan."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Om en person i familjen är sjuk - måste alla stanna hemma då? ",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "CORONA": CORONA,
        "SKA": SKA
      },
      "examples": [
        "Om en person i familjen är sjuk - måste alla stanna hemma då? ",
        "måste alla i familjen stanna hemma om en är sjuk?",
        "måste _PERS_PRON stanna hemma om någon i hushållet är sjuk?",
        "om någon i hushållet är sjuk utan symtom, måste resten av hushållet stanna hemma då?",
        "kan _PERS_PRON gå till skolan även om någon i familjen är sjuk?",
        "kan _PERS_PRON gå till jobbet även fast någon i hushållet är sjuk?",
        "MITT BARN är sjuk i _CORONA ska _PERS_PRON stanna hemma? ",
        "MITT BARN är sjuk ska jag stanna hemma?",
        "Jag bor med någon som har _CORONA _SKA jag stanna hemma ",
        "Ska min son vara hemma?",
        "Ska min dotter vara hemma? ",
        ""
      ]
    },
    "bot": {
      "say": [
        "Så länge andra familjemedlemmar inte har symtom kan de göra som vanligt. Det är dock väldigt viktigt att vara uppmärksam på symtom och stanna hemma ifall antingen du eller någon i ditt hushåll börjar uppvisa symtom så som hosta eller feber. "
      ],
      "set": {
        "classifiedIntentName": "question: Om en person i familjen är sjuk - måste alla stanna hemma då? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Så länge andra familjemedlemmar inte har symtom kan de göra som vanligt. Det är dock väldigt viktigt att vara uppmärksam på symtom och stanna hemma ifall antingen du eller någon i ditt hushåll börjar uppvisa symtom så som hosta eller feber. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur vet PERS_PRON om POS_PRON symtom beror på pollenallergi eller på CORONA? ",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON,
        "POS_PRON": POS_PRON,
        "AUX": AUX
      },
      "examples": [
        "Hur vet _PERS_PRON om _POS_PRON symtom beror på pollenallergi eller på _CORONA? ",
        "vad är skillnaden på _CORONA och pollenallergi?",
        "pollen eller _CORONA?",
        "hur vet _PERS_PRON om jag har _CORONA eller pollenallergi?",
        "hur vet _PERS_PRON om jag har _CORONA eller pollen",
        "Hur vet _PERS_PRON om _POS_PRON symtom beror på pollen eller _CORONA? ",
        "är det pollen eller _CORONA",
        "liknar pollen _CORONA",
        "liknar pollenallergi _CORONA",
        "_AUX _PERS_PRON stanna hemma ifall _PERS_PRON tror _PERS_PRON är allergisk?",
        "_AUX _PERS_PRON stanna hemma ifall _PERS_PRON tror _PERS_PRON har pollen?",
        "_AUX _PERS_PRON stanna hemma ifall _PERS_PRON tror _PERS_PRON har pollenallergi?",
        "Har _PERS_PRON pollenallergi eller corona?",
        "_PERS_PRON har ont i halsen ska _PERS_PRON vara i karantän?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Både covid-19 och pollenallergi kan ge milda förkylningssymptom. Om du får symtom som snuva, lätt hosta eller ont i halsen och misstänker att det är pollenallergi bör du stanna hemma och medicinera som vanligt. Om symtomen inte förvärras behöver du inte längre vara hemma."
      ],
      "set": {
        "classifiedIntentName": "question: Hur vet PERS_PRON om POS_PRON symtom beror på pollenallergi eller på CORONA? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Både covid-19 och pollenallergi kan ge milda förkylningssymptom. Om du får symtom som snuva, lätt hosta eller ont i halsen och misstänker att det är pollenallergi bör du stanna hemma och medicinera som vanligt. Om symtomen inte förvärras behöver du inte längre vara hemma."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag känner mig orolig för CORONA, hur ska jag hantera min oro?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Jag känner mig orolig för _CORONA, hur ska jag hantera min oro?",
        "jag är rädd för _CORONA, kan jag få hjälp? ",
        "jag är rädd för _CORONA, kan jag få stöd?",
        "jag är rädd för _CORONA, vad kan jag göra?",
        "jag har ångest på grund av _CORONA, kan jag få hjälp?",
        "jag får panik av _CORONA, kan jag få hjälp?",
        "jag är livrädd för _CORONA, kan jag få hjälp?",
        "jag har ångest på grund av _CORONA, kan jag få stöd",
        "jag har ångest på grund av _CORONA, vad kan jag göra?",
        "jag får panik av _CORONA, kan jag få stöd",
        "jag får panik av _CORONA, vad kan jag göra?",
        "jag är livrädd för _CORONA, kan jag få stöd?",
        "jag är livrädd för _CORONA, vad kan jag göra?",
        "Hur ska jag hantera min oro?",
        "Jag är orolig",
        "Jag har ångest",
        "Jag är rädd",
        ""
      ]
    },
    "bot": {
      "say": [
        "Se först och främst till att använda dig av tillförlitliga källor för att hämta information om covid-19. Begränsa tiden du tar del av nyheter och sociala medier. Försök behåll dina vanliga rutiner så långt det går och prata gärna med andra om det som oroar dig."
      ],
      "set": {
        "classifiedIntentName": "question: Jag känner mig orolig för CORONA, hur ska jag hantera min oro?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Se först och främst till att använda dig av tillförlitliga källor för att hämta information om covid-19. Begränsa tiden du tar del av nyheter och sociala medier. Försök behåll dina vanliga rutiner så långt det går och prata gärna med andra om det som oroar dig."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan vaccin mot pneumokocker ge skydd mot CORONA",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Kan vaccin mot pneumokocker ge skydd mot _CORONA",
        "kan _PERS_PRON skyddas av vaccin mot pneumokocker?",
        "hjälper vaccin mot pneumokocker mot _CORONA",
        "hjälper vaccin mot pneumokocker ",
        "skyddas jag om jag tar vaccin mot pneumokocker",
        "skyddas jag från _CORONA om jag tar vaccin mot pneumokocker",
        ""
      ]
    },
    "bot": {
      "say": [
        "Nej, vaccination mot pneumokocker minskar inte risken för att bli drabbad av covid-19-infektion. Om du vaccinerar dig mot pneumokocker är du enbart skyddat mot sjukdom orsakad av vissa typer av pneumokocker. "
      ],
      "set": {
        "classifiedIntentName": "question: Kan vaccin mot pneumokocker ge skydd mot CORONA",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Nej, vaccination mot pneumokocker minskar inte risken för att bli drabbad av covid-19-infektion. Om du vaccinerar dig mot pneumokocker är du enbart skyddat mot sjukdom orsakad av vissa typer av pneumokocker. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan CORONA smitta via sedlar och mynt? ",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Kan _CORONA smitta via sedlar och mynt? ",
        "Smittar _CORONA när jag betalar med kontanter",
        "Smittar _CORONA om jag betalar kontant",
        "smitttar _CORONA via sedlar och mynt?",
        "Kan jag bli smittad då jag betalar med sedlar och mynt?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Det finns inga uppgifter om att personer smittats via sedlar eller mynt. Covid-19 smittar i hörsta hand mellan människor genom droppsmitta, det vill säga att smitta överförs till slemhinna i ögon, näsa eller mun från droppar som sprids i luften när en sjuk person hostar eller nyser. "
      ],
      "set": {
        "classifiedIntentName": "question: Kan CORONA smitta via sedlar och mynt? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det finns inga uppgifter om att personer smittats via sedlar eller mynt. Covid-19 smittar i hörsta hand mellan människor genom droppsmitta, det vill säga att smitta överförs till slemhinna i ögon, näsa eller mun från droppar som sprids i luften när en sjuk person hostar eller nyser. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Smittar CORONA via vatten och mat?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Smittar _CORONA via vatten och mat?",
        "kan _PERS_PRON få _CORONA om _PERS_PRON dricker vatten",
        "kan _PERS_PRON få _CORONA när _PERS_PRON dricker vatten",
        "kan _PERS_PRON få _CORONA om _PERS_PRON äter mat",
        "kan _PERS_PRON få _CORONA när _PERS_PRON äter mat",
        ""
      ]
    },
    "bot": {
      "say": [
        "Det finns i inga uppgifter om att personer smittats genom att ha ätit mat eller druckit vatten. Covid-19 smittar i hörsta hand mellan människor genom droppsmitta, det vill säga att smitta överförs till slemhinna i ögon, näsa eller mun från droppar som sprids i luften när en sjuk person hostar eller nyser. "
      ],
      "set": {
        "classifiedIntentName": "question: Smittar CORONA via vatten och mat?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Det finns i inga uppgifter om att personer smittats genom att ha ätit mat eller druckit vatten. Covid-19 smittar i hörsta hand mellan människor genom droppsmitta, det vill säga att smitta överförs till slemhinna i ögon, näsa eller mun från droppar som sprids i luften när en sjuk person hostar eller nyser. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär karantän?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "AUX": AUX
      },
      "examples": [
        "Vad innebär karantän?",
        "vad innebär att sitta i karantän",
        "vad är karantän",
        "vad gör _PERS_PRON i karantän",
        "hur är _PERS_PRON i karantän",
        "vad är en karantän",
        "hur _AUX _PERS_PRON bete sig i karantän",
        ""
      ]
    },
    "bot": {
      "say": [
        "Den som har eller misstänks ha utsatts för covid-19 kan efter beslut av en smittskyddsläkare hållas i karantän. Karantän innebär att du placeras i hemmet, en avgränsad del av en byggnad eller ett område. I karantän får du inte lämna byggnaden eller ta emot besök förutom av vårdpersonal eller socialtjänst."
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär karantän?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Den som har eller misstänks ha utsatts för covid-19 kan efter beslut av en smittskyddsläkare hållas i karantän. Karantän innebär att du placeras i hemmet, en avgränsad del av en byggnad eller ett område. I karantän får du inte lämna byggnaden eller ta emot besök förutom av vårdpersonal eller socialtjänst."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan man sätta en hel stad i karantän?",
      "entities": {
        "POS_PRON": POS_PRON
      },
      "examples": [
        "Kan man sätta en hel stad i karantän?",
        "kan en hel stad sättas i karantän",
        "kan en stad sättas i karantän",
        "kan enbart en sättas i karantän",
        "kan _POS_PRON stad sättas i karantän",
        ""
      ]
    },
    "bot": {
      "say": [
        "Nej. Enskilda personer kan sättas i karantän, men inte en hel stad. Däremot finns det möjlighet att spärra av ett begränsat område"
      ],
      "set": {
        "classifiedIntentName": "question: Kan man sätta en hel stad i karantän?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Nej. Enskilda personer kan sättas i karantän, men inte en hel stad. Däremot finns det möjlighet att spärra av ett begränsat område"
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
        "vad är avspärrning",
        "vad händer vid avspärrning",
        "vad händer om det blir avspärrning",
        "vad görs vid en avspärrning",
        "varför görs en avspärrning?",
        "vad innebär avställning",
        ""
      ]
    },
    "bot": {
      "say": [
        "Vid avspärrning spärras ett område på maximalt några kvarter av. Det kan till exempel bli aktuellt om man upptäcker att någon eller några personer har insjuknat i en livshotande sjukdom inom ett avgränsat område. Avspärrningen ger möjlighet att hitta smittkällan och utreda om det finns fler inom området som kan ha smittats eller spridit smittan."
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär avspärrning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Vid avspärrning spärras ett område på maximalt några kvarter av. Det kan till exempel bli aktuellt om man upptäcker att någon eller några personer har insjuknat i en livshotande sjukdom inom ett avgränsat område. Avspärrningen ger möjlighet att hitta smittkällan och utreda om det finns fler inom området som kan ha smittats eller spridit smittan."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur länge kan en avspärrning pågå?",
      "entities": {
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Hur länge kan en avspärrning pågå?",
        "hur länge kan det vara avspärrning",
        "hur länge pågår en avspärrning",
        "hur länge kan _PERS_PRON vara under avspärrning",
        ""
      ]
    },
    "bot": {
      "say": [
        "Avspärrning är endast en tillfällig åtgärd för att utreda upptäckta sjukdomsfall och smittspridning. Det kan alltså inte användas för att t.ex. hindra personer från att resa in eller ut ur ett större geografiskt område."
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge kan en avspärrning pågå?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Avspärrning är endast en tillfällig åtgärd för att utreda upptäckta sjukdomsfall och smittspridning. Det kan alltså inte användas för att t.ex. hindra personer från att resa in eller ut ur ett större geografiskt område."
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
        "Varför ska undervisningen för gymnasieelever ske på distans?",
        "Varför ska undervisningen för studenter ske på distans?",
        "varför sker undervisningen för gymnasieelever och studenter på distans?",
        "varför sker undervisningen för gymnasieelever på distans?",
        "varför sker undervisningen för studenter på distans?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Gymnasieelever och studenter är inte i behov av omsorg, till skillnad från barn i grundskolan. De högre utbildningarna samlar också elever och studenter från mycket större upptagningsområden än vad grundskolan gör. Därför sker undervisning på gymnasieskolor, universitet, högskolor och vuxenutbildning på distans istället för i skolans lokaler."
      ],
      "set": {
        "classifiedIntentName": "question: Varför ska undervisningen för gymnasieelever och studenter ske på distans?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Gymnasieelever och studenter är inte i behov av omsorg, till skillnad från barn i grundskolan. De högre utbildningarna samlar också elever och studenter från mycket större upptagningsområden än vad grundskolan gör. Därför sker undervisning på gymnasieskolor, universitet, högskolor och vuxenutbildning på distans istället för i skolans lokaler."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur övervakas spridningen av CORONA",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Hur övervakas spridningen av _CORONA",
        "vad görs för att att övervaka spridningen av _CORONA",
        "vad gör Folkhälsomyndigheten för att övervaka spridningen av _CORONA",
        "Hur övervakar Folkhälsomyndiheten _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "Behandlande läkare och laboratorier skickar löpande in data som Folkhälsomyndigheten analyserar varje dag. Andra sätt att samla information är att ta stickprov från patienter med influensasymtom och andra utvalda grupper i samhället samt att samla in kunskap från sökningar och samtal genom 1177. Varje vecka skickar Folkhälsomyndigheten även ut en veckorapport för covid-19."
      ],
      "set": {
        "classifiedIntentName": "question: Hur övervakas spridningen av CORONA",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Behandlande läkare och laboratorier skickar löpande in data som Folkhälsomyndigheten analyserar varje dag. Andra sätt att samla information är att ta stickprov från patienter med influensasymtom och andra utvalda grupper i samhället samt att samla in kunskap från sökningar och samtal genom 1177. Varje vecka skickar Folkhälsomyndigheten även ut en veckorapport för covid-19."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur lång är inkubationstiden?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "CORONA": CORONA
      },
      "examples": [
        "Hur lång är inkubationstiden?",
        "Hur lång tid kan det ta innan symtom visar sig?",
        "Hur lång tid efter att _PERS_PRON har blivit smittad blir _PERS_PRON sjuk?",
        "hur lång tid tar det innan symtom för _CORONA visar sig",
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
      "name": "question: Vad gäller besök på äldreboenden?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "POS_PRON": POS_PRON
      },
      "examples": [
        "Vad gäller besök på äldreboenden?",
        "får _PERS_PRON besöka _POS_PRON mamma på äldreboende",
        "får _PERS_PRON besöka _POS_PRON pappa på äldreboende",
        "får _PERS_PRON besöka _POS_PRON morfar på äldreboende",
        "får _PERS_PRON besöka _POS_PRON farfar på äldreboende",
        "får _PERS_PRON besöka äldreboende?",
        "får _PERS_PRON gå till äldreboende?",
        "vad gäller för äldreboenden",
        ""
      ]
    },
    "bot": {
      "say": [
        "Sedan den 1 april råder besöksförbud på samtliga landets äldreboenden för att förhindra spridningen av sjukdomen covid-19."
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller besök på äldreboenden?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Sedan den 1 april råder besöksförbud på samtliga landets äldreboenden för att förhindra spridningen av sjukdomen covid-19."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan barn och ungdomar vaccineras som vanligt enligt vaccinationsprogrammet under pågående utbrott av covid-19?",
      "entities": {
        "CORONA": CORONA,
        "POS_PRON": POS_PRON
      },
      "examples": [
        "Kan barn och ungdomar vaccineras som vanligt enligt vaccinationsprogrammet under pågående utbrott av covid-19?",
        "kan barn vaccineras som vanligt",
        "kan barn vaccineras som vanligt trots _CORONA",
        "kan ungdomar vaccineras som vanligt",
        "kan ungdomar vaccineras som vanligt trots _CORONA",
        "kan _POS_PRON barn vaccineras trots _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "Ja, barn och ungdomar kan vaccineras enligt det allmänna vaccinationsprogrammet, även under pågående utbrott av covid-19. Vid med feber och/eller allmänpåverkan bör vaccination som alltid skjutas upp till ett senare tillfälle."
      ],
      "set": {
        "classifiedIntentName": "question: Kan barn och ungdomar vaccineras som vanligt enligt vaccinationsprogrammet under pågående utbrott av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Ja, barn och ungdomar kan vaccineras enligt det allmänna vaccinationsprogrammet, även under pågående utbrott av covid-19. Vid med feber och/eller allmänpåverkan bör vaccination som alltid skjutas upp till ett senare tillfälle."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur pratar PERS_PRON med POS_PRON barn om CORONA?",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON,
        "POS_PRON": POS_PRON,
        "AUX": AUX
      },
      "examples": [
        "Hur pratar _PERS_PRON med _POS_PRON barn om _CORONA?",
        "Hur _AUX _PERS_PRON prata med _POS_PRON barn om _CORONA?",
        "hur pratar _PERS_PRON om _CORONA med _POS_PRON barn",
        "hur lugnar _PERS_PRON _POS_PRON barn",
        "_POS_PRON barn är rädd för _CORONA, vad gör _PERS_PRON",
        "_POS_PRON barn är orolig över _CORONA, vad gör _PERS_PRON",
        "_POS_PRON barn har ångest på grund av _CORONA, vad gör _PERS_PRON",
        ""
      ]
    },
    "bot": {
      "say": [
        "Ge ditt barn trygghet, var uppmärksam och lyssna om ditt barn vill prata om viruset och det som händer i vårt samhälle just nu. "
      ],
      "set": {
        "classifiedIntentName": "question: Hur pratar PERS_PRON med POS_PRON barn om CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Ge ditt barn trygghet, var uppmärksam och lyssna om ditt barn vill prata om viruset och det som händer i vårt samhälle just nu. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Ger rökning ett svårare sjukdomsförlopp vid CORONA",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "Ger rökning ett svårare sjukdomsförlopp vid _CORONA",
        "blir _PERS_PRON sjukare om _PERS_PRON röker",
        "blir _PERS_PRON sjukare ifall _PERS_PRON röker",
        "gör rökning det värre",
        "gör rökning CORANA värre",
        "har _PERS_PRON större risk att dö ifall jag får _CORONA",
        ""
      ]
    },
    "bot": {
      "say": [
        "Vi vet sedan tidigare att tobaksrökning ökar risken för allvarliga symtom vid luftvägsinfektioner som till exempel influensa. Tillgängliga studier visar att personer som röker eller som har rökt är överrepresenterade bland de svåra fallen av covid-19. Kunskapsläget om samband mellan tobaksrökning och hur svårt sjuk man blir vid covid-19 är dock fortfarande oklart."
      ],
      "set": {
        "classifiedIntentName": "question: Ger rökning ett svårare sjukdomsförlopp vid CORONA",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Vi vet sedan tidigare att tobaksrökning ökar risken för allvarliga symtom vid luftvägsinfektioner som till exempel influensa. Tillgängliga studier visar att personer som röker eller som har rökt är överrepresenterade bland de svåra fallen av covid-19. Kunskapsläget om samband mellan tobaksrökning och hur svårt sjuk man blir vid covid-19 är dock fortfarande oklart."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan jag och några vänner gå ut och äta på restaurang?",
      "entities": {},
      "examples": [
        "Kan jag och några vänner gå ut och äta på restaurang?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kan jag och några vänner gå ut och äta på restaurang?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan jag beställa take-away på en restaurang?",
      "entities": {},
      "examples": [
        "Kan jag beställa take-away på en restaurang?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kan jag beställa take-away på en restaurang?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Är det tillåtet att på en restaurang beställa över disk och sedan sätta sig och inventa servering, eller ska beställningen också ske vid bordet?",
      "entities": {},
      "examples": [
        "Är det tillåtet att på en restaurang beställa över disk och sedan sätta sig och inventa servering, eller ska beställningen också ske vid bordet?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Är det tillåtet att på en restaurang beställa över disk och sedan sätta sig och inventa servering, eller ska beställningen också ske vid bordet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kommer det vara tillåtet att fortsätta med buffé där man tar mat och sedan sätter sig?",
      "entities": {},
      "examples": [
        "Kommer det vara tillåtet att fortsätta med buffé där man tar mat och sedan sätter sig?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kommer det vara tillåtet att fortsätta med buffé där man tar mat och sedan sätter sig?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan gäster på ett café beställa kaffe vid disken och sedan sätta sig vid valfritt bord? ",
      "entities": {},
      "examples": [
        "Kan gäster på ett café beställa kaffe vid disken och sedan sätta sig vid valfritt bord? ",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kan gäster på ett café beställa kaffe vid disken och sedan sätta sig vid valfritt bord? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Får gäster sitta och äta vid en bardisk?",
      "entities": {},
      "examples": [
        "Får gäster sitta och äta vid en bardisk?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Får gäster sitta och äta vid en bardisk?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kommer gatukök att få fortsätta servera genom luckan?",
      "entities": {},
      "examples": [
        "Kommer gatukök att få fortsätta servera genom luckan?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kommer gatukök att få fortsätta servera genom luckan?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Får jag stå i kö på snabbmatsrestaurangerna?",
      "entities": {},
      "examples": [
        "Får jag stå i kö på snabbmatsrestaurangerna?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Får jag stå i kö på snabbmatsrestaurangerna?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan nattklubbar fortfarande hålla öppet?",
      "entities": {},
      "examples": [
        "Kan nattklubbar fortfarande hålla öppet?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kan nattklubbar fortfarande hålla öppet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan jag fortsätta dricka alkohol på krogen?",
      "entities": {},
      "examples": [
        "Kan jag fortsätta dricka alkohol på krogen?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kan jag fortsätta dricka alkohol på krogen?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Omfattas casinon av föreskriften?",
      "entities": {},
      "examples": [
        "Omfattas casinon av föreskriften?",
        "vad gäller på casinon?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Omfattas casinon av föreskriften?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Riskerar personal på flygplatsen att smittas av CORONA? ",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Riskerar personal på flygplatsen att smittas av _CORONA? ",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Riskerar personal på flygplatsen att smittas av CORONA? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Behöver personal på flygplatsen ha skyddsutrustning mot CORONA? ",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Behöver personal på flygplatsen ha skyddsutrustning mot _CORONA? ",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Behöver personal på flygplatsen ha skyddsutrustning mot CORONA? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan sjuka passagerares eller friska medpassagerares bagage sprida CORONA?  ",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Kan sjuka passagerares eller friska medpassagerares bagage sprida _CORONA?  ",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kan sjuka passagerares eller friska medpassagerares bagage sprida CORONA?  ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Varför får ibland passagerare och flygpersonal fylla i och lämna sina kontaktuppgifter i så kallade Passenger Locator Cards (PLC)? ",
      "entities": {},
      "examples": [
        "Varför får ibland passagerare och flygpersonal fylla i och lämna sina kontaktuppgifter i så kallade Passenger Locator Cards (PLC)? ",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Varför får ibland passagerare och flygpersonal fylla i och lämna sina kontaktuppgifter i så kallade Passenger Locator Cards (PLC)? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Om det i efterhand visar sig att en passagerare på ett flygplan har CORONA, kommer personal på flygplatsen eller medpassagerare informeras om det? ",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Om det i efterhand visar sig att en passagerare på ett flygplan har _CORONA, kommer personal på flygplatsen eller medpassagerare informeras om det? ",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Om det i efterhand visar sig att en passagerare på ett flygplan har CORONA, kommer personal på flygplatsen eller medpassagerare informeras om det? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Varför har vi inte hälsokontroller i Sverige på passagerare som kommer med flyg från andra länder?",
      "entities": {},
      "examples": [
        "Varför har vi inte hälsokontroller i Sverige på passagerare som kommer med flyg från andra länder?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Varför har vi inte hälsokontroller i Sverige på passagerare som kommer med flyg från andra länder?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Behöver jag lämna läkarintyg om jag stannar hemma från jobbet?",
      "entities": {},
      "examples": [
        "Behöver jag lämna läkarintyg om jag stannar hemma från jobbet?",
        "behöver jag lämna sjukintyg?",
        "behöver man lämna sjukintyg?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Behöver jag lämna läkarintyg om jag stannar hemma från jobbet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Behöver mina anställda lämna läkarintyg om de stannar hemma från jobbet?",
      "entities": {},
      "examples": [
        "Behöver mina anställda lämna läkarintyg om de stannar hemma från jobbet?",
        "behöver mina anställda lämna sjukintyg?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Behöver mina anställda lämna läkarintyg om de stannar hemma från jobbet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gäller för sjuklönekostnader?",
      "entities": {},
      "examples": [
        "Vad gäller för sjuklönekostnader?",
        "vem betalar sjuklön?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Vad gäller för sjuklönekostnader?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kommer karensavdraget att slopas?",
      "entities": {},
      "examples": [
        "Kommer karensavdraget att slopas?",
        "vad händer med karensavdraget?",
        "vad kommer hända med karensavdraget?",
        "kommer karensavdraget dras av?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kommer karensavdraget att slopas?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan jag som egenföretagare söka ersättning vid karens?",
      "entities": {},
      "examples": [
        "Kan jag som egenföretagare söka ersättning vid karens?",
        "kan jag få karensersättning om jag är egenföretagare?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kan jag som egenföretagare söka ersättning vid karens?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag deltar i ett program hos Arbetsförmedlingen. Vad gäller för mig?",
      "entities": {},
      "examples": [
        "Jag deltar i ett program hos Arbetsförmedlingen. Vad gäller för mig?",
        "vad gäller om jag deltar i ett program hos arbetsförmedlingen?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag deltar i ett program hos Arbetsförmedlingen. Vad gäller för mig?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: MITT BARN är sjukt. Kan jag få vab-ersättning?",
      "entities": {},
      "examples": [
        "MITT BARN är sjukt. Kan jag få vab-ersättning?",
        "kan jag få vab-ersättning om mitt barn är smittad av corona?",
        "vårt barn är sjukt. kan vi få vab-ersättning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: MITT BARN är sjukt. Kan jag få vab-ersättning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag vill inte att MITT BARN ska bli smittat av andra barn. Kan jag få vab-ersättning om jag stannar hemma med MITT BARN?",
      "entities": {},
      "examples": [
        "Jag vill inte att MITT BARN ska bli smittat av andra barn. Kan jag få vab-ersättning om jag stannar hemma med MITT BARN?",
        "kan jag få vab-ersättning om jag håller mitt barn hemma pga. rädsla för smitta?",
        "jag är rädd att mitt barn ska bli smittat corona. kan jag få vab-ersättning om vi stannar hemma?",
        "vi är rädda för att vårt barn ska bli smittat av corona. kan vi få vab-ersättning om någon av oss stannar hemma med vårt barn?",
        "vi är rädda för att vårt barn ska bli smittat av corona. kan vi få vab-ersättning om vi stannar hemma med vårt barn?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag vill inte att MITT BARN ska bli smittat av andra barn. Kan jag få vab-ersättning om jag stannar hemma med MITT BARN?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag är rädd att bli smittad av CORONA. Har jag rätt att stanna hemma från jobbet och få smittbärarpenning?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Jag är rädd att bli smittad av _CORONA. Har jag rätt att stanna hemma från jobbet och få smittbärarpenning?",
        "jag är rädd att gå till jobbet pga. corona. kan jag få smittbärarpenning om jag stannar hemma?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag är rädd att bli smittad av CORONA. Har jag rätt att stanna hemma från jobbet och få smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Mitt barns skola har stängt. Kan jag få vab-ersättning?",
      "entities": {},
      "examples": [
        "Mitt barns skola har stängt. Kan jag få vab-ersättning?",
        "kan jag få vab-ersättning om mitt barns skola har stängt?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Mitt barns skola har stängt. Kan jag få vab-ersättning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Mitt barn har varit sjukt i mer än sju dagar. Behöver jag skicka in läkarintyg?",
      "entities": {},
      "examples": [
        "Mitt barn har varit sjukt i mer än sju dagar. Behöver jag skicka in läkarintyg?",
        "behöver jag skicka in sjukintyg ifall mitt barn har varit sjukt i mer än sju dagar?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Mitt barn har varit sjukt i mer än sju dagar. Behöver jag skicka in läkarintyg?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag har smittats av CORONA. Har jag rätt till smittbärarpenning?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Jag har smittats av _CORONA. Har jag rätt till smittbärarpenning?",
        "kan jag få smittbärarpenning om jag smittats av covid-19?",
        "min läkare har sagt åt mig att stanna hemma pga. covid-19. kan jag få smittbärarpenning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag har smittats av CORONA. Har jag rätt till smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag är sjuk. Har jag rätt till smittbärarpenning?",
      "entities": {},
      "examples": [
        "Jag är sjuk. Har jag rätt till smittbärarpenning?",
        "min läkare har sagt åt mig att stanna hemma pga. jag är sjuk. kan jag få smittbärarpenning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag är sjuk. Har jag rätt till smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag är sjuk. Har jag rätt till sjukpenning?",
      "entities": {},
      "examples": [
        "Jag är sjuk. Har jag rätt till sjukpenning?",
        "har jag rätt till smittbärarpenning om jag är sjuk?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag är sjuk. Har jag rätt till sjukpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan jag förlänga min ersättningsperiod inom högkostnadsskyddet för tandvård på grund av covid-19?",
      "entities": {},
      "examples": [
        "Kan jag förlänga min ersättningsperiod inom högkostnadsskyddet för tandvård på grund av covid-19?",
        "kan jag förlänga mitt högkostnadsskydd för tandvård på grund av covid-19?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kan jag förlänga min ersättningsperiod inom högkostnadsskyddet för tandvård på grund av covid-19?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad är smittbärarpenning?",
      "entities": {},
      "examples": [
        "Vad är smittbärarpenning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Vad är smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur mycket får jag av smittbärarpenning?",
      "entities": {},
      "examples": [
        "Hur mycket får jag av smittbärarpenning?",
        "vad är ersättningen för smittbärarpenning?",
        "hur mycket ger smittbärarpenning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Hur mycket får jag av smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag har smittats av CORONA. Kan jag få reseersättning för att jag är smittbärare?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Jag har smittats av _CORONA. Kan jag få reseersättning för att jag är smittbärare?",
        "kan jag få reseersättning om jag smittats av covid-19?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag har smittats av CORONA. Kan jag få reseersättning för att jag är smittbärare?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Min läkare har beslutat att jag måste vara hemma i 14 dagar på grund av smitta. När kan jag ansöka om smittbärarpenning?",
      "entities": {},
      "examples": [
        "Min läkare har beslutat att jag måste vara hemma i 14 dagar på grund av smitta. När kan jag ansöka om smittbärarpenning?",
        "när kan jag ansöka om smittbärarpenning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Min läkare har beslutat att jag måste vara hemma i 14 dagar på grund av smitta. När kan jag ansöka om smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Min arbetsplats har stängt ner för att förhindra smittspridning. Har jag rätt till smittbärarpenning?",
      "entities": {},
      "examples": [
        "Min arbetsplats har stängt ner för att förhindra smittspridning. Har jag rätt till smittbärarpenning?",
        "kan jag få smittbärarpenning ifall min arbetsplats stängt ner?",
        "vår arbetsplats har stängt ner för att förhindra smittspridning. Har vi rätt till smittbärarpenning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Min arbetsplats har stängt ner för att förhindra smittspridning. Har jag rätt till smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag har kommit hem från ett riskområde. Min arbetsgivare uppmanar mig nu att stanna hemma från jobbet, trots att jag inte är smitttad. Har jag rätt till smittbärarpenning?",
      "entities": {},
      "examples": [
        "Jag har kommit hem från ett riskområde. Min arbetsgivare uppmanar mig nu att stanna hemma från jobbet, trots att jag inte är smitttad. Har jag rätt till smittbärarpenning?",
        "min arbetsgivare uppmanar mig att stanna hemma trots att jag inte är smittad, kan jag få smittbärarpenning?",
        "vi har kommit hem från ett riskområde och stannar frivilligt hemma för att inte riskera spridning av coronaviruset. Har vi rätt till smittbärarpenning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag har kommit hem från ett riskområde. Min arbetsgivare uppmanar mig nu att stanna hemma från jobbet, trots att jag inte är smitttad. Har jag rätt till smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag har kommit hem från ett riskområde och stannar frivilligt hemma för att inte riskera spridning av coronaviruset. Har jag rätt till smittbärarpenning?",
      "entities": {},
      "examples": [
        "Jag har kommit hem från ett riskområde och stannar frivilligt hemma för att inte riskera spridning av coronaviruset. Har jag rätt till smittbärarpenning?",
        "min arbetsgivare uppmanar mig att stanna hemma trots att jag inte är smittad, kan jag få smittbärarpenning?",
        "vi har kommit hem från ett riskområde och stannar frivilligt hemma för att inte riskera spridning av coronaviruset. Har vi rätt till smittbärarpenning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag har kommit hem från ett riskområde och stannar frivilligt hemma för att inte riskera spridning av coronaviruset. Har jag rätt till smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan jag få ett läkarintyg via telefon?",
      "entities": {},
      "examples": [
        "Kan jag få ett läkarintyg via telefon?",
        "går det att få läkarintyg via telefon?",
        "Kan man få läkarintyg via telefon?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Kan jag få ett läkarintyg via telefon?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Gäller karensdag vid smittbärarpenning?",
      "entities": {},
      "examples": [
        "Gäller karensdag vid smittbärarpenning?",
        "görs karensavdrag vid smittbärarpenning?",
        "görs det avdrag på smittbärarpenning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Gäller karensdag vid smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag har smittats av CORONA och är arbetssökande. Har jag rätt till smittbärarpenning?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Jag har smittats av _CORONA och är arbetssökande. Har jag rätt till smittbärarpenning?",
        "jag har fått covid-19 och kan inte söka jobb. har jag rätt till smittbärarpenning?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag har smittats av CORONA och är arbetssökande. Har jag rätt till smittbärarpenning?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad innebär det att karensavdraget slopas? ",
      "entities": {},
      "examples": [
        "Vad innebär det att karensavdraget slopas? ",
        "vad händer om karensavdraget försvinner?",
        "vad händer om karensavdraget tas bort?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär det att karensavdraget slopas? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag är permitterad och arbetar 50 procent men får 90 procent av min tidigare lön. Hur ska jag fylla i min vab-ansökan?",
      "entities": {},
      "examples": [
        "Jag är permitterad och arbetar 50 procent men får 90 procent av min tidigare lön. Hur ska jag fylla i min vab-ansökan?",
        "jag är permitterad. hur fyller jag i min vab-ansökan?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Jag är permitterad och arbetar 50 procent men får 90 procent av min tidigare lön. Hur ska jag fylla i min vab-ansökan?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Mitt barn har smittats av CORONA, har jag rätt till vab?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Mitt barn har smittats av _CORONA, har jag rätt till vab?",
        "har jag rätt till vab om mitt barn smittats av corona?",
        "vårt barn har smittats av corona, har vi rätt till vab?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Mitt barn har smittats av CORONA, har jag rätt till vab?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Mitt jobb har uppmanat mig att stanna hemma på grund av smittorisken av corona. Nu har mitt barn blivit sjukt, har jag rätt till vab?",
      "entities": {},
      "examples": [
        "Mitt jobb har uppmanat mig att stanna hemma på grund av smittorisken av corona. Nu har mitt barn blivit sjukt, har jag rätt till vab?",
        "mitt barn har fått corona medan jag stannat hemma från jobbet, har jag rätt till vab?",
        "våra jobb har uppmanat oss att stanna hemma på grund av smittorisken av corona. Nu har vårt barn blivit sjukt, har vi rätt till vab?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Mitt jobb har uppmanat mig att stanna hemma på grund av smittorisken av corona. Nu har mitt barn blivit sjukt, har jag rätt till vab?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur många dagar kan jag vabba?",
      "entities": {},
      "examples": [
        "Hur många dagar kan jag vabba?",
        "Hur många dagar kan vi vabba?",
        "Hur många dagar kan man vabba?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Hur många dagar kan jag vabba?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vårt barn har blivit smittad av CORONA. Kan vi båda vabba samtidigt och få ersättning för samma barn och tid?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Vårt barn har blivit smittad av _CORONA. Kan vi båda vabba samtidigt och få ersättning för samma barn och tid?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
      ],
      "set": {
        "classifiedIntentName": "question: Vårt barn har blivit smittad av CORONA. Kan vi båda vabba samtidigt och få ersättning för samma barn och tid?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Eftersom frågan inte besvaras av någon av våra källor kan vi tyvärr inte svara på den i nuläget"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vem är ansvarig för Sveriges hantering av CORONA?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Vem är ansvarig för Sveriges hantering av _CORONA?",
        "hur hanteras _CORONA?",
        "vem ansvarar för Sverige?",
        "vem arbetar med _CORONA?",
        "vem är ansvarig för _CORONA?",
        "vilka jobbar med _CORONA?",
        "vilka myndigheter tar hand om _CORONA?",
        ""
      ]
    },
    "bot": {
      "say": [
        "MSB, Socialstyrelsen samt Regeringskansliet (genom UD och Socialdepartementet) är de myndigheter som i störst utsträckning arbetar med covid-19. Därutöver har regionerna ansvar för att möta smittan genom de lokala vårdcentralerna samt respektive regions smittskyddsläkare."
      ],
      "set": {
        "classifiedIntentName": "question: Vem är ansvarig för Sveriges hantering av CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "MSB, Socialstyrelsen samt Regeringskansliet (genom UD och Socialdepartementet) är de myndigheter som i störst utsträckning arbetar med covid-19. Därutöver har regionerna ansvar för att möta smittan genom de lokala vårdcentralerna samt respektive regions smittskyddsläkare."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad gör MSB för att hantera CORONA?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Vad gör MSB för att hantera _CORONA?",
        "vad gör MSB?",
        "hur jobbar MSB med _CORONA?",
        "hur hanterar MSB _CORONA?",
        "vad jobbar MSB med?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Just nu tar MSB fram nationella lägesbilder för samhällets säkerhet och håller regeringskansliet uppdaterade om hur utvecklingen av covid-19 kan påverka samhället. "
      ],
      "set": {
        "classifiedIntentName": "question: Vad gör MSB för att hantera CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Just nu tar MSB fram nationella lägesbilder för samhällets säkerhet och håller regeringskansliet uppdaterade om hur utvecklingen av covid-19 kan påverka samhället. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur AUXILIARY verksamheter skötas under pandemin?",
      "entities": {},
      "examples": [
        "Hur AUXILIARY verksamheter skötas under pandemin?",
        "hur AUXILIARY verksamheter skötas just nu?",
        "AUXILIARY PRONOMEN stänga ner min verksamhet?",
        "vem har ansvar för hur en verksamhet sköts just nu?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Den som har ansvar för en verksamhet under normala förhållanden har vid en krissituationen ansvar för att den sköts som vanligt, med hänsyn till nationella riktlinjer. "
      ],
      "set": {
        "classifiedIntentName": "question: Hur AUXILIARY verksamheter skötas under pandemin?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Den som har ansvar för en verksamhet under normala förhållanden har vid en krissituationen ansvar för att den sköts som vanligt, med hänsyn till nationella riktlinjer. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kan en kommun vidta andra åtgärder än andra om det är stor smittspridning där?",
      "entities": {},
      "examples": [
        "Kan en kommun vidta andra åtgärder än andra om det är stor smittspridning där?",
        "kan en kommun stängas ner ifall det blir för stor smittspridning där?",
        "vad händer om det blir stor smittspridning i en kommun?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Ja. Om det är stor smittspridning i en kommun kan den kommunen välja att vidta störra åtgärder än vad som sker i en mindre drabbad kommun."
      ],
      "set": {
        "classifiedIntentName": "question: Kan en kommun vidta andra åtgärder än andra om det är stor smittspridning där?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Ja. Om det är stor smittspridning i en kommun kan den kommunen välja att vidta störra åtgärder än vad som sker i en mindre drabbad kommun."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur ser det ut med beredskapslager?",
      "entities": {},
      "examples": [
        "Hur ser det ut med beredskapslager?",
        "finns det tillräckligt med medicin?",
        "har PRONOMEN tillräckliga resurser?",
        "finns det lager så att alla klarar sig?",
        "vem ansvarar för att det finns tillräckliga resurser?",
        "finns det beredskapslager?",
        "hur ser Sveriges beredskapslager ut?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Regionerna är ansvariga för att tillräckliga resurser, t.ex. förbrukningsmaterial och medicinteknisk utrustning, finns tillgänlig för att kunna bedriva sin verksamhet och ge god vård enligt hälso- och sjukvårdslagen. Regionerna samt kommunerna ansvarar även för att de har läkemdel i tillräcklig mängd."
      ],
      "set": {
        "classifiedIntentName": "question: Hur ser det ut med beredskapslager?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Regionerna är ansvariga för att tillräckliga resurser, t.ex. förbrukningsmaterial och medicinteknisk utrustning, finns tillgänlig för att kunna bedriva sin verksamhet och ge god vård enligt hälso- och sjukvårdslagen. Regionerna samt kommunerna ansvarar även för att de har läkemdel i tillräcklig mängd."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: AUXILIARY PRONOMEN bunkra upp med mat?",
      "entities": {},
      "examples": [
        "AUXILIARY PRONOMEN bunkra upp med mat?",
        "AUXILIARY PRONOMEN köpa extra mat?",
        "AUXILIARY PRONOMEN köpa extra toapapper?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Nej, inte mer än MSBs allmänna rekommendation som säger att man alltid bör vara reda på att kunna klara sig utan samhällets hjälp upp till en vecka."
      ],
      "set": {
        "classifiedIntentName": "question: AUXILIARY PRONOMEN bunkra upp med mat?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Nej, inte mer än MSBs allmänna rekommendation som säger att man alltid bör vara reda på att kunna klara sig utan samhällets hjälp upp till en vecka."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: vad är MSBs rekommendation gällande inköp av mat?",
      "entities": {},
      "examples": [
        "vad är MSBs rekommendation gällande inköp av mat?",
        "vad är MSBs rekommendation gällande inköp av toapapper?",
        "hur mycket mat rekommenderas att PRONOMEN har hemma?",
        "hur mycket toapapper rekommenderas att PRONOMEN har hemma?",
        "hur mycket mat AUXILIARY PRONOMEN ha hemma?",
        "hur mycket borde AUXILIARY PRONOMEN ha hemma?",
        "hur nödvändigt är det att bunkra upp med mat?",
        "hur nödvändigt är det att bunkra upp med toapapper?",
        ""
      ]
    },
    "bot": {
      "say": [
        "MSBs allmänna rekommendation säger att man alltid bör vara reda på att kunna klara sig utan samhällets hjälp upp till en vecka."
      ],
      "set": {
        "classifiedIntentName": "question: vad är MSBs rekommendation gällande inköp av mat?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "MSBs allmänna rekommendation säger att man alltid bör vara reda på att kunna klara sig utan samhällets hjälp upp till en vecka."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kommer leveranser av mat och mediciner omfattas av inreseförbudet till Sverige?",
      "entities": {},
      "examples": [
        "Kommer leveranser av mat och mediciner omfattas av inreseförbudet till Sverige?",
        "gäller inreseförbudet leveranser av mat och mediciner?",
        "gäller inreseförbudet leveranser av mat?",
        "gäller inreseförbudet leveranser av mediciner?",
        "kommer mat och mediciner fortfarande leveras till Sverige?",
        "kommer mat fortfarande leveras till Sverige?",
        "kommer mediciner fortfarande leveras till Sverige?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Nej, varutransporter kommer inte omfattas av inreseförbudet till Sverige."
      ],
      "set": {
        "classifiedIntentName": "question: Kommer leveranser av mat och mediciner omfattas av inreseförbudet till Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Nej, varutransporter kommer inte omfattas av inreseförbudet till Sverige."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: kommer mat och mediciner fortfarande leveras till Sverige?",
      "entities": {},
      "examples": [
        "kommer mat och mediciner fortfarande leveras till Sverige?",
        "kommer mat fortfarande leveras till Sverige?",
        "kommer mediciner fortfarande leveras till Sverige?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Ja, mat och mediciner kommer fortfarande leveras till Sverige. "
      ],
      "set": {
        "classifiedIntentName": "question: kommer mat och mediciner fortfarande leveras till Sverige?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Ja, mat och mediciner kommer fortfarande leveras till Sverige. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Kommer skolorna stängas?",
      "entities": {},
      "examples": [
        "Kommer skolorna stängas?",
        "när stängs grundskolorna?",
        "finns det risk att grundskolorna stänger?",
        "kan grundskolorna stängas?",
        "kan skolan stängas?",
        "när stängs skolorna?",
        "finns det risk att skolorna stänger?",
        "när stängs grundskolan?",
        "finns det risk att grundskolan stänger?",
        "kan grundskolan stängas?",
        ""
      ]
    },
    "bot": {
      "say": [
        "För närvarande finns inget regeringsbeslut om stängning av skolverksamhet med anledning av coronavirussjukdomen."
      ],
      "set": {
        "classifiedIntentName": "question: Kommer skolorna stängas?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "För närvarande finns inget regeringsbeslut om stängning av skolverksamhet med anledning av coronavirussjukdomen."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vem har rätt till omsorg om skolorna stängs?",
      "entities": {},
      "examples": [
        "Vem har rätt till omsorg om skolorna stängs?",
        "vem har rätt till omsorg om skolan stängs?",
        "vem har rätt till omsorg om förskolan stängs?",
        "vem har rätt till omsorg om fritids stängs?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Om förskola, fritidshem eller annan pedagogisk verksamhet för barn skulle stängas kommer vårdnadshavare som deltar i samhällsviktig verksamhet, under vissa förutsättningar, erbjudas omsorg för barn så att samhällets funktionalitet kan upprätthållas. Endast vårdnadshavare som deltar i samhällsviktiga verksamheter kommer ha rätt till denna omsorg, samt barn och elever som behöver få särskilt stöd i sin utveckling av fysiska, psykiska eller andra skäl."
      ],
      "set": {
        "classifiedIntentName": "question: Vem har rätt till omsorg om skolorna stängs?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Om förskola, fritidshem eller annan pedagogisk verksamhet för barn skulle stängas kommer vårdnadshavare som deltar i samhällsviktig verksamhet, under vissa förutsättningar, erbjudas omsorg för barn så att samhällets funktionalitet kan upprätthållas. Endast vårdnadshavare som deltar i samhällsviktiga verksamheter kommer ha rätt till denna omsorg, samt barn och elever som behöver få särskilt stöd i sin utveckling av fysiska, psykiska eller andra skäl."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad betyder deltar i samhällsviktig verksamhet?",
      "entities": {},
      "examples": [
        "Vad betyder deltar i samhällsviktig verksamhet?",
        "vad menas med deltar i samhällsviktig verksamhet?",
        "vad innebär det att delta i samhällsviktig verksamhet?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Att man är anställd inom verksamheten, alternativt arbetar i verksamheten utan att vara anställd där. Det kan också gälla ifall man är tjänstepliktig enligt lagen om skydd mot olyckor, eller att man är skyldig att delta i verksamheten."
      ],
      "set": {
        "classifiedIntentName": "question: Vad betyder deltar i samhällsviktig verksamhet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Att man är anställd inom verksamheten, alternativt arbetar i verksamheten utan att vara anställd där. Det kan också gälla ifall man är tjänstepliktig enligt lagen om skydd mot olyckor, eller att man är skyldig att delta i verksamheten."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad är en samhällsviktig verksamhet?",
      "entities": {},
      "examples": [
        "Vad är en samhällsviktig verksamhet?",
        "definiera samhällsviktig verksamhet",
        "förklara vad samhällsviktig verksamhet är",
        "vilka verksamheter räknas som samhällsviktiga?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Om ett eventuellt bortfall eller svår störning av en verksamhet riskerar att leda till en allvarlig kris i samhället anses verksamheten som samhällsviktig. Det kan även gälla en verksamhet som behövs för att hantera den pågående krisen."
      ],
      "set": {
        "classifiedIntentName": "question: Vad är en samhällsviktig verksamhet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Om ett eventuellt bortfall eller svår störning av en verksamhet riskerar att leda till en allvarlig kris i samhället anses verksamheten som samhällsviktig. Det kan även gälla en verksamhet som behövs för att hantera den pågående krisen."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Räcker det med att PRONOMEN som vårdnadshavare deltar i samhällsviktig verksamhet för att barnet ska ha rätt till omsorg?",
      "entities": {},
      "examples": [
        "Räcker det med att PRONOMEN som vårdnadshavare deltar i samhällsviktig verksamhet för att barnet ska ha rätt till omsorg?",
        "har mina barn rätt till omsorg om jag deltar i samhällsviktig verksamhet?",
        "har mina barn rätt till omsorg om jag jobbar i samhällsviktig verksamhet?",
        "har mina barn rätt till omsorg om jag jobbar med samhällsviktig verksamhet?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Nej. Det behövs också att din samhällsviktiga verksamhet anser att den behöver dig för att upprätthålla verksamheten på en acceptabel nivå, t.ex. om du har en nyckelkompetens eler nyckelroll inom verksamheten. "
      ],
      "set": {
        "classifiedIntentName": "question: Räcker det med att PRONOMEN som vårdnadshavare deltar i samhällsviktig verksamhet för att barnet ska ha rätt till omsorg?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Nej. Det behövs också att din samhällsviktiga verksamhet anser att den behöver dig för att upprätthålla verksamheten på en acceptabel nivå, t.ex. om du har en nyckelkompetens eler nyckelroll inom verksamheten. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: När hålls pressträffarna?",
      "entities": {},
      "examples": [
        "När hålls pressträffarna?",
        "när är det pressträff?",
        "är det pressträff idag?",
        "är det pressträff på helger?",
        "är det pressträff imorgon?",
        "när sker pressträff?",
        "när sker pressträffarna?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Pressträffarna hålls varje vardag klockan 14.00."
      ],
      "set": {
        "classifiedIntentName": "question: När hålls pressträffarna?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Pressträffarna hålls varje vardag klockan 14.00."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vilka myndigheter håller i pressträffarna?",
      "entities": {},
      "examples": [
        "Vilka myndigheter håller i pressträffarna?",
        "vem håller i pressträffarna?",
        "vem håller i pressträffen?",
        "vilka håller i pressträffarna?",
        "vilka håller i pressträffen?",
        "vem är med på pressträffen?",
        "vilka är med på pressträffen?",
        "vilka medverkar på pressträffen?",
        "vem medverkar på pressträffen?",
        ""
      ]
    },
    "bot": {
      "say": [
        "MSB, Folkhälsomyndigheten och Socialstyrelsen, samt representanter från andra berörda myndigheter."
      ],
      "set": {
        "classifiedIntentName": "question: Vilka myndigheter håller i pressträffarna?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "MSB, Folkhälsomyndigheten och Socialstyrelsen, samt representanter från andra berörda myndigheter."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad görs för att sprida information om CORONA?",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Vad görs för att sprida information om _CORONA?",
        "hur sprids information om _CORONA?",
        ""
      ]
    },
    "bot": {
      "say": [
        "MSB, Folkhälsomyndigheten och Socialstyrelsen genomför just nu en stor informationssatsning rörande covid-19. Målet är att så många som möjligt av Sveriges befolkning ska känna till vad de kan göra för att bromsa smittspridningen. Redan nu hålls regelbundna pressträffar varje vardag för att uppdatera om läget. En informationssatsning på både svenska och engelska har även startat i mindre omfattning på Facebook, Instagram, Spotify samt radio. "
      ],
      "set": {
        "classifiedIntentName": "question: Vad görs för att sprida information om CORONA?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "MSB, Folkhälsomyndigheten och Socialstyrelsen genomför just nu en stor informationssatsning rörande covid-19. Målet är att så många som möjligt av Sveriges befolkning ska känna till vad de kan göra för att bromsa smittspridningen. Redan nu hålls regelbundna pressträffar varje vardag för att uppdatera om läget. En informationssatsning på både svenska och engelska har även startat i mindre omfattning på Facebook, Instagram, Spotify samt radio. "
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur ska de som varken pratar svenska eller engelska kunna ta till sig av informationen från myndigheterna?",
      "entities": {},
      "examples": [
        "Hur ska de som varken pratar svenska eller engelska kunna ta till sig av informationen från myndigheterna?",
        "Hur nås information till de som varken pratar svenska eller engelska?",
        ""
      ]
    },
    "bot": {
      "say": [
        "MSB, tillsammans med föreningar, trossamfund, frivilligorganisationer och andra myndigheter, jobbar just nu för att säkerställa att budskapet når ut även de till de som talar ett annat språk än svenska och engelska."
      ],
      "set": {
        "classifiedIntentName": "question: Hur ska de som varken pratar svenska eller engelska kunna ta till sig av informationen från myndigheterna?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "MSB, tillsammans med föreningar, trossamfund, frivilligorganisationer och andra myndigheter, jobbar just nu för att säkerställa att budskapet når ut även de till de som talar ett annat språk än svenska och engelska."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Vad finns det för stöd till äldre?",
      "entities": {},
      "examples": [
        "Vad finns det för stöd till äldre?",
        "vad finns det för stöd till riskgrupperna?",
        "hur hjälps äldre?",
        "hur hjälps riskgrupperna?",
        ""
      ]
    },
    "bot": {
      "say": [
        "MSB har tillsammans med SKR kommit överens med organisationer inom civilsamhället att stödja kommuner för att hjälpa personer över 70 år, eller som tillhör annan riskgrupp, med matinköp och upphämtning av mediciner. Åtgärderna innebär i ett första steg att stärka de frivilliga resursgrupper som finns i 155 kommuner idag. Målet är kunna erbjuda frivilligstöd till samtliga 290 kommuner."
      ],
      "set": {
        "classifiedIntentName": "question: Vad finns det för stöd till äldre?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "MSB har tillsammans med SKR kommit överens med organisationer inom civilsamhället att stödja kommuner för att hjälpa personer över 70 år, eller som tillhör annan riskgrupp, med matinköp och upphämtning av mediciner. Åtgärderna innebär i ett första steg att stärka de frivilliga resursgrupper som finns i 155 kommuner idag. Målet är kunna erbjuda frivilligstöd till samtliga 290 kommuner."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Jag är över 70, hur kan jag få hjälp?",
      "entities": {},
      "examples": [
        "Jag är över 70, hur kan jag få hjälp?",
        "jag är äldre, hur kan jag få hjälp?",
        "vi är över 70, hur kan vi få hjälp?",
        "vi är äldre, hur kan vi få hjälp?",
        "jag tillhör riskgrupp, hur kan jag få hjälp?",
        "vi tillhör riskgrupp, hur kan vi få hjälp?",
        ""
      ]
    },
    "bot": {
      "say": [
        "I de kommuner där frivilligstödet används anger kommunen ett sätt för hjälpsökande att be om hjälp. Frivilligorganisationerna kommer sedan kopplas ihop med den hjälpsökande och se till att personen får den hjälp den behöver."
      ],
      "set": {
        "classifiedIntentName": "question: Jag är över 70, hur kan jag få hjälp?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "I de kommuner där frivilligstödet används anger kommunen ett sätt för hjälpsökande att be om hjälp. Frivilligorganisationerna kommer sedan kopplas ihop med den hjälpsökande och se till att personen får den hjälp den behöver."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: I vilka kommuner finns det frivilliga resursgrupper?",
      "entities": {},
      "examples": [
        "I vilka kommuner finns det frivilliga resursgrupper?",
        "i vilka kommuner finns FRG?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Här kan du se i vilka kommuner det finns frivilligorganisationer [länk till lista på kommuner]"
      ],
      "set": {
        "classifiedIntentName": "question: I vilka kommuner finns det frivilliga resursgrupper?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Här kan du se i vilka kommuner det finns frivilligorganisationer [länk till lista på kommuner]"
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Det finns ingen frivillig resursgrupp i min kommun, hur kan jag få hjälp?",
      "entities": {},
      "examples": [
        "Det finns ingen frivillig resursgrupp i min kommun, hur kan jag få hjälp?",
        "FRG finns inte i min kommun, hur kan jag få hjälp?",
        "det finns ingen frivillig resursgrupp i min kommun, kan jag få hjälp ändå?",
        "FRG finns inte i min kommun, kan jag få hjälp ändå?",
        "kan jag få hjälp även fast det inte finns någon frivillig resursgrupp i min kommun?",
        "kan jag få hjälp även fast FRG inte finns i min kommun?",
        "det finns inget frivilligstöd i min kommun, hur kan jag få hjälp?",
        "det finns inget frivilligstöd i min kommun, kan jag få hjälp ändå?",
        ""
      ]
    },
    "bot": {
      "say": [
        "I de kommuner där frivilligorganisationer inte finns kan äldre och personer i riskgrupper få hjälp av Röda Korset."
      ],
      "set": {
        "classifiedIntentName": "question: Det finns ingen frivillig resursgrupp i min kommun, hur kan jag få hjälp?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "I de kommuner där frivilligorganisationer inte finns kan äldre och personer i riskgrupper få hjälp av Röda Korset."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur länge gäller frivilligstödet?",
      "entities": {},
      "examples": [
        "Hur länge gäller frivilligstödet?",
        "hur länge kommer FRG hjälpa till?",
        "hur länge kan jag få hjälp av FRG?",
        "hur länge kan jag få hjälp av frivilligstödet?",
        "hur länge kommer de frivilliga resursgrupperna hjälpa till?",
        "hur länge kan jag få hjälp av de frivilliga resursgrupperna?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Äldre och personer i riskgrupper kommer få hjälp så länge hjälpen behövs."
      ],
      "set": {
        "classifiedIntentName": "question: Hur länge gäller frivilligstödet?",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          "Äldre och personer i riskgrupper kommer få hjälp så länge hjälpen behövs."
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  },
  {
    "intent": {
      "name": "question: Hur påverkar Corona polisens arbete",
      "entities": {},
      "examples": [
        "Hur påverkar Corona polisens arbete",
        "Vad gör polisen för att hjälpa under krisen",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Hur påverkar Corona polisens arbete",
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
      "name": "question: Kommer bedragare att utnyttja corona krisen",
      "entities": {},
      "examples": [
        "Kommer bedragare att utnyttja corona krisen",
        "Finns det en ökning av bedrägerier kopplat till corona",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Kommer bedragare att utnyttja corona krisen",
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
      "name": "question: Kan företagare råka ut för bedragare som utnyttjar situationen",
      "entities": {},
      "examples": [
        "Kan företagare råka ut för bedragare som utnyttjar situationen",
        "Ser polisen en ökning av bedrägerier mot företag just nu",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Kan företagare råka ut för bedragare som utnyttjar situationen",
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
      "name": "question: Vilka råd ger polisen för att inte bli utsatt för bedrägerier",
      "entities": {},
      "examples": [
        "Vilka råd ger polisen för att inte bli utsatt för bedrägerier",
        "Vad kan jag göra för att undvika bedrägerier",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vilka råd ger polisen för att inte bli utsatt för bedrägerier",
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
      "name": "question: Äldre blir utsatta för bedrägerier, vad gör polisen för att reducera detta",
      "entities": {},
      "examples": [
        "Äldre blir utsatta för bedrägerier, vad gör polisen för att reducera detta",
        "Vad gör polisen för att minska bedrägerier mot äldre",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Äldre blir utsatta för bedrägerier, vad gör polisen för att reducera detta",
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
      "name": "question: Gäller inreseförbudet alla eller finns det undantag",
      "entities": {},
      "examples": [
        "Gäller inreseförbudet alla eller finns det undantag",
        "Vem får resa in i Sverige nu",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Gäller inreseförbudet alla eller finns det undantag",
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
      "name": "question: Vad innebär att polisen har en nationell särskild händelse kring corona viruset",
      "entities": {},
      "examples": [
        "Vad innebär att polisen har en nationell särskild händelse kring corona viruset",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär att polisen har en nationell särskild händelse kring corona viruset",
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
      "name": "question: Får polisen ingripa mot större sammankomster",
      "entities": {},
      "examples": [
        "Får polisen ingripa mot större sammankomster",
        "Om många samlas på allmän plats, får då polisen ingripa",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Får polisen ingripa mot större sammankomster",
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
      "name": "question: Vad kategoriseras som allmän plats",
      "entities": {},
      "examples": [
        "Vad kategoriseras som allmän plats",
        "Vad kategoriseras som offentlig plats",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad kategoriseras som allmän plats",
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
      "name": "question: Gäller max 500 personer även för privata sammankomster",
      "entities": {},
      "examples": [
        "Gäller max 500 personer även för privata sammankomster",
        "Max 500 personer gäller för offentlig plats, vad gäller för andra evenemang och tillställningar",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Gäller max 500 personer även för privata sammankomster",
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
      "name": "question: Talar du engelska?",
      "entities": {},
      "examples": [
        "Talar du engelska?",
        "Kan du prata engelska?",
        "Finns du på engelska?",
        "Snackar du engelska?",
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
        "Jag har andningsproblem",
        "Det är svårt att andas",
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
        "Några nyheter? ",
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
      "name": "question: Vad är ett andningsskydd?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "CORONA": CORONA
      },
      "examples": [
        "Vad är ett andningsskydd?",
        "hur använder _PERS_PRON ett andningsskydd",
        "vad innebär andningsskydd",
        "vad är andningsskydd mot _CORONA",
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
      "name": "question: hur länge smittar CORONA",
      "entities": {
        "CORONA": CORONA,
        "PERS_PRON": PERS_PRON
      },
      "examples": [
        "hur länge smittar _CORONA",
        "hur länge kan _PERS_PRON smitta andra?",
        "när smittar _PERS_PRON?",
        "hur länge smittar en person med _CORONA",
        "hur lång tid smittar _CORONA?",
        "hur länge smittar det",
        "hur länge smittar _PERS_PRON",
        "hur lång tid tar det innan _PERS_PRON slutar smitta?",
        "när slutar _PERS_PRON smitta andra?",
        ""
      ]
    },
    "bot": {
      "say": [
        "Enligt Folkhälsomyndigheten drivs smittspridningen av personer med symtom på sjukdom, men en del som är sjuka får bara milda symtom. Man kan därför bli smittad av någon som inte känner sig sjuk, men som har t. ex. mild hosta. Om man varit sjuk men inte vet om man haft coronavirus, så ska man vara hemma tills man är frisk och sedan ytterligare minst två dagar. "
      ],
      "set": {
        "classifiedIntentName": "question: hur länge smittar CORONA",
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
      "name": "question: Vad innebär isolering?",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "AUX": AUX
      },
      "examples": [
        "Vad innebär isolering?",
        "vad innebär att isolera sig?",
        "vad är isolering",
        "vad gör _PERS_PRON i isolering?",
        "hur är _PERS_PRON i isolering",
        "vad är en isolering",
        "hur _AUX _PERS_PRON bete sig i isolering",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad innebär isolering?",
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
      "name": "question: Kan jag bli smittad av en person som inte har symptom",
      "entities": {},
      "examples": [
        "Kan jag bli smittad av en person som inte har symptom",
        "Kan jag bli smittad av en person som är symptomfri",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Kan jag bli smittad av en person som inte har symptom",
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
      "name": "question: Hur vet jag när jag ska åka in till sjukhus",
      "entities": {},
      "examples": [
        "Hur vet jag när jag ska åka in till sjukhus",
        "Hur vet jag om jag har corona och ska åka in till sjukhus",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Hur vet jag när jag ska åka in till sjukhus",
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
      "name": "question: Kommer intensivvårdsavdelningarna i Sverige klara alla coronasmittade",
      "entities": {},
      "examples": [
        "Kommer intensivvårdsavdelningarna i Sverige klara alla coronasmittade",
        "Klarar sjukvården i Stockholm att vårda alla coronasmittade",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Kommer intensivvårdsavdelningarna i Sverige klara alla coronasmittade",
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
      "name": "question: Vad är smittskyddslagen?",
      "entities": {},
      "examples": [
        "Vad är smittskyddslagen?",
        "Vad betyder smittskyddslagen?",
        "Vad innehåller smittskyddslagen?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Vad är smittskyddslagen?",
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
      "name": "question: hur tvättar PERS_PRON händerna",
      "entities": {
        "PERS_PRON": PERS_PRON,
        "POS_PRON": POS_PRON
      },
      "examples": [
        "hur tvättar _PERS_PRON händerna",
        "hur ska _PERS_PRON tvätta _POS_PRON händer",
        "hur tvättar _PERS_PRON _POS_PRON händer",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: hur tvättar PERS_PRON händerna",
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
      "name": "question: HELLO",
      "entities": {
        "HELLO": HELLO
      },
      "examples": [
        "_HELLO",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: HELLO",
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
      "name": "question: Finns det ett slutdatum för CORONA? ",
      "entities": {
        "CORONA": CORONA
      },
      "examples": [
        "Finns det ett slutdatum för _CORONA? ",
        "När är _CORONA slut? ",
        "När tar _CORONA slut? ",
        "Hur länge ska _CORONA hålla på?",
        "Hur länge ska vi hålla på såhär?",
        ""
      ]
    },
    "bot": {
      "say": [
        ""
      ],
      "set": {
        "classifiedIntentName": "question: Finns det ett slutdatum för CORONA? ",
        "classifiedUtterance": "_user_text",
        "botResponse": [
          ""
        ]
      },
      "goto": "VERIFY_ANSWER"
    }
  }
]