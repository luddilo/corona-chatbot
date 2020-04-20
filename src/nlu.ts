import { Entity, Intent, entities } from "narratory"
import { CORONA, HEALTHCARE } from "./answers/generatedFAQ"

const REGION: Entity = {
  name: "Region",
  enums: [
    {
      name: "Blekinge",
      alts: ["blekinge län", "karlskrona", "karlshamn", "ronneby", "sölvesborg", "olofström"],
    },
    {
      name: "Dalarna",
      alts: ["dalarnas län", "falun", "mora", "borlänge", "ludvika", "avesta"],
    },
    {
      name: "Gotland",
      alts: ["gotlands län", "visby"],
    },
    {
      name: "Gävleborg",
      alts: ["gävleborgs län", "gävle", "sandviken", "bollnäs", "söderhamn", "hudiksvall"],
    },
    {
      name: "Halland",
      alts: ["hallands län", "halmstad", "varberg", "kungsbacka", "falkenberg"],
    },
    {
      name: "Jämtland",
      alts: ["jämtlands län", "östersund", "sveg", "åre", "krokom", "strömsund"],
    },
    {
      name: "Jönköping",
      alts: ["jönköpings län", "värnamo", "vetlanda", "nässjö", "tranås"],
    },
    {
      name: "Kalmar",
      alts: ["kalmar län", "oskarshamn", "vimmerby", "västervik", "nybro"],
    },
    {
      name: "Kronoberg",
      alts: ["kronobergs län", "växjö", "ljungby", "älmhult", "alvesta", "markaryd"],
    },
    {
      name: "Norrbotten",
      alts: ["norrbottens län", "luleå", "piteå", "kiruna", "boden", "gällivare"],
    },
    {
      name: "Skåne",
      alts: ["skåne län", "malmö", "helsingborg", "lund", "kristianstad", "landskrona", "trelleborg", "ängelholm"],
    },
    {
      name: "Stockholm",
      alts: ["stockholms län", "upplands väsby", "sollentuna", "södertälje", "lidingö", "tumba", "åkersberga", "vallentuna", "märsta", "gustavsberg", "norrtälje"],
    },
    {
      name: "Södermanland",
      alts: ["södermanlands län", "sörmland", "eskilstuna", "katrineholm", "nyköping", "strängnäs", "oxelösund", "torshälla"],
    },
    {
      name: "Uppsala",
      alts: ["uppsala län", "enköping", "bålsta", "sävja", "knivsta"],
    },
    {
      name: "Värmland",
      alts: ["värmlands län", "karlstad", "arvika", "kristinehamn", "skoghall", "säffle"],
    },
    {
      name: "Västerbotten",
      alts: ["västerbottens län", "umeå", "skellefteå", "lycksele", "holmsund", "vännäs"],
    },
    {
      name: "Västernorrland",
      alts: ["västernorrlands län", "sundsvall", "timrå", "härnösand", "sollefteå", "örnsköldsvik"],
    },
    {
      name: "Västmanland",
      alts: ["västmanlands län", "västerås", "köping", "sala", "arboga", "sala", "fagersta", "hallstahammar"],
    },
    {
      name: "Västra götaland",
      alts: ["västra götalands län", "göteborg", "borås", "trollhättan", "uddevalla", "skövde", "lerum", "alingsås", "kungälv", "vänersborg"],
    },
    {
      name: "Örebro",
      alts: ["örebro län", "karlskoga", "kumla", "lindesberg", "hallsberg"],
    },
    {
      name: "Östergötland",
      alts: ["östergötlands län", "linköping", "norrköping", "motala", "mjölby", "finspång"],
    },
    {
      name: "Norrland",
    },
    {
      name: "min region",
      alts: ["min kommun", "mitt län", "där jag bor"]
    }
  ],
}
const day: Entity = {
  name: "Day",
  enums: [
    {
      name: "idag",
      alts: ["just nu", "för tillfället"]
    },
    {
      name: "igår",
    },
  ]
}

export const yes: Intent = {
  examples: ["ja", "japp", "absolut", "okej", "jajamän", "alright", "yes"],
}

export const no: Intent = {
  examples: ["nej", "nope", "no", "jag vill inte", "nej det är bra så", "näpp"],
}

export const confirmRight: Intent = {
  name: "confirmRight",
  examples: [...yes.examples, "jag", "korrekt", "det stämmer", "det är rätt", "rätt", "stämmer"],
}

export const confirmWrong: Intent = {
  name: "confirmWrong",
  examples: [...no.examples, "ej korrekt", "det stämmer inte", "det är fel", "fel", "stämmer ej"],
}

export const dontKnow: Intent = {
  examples: ["jag minns inte", "jag kommer inte ihåg", "jag vet inte", "vet ej"],
}

export const exit: Intent = {
  examples: ["exit", "hejdå", "avsluta", "bye bye"],
}

export const queryHelp: Intent = {
  examples: ["vad kan jag fråga", "jag behöver hjälp", "hur funkar detta", "hur gör jag", "vad frågar jag", "hjälp"],
}

export const queryDiagnosis: Intent = {
  entities: {
    corona: CORONA,
  },
  examples: [
    "har jag _corona",
    "är jag smittad",
    "hur vet jag om jag har _corona",
    "har jag fått _corona",
    "kan du säga om jag har _corona",
    "är jag sjuk",
  ],
}

export const queryNeedCare: Intent = {
  entities: {
    corona: CORONA,
    healthcare: HEALTHCARE,
  },
  examples: [
    "när behöver jag ringa _healthcare",
    "behöver jag ringa _healthcare",
    "när behöver jag kontakta _healthcare",
    "när ska jag söka _healthcare",
    "hur vet jag när jag ska ta kontakt med _healthcare",
    "behöver jag gå till _healthcare",
    "jag vill söka _healthcare. hur gör jag",
    "vad är ett självskattningstest",
    "vad är självskattningstest för _corona",
    "behöver jag söka _healthcare"
  ],
}

export const queryNews: Intent = {
  examples: [
    "vad är senaste nytt",
    "vad är det senaste",
    "vad är senaste nytt",
    "vad är nytt",
    "några nyheter",
    "vad har hänt idag",
    "jag undrar hur läget ser ut just idag",
    "jag vill ha nyheterna",
    "nyheterna",
    "senaste",
    "senaste nytt"
  ],
}

export const queryInfected: Intent = {
  entities: {
    corona: CORONA,
    country: entities.geoCountry,
    region: REGION,
  },
  examples: [
    "hur många är sjuka i _country",
    "hur många är sjuka i _region",
    "hur många har blivit smittade av _corona i _country",
    "hur många i _country har _corona",
    "hur många i _region har _corona",
    "hur många har _corona i _country",
    "hur många procent av _country befolkning är smittade",
    "hur många har _corona",
    "hur snabbt sprids smittan",
    "hur många har infekteras av _corona",
    "hur många är smittade i _country",
    "hur många i _country är smittade",
    "hur många i _region är smittade",
    "hur många är smittade med _corona i _country",
    "hur många har infekterats av _corona",
    "hur många är smittade i _region",
    "hur ser smittan ut i _country",
    "hur ser smittan ut i _region",
    "hur många har rapporterats smittade",
    "hur många fall har det varit",
    "hur många har blivit sjuka totalt",
    "totalt antal fall",
    "hur ser situationen ut i _country",
    "jag vill veta antal människor i _country",
    "_corona i _country",
    "hur många har smittats i _country",
    "hur många smittade finns det i _country",
    "hur många har infekterats av _corona i _country",
    "hur är läget i _country",
    "hur går det för _country",
    "finns _corona i _country",
    "hur många är smittade på _country",
    "hur många är smittade med _corona i _region",
    "hur många är smittade med _corona",
    "hur är läget i _region",
    "hur går det för _region",
    "finns _corona i _region",
    "hur många har _corona i _region",
    "är det över i _country",
    "hur många procent av _region är smittade",
    "hur är risken i _region",
    "vad är situationen globalt",
    "är risken hög i _region",
    "är _region hög risk",
    "hur är läget _region"

  ]
}

export const queryIntensiveCare: Intent = {
  entities: {
    corona: CORONA,
    country: entities.geoCountry,
    region: REGION,
    day: day
  },
  examples: [
    "hur många intensivvårdas _day",
    "hur många ligger på iva _day i _region",
    "hur många har behandlats på iva",
    "hur många ligger på intensivvården",
    "hur många är allvarligt sjuka",
    "hur många patienter får intensivvård i _region",
    "hur många har fått intentsivvård i _region",
    "hur många har intensivvårdats",
    "hur många har intensvivvårdats i _region",
    "hur många vårdas på sjukhus i _region",
    "hur många vårdas på sjukhus",
    "hur många vårdas för _corona",
    "hur många vårdas för _corona i _region",
    "hur många patienter får intensivvård i _country",
    "hur många har fått intentsivvård i _country",
    "hur många har intensvivvårdats i _country",
    "hur många vårdas på sjukhus i _country",
    "hur många vårdas för _corona i _country"
  ]
}

export const queryDead: Intent = {
  entities: {
    corona: CORONA,
    country: entities.geoCountry,
    region: REGION,
    day: day
  },
  examples: [
    "hur många har avlidit i _country av _corona",
    "hur många har dött i _country av _corona",
    "hur många i _country har dött av _corona",
    "hur många dör av _corona i _country",
    "hur många har dött i _region",
    "vad är dödstalet i _region",
    "hur många dog av _corona _day",
    "hur många dog _day",
    "hur många dödsfall har _country",
    "hur många dog i _country _day",
    "hur många har dött av _corona",
    "hur många har dött i _country",
    "hur många har dött _day",
    "hur många har dött",
    "hur många dödsfall",
    "hur många dödsfall har det varit",
    "hur många har dött i _corona",
    "hur många har dött av _corona i _country",
    "hur många har avlidit i _region av _corona",
    "har du siffror på antal döda och dödlighet",
    "hur många är döda",
    "hur många har dött av _corona i _region",
    "hur många har dött i _corona i _region",
    "hur många har dött i _corona i _country",
    "hur många är döda i _country",
    "hur många är döda i _region",
    "hur många har avlidit i _country",
    "hur många har avlidit i _region"
  ]
}

export const queryRanking: Intent = {
  entities: {
    country: entities.geoCountry
  },
  examples: [
    "vilka orter i _country är mest drabbade",
    "vilka städer i _country är värst drabbade",
    "var är smittan värst",
    "var är smittan värst utbredd",
    "var smittas flest just nu",
    "vart är smittspridningen störst",
    "var i _country är flest smittade",
    "var är flest smittade"
  ]
}

export const regionAnswer: Intent = {
  entities: {
    region: REGION
  },
  examples: [
    "_region", 
    "jag bor i _region", 
    "i _region",
  ]
}

export const queryHowToProtect: Intent = {
  examples: [
    "hur skyddar jag mig",
    "hur skyddar vi oss",
    "hur skyddar vi oss från corona",
    "hur skyddar vi oss från covid",
    "hur skyddar vi oss från viruset",
  ],
}
