import Axios from "axios"
import { countryNames } from "./countryNames"

let cachedResponse: { timeStamp: number; response: any }

export const getStatsPerCountry = async (country: string) => {
  const translatedCountry = countryNames.find((nameObj) => nameObj.sv.toLowerCase() === country.toLowerCase())

  if (!translatedCountry) {
    throw Error("Couldn't translate country name")
  }
  if (!cachedResponse || cachedResponse.timeStamp <= Date.now() - 1 * 60 * 1000) {
    cachedResponse = {
      timeStamp: Date.now(),
      response: await Axios.get(
        "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
      ),
    }
    console.log("Data old, fetching new data")
  } else {
    console.log("Fetched data from cache")
  }

  const countryData = cachedResponse.response.data.find(
    (countryData: any) => countryData.country.toLowerCase() === translatedCountry.en.trim().toLowerCase()
  )
  if (countryData) {
    return {
      infected: countryData.infected,
      deceased: countryData.deceased,
      tested: countryData.tested,
      recovered: countryData.recovered,
    }
  } else {
    throw Error("No data for that country")
  }
}
