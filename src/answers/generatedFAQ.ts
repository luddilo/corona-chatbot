import { UserTurn } from "narratory"
export const simpleQuestionAnswers : UserTurn[] = [
  {
    "intent": {
      "name": "question: vad är symptomen",
      "examples": [
        "vad är symptomen",
        "hur märker man om man har corona",
        "hur mår man om man har corona",
        "vad innebär corona",
        "hur vet jag om jag har corona",
        "hur vet man att man har corona",
        "vad är symptom för covid"
      ]
    },
    "bot": {
      "say": "De vanligaste symtomen är feber och hosta, men även andningspåverkan, halsont, huvudvärk, muskel- och ledvärk är vanliga symtom. En del blir allvarligt sjuka med exempelvis andningssvårigheter och lunginflammation.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad är symptomen",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur smittar det",
      "examples": [
        "hur smittar det",
        "hur smittar covid-19",
        "hur smittar corona",
        "är jag smittsam",
        "hur kan jag undvika att smitta andra",
        "hur vet jag om jag smittar"
      ]
    },
    "bot": {
      "say": "Viruset smittar i första hand genom kontakt med droppar och sekret från luftvägarna. Smitta kan därför ske vid hostningar och nysningar, eller vid kontakt med personer. Det är fortfarande oklart om viruset kan smitta via droppar som landat på ytor eller föremål.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur smittar det",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vilka är i riskzonen",
      "examples": [
        "vilka är i riskzonen",
        "vilka är riskgrupperna",
        "vem är i riskgruppen",
        "riskgrupper vilka är i dem",
        "vilka är mest i riskzonen",
        "vem riskerar få corona"
      ]
    },
    "bot": {
      "say": "Studier gjorda vid Folkhälsomyndigheten visar att hög ålder är den främsta riskfaktorn. Personer med hög ålder i kombination med andra sjukdomar, såsom högt blodtryck, hjärt- kärlsjukdom, lungsjukdom, cancer eller diabetes är också överrepresenterade.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vilka är i riskzonen",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur skyddar man sig",
      "examples": [
        "hur skyddar man sig",
        "hur kan jag skydda mig ",
        "hur kan jag skydda min familj",
        "vilka försiktighetsåtgärder kan jag ta",
        "hur kan jag minimera risken"
      ]
    },
    "bot": {
      "say": "Undvik att röra vid ansiktet och ögonen, och undvik nära kontakt med sjuka människor. Tvätta händerna ofta eller använd handsprit som alternativ. Hosta/nysa i armvecket eller i en pappersnäsduk. Stanna hemma när du är sjuk.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur skyddar man sig",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: Kan man smittas flera gånger ",
      "examples": [
        "Kan man smittas flera gånger ",
        "kan man ha corona flera gånger",
        "hur många gånger kan man ha corona",
        "kan jag ha corona två gånger",
        "kan corona smitta två gånger på samma person",
        "kan corona återkomma",
        "kan corona komma igen",
        "kan det komma igen",
        "kan jag bli smittad igen"
      ]
    },
    "bot": {
      "say": "Det är oklart hur länge man kommer att vara immun. Utifrån tidigare erfarenheter så är bedömningen att immuniteten varar så länge att man inte kommer att smittas fler gånger under en och samma säsong.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: Kan man smittas flera gånger ",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: ska jag stanna hemma",
      "examples": [
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
      "say": "Vid symtom som snuva, hosta eller feber ska du försöka låta bli att träffa andra människor, även om du bara känner dig lite sjuk. Du ska inte gå till jobbet eller skolan.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: ska jag stanna hemma",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur många dagar ska jag stanna hemma",
      "examples": [
        "hur många dagar ska jag stanna hemma",
        "hur många dagar ska man vara i karantän",
        "måste jag vara hemma en hel vecka",
        "hur vet jag hur länge jag måste stanna hemma",
        "hur långt ska jag vara hemma",
        "hur länge ska jag vara hemma"
      ]
    },
    "bot": {
      "say": "Stanna hemma så länge du känner dig sjuk, och vänta minst två dygn efter att du blivit frisk innan du går till jobb eller skola.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur många dagar ska jag stanna hemma",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur sjuk blir man av corona",
      "examples": [
        "hur sjuk blir man av corona",
        "blir man jättesjuk av corona",
        "hur pass sjuk blir man",
        "hur sjuk kan jag bli",
        "blir man alltid väldigt sjuk"
      ]
    },
    "bot": {
      "say": "De allra flesta som smittas blir lindrigt sjuka med luftvägssymtom som går över av sig själva, men vissa drabbas av allvarligare sjukdom som lunginflammation.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur sjuk blir man av corona",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur pass länge är man sjuk",
      "examples": [
        "hur pass länge är man sjuk",
        "hur länge har man corona",
        "hur lång tid kan man ha corona",
        "hur lång tid innan man corona går över",
        "när går corona över"
      ]
    },
    "bot": {
      "say": "Den kunskap vi har nu visar att de flesta som fått lindriga symtom blev friska efter två veckor. För de som blev allvarligt sjuka tog det mellan tre och sex veckor innan de var friska igen.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur pass länge är man sjuk",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur många dör av corona",
      "examples": [
        "hur många dör av corona",
        "kan man dö av corona",
        "hur många har dött av corona",
        "är det många som dör av covid-19",
        "vad är risken att dö av corona"
      ]
    },
    "bot": {
      "say": "WHO uppskattar i dagsläget att dödligheten är 1–2 % av de redan infekterade men uppskattningarna är fortfarande osäkra. Det kan finnas fler fall än vad som har rapporterats vilket kan innebära att dödligheten kommer att sjunka.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur många dör av corona",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: är det större risk om man är gravid",
      "examples": [
        "är det större risk om man är gravid",
        "hur stor är risken om man är gravid ",
        "hur ska man göra om man är gravid",
        "är graviditet en riskgrupp",
        "är gravida kvinnor i riskgruppen"
      ]
    },
    "bot": {
      "say": "För närvarande finns det begränsad information om covid-19 och graviditet. Vi rekommenderar att gravida kvinnor vidtar samma försiktighetsåtgärder som med alla smittsamma sjukdomar.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: är det större risk om man är gravid",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: smittar corona hela tiden",
      "examples": [
        "smittar corona hela tiden",
        "smittar corona direkt",
        "blir jag smittsam direkt om jag har fått corona",
        "är corona genast smittsamt ",
        "hur snabbt smittar jag om jag fått covid-19"
      ]
    },
    "bot": {
      "say": "Tillgänglig fakta visar att viruset smittar när man är sjuk och i samband med insjuknandet, och inte under inkubationstiden. De som har varit utsatta för smitta ska dock vara uppmärksamma på tidiga sjukdomstecken.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: smittar corona hela tiden",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: smittar corona utan symtom",
      "examples": [
        "smittar corona utan symtom",
        "kan jag bli smittad av en person utan symtom",
        "är corona smittsamt fastän en person inte känner sig sjuk",
        "måste det finnas symtom för att det ska vara smittsamt",
        "är corona smittsamt om man bara hostar lite"
      ]
    },
    "bot": {
      "say": "Epidemin drivs av personer med symtom på sjukdom, men en del som är sjuka får bara milda symtom. Man kan därför bli smittat av någon som inte känner sig sjuk, men som har t. ex. mild hosta.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: smittar corona utan symtom",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad är reglerna för stora evenemang",
      "examples": [
        "vad är reglerna för stora evenemang",
        "vilka regler gäller för evenemang",
        "vad gäller för event",
        "är alla evenemang inställda",
        "kommer alla event ställas in"
      ]
    },
    "bot": {
      "say": "Regeringen beslutade den 11:e mars att stoppa alla allmänna sammankomster och offentliga tillställningar med fler än 500 personer. Syftet är att förhindra att ett stort antal människor från olika ställen kommer och samlas på en och samma plats.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad är reglerna för stora evenemang",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vilka regler gäller för kollektivtrafik  arbetsplatser och skolor?",
      "examples": [
        "vilka regler gäller för kollektivtrafik  arbetsplatser och skolor?",
        "hur många får det vara på tunnelbanan",
        "vad gäller för tunnelbanan",
        "vad gäller för kollektivtrafiken",
        "hur många får det vara på en arbetsplats"
      ]
    },
    "bot": {
      "say": "Kollektivtrafik, arbetsplatser och skolor fungerar som vanligt. Folkhälsomyndigheten har gjort bedömningen att det fortfarande är viktigt att kollektivtrafiken fungerar och att friska personer kan åka till jobbet och skolan. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vilka regler gäller för kollektivtrafik  arbetsplatser och skolor?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: får man resa till andra länder",
      "examples": [
        "får man resa till andra länder",
        "är det okej att resa utomlands",
        "vad gäller om man ska resa utomlands",
        "är det ok att åka utomlands",
        "måste jag ställa in min semester utomlands"
      ]
    },
    "bot": {
      "say": "Det är Utrikesdepartementet (UD) som utfärdar reseavrådan till andra länder. Besök deras webbplats for att få den senaste informationen. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: får man resa till andra länder",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad gäller för flygplatser",
      "examples": [
        "vad gäller för flygplatser",
        "vilka regler gäller på flygplatser"
      ]
    },
    "bot": {
      "say": "Vi har fortlöpande dialog med flygplatserna och samarbetar på EU–nivå om dessa frågor. Vi har fokus på information till flygplatser om vart man ska vända sig om man får tecken på sjukdom.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad gäller för flygplatser",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: behöver jag göra något särskilt om jag är frisk",
      "examples": [
        "behöver jag göra något särskilt om jag är frisk",
        "ska jag göra något särskilt om jag känner mig frisk "
      ]
    },
    "bot": {
      "say": "Om du inte har hosta, andningssvårigheter eller feber kan du leva precis som vanligt. Däremot är det jätteviktigt att stanna hemma om man känner sig sjuk.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: behöver jag göra något särskilt om jag är frisk",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: jag tror jag har fått corona vad ska jag göra",
      "examples": [
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
      "say": "Det är mycket viktigt att stanna hemma när man känner sig sjuk. Om man inte klarar sig med egenvård i hemmet ska man ringa 1177 för sjukvårdsrådgivning. Besök inte någon vårdinrättning, utan kontakta alltid 1177 Vårdguiden först.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: jag tror jag har fått corona vad ska jag göra",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: har sverige beredskap",
      "examples": [
        "har sverige beredskap",
        "hur stor beredskap har sverige",
        "hur är sveriges beredskap just nu ",
        "har sverige någon beredskap "
      ]
    },
    "bot": {
      "say": "Den svenska beredskapen anses mycket bra. Hälso- och sjukvården samt landets smittskyddsenheter har sedan lång tid tillbaka en hög medvetenhet. Det finns rutiner för hur både misstänkta och bekräftade fall ska tas omhand på ett bra och säkert sätt. Privata aktörer är också medvetna om beredskap och krishantering, och det finns möjlighet till utökade provanalyser på andra laboratorier än Folkhälsomyndigheten vid behov.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: har sverige beredskap",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: kommer sjukhusen att klara det",
      "examples": [
        "kommer sjukhusen att klara det",
        "hur många orkar sjukhusen ta emot",
        "hur mycket klarar vården i sverige",
        "kommer alla kunna få vård mot corona i sverige",
        "får alla vård om många är smittade samtidigt"
      ]
    },
    "bot": {
      "say": "Erfarenheter från influensasäsonger med många smittade som behöver vård, visar att påfrestning på sjukvården då uppstår med behov av omprioriteringar och samarbeten inom och mellan regioner. Liknande situation kan uppstå om covid-19 får omfattande spridning i befolkningen. Sjukvårdens pandemiplanering kan då behöva användas.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: kommer sjukhusen att klara det",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: varför blir inte barn avstängda",
      "examples": [
        "varför blir inte barn avstängda",
        "kan barn som varit i drabbade områden bli avstängda från skolan",
        "kan barn som har en sjuk familjemedlem bli avstängda",
        "kan ett barn bli avstängt "
      ]
    },
    "bot": {
      "say": "Eftersom inget av de utbrott vi hittills sett av coronaviruset har haft koppling till skolor eller barn anses det osannolikt att friska barn skulle orsaka smittspridning.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: varför blir inte barn avstängda",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: kan sverige sättas i karantän?",
      "examples": [
        "kan sverige sättas i karantän?",
        "blir det karantän i sverige?",
        "riskerar sverige att sättas i karantän?",
        "finns det risk att bli karantän i sverige?"
      ]
    },
    "bot": {
      "say": "Eftersom covid-19 numera är klassad som samhällsfarlig, kan smittskyddsläkaren i respektive sjukvårdsregion ta beslut om karantän för friska personer. Om en mindre ingripande åtgärd, t.ex. förhållningsregler, kan få samma effekt ska den väljas istället.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: kan sverige sättas i karantän?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: finns det vaccin?",
      "examples": [
        "finns det vaccin?",
        "kan jag vaccinera mig mot coronaviruset?",
        "när kommer vaccin mot corona?",
        "finns det vaccin mot corona?"
      ]
    },
    "bot": {
      "say": "Det finns inget vaccin och i nuläget finns det inget specifikt läkemedel mot covid-19. Internationella studier av olika typer av läkemedelsbehandlingar pågår och forskning sker kring utveckling av ett vaccin.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: finns det vaccin?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad är coronavirus",
      "examples": [
        "vad är coronavirus",
        "vad är corona",
        "vad är ett coronavirus",
        "förklara vad corona är"
      ]
    },
    "bot": {
      "say": "Det finns ett stort antal virus som tillhör coronavirusfamiljen, men endast sju av dessa kan smitta och ge upphov till sjukdom hos människor. I slutet av 2019 upptäcktes ett nytt coronavirus i Kina som kan smitta människor, detta nya virus ger upphov till sjukdomen covid-19.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad är coronavirus",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad är covid-19",
      "examples": [
        "vad är covid-19",
        "vad är covid",
        "kan du förklara vad covid-19 är"
      ]
    },
    "bot": {
      "say": "Covid-19 står för coronavirus disease 2019, och är det officiella namnet på sjukdomen som orsakas av det nya coronaviruset.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad är covid-19",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: är corona influensa",
      "examples": [
        "är corona influensa",
        "vad skiljer corona från influensa",
        "vad skiljer covid från influensa",
        "är influensa samma sak som corona",
        "corona och influensa är det samma sak",
        "är corona och influensa olika"
      ]
    },
    "bot": {
      "say": "Corona-viruset är helt nytt vilket gör det svårt att jämföra med influensan som är återkommande. De är liknande i symptom men COVID-19 sprider sig otroligt mycket snabbare då ingen har utvecklat immunitet ännu. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: är corona influensa",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: funkar munskydd",
      "examples": [
        "funkar munskydd",
        "skyddar munskydd mot corona",
        "hjälper munskydd",
        "kan jag skydda mig med munskydd",
        "är det bra att ha munskydd ",
        "borde jag ha munskydd",
        "borde jag ha skydd för munnen"
      ]
    },
    "bot": {
      "say": "Nej, munskydd skyddar inte den som är frisk mot covid-19. Däremot kan den som är sjuk till viss del skydda sin omgivning från att viruset sprids vid till exempel hosta och nysningar.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: funkar munskydd",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: finns det botemedel",
      "examples": [
        "finns det botemedel",
        "finns det något coronavaccin",
        "finns det något läkemedel mot corona",
        "kan man bli botad ",
        "finns det vaccin än",
        "Kan man vaccinera sig mot corona"
      ]
    },
    "bot": {
      "say": "I nuläget finns det inget vaccin eller speciellt läkemedel mot covid-19. Internationella studier av olika typer av läkemedelsbehandlingar pågår och forskning sker kring utveckling av ett vaccin.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: finns det botemedel",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: kommer alla bli friska från corona",
      "examples": [
        "kommer alla bli friska från corona",
        "hur pass många blir friska",
        "hur stor är chansen att klara sig",
        "hur många tillfrisknar från coronavirus",
        "hur många blir friska"
      ]
    },
    "bot": {
      "say": "Majoriteten av de som smittas blir friska förutom en mycket liten andel personer som kan bli allvarligt sjuka, varav de flesta tillhör någon riskgrupp. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: kommer alla bli friska från corona",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: ska jag städa på något särskilt sätt",
      "examples": [
        "ska jag städa på något särskilt sätt",
        "måste jag städa extra noga",
        "vad ska jag göra med mina sopor",
        "kan mina sopor vara infekterade",
        "hur städar jag om jag tror att det finns corona i hemmet"
      ]
    },
    "bot": {
      "say": "I ett hushåll där någon smittats av det nya coronaviruset räcker det att man städar så som man gör i normala fall. Det är viktigt att tvätta händerna noga när man har städat eller hanterat sopor.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: ska jag städa på något särskilt sätt",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: varför stängs inte skolorna",
      "examples": [
        "varför stängs inte skolorna",
        "kommer skolorna att stängas",
        "hur länge kommer skolorna att vara öppna",
        "hur kommer det sig att skolorna i sverige inte stängs",
        "varför är skolorna öppna"
      ]
    },
    "bot": {
      "say": "Det finns inga vetenskapliga studier som visar att stängning av skolor får någon större betydelse. Det finns heller inte några uppgifter som pekar på någon större spridning av covid-19 i skolor någonstans i världen. Stängda skolor skulle tvinga många inom hälso- och sjukvården att stanna hemma med sina barn, och känsliga grupper som mor- och farföräldrar skulle hos vissa familjer behöva ta hand om barnen.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: varför stängs inte skolorna",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur länge överlever corona ",
      "examples": [
        "hur länge överlever corona ",
        "kan corona leva utanför kroppen",
        "kan viruset leva på ytor",
        "kan coronavirus överleva på ett handtag",
        "hur snabbt dör corona utanför kroppen"
      ]
    },
    "bot": {
      "say": "Det är ännu inte klarlagt hur länge viruset kan överleva utanför kroppen. Forskningsstudier som utförts på närbesläktade coronavirus visar att de kan överleva flera dagar på ytor och föremål men för detta krävs särskilda förhållanden, så som rätt temperatur, solljus och luftfuktighet.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur länge överlever corona ",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: kan paket vara smittade med corona",
      "examples": [
        "kan paket vara smittade med corona",
        "kan det vara corona på min post",
        "hur desinfierar jag min post",
        "kan det finnas corona på mina brev",
        "kan jag bli smittad av min post"
      ]
    },
    "bot": {
      "say": "Kunskap från liknande tidigare utbrott visar att denna typ av virus smittar från sjuka människor, och inte genom paket och postförsändelser.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: kan paket vara smittade med corona",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: kan jag smittas av mitt husdjur",
      "examples": [
        "kan jag smittas av mitt husdjur",
        "jag jag få smittan av djur",
        "kan jag smitta mina husdjur",
        "smittar corona mellan människor och husdjur",
        "hur skyddar jag mina husdjur"
      ]
    },
    "bot": {
      "say": "Det är troligt att en djurkälla från en djurmarknad i Kina orsakade några av de första rapporterade mänskliga infektionerna. Det finns inga uppgifter idag om att covid-19 kan smitta från människa till djur.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: kan jag smittas av mitt husdjur",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vilka länder är smittade",
      "examples": [
        "vilka länder är smittade",
        "i vilka länder kan jag få corona",
        "finns det några säkra länder",
        "är alla länder drabbade",
        "vilka länder har blivit smittade"
      ]
    },
    "bot": {
      "say": "Covid-19 är nu en pandemi, vilket innebär att den finns eller kommer finnas i alla världsdelar. Sannolikt kommer covid-19 att drabba alla världens länder.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vilka länder är smittade",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad innebär det att vi har en samhällsspridning av corona i Sverige?",
      "examples": [
        "vad innebär det att vi har en samhällsspridning av corona i Sverige?",
        "vad innebär samhällsspridning",
        "vad betyder samhällsspridning",
        "vad betyder spridning i samhället",
        "har vi samhällsspridning i sverige"
      ]
    },
    "bot": {
      "say": "I Region Stockholm og i Västra Götalandsregionen ser vi nu tecken på samhällsspridning. Det innebär att du ska försöka låta bli att träffa andra människor, och inte gå till jobbet eller skolan - även om du bara känner dig lite sjuk. Stanna hemma så länge du känner dig sjuk så du inte riskerar att smitta andra.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad innebär det att vi har en samhällsspridning av corona i Sverige?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad är smittspårning",
      "examples": [
        "vad är smittspårning",
        "vad betyder smittspårning",
        "vad betyder det att vara smittspårad",
        "hur smittspårar man",
        "vad är smittspårning av corona"
      ]
    },
    "bot": {
      "say": "Smittspårning kan ha en avgörande betydelse för att förhindra smittspridning och minska risken för större utbrott. Den behandlande läkaren ska ta reda på hur en smittad person har blivit smittad, och vem eller vilka andra som kan vara smittade eller har blivit utsatta för smitta.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad är smittspårning",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad är det för särskilt med 500 personer",
      "examples": [
        "vad är det för särskilt med 500 personer",
        "varför är det 500 personer",
        "hur kommer det sig att det är just 500 ",
        "vad händer efter 500",
        "vad är problemet med fler än 500 personer"
      ]
    },
    "bot": {
      "say": "Större evenemang riskerar att öka smittspridningen eftersom de lockar till sig åskådare från olika delar av landet. Folkhälsomyndigheten har därför bedömt att gränsen bör gå vid 500 personer. Norge valde samma gräns.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad är det för särskilt med 500 personer",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: kan flygkontroller minska spridningen",
      "examples": [
        "kan flygkontroller minska spridningen",
        "kan flygplatserna påverka smittspridningen",
        "kollas alla på flygplatsen",
        "blir alla kontrollerade på flygplatser",
        "är det hälsokoll på flygplatsen"
      ]
    },
    "bot": {
      "say": "Folkhälsomyndigheten baserar sina rekommendationer om hälsokontroller bland annat på information från WHO och ECDC. Erfarenhet från SARS-epidemin visar att hälsokontroller på flygplatser inte är ett effektivt sätt att begränsa smittspridningen. Det är även resurskrävande, och fångar enbart upp smittade personer som redan har symtom.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: kan flygkontroller minska spridningen",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vem bestämmer vem som ska sättas i karantän",
      "examples": [
        "vem bestämmer vem som ska sättas i karantän",
        "kan man bli tvingad att sitta i karantän",
        "måste jag vara i karantän",
        "vad innebär karantän",
        "vad innebär att sitta i karantän"
      ]
    },
    "bot": {
      "say": "Eftersom det nya coronaviruset är klassat som samhällsfarligt kan friska personer sättas i karantän. Beslutet tas av smittskyddsläkaren i respektive sjukvårdsregion, och det är noga reglerad i smittskyddslagen. Karantän kan innebära att placeras i hemmet, en avgränsad del av en byggnad eller ett område.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vem bestämmer vem som ska sättas i karantän",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad är Folkhälsomyndigheten",
      "examples": [
        "vad är Folkhälsomyndigheten",
        "vilken roll har Folkhälsomyndigheten",
        "vilket ansvar har Folkhälsomyndigheten",
        "vad gör Folkhälsomyndigheten"
      ]
    },
    "bot": {
      "say": "Folkhälsomyndigheten (FHM) ska ta fram och förmedla vetenskapligt grundad kunskap som förebygger ohälsa och sjukdomar, och som ger samhället stöd i arbetet mot hälsohot. FHM följer händelseutvecklingen av covid-19 noga, och gör riskbedömningar samt bedömer hur utbrottet utvecklas. Sjukvård, regionala smittskyddsenheter och andra aktörer får information om det aktuella läget, och FHM tar ställning till vilka åtgärdar som är relevanta att genomföra. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad är Folkhälsomyndigheten",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad betyder pandemi",
      "examples": [
        "vad betyder pandemi",
        "vad innebär en pandemi",
        "vad innebär pandemi",
        "vad händer vid en pandemi"
      ]
    },
    "bot": {
      "say": "En pandemi innebär en omfattande spridning till alla världens kontinenter av en helt ny typ av smittsam sjukdom. Vid en pandemi kommer sjukdomen med stor sannolikhet påverka stora delar av vårt samhälle och världens befolkning. Det är WHO som deklarerar om en smittspridning bedöms vara en pandemi, och detta gjordes den 11:e mars 2020. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad betyder pandemi",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad betyder det att corona är allmänfarlig",
      "examples": [
        "vad betyder det att corona är allmänfarlig",
        "vad innebär samhällsfarlig sjukdom",
        "vad är en samhällsfarlig sjukdom ",
        "vad är allmänfarlig",
        "är corona samhällsfarlig "
      ]
    },
    "bot": {
      "say": "Att klassa smittan som allmänfarlig och samhällsfarlig stärker den svenska beredskapen vid samhällsspridning av covid-19, eftersom det gör det möjligt att vidta de förebyggande åtgärder som är relevanta för att hindra en spridning av smitta i samhället. För allmänfarlig och samhällsfarlig smitta finns möjligheter att besluta om åtgärder som exempelvis karantän, isolering, hälsoundersökningar vid inresa och avspärrningar av områden.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad betyder det att corona är allmänfarlig",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad betyder droppsmitta",
      "examples": [
        "vad betyder droppsmitta",
        "vad innebär droppsmitta",
        "hur smittar droppsmitta",
        "vad är luftburen smitta?",
        "vad är droppsmitta?",
        "hur smittar luftburen smitta?"
      ]
    },
    "bot": {
      "say": "Vid droppsmitta sprids smittan via droppar i luften, t.ex. när någon antingen hostar, nyser eller kräks. Dessa droppar når som regel inte längre än någon meter. Luftburen smitta rör sig om små, intorkade droppar som håller sig kvar i luften, färdas långa sträckor och smittar den som andas in dem. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad betyder droppsmitta",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad är direktkontakt?",
      "examples": [
        "vad är direktkontakt?",
        "vad är indirekt kontaktsmitta?",
        "hur smittar man genom direktkontakt?",
        "hur smittar viruset via indirekt kontakt?"
      ]
    },
    "bot": {
      "say": "Direkt kontaktsmitta kan ske vid direkt fysisk kontakt mellan en smittbärare och en annan person. Vid indirekt kontaktsmitta överförs smittämnet istället via mellanled från en person till en annan. Kontaktsmitta är den vanligaste smittvägen i vården.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad är direktkontakt?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur använder jag ett andningsskydd",
      "examples": [
        "hur använder jag ett andningsskydd",
        "vad innebär andningsskydd",
        "vad är andningsskydd mot corona",
        "vad är skydd för andning",
        "vem bär andningsskydd"
      ]
    },
    "bot": {
      "say": "Andningsskydd används inom sjukvården där det finns hög smittrisk. Ofta har de inbyggda filter som filtrerar bort smittämnen och andra partiklar från luften man andas in. För att andningsskyddet ska ge avsett skydd måste det anpassas till den som ska använda det plus att personen behöver träning i hur det ska användas.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur använder jag ett andningsskydd",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur kan provsvaret för corona ändras",
      "examples": [
        "hur kan provsvaret för corona ändras",
        "varför ändrades provsvaret",
        "kan provsvaret för corona ändras",
        "hur är det möjligt att olika coronaprov ger olika resultat",
        "kan jag få olika besked från två  olika coronatest"
      ]
    },
    "bot": {
      "say": "Om patienten blir provtagen innan sjukdomen brutit ut kan detta hända. Negativa provsvar under inkubationstiden utesluter alltså inte att man är smittad. Om fortsatt misstanke om covid-19 kvarstår bör provtagning upprepas när eventuella symtom utvecklats.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur kan provsvaret för corona ändras",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur länge kan man smitta andra?",
      "examples": [
        "hur länge kan man smitta andra?",
        "när smittar man?",
        "hur länge smittar en person med coronaviruset?",
        "hur lång tid smittar corona?"
      ]
    },
    "bot": {
      "say": "Så länge patienten är sjuk, och även i samband med själva insjuknandet.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur länge kan man smitta andra?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad är social distansiering?",
      "examples": [
        "vad är social distansiering?",
        "vad är syftet med social distansering?",
        "hur fungerar social distansering?",
        "vad är målet med social distansering?",
        "vad gäller vid social distansering?"
      ]
    },
    "bot": {
      "say": "Social distansering syftar till att förhindra sjuka människor från att komma i nära kontakt med friska människor för att minska möjligheterna till överföring av sjukdomar. Just nu är målet med social distansering att bromsa utbrottet för att minska risken för infektion bland högrisk-grupper samt minska belastningen på sjukvårdssystem och arbetstagare.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad är social distansiering?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur gör man social distansering?",
      "examples": [
        "hur gör man social distansering?",
        "vad kan man göra för social distansering?",
        "hur göra social distansering?"
      ]
    },
    "bot": {
      "say": "Undvik offentliga, folktäta platser som t.ex. shopping-centrum, bio eller arenor. Håll avstånd (ungefär 2 meter, eller 6 fot) från andra om möjligt.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur gör man social distansering?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur förhindrar jag spridning av virus?",
      "examples": [
        "hur förhindrar jag spridning av virus?",
        "vad kan jag göra för att förhindra virusspridning?",
        "hur stoppar jag virusspridning?",
        "hur förebygger jag virusspridning?"
      ]
    },
    "bot": {
      "say": "Tvätta händerna regelbundet och ordentligt med tvål och vatten minst 20 sekunder. Använd alcogel om tvål och vatten inte finns tillgängligt. Vidrör varken ögon, näsa eller mun med otvättade händer. Rengör och desinfektera ytor och saker som människor vanligtvis rör. Hosta och nys i böjd armbåge eller näsduk. Se alltid till att slänga näsduken i soporna. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur förhindrar jag spridning av virus?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: kommer corona sluta spridas till sommaren?",
      "examples": [
        "kommer corona sluta spridas till sommaren?",
        "kommer virusutbrottet avstanna när det blir varmt?",
        "kommer spridningen av corona avta till sommaren?",
        "kan spridningen av corona minska när vädret blir varmare?",
        "sprids corona långsammare i varmt väder?"
      ]
    },
    "bot": {
      "say": "För närvarande är det inte känt om spridningen av Covid-19 kommer att minska när vädret blir varmare. Utredningar gällande överförbarhet, svårighetsgrad och andra funktioner förknippade med Covid-19 pågår just nu. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: kommer corona sluta spridas till sommaren?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad är inreseförbudet?",
      "examples": [
        "vad är inreseförbudet?",
        "vad händer vid inreseförbudet?",
        "när är inreseförbudet?",
        "varför har vi inreseförbud?",
        "när börjar inreseförbudet? ",
        "när slutar inreseförbudet?"
      ]
    },
    "bot": {
      "say": "Från och med den 19 mars och 30 dagar framåt kommer icke nödvändiga resor till Sverige från länder utanför Europa att stoppas. Detta efter beslut från den svenska regeringen i ett försök att minska spridningen av Covid-19. Vid behov kan beslutet komma att förlängas.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad är inreseförbudet?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vem rörs av inreseförbudet?",
      "examples": [
        "vem rörs av inreseförbudet?",
        "vem rörs inte av inreseförbudet?",
        "vilka undantag gäller för inreseförbudet?",
        "görs det undantag för inreseförbudet?",
        "vem görs undantag för gällande inreseförbudet?"
      ]
    },
    "bot": {
      "say": "Inreseförbudet gäller för alla utländska medborgare som försöker resa in i Sverige från ett land som inte ingår i Schengensamarbetet samt Schweiz. Undantag görs för svenska medborgare och andra personer som är bosatta med eget hem i Sverige samt diplomater och personer som är i behov av internationellt skydd. Även personer som utför nödvändiga funktioner i Sverige, t.ex hälso- och sjukvårdspersonal som transporterar varor till Sverige undantas från inreseförbudet. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vem rörs av inreseförbudet?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: kan man testa sig hemma för corona?",
      "examples": [
        "kan man testa sig hemma för corona?",
        "kan man testa sig hemma för covid?",
        "går det att testa sig hemma?",
        "är självtester pålitliga?",
        "kan man lita på självtester?"
      ]
    },
    "bot": {
      "say": "Just nu finns det tillverkare som marknadsför självtester för covid-19. I nuläget är det dock inte klart hur exakta eller känsliga dessa tester är. Folkhälsomyndigheten rekommenderar därför att dessa självtester inte används och hänvisar istället till sjukvårdens egna tester för en mer exakt och pålitlig sjukdomsbild.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: kan man testa sig hemma för corona?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: behöver man läsa via distans nu?",
      "examples": [
        "behöver man läsa via distans nu?",
        "varför behöver skolorna läsa på distans?",
        "kommer all undervisning nu bedrivas på distans?",
        "bedrivs undervisning på distans?",
        "Varför ska  undervisningen för gymnasieelever och studenter ske på distans?",
        "erbjuder skolorna undervisning på distans?"
      ]
    },
    "bot": {
      "say": "För att bromsa spridningen av covid-19 rekommenderar Folkhälsomyndigheten från den 17 mars 2020 att undervisningen i gymnasieskolor, universitet, högskolor, yrkeshögskolor och komvux ska ske på distans. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: behöver man läsa via distans nu?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vad gäller angående undervisning i grundskolor?",
      "examples": [
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
      "say": "Nej. Folkhälsomyndigheten rekommendationer gällande distansundervisning gäller endast från gymnasiet och uppåt. Detta för att gymnasieskolor, universitet och högskolor samlar elever och studenter från upptagningsområden som är mycket större än grundskolans. Gymnasieelever och studenter är inte heller i behov av omsorg, till skillnad från barn i grundskolan.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vad gäller angående undervisning i grundskolor?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur ska man bete sig om man är över 70 år?",
      "examples": [
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
      "say": "Folkhälsomyndigheten uppmanar personer som är 70 år och äldre att hålla sig hemma och begränsa närmare kontakt med andra de kommande veckorna. Äldre bör även undvika folksamlingar i exempelvis kollektivtrafik, affärer eller offentliga lokaler. Promenader utomhus är ok, bara inte i grupp. Be om hjälp för att göra ärenden som exempelvis handla mat .. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur ska man bete sig om man är över 70 år?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: hur skyddar vi de äldre?",
      "examples": [
        "hur skyddar vi de äldre?",
        "hur skyddar vi de som är 70 år eller äldre?",
        "hur kan man ta hand om äldre?",
        "hur håller man äldre borta från viruset?",
        "kan jag ha närkontakt med äldre?",
        "hur skyddar jag äldre från smitta?"
      ]
    },
    "bot": {
      "say": "Det är viktigt att skydda de äldre från smitta. Ha därför ingen närkontakt med personer som är 70 år och äldre om det inte är helt nödvändigt. Stanna hemma när du känner dig sjuk, även om du bara är lite förkyld. Covid-19 kan ge lindriga symtom som liknar en förkylning, så det är viktigt att vara vaksam.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: hur skyddar vi de äldre?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: vem kan testas för corona?",
      "examples": [
        "vem kan testas för corona?",
        "vilka personer kan testa sig för corona?",
        "kan jag testa mig för corona?",
        "när kan man testa sig för corona?",
        "ska man stanna hemma när man uppvisar symptom på corona?"
      ]
    },
    "bot": {
      "say": "Personer som är i behov av vård på sjukhus, alternativt personal inom sjukvård och äldreomsorg med misstänkt covid-19. Alla som är sjuka i förkylning eller influensaliknande symtom ska vara hemma för att inte riskera att sprida smitta vidare till andra. . Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: vem kan testas för corona?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  },
  {
    "intent": {
      "name": "question: måste alla i familjen stanna hemma om en är sjuk?",
      "examples": [
        "måste alla i familjen stanna hemma om en är sjuk?",
        "måste man stanna hemma om någon i hushållet är sjuk?",
        "om någon i hushållet är sjuk utan symptom, måste resten av hushållet stanna hemma då?",
        "kan man gå till skolan även om någon i familjen är sjuk?",
        "kan man gå till jobbet även fast någon i hushållet är sjuk?"
      ]
    },
    "bot": {
      "say": "Så länge andra familjemedlemmar inte har symtom kan de göra som vanligt och gå till skola, förskola eller jobb.. Var det ett korrekt svar?",
      "set": {
        "classifiedQuestion": "question: måste alla i familjen stanna hemma om en är sjuk?",
        "classifiedUtterance": "_user_text"
      },
      "user": [
        {
          "intent": {
            "name": "confirmRight",
            "examples": [
              "ja",
              "japp",
              "absolut",
              "okej",
              "jajamän",
              "alright",
              "yes",
              "korrekt",
              "det stämmer",
              "det är rätt",
              "rätt",
              "stämmer"
            ]
          },
          "bot": "Tack!"
        },
        {
          "intent": {
            "name": "confirmWrong",
            "examples": [
              "nej",
              "nope",
              "no",
              "aldrig",
              "jag vill inte",
              "ej korrekt",
              "det stämmer inte",
              "det är fel",
              "fel",
              "stämmer ej"
            ]
          },
          "bot": {
            "say": "Tack!",
            "url": "https://europe-west1-healthadvisor-nnbwwd.cloudfunctions.net/confirmWrong",
            "params": [
              "classifiedQuestion",
              "classifiedUtterance"
            ],
            "asyncWebhook": true
          }
        },
        {
          "intent": {
            "examples": [
              "__ANYTHING"
            ]
          },
          "bot": {
            "say": "Förlåt, var det rätt eller fel svar?",
            "repair": true
          }
        }
      ]
    }
  }
]