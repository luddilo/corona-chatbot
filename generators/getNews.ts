import { getLinesFromTsv } from "./getLines"
import { RichSay, Image, Card } from "narratory"

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSz98tc6sPBHgaU1PIyDggLhfQ0G5tBc5PyEsgKfxV-u4ybAEtSp9o-qLylGh_cO9BiJXtKOiKTDa0M/pub?gid=512062867&single=true&output=tsv"

const NUMBER_OF_TOP_ROWS_TO_SKIP = 0

interface News {
  text: {
    intro: RichSay[]
    stats: RichSay[]
  }
  voice: {
    intro: RichSay[]
    stats: RichSay[]
  }
}

export async function getNews() {
  try {
    let news: News = {
      text: { intro: [], stats: [] },
      voice: { intro: [], stats: [] },
    }

    const rows = await getLinesFromTsv({ url, skipRows: NUMBER_OF_TOP_ROWS_TO_SKIP })
    const headers = rows.splice(0, 1)[0]

    // Iterate all rows except header
    rows.forEach((row) => {
      const section = row[0].toLowerCase()
      const textSay: RichSay = { text: null }
      const voiceSay: RichSay = { text: null }
      let contentString = null

      // Iterate all columns
      row.forEach((text: string, col: number) => {
        if (col !== 0) {
          const header = headers[col].toLowerCase()
          if (text) {
            if (header === "voice") {
              voiceSay.text = text
            } else if (header === "text") {
              textSay.text = text
            } else if (header === "content") {
              contentString = text
            } else if (header === "content_type") {
              if (text.toLowerCase() === "image") {
                textSay.content = new Card({ title: "Statistik", image: new Image(contentString, "Statistik") })
              }
            }
          }
        }
      })

      if (textSay.text) news.text[section].push(textSay)
      if (voiceSay.text) news.voice[section].push(voiceSay)
    })

    return news
  } catch (err) {
    console.log(err)
    return null
  }
}
