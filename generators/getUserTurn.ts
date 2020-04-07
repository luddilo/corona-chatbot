import { Entity, UserTurn, RichSay, EntityMap } from "narratory"

export const entityDelimiter = "__E"

export const getUserTurn = ({
  intentName,
  examples,
  answers,
  entities
}: {
  intentName: string
  examples: string[]
  answers: RichSay[]
  entities: Entity[]
}): UserTurn => {
  const _examples = []
  let entityMap: any = {}
  examples.forEach(example => {
    let newExample = example
    entities.forEach(entity => {
      const regex = new RegExp(`\\b${entity.name}\\b`)

      const newExampleParts = newExample.split(regex)

      if (newExampleParts.length > 1) { // We found an entity in the example
        entityMap[entity.name] = entityDelimiter + entity.name + entityDelimiter
        newExample = newExampleParts.join(`_${entity.name}`)
      }
    })
    if (!_examples.includes(newExample)) {
      _examples.push(newExample)
    }
  })

  return {
    intent: {
      name: intentName,
      entities: entityMap,
      examples: _examples
    },
    bot: {
      say: answers
    }
  }
}
