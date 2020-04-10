import { cloudFunction } from "narratory-cloud"
import Axios from "axios"
import { getStatsPerCountry } from "./helpers/getStatsCountries"
import { getStatsNational } from "./helpers/getStatsNational"

export const statistics = cloudFunction(async (req, res) => {
  const { region, country } = req.body

  try {
    if (country) {
      const countryData = await getStatsPerCountry(country)
      res.json({
        set: countryData,
      })
    } else {
      const nationalData = await getStatsNational(region)
      res.json({ set: nationalData })
    }
  } catch (err) {
    console.log("ERROR: " + err.message)
    res.json({})
  }
})
