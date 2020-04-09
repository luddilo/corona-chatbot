import { getLinesFromTsv } from "./getLines"
import { Entity } from "narratory"
//const url = "https://docs.google.com/spreadsheets/d/1PAf9wmSxVnCBjIHft_-n0HOlRaq_LRlNMHeMPvYb2GU/edit#gid=507546129"
const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSz98tc6sPBHgaU1PIyDggLhfQ0G5tBc5PyEsgKfxV-u4ybAEtSp9o-qLylGh_cO9BiJXtKOiKTDa0M/pub?gid=507546129&single=true&output=tsv"

const NAME_INDEX = 0

export async function getEntities(): Promise<Entity[]> {
  try {
    let entities: { name: string; synonyms: string[] }[] = []

    const lines = await getLinesFromTsv({ url, skipRows: 1 })

    lines.forEach(arr => {
      const entity = { name: null, synonyms: [] }

      arr.forEach((text, colNumber) => {
        if (colNumber === NAME_INDEX && text) {
          entity.name = text.split(" ").join("_")
        } else if (text) {
          entity.synonyms.push(text)
        }
      })

      if (entity.name && entity.synonyms.length > 0) {
        entities.push(entity)
      }
    })
    return entities.map(entity => {
      return {
        name: entity.name,
        enums: [{ name: entity.name, alts: entity.synonyms }]
      }
    })
  } catch (err) {
    console.log(err)
    return null
  }
}
