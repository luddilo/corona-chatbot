import { cloudFunction } from "narratory-cloud"
import { getStatsInternational } from "./helpers/getStatsInternational"
import { getStatsNational } from "./helpers/getStatsNational"
import { getRankingStats } from "./helpers/getRankingStats"

export const statistics = cloudFunction(
  async (req, res) => {
    const { region, country, type }: { region: string; country: string; type: "GENERAL" | "RANKING" } = req.body
    try {
      // Country data
      if (type === "GENERAL" || !type) {
        if (country && country.toLowerCase() !== "sverige") {
          res.json({
            set: await getStatsInternational(country),
          })
        } else {
          res.json({ set: await getStatsNational(region) })
        }
      } else if (type === "RANKING") {
        res.json({ set: await getRankingStats() })
      } else {
        throw Error("Type has to be RANKING or GENERAL")
      }
    } catch (err) {
      console.log("ERROR: " + err.message, err.stack)
      res.json({})
    }
  },
  {
    memory: "2GB",
  }
)
