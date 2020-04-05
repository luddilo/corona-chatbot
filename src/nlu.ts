import { Entity, Intent, entities } from "narratory"
import { CORONA, HEALTHCARE } from "./answers/generatedFAQ"

const symptom: Entity = {
  name: "Symptom",
  enums: [
    {
      name: "feber", alts: ["hög temperatur", "frossa"]
    }, 
    {
      name: "luftvägar", alts: ["problem med andning", "andningsproblem", "andningssvårigheter"]
    }, 
    {
      name: "hosta", alts: ["hostig"]
    }
  ]
}

export const yes: Intent = {
  examples: ["ja", "japp", "absolut", "okej", "jajamän", "alright", "yes"]
}

export const no: Intent = {
  examples: ["nej", "nope", "no", "aldrig", "jag vill inte", "nej det är bra så", "näpp"]
}

export const confirmRight: Intent = {
  name: "confirmRight",
  examples: [...yes.examples, "korrekt", "det stämmer", "det är rätt", "rätt", "stämmer"]
}

 
export const confirmWrong: Intent = {
  name: "confirmWrong",
  examples: [...no.examples, "ej korrekt", "det stämmer inte", "det är fel", "fel", "stämmer ej"]
}

export const dontKnow: Intent = {
  examples: ["jag minns inte", "jag kommer inte ihåg", "jag vet inte", "vet ej"]
}

export const exit: Intent = {
  examples: ["exit", "hejdå", "avsluta", "bye bye"]
}

export const hasSymptoms: Intent = {
  entities: {
    symptom
  },
  examples: [
    "jag har _symptom",
    "_symptom",
    "lite _symptom",
    "problem med _symptom",
  ]
}

export const queryHelp: Intent = {
  examples: [
    "vad kan jag fråga",
    "jag behöver hjälp",
    "hur funkar detta",
    "hur gör jag",
    "vad frågar jag"
  ]
}

export const queryDiagnosis: Intent = {
  entities: {
    corona: CORONA
  },
  examples: [
    "har jag _corona",
    "är jag smittad",
    "hur vet jag om jag har _corona",
    "har jag fått _corona",
    "kan du säga om jag har _corona",
  ]
}

export const queryNeedCare: Intent = {
  entities: {
    healthcare: HEALTHCARE
  },
  examples: [
    "när behöver jag ringa _healthcare",
    "behöver jag ringa _healthcare",
    "när behöver jag kontakta _healthcare",
    "när ska jag söka _healthcare",
    "hur vet jag när jag ska ta kontakt med _healthcare",
    "behöver jag gå till _healthcare"
  ]
}

export const queryHowToProtect : Intent = {
  examples: [
    "hur skyddar jag mig",
    "hur skyddar vi oss",
    "hur skyddar vi oss från corona",
    "hur skyddar vi oss från covid",
    "hur skyddar vi oss från viruset",
  ]
}

export const regionAnswer : Intent = {
  entities: {
    city: entities.geoCity,
    state: entities.geoState
  },
  examples: [
    "_city",
    "_state",
    "jag bor i _city",
    "i _city",
    "jag bor i _state",
    "i _state",
  ]
}
export const queryRegionStatus : Intent = {
  entities: {
    city: entities.geoCity,
    state: entities.geoState
  },
  examples: [
    "vad är status i min region",
    "är det hög risk i min region",
    "är det hög risk där jag bor",
    "är det hög risk i _city",
    "är det hög risk i _state",
    "vad är status i _city",
    "vad är status i _state",
    "hur många är smittade i _city",
    "hur många är smittade i _state"
  ]
}

export const queryStayHome : Intent = {
  examples: [
    "Bör jag stanna hemma",
    "måste jag stanna hemma",
    "när måste jag vara hemma",
    "ska jag undvika att gå ut",
    "ska jag stanna hemma nu",
  ]
}

export const querySocializing: Intent = {
  examples: [
    "kan jag träffa vänner",
    "får jag träffa min familj",
    "kan jag hänga med mina kompisar"
  ]
}

const family : Entity = {
  name: "family",
  enums: [
    { name: "barn", alts: ["små barn", "bebis", "son", "dotter"] },
    { name: "äldre", alts: ["farfar", "morfar", "farmor", "mormor", "gamla"]},
    { name: "familj", alts: ["nära och kära", "kära", "närmaste"]}
  ]
}

export const queryTakeCareOfFamily = {
  entities: {
    family
  },
  examples: [
    "hur ska jag ta hand om min _family",
    "hur ska jag ta hand om mina _family",
    "hur tar jag hand om _family",
    "hur vårdar jag _family"
  ]
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
    "jag behöver fler tabletter"
  ]
}

export const tookAll: Intent = {
  examples: [
    "jag tog alla",
    "jag tog alla som fanns",
    "alla som fanns",
    "alla piller",
  ]
}

const medicine: Entity = {
  name: "medicineTerm",
  enums: [{ name: "tabletter", alts: ["tablett", "piller"] }]
}

export const quantifiedMedicine: Intent = {
  entities: {
    pillsTaken: entities.numberInteger,
    medicine
  },
  examples: ["jag tog _pillsTaken _medicine", "_pillsTaken _medicine", "jag tog _pillsTaken"]
}

export const quantifier: Intent = {
  entities: {
    number: entities.numberInteger
  },
  examples: [
    "_number",
    "_number stycken",
  ]
}

export const feelingGood: Intent = {
  examples: ["Jag mår bra", "Ganska bra", "bra", "helt okej", "det är bra", "mår fint", "fint"]
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
    "skit"
  ]
}

const tvTerms: Entity = {
  name: "tvTerms",
  enums: [
    { name: "tv", alts: ["netflix", "via play", "hbo"]}
  ]
}
export const watchedTv: Intent = {
  entities: {
    program: entities.any,
    tvTerms
  },
  examples: [
    "jag såg på _tvTerms",
    "jag såg på _program",
    "programmet hette _program",
    "jag tittade på _program",
    "jag tittade på _tvTerms",
    "jag såg på _program på _tvTerms",
    "jag tittade på _program på _tvTerms",
  ]
}

export const weatherDescriptors: Entity = {
  name: "weatherDescriptor",
  enums: [
    { name: "soligt", alts: ["sol", "solsken", "fint", "bra", "fantastiskt", "klart"] },
    { name: "regnigt", alts: ["regn", "blött", "dåligt", "tråkigt", "ruskigt", "blåsigt", "storm" ] },
    { name: "molnigt", alts: ["moln", "okej", "grått"] },
  ]
}

export const weatherReport: Intent = {
  entities: {
    weather: weatherDescriptors
  },
  examples: [
    "det är _weather",
    "_weather och _weather",
    "vädret är _weather",
    "_weather",
    "_weather och _weather"
  ]
}