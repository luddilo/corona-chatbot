import { Entity, UserTurn, EntityMap } from "narratory"

export const getUserTurn = ({
  intentName,
  examples,
  answers,
  entities
}: {
  intentName: string
  examples: string[]
  answers: string[]
  entities: Entity[]
}): UserTurn => {
  const _examples = []
  let entityMap: EntityMap = {}
  entities.forEach(entity => {
    entityMap[entity.name] = entity
    examples.forEach(example => {
      const regex = new RegExp(`\\b${entity.name}\\b`)
      const newExample = example.split(regex).join(`_${entity.name}`)
      _examples.push(newExample)
    })
  })

  return {
    intent: {
      name: intentName,
      entities: entityMap,
      examples: _examples
    },
    bot: answers
  }
}
