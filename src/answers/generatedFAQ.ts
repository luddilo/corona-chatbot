import { UserTurn } from "narratory"
export const simpleQuestionAnswers : UserTurn[] = [
  {
    "intent": {
      "name": "question: vad är symptomen",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "vad är symptomen",
        "hur märker man om man har _CORONA",
        "hur mår man om man har _CORONA",
        "vad innebär _CORONA",
        "hur vet jag om jag har _CORONA",
        "hur vet man att man har _CORONA",
        "vad är symptom för _CORONA"
      ]
    },
    "bot": {
      "say": [
        "Enligt Folkhälsomyndigheten är de vanligaste symtomen feber och hosta, men även andningspåverkan, halsont, huvudvärk, muskel- och ledvärk är vanliga symtom. De flesta får lindriga besvär som går över av sig själva med egenvård i hemmet. En del blir allvarligt sjuka med exempelvis svårigheter att andas och lunginflammation."
      ],
      "set": {
        "classifiedQuestion": "question: vad är symptomen",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur smittar det",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "Viruset smittar i första hand genom kontakt med droppar och sekret från luftvägarna. Smitta kan därför ske vid hostningar och nysningar, eller vid kontakt med personer. Det är fortfarande oklart om viruset kan smitta via droppar som landat på ytor eller föremål. Genom att tvätta händerna och undvika att röra vid ansiktet samt att undvika nära kontakt med sjuka människor minskar risken för smitta. "
      ],
      "set": {
        "classifiedQuestion": "question: hur smittar det",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vilka är i riskzonen",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "Alla kan få coronavirus. Många får bara milda symptom, men vissa blir väldigt sjuka och behöver vård. Även de med milda symptom kan smitta, vilket kan bli farligt om de smittar människor i riskgrupper. Enligt Folkhälsomyndigheten visar studier att hög ålder är den främsta riskfaktorn för att bli väldigt sjuk. Personer med hög ålder i kombination med andra sjukdomar, såsom högt blodtryck, hjärt- kärlsjukdom, lungsjukdom, cancer eller diabetes är extra utsatta.  Just nu rekommenderas du som är över 70 år att försöka undvika platser med många människor, för att vara extra försiktig. Det kan exempelvis vara kollektivtrafiken, affärer eller apotek. Har du någon i din närhet som kan hjälpa dig med ärenden, så fråga dem. Men undvik nära kontakt med andra människor. Du kan också kontakta kommunen där du bor om du behöver hjälp."
      ],
      "set": {
        "classifiedQuestion": "question: vilka är i riskzonen",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur skyddar man sig",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: hur skyddar man sig",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: Kan man smittas flera gånger",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "Kan man smittas flera gånger",
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
      "say": [
        "Det är oklart hur länge man kommer att vara immun. Utifrån tidigare erfarenheter så är bedömningen att immuniteten varar så länge att man inte kommer att smittas fler gånger under en och samma säsong."
      ],
      "set": {
        "classifiedQuestion": "question: Kan man smittas flera gånger",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: ska jag stanna hemma",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "Känner du dig sjuk med symtom som snuva, hosta eller feber ska du låta bli att träffa andra människor. Det gäller även om du bara känner dig lite sjuk. Du ska inte gå till jobbet eller skolan, inte resa med buss, tåg, tunnelbana eller flyg och inte heller gå ut för att handla. Om du känner dig det minsta sjuk, stanna hemma. När du känner dig helt frisk, stanna hemma i minst två dagar till.  Folkhälsomyndigheten ger också rådet att du jobbar hemifrån i den mån det är möjligt, även om du är frisk. Syftet är att minska hastigheten i smittspridningen och att hålla nere antalet personer som behöver sjukhusvård. Många länder i världen uppmanar människor att hålla sig hemma även om de är friska för att sakta ner smittspridningen."
      ],
      "set": {
        "classifiedQuestion": "question: ska jag stanna hemma",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur många dagar ska jag stanna hemma",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "Stanna hemma tills du är helt frisk och stanna sedan hemma i minst två dygn till innan du går till jobbet, åker i kollektivtrafiken eller går och handlar. Om du har äldre släktingar, kan du som anhörig och närstående undvika att träffa dem, särskilt om du har varit sjuk. Det är för att skydda dem från virus."
      ],
      "set": {
        "classifiedQuestion": "question: hur många dagar ska jag stanna hemma",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur sjuk blir man av corona",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: hur sjuk blir man av corona",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur pass länge är man sjuk",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "hur pass länge är man sjuk",
        "hur länge har man corona",
        "hur lång tid kan man ha corona",
        "hur lång tid innan man corona går över",
        "när går corona över"
      ]
    },
    "bot": {
      "say": [
        "Enligt Folkhälsomyndigheten blir flesta som fått lindriga symtom  friska efter två veckor. För de som blev allvarligt sjuka tog det mellan tre och sex veckor innan de var friska igen.   De som blev allvarligt sjuka hade andningssvårigheter, som snabb andning och låg syresättning av blodet. En del av dem behövde intensivvård, till exempel med respirator. Dessa allvarliga symtom kom vanligen en vecka efter insjuknandet."
      ],
      "set": {
        "classifiedQuestion": "question: hur pass länge är man sjuk",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur många dör av corona",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: hur många dör av corona",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: är det större risk om man är gravid",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: är det större risk om man är gravid",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: smittar corona hela tiden",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: smittar corona hela tiden",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: smittar corona utan symtom",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "smittar corona utan symtom",
        "kan jag bli smittad av en person utan symtom",
        "är corona smittsamt fastän en person inte känner sig sjuk",
        "måste det finnas symtom för att det ska vara smittsamt",
        "är corona smittsamt om man bara hostar lite"
      ]
    },
    "bot": {
      "say": [
        "Enligt Folkhälsomyndigheten drivs smittspridningen av personer med symtom på sjukdom, men en del som är sjuka får bara milda symtom. Man kan därför bli smittad av någon som inte känner sig sjuk, men som har t. ex. mild hosta. "
      ],
      "set": {
        "classifiedQuestion": "question: smittar corona utan symtom",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad är reglerna för stora evenemang",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vad är reglerna för stora evenemang",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vilka regler gäller för kollektivtrafik  arbetsplatser och skolor?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vilka regler gäller för kollektivtrafik  arbetsplatser och skolor?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: får man resa till andra länder",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "får man resa till andra länder",
        "är det okej att resa utomlands",
        "vad gäller om man ska resa utomlands",
        "är det ok att åka utomlands",
        "måste jag ställa in min semester utomlands"
      ]
    },
    "bot": {
      "say": [
        "Det är Utrikesdepartementet (UD) som utfärdar reseavrådan till andra länder. Sedan i början på Mars avråder UD från icke nödvändiga resor till alla länder. Besök deras webbplats for att få den senaste informationen.  Det är dessutom många länder som inte tar emot inresande just nu för att begränsa smittspridningen."
      ],
      "set": {
        "classifiedQuestion": "question: får man resa till andra länder",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: behöver jag göra något särskilt om jag är frisk",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "behöver jag göra något särskilt om jag är frisk",
        "ska jag göra något särskilt om jag känner mig frisk"
      ]
    },
    "bot": {
      "say": [
        "Om du inte har hosta, andningssvårigheter eller feber kan du leva precis som vanligt. Däremot är det jätteviktigt att stanna hemma om man känner sig sjuk."
      ],
      "set": {
        "classifiedQuestion": "question: behöver jag göra något särskilt om jag är frisk",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: jag tror jag har fått corona vad ska jag göra",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "Det är mycket viktigt att stanna hemma när man känner sig sjuk. Om man inte klarar sig med egenvård i hemmet ska man ringa 1177 för sjukvårdsrådgivning. Besök inte någon vårdinrättning, utan kontakta alltid 1177 Vårdguiden först."
      ],
      "set": {
        "classifiedQuestion": "question: jag tror jag har fått corona vad ska jag göra",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: har sverige beredskap",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "har sverige beredskap",
        "hur stor beredskap har sverige",
        "hur är sveriges beredskap just nu",
        "har sverige någon beredskap"
      ]
    },
    "bot": {
      "say": [
        "Den svenska beredskapen anses mycket bra. Hälso- och sjukvården samt landets smittskyddsenheter har sedan lång tid tillbaka en hög medvetenhet. Det finns rutiner för hur både misstänkta och bekräftade fall ska tas omhand på ett bra och säkert sätt. Privata aktörer är också medvetna om beredskap och krishantering, och det finns möjlighet till utökade provanalyser på andra laboratorier än Folkhälsomyndigheten vid behov."
      ],
      "set": {
        "classifiedQuestion": "question: har sverige beredskap",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: kommer sjukhusen att klara det",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: kommer sjukhusen att klara det",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: varför blir inte barn avstängda",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: varför blir inte barn avstängda",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: kan sverige sättas i karantän?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: kan sverige sättas i karantän?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: finns det vaccin?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "finns det vaccin?",
        "kan jag vaccinera mig mot coronaviruset?",
        "när kommer vaccin mot corona?",
        "finns det vaccin mot corona?",
        "finns det vaccin mot corona?"
      ]
    },
    "bot": {
      "say": [
        "Det finns inget vaccin och i nuläget finns det inget specifikt läkemedel mot covid-19. Internationella studier av olika typer av läkemedelsbehandlingar pågår och forskning sker kring utveckling av ett vaccin."
      ],
      "set": {
        "classifiedQuestion": "question: finns det vaccin?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad är coronavirus",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "vad är coronavirus",
        "vad är corona",
        "vad är ett coronavirus",
        "förklara vad corona är"
      ]
    },
    "bot": {
      "say": [
        "Det finns ett stort antal virus som tillhör coronavirusfamiljen, men endast sju av dessa kan smitta och ge upphov till sjukdom hos människor. I slutet av 2019 upptäcktes ett nytt coronavirus i Kina som kan smitta människor, detta nya virus ger upphov till sjukdomen covid-19."
      ],
      "set": {
        "classifiedQuestion": "question: vad är coronavirus",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad är covid-19",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vad är covid-19",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: är corona influensa",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "Corona-viruset är helt nytt vilket gör det svårt att jämföra med influensan som är återkommande. De är liknande i symptom men COVID-19 sprider sig otroligt mycket snabbare då ingen har utvecklat immunitet ännu."
      ],
      "set": {
        "classifiedQuestion": "question: är corona influensa",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: funkar munskydd",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: funkar munskydd",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: finns det botemedel",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: finns det botemedel",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: kommer alla bli friska från corona",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: kommer alla bli friska från corona",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: ska jag städa på något särskilt sätt",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: ska jag städa på något särskilt sätt",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: varför stängs inte skolorna",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: varför stängs inte skolorna",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur länge överlever corona",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: hur länge överlever corona",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: kan paket vara smittade med corona",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: kan paket vara smittade med corona",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: kan jag smittas av mitt husdjur",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: kan jag smittas av mitt husdjur",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vilka länder är smittade",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vilka länder är smittade",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad innebär det att vi har en samhällsspridning av corona i Sverige?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vad innebär det att vi har en samhällsspridning av corona i Sverige?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad är smittspårning",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vad är smittspårning",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad är det för särskilt med 500 personer",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vad är det för särskilt med 500 personer",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: kan flygkontroller minska spridningen",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: kan flygkontroller minska spridningen",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vem bestämmer vem som ska sättas i karantän",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vem bestämmer vem som ska sättas i karantän",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad är Folkhälsomyndigheten",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vad är Folkhälsomyndigheten",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad betyder pandemi",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vad betyder pandemi",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad betyder det att corona är allmänfarlig",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vad betyder det att corona är allmänfarlig",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad betyder droppsmitta",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "Vid droppsmitta sprids smittan via droppar i luften, t.ex. när någon antingen hostar, nyser eller kräks. Dessa droppar når som regel inte längre än någon meter. Luftburen smitta rör sig om små, intorkade droppar som håller sig kvar i luften, färdas långa sträckor och smittar den som andas in dem."
      ],
      "set": {
        "classifiedQuestion": "question: vad betyder droppsmitta",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad är direktkontakt?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vad är direktkontakt?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur använder jag ett andningsskydd",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: hur använder jag ett andningsskydd",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur kan provsvaret för corona ändras",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: hur kan provsvaret för corona ändras",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur länge kan man smitta andra?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: hur länge kan man smitta andra?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad är social distansiering?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vad är social distansiering?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur gör man social distansering?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "hur gör man social distansering?",
        "vad kan man göra för social distansering?",
        "hur göra social distansering?",
        "hur göra social distansering?"
      ]
    },
    "bot": {
      "say": [
        "Undvik offentliga, folktäta platser som t.ex. shopping-centrum, bio eller arenor. Håll avstånd (ungefär 2 meter, eller 6 fot) från andra om möjligt."
      ],
      "set": {
        "classifiedQuestion": "question: hur gör man social distansering?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur förhindrar jag spridning av virus?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "hur förhindrar jag spridning av virus?",
        "vad kan jag göra för att förhindra virusspridning?",
        "hur stoppar jag virusspridning?",
        "hur förebygger jag virusspridning?",
        "hur förebygger jag virusspridning?"
      ]
    },
    "bot": {
      "say": [
        "Tvätta händerna regelbundet och ordentligt med tvål och vatten minst 20 sekunder. Använd alcogel om tvål och vatten inte finns tillgängligt. Vidrör varken ögon, näsa eller mun med otvättade händer. Rengör och desinfektera ytor och saker som människor vanligtvis rör. Hosta och nys i böjd armbåge eller näsduk. Se alltid till att slänga näsduken i soporna."
      ],
      "set": {
        "classifiedQuestion": "question: hur förhindrar jag spridning av virus?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: kommer corona sluta spridas till sommaren?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "kommer corona sluta spridas till sommaren?",
        "kommer virusutbrottet avstanna när det blir varmt?",
        "kommer spridningen av corona avta till sommaren?",
        "kan spridningen av corona minska när vädret blir varmare?",
        "sprids corona långsammare i varmt väder?",
        "sprids corona långsammare i varmt väder?"
      ]
    },
    "bot": {
      "say": [
        "För närvarande är det inte känt om spridningen av Covid-19 kommer att minska när vädret blir varmare. Utredningar gällande överförbarhet, svårighetsgrad och andra funktioner förknippade med Covid-19 pågår just nu. "
      ],
      "set": {
        "classifiedQuestion": "question: kommer corona sluta spridas till sommaren?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad är inreseförbudet?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "vad är inreseförbudet?",
        "vad händer vid inreseförbudet?",
        "när är inreseförbudet?",
        "varför har vi inreseförbud?",
        "när börjar inreseförbudet?",
        "när slutar inreseförbudet?",
        "när slutar inreseförbudet?"
      ]
    },
    "bot": {
      "say": [
        "Från och med den 19 mars och 30 dagar framåt kommer icke nödvändiga resor till Sverige från länder utanför Europa att stoppas. Detta efter beslut från den svenska regeringen i ett försök att minska spridningen av Covid-19. Vid behov kan beslutet komma att förlängas."
      ],
      "set": {
        "classifiedQuestion": "question: vad är inreseförbudet?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vem rörs av inreseförbudet?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vem rörs av inreseförbudet?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: kan man testa sig hemma för corona?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
        "kan man testa sig hemma för corona?",
        "kan man testa sig hemma för covid?",
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
        "classifiedQuestion": "question: kan man testa sig hemma för corona?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: behöver man läsa via distans nu?",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "För att bromsa spridningen av covid-19 rekommenderar Folkhälsomyndigheten från den 17 mars 2020 att undervisningen i gymnasieskolor, universitet, högskolor, yrkeshögskolor och komvux ska ske på distans."
      ],
      "set": {
        "classifiedQuestion": "question: behöver man läsa via distans nu?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vad gäller angående undervisning i grundskolor?",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "Nej. Folkhälsomyndigheten rekommendationer gällande distansundervisning gäller endast från gymnasiet och uppåt. Detta för att gymnasieskolor, universitet och högskolor samlar elever och studenter från upptagningsområden som är mycket större än grundskolans. Gymnasieelever och studenter är inte heller i behov av omsorg, till skillnad från barn i grundskolan."
      ],
      "set": {
        "classifiedQuestion": "question: vad gäller angående undervisning i grundskolor?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur ska man bete sig om man är över 70 år?",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "Folkhälsomyndigheten uppmanar personer som är 70 år och äldre att hålla sig hemma och begränsa närmare kontakt med andra de kommande veckorna. Äldre bör även undvika folksamlingar i exempelvis kollektivtrafik, affärer eller offentliga lokaler. Promenader utomhus är ok, bara inte i grupp. Be om hjälp för att göra ärenden som exempelvis handla mat ."
      ],
      "set": {
        "classifiedQuestion": "question: hur ska man bete sig om man är över 70 år?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: hur skyddar vi de äldre?",
      "entities": {
        "CORONA": {
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
      },
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
      "say": [
        "Det är viktigt att skydda de äldre från smitta. Ha därför ingen närkontakt med personer som är 70 år och äldre om det inte är helt nödvändigt. Stanna hemma när du känner dig sjuk, även om du bara är lite förkyld. Covid-19 kan ge lindriga symtom som liknar en förkylning, så det är viktigt att vara vaksam."
      ],
      "set": {
        "classifiedQuestion": "question: hur skyddar vi de äldre?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: vem kan testas för corona?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: vem kan testas för corona?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "intent": {
      "name": "question: måste alla i familjen stanna hemma om en är sjuk?",
      "entities": {
        "CORONA": {
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
      },
      "examples": [
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
        "classifiedQuestion": "question: måste alla i familjen stanna hemma om en är sjuk?",
        "classifiedUtterance": "_user_text"
      },
      "bot": {
        "say": "Var det ett korrekt svar?",
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
              "say": [
                "Oj. Jag förstår. Tack för hjälpen att bli bättre!",
                "Oj. Sorry. Tack för att du hjälper mig bli bättre!"
              ],
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
            "bot": [
              {
                "cond": {
                  "turnCount": 0
                },
                "say": "Förlåt, var det rätt eller fel svar?",
                "repair": true
              },
              {
                "say": "Jag förstod inte, men låt oss gå vidare"
              }
            ]
          }
        ]
      }
    }
  }
]