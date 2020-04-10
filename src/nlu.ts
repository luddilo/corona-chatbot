import { Entity, Intent, entities } from "narratory"
import { CORONA, HEALTHCARE } from "./answers/generatedFAQ"

const region: Entity = {
  name: "Region",
  enums: [
    {
      name: "blekinge",
      alts: ["blekinge län", "karlskrona"],
    },
    {
      name: "dalarna",
      alts: ["dalarnas län", "falun"],
    },
    {
      name: "gotland",
      alts: ["gotlands län", "visby"],
    },
    {
      name: "gävleborg",
      alts: ["gävleborgs län", "gävle"],
    },
    {
      name: "halland",
      alts: ["hallands län", "halmstad"],
    },
    {
      name: "jämtland",
      alts: ["jämtlands län", "östersund"],
    },
    {
      name: "jönköping",
      alts: ["jönköpings län"],
    },
    {
      name: "kalmar",
      alts: ["kalmar län"],
    },
    {
      name: "kronoberg",
      alts: ["kronobergs län", "växjö"],
    },
    {
      name: "norrbotten",
      alts: ["norrbottens län"],
    },
    {
      name: "skåne",
      alts: ["skåne län", "malmö", "helsingborg", "lund"],
    },
    {
      name: "stockholm",
      alts: ["stockholms län", "upplands väsby", "sollentuna", "södertälje"],
    },
    {
      name: "södermanland",
      alts: ["södermanlands län", "sörmland", "eskilstuna"],
    },
    {
      name: "uppsala",
      alts: ["uppsala län"],
    },
    {
      name: "värmland",
      alts: ["värmlands län", "karlstad"],
    },
    {
      name: "västerbotten",
      alts: ["västerbottens län", "umeå"],
    },
    {
      name: "västernorrland",
      alts: ["västernorrlands län"],
    },
    {
      name: "västmanland",
      alts: ["västmanlands län", "västerås"],
    },
    {
      name: "västa götaland",
      alts: ["västa götalands län", "göteborg", "borås"],
    },
    {
      name: "örebro",
      alts: ["örebro län"],
    },
    {
      name: "östergötland",
      alts: ["östergötlands län", "linköping", "norrköping"],
    },
  ],
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
  ],
}

export const queryInfectedLocation: Intent = {
  entities: {
    corona: CORONA,
    country: entities.geoCountry,
    myRegion: region
  },
  examples: [
    "hur många är sjuka i _country",
    "hur många har blivit smittade av _corona i _country",
    "hur många i _country har _corona",
    "hur många har _corona i _country",
    "hur många är smittade",
    "hur många procent av _country befolkning är smittade",
    "hur många har _corona",
    "hur snabbt sprids smittan",
    "hur många har infekteras av _corona",
    "hur många är smittade i _country",
    "hur många i _country är smittade",
    "hur många är smittade med _corona i _country?",
    "hur många har infekteras av _corona",
    "vad är status i min region",
    "är det hög risk i min region",
    "är det hög risk där jag bor",
    "är det hög risk i _city",
    "är det hög risk i _state",
    "vad är status i _city",
    "vad är status i _state",
    "hur många är smittade i _city",
    "hur många är smittade i _state",
  ]
}

/* WIP

export const queryIntensiveCareLocation: Intent = {
  entities: {
    corona: CORONA,
    country: entities.geoCountry,
    state: entities.geoState,
    city: entities.geoCity

  },
  examples: [
    "hur många intensivvårdas idag?",
    "hur många är som intensivvård us Just idag
hur många ligger på intensivvården
hur många är allvarligt sjuka

  ]

export const queryDeadLocation: Intent = {
  entities: {
    corona: CORONA,
    country: entities.geoCountry,
    state: entities.geoState,
    city: entities.geoCity

  },
  */

export const regionAnswer: Intent = {
  entities: {
    city: entities.geoCity,
    state: entities.geoState,
  },
  examples: ["_city", "_state", "jag bor i _city", "i _city", "jag bor i _state", "i _state"],
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

export const queryStayHome: Intent = {
  examples: [
    "Bör jag stanna hemma",
    "måste jag stanna hemma",
    "när måste jag vara hemma",
    "ska jag undvika att gå ut",
    "ska jag stanna hemma nu",
  ],
}

export const querySocializing: Intent = {
  examples: ["kan jag träffa vänner", "får jag träffa min familj", "kan jag hänga med mina kompisar"],
}

const family: Entity = {
  name: "family",
  enums: [
    { name: "barn", alts: ["små barn", "bebis", "son", "dotter"] },
    { name: "äldre", alts: ["farfar", "morfar", "farmor", "mormor", "gamla"] },
    { name: "familj", alts: ["nära och kära", "kära", "närmaste"] },
  ],
}

export const queryTakeCareOfFamily = {
  entities: {
    family,
  },
  examples: [
    "hur ska jag ta hand om min _family",
    "hur ska jag ta hand om mina _family",
    "hur tar jag hand om _family",
    "hur vårdar jag _family",
  ],
}
/*

  intent: nlu.queryHowToProtect,
      bot: ""
    },
    {
      intent: nlu.queryRegionStatus,
      bot: ""
    },
    {
      intent: nlu.queryStayHome,
      bot: ""
    },
    {
      intent: nlu.queryTakeCareOfFamily
*/

export const outOfMedicine: Intent = {
  examples: [
    "medicinen är slut",
    "min medicin är slut",
    "dom är slut",
    "tabletterna är slut",
    "jag har inga kvar",
    "ingen medicin kvar",
    "behöver mer medicin",
    "jag behöver fler tabletter",
  ],
}

export const tookAll: Intent = {
  examples: ["jag tog alla", "jag tog alla som fanns", "alla som fanns", "alla piller"],
}

const medicine: Entity = {
  name: "medicineTerm",
  enums: [{ name: "tabletter", alts: ["tablett", "piller"] }],
}

export const quantifiedMedicine: Intent = {
  entities: {
    pillsTaken: entities.numberInteger,
    medicine,
  },
  examples: ["jag tog _pillsTaken _medicine", "_pillsTaken _medicine", "jag tog _pillsTaken"],
}

export const quantifier: Intent = {
  entities: {
    number: entities.numberInteger,
  },
  examples: ["_number", "_number stycken"],
}

export const feelingGood: Intent = {
  examples: ["Jag mår bra", "Ganska bra", "bra", "helt okej", "det är bra", "mår fint", "fint"],
}

export const feelingBad: Intent = {
  examples: [
    "Jag mår dåligt",
    "Inte så bra",
    "Ganska dåligt",
    "Jag har en dålig känsla",
    "Dåligt",
    "Kasst",
    "Jag mår illa",
    "jag mår skit",
    "skit",
  ],
}

const tvTerms: Entity = {
  name: "tvTerms",
  enums: [{ name: "tv", alts: ["netflix", "via play", "hbo"] }],
}
export const watchedTv: Intent = {
  entities: {
    program: entities.any,
    tvTerms,
  },
  examples: [
    "jag såg på _tvTerms",
    "jag såg på _program",
    "programmet hette _program",
    "jag tittade på _program",
    "jag tittade på _tvTerms",
    "jag såg på _program på _tvTerms",
    "jag tittade på _program på _tvTerms",
  ],
}

export const weatherDescriptors: Entity = {
  name: "weatherDescriptor",
  enums: [
    { name: "soligt", alts: ["sol", "solsken", "fint", "bra", "fantastiskt", "klart"] },
    { name: "regnigt", alts: ["regn", "blött", "dåligt", "tråkigt", "ruskigt", "blåsigt", "storm"] },
    { name: "molnigt", alts: ["moln", "okej", "grått"] },
  ],
}

export const weatherReport: Intent = {
  entities: {
    weather: weatherDescriptors,
  },
  examples: ["det är _weather", "_weather och _weather", "vädret är _weather", "_weather", "_weather och _weather"],
}
