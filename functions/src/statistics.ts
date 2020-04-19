import { cloudFunction } from "narratory-cloud"
import { getStatsInternational } from "./helpers/getStatsInternational"
import { getStatsNational } from "./helpers/getStatsNational"
import { getRankingStats } from "./helpers/getRankingStats"

export const statistics = cloudFunction(
  async (req, res) => {
    const { region, country, type }: { region: string; country: string; type: "GENERAL" | "RANKING" } = req.body

    // Country data
    if (type === "GENERAL" || !type) {
      if (country && country.toLowerCase() !== "sverige") {
        await handleInternational(country, res)
      } else {
        await handleNational(region, res)
      }
    } else if (type === "RANKING") {
      res.json({ set: await getRankingStats() })
    } else {
      throw Error("Type has to be RANKING or GENERAL")
    }
  },
  {
    memory: "2GB",
  }
)

const resetVariables = {
  // region: null,
  // country: null,
  // region_label: null,
  infected: null,
  infected_yesterday: null,
  infected_day_before_yesterday: null,
  infected_diff: null,
  infected_diff_text: null,
  deceased: null,
  deceased_yesterday: null,
  deceased_day_before_yesterday: null,
  deceased_diff: null,
  deceased_diff_text: null,
  intensive_care: null,
  intensive_care_yesterday: null,
  intensive_care_day_before_yesterday: null,
  intensive_care_diff: null,
  intensive_care_diff_text: null,
}

const handleInternational = async (country: string, res: any) => {
  try {
    res.json({
      set: {
        ...resetVariables,
        ...(await getStatsInternational(country)),
      },
    })
  } catch (err) {
    console.log("ERROR: " + err.message, err.stack)
    res.json({
      set: resetVariables
    })
  }
}

const handleNational = async (region: string, res: any) => {
  try {
    res.json({ set: { ...resetVariables, ...(await getStatsNational(region)) } })
  } catch (err) {
    console.log("ERROR: " + err.message, err.stack)
    res.json({
      set: resetVariables
    })
  }
}
