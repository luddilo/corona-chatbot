import { countryNames } from "../constants/countryNames"
import { fetchInternationalData } from "../api/fetchInternationalData"
import { replaceZeroWithDescriptor, capitalize } from "./util"

const manuallyMappedCountries: any = {
  england: "storbritannien",
}

export const getStatsInternational = async (country: string) => {
  const { allCountryData } = await fetchInternationalData()

  const _country =
    country.toLowerCase() in manuallyMappedCountries
      ? capitalize(manuallyMappedCountries[country.toLowerCase()])
      : capitalize(country)

  const translatedCountry = countryNames.find((nameObj) => nameObj.sv.toLowerCase() === _country.toLowerCase())

  if (!translatedCountry) {
    throw Error("Couldn't translate country name " + _country)
  }

  const countryData = allCountryData.find(
    (countryData: any) => countryData.country.toLowerCase() === translatedCountry.en.trim().toLowerCase()
  )
  if (countryData) {
    return {
      country: _country, // This is to account for manually mapped countries like United Kingdom above
      infected: replaceZeroWithDescriptor(countryData.infected),
      deceased: replaceZeroWithDescriptor(countryData.deceased),
      tested: replaceZeroWithDescriptor(countryData.tested),
      recovered: replaceZeroWithDescriptor(countryData.recovered),
      infected_yesterday: null,
      infected_day_before_yesterday: null,
      infected_diff: null,
      infected_diff_text: null,
      deceased_yesterday: null,
      deceased_day_before_yesterday: null,
      deceased_diff: null,
      deceased_diff_text: null,
      intensive_care_yesterday: null,
      intensive_care_day_before_yesterday: null,
      intensive_care_diff: null,
      intensive_care_diff_text: null,
    }
  } else {
    return null
  }
}
