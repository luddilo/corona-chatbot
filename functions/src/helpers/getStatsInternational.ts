import { countryNames } from "../constants/countryNames"
import { fetchInternationalData } from "../api/fetchInternationalData"
import { replaceZeroWithDescriptor } from "./util"

export const getStatsInternational = async (country: string) => {
  const { allCountryData } = await fetchInternationalData()

  const translatedCountry = countryNames.find((nameObj) => nameObj.sv.toLowerCase() === country.toLowerCase())

  if (!translatedCountry) {
    throw Error("Couldn't translate country name")
  }

  const countryData = allCountryData.find(
    (countryData: any) => countryData.country.toLowerCase() === translatedCountry.en.trim().toLowerCase()
  )
  if (countryData) {
    
    return {
      infected: replaceZeroWithDescriptor(countryData.infected),
      deceased: replaceZeroWithDescriptor(countryData.deceased),
      tested: replaceZeroWithDescriptor(countryData.tested),
      recovered: replaceZeroWithDescriptor(countryData.recovered),
    }
  } else {
    return null
  }
}
