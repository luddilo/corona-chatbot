import { fetchNationalData } from "../api/fetchNationalData"
import { replaceZeroWithDescriptor, capitalize } from "./util"

const getTimeSeriesData = (data: any, label: string) => {
  let returnData: any = {}

  returnData[`${label}`] = replaceZeroWithDescriptor(data.cumulative)
  returnData[`${label}_yesterday`] = replaceZeroWithDescriptor(data.yesterday)
  returnData[`${label}_day_before_yesterday`] = replaceZeroWithDescriptor(data.day_before_yesterday)
  const diff = data.yesterday - data.day_before_yesterday
  returnData[`${label}_diff`] = Math.abs(diff)

  if (diff === 0) {
    returnData[`${label}_diff_text`] = "samma som"
  } else if (diff > 0) {
    returnData[`${label}_diff_text`] = "fler än"
  } else {
    returnData[`${label}_diff_text`] = "färre än"
  }
  return returnData
}

export const getStatsNational = async (region: string | null) => {
  const { regionData, regionTimeSeriesData, aggrTimeSeriesData } = await fetchNationalData()

  let returnData: any

  if (region) {
    const selectedTimeSeriesData: any = regionTimeSeriesData.find(
      (regionObj) => regionObj.name.toLowerCase() === region.toLowerCase().replace(" ", "_")
    )

    const selectedRegionData = regionData.find(
      (regionObj) => regionObj && regionObj.region.toLowerCase() === region.toLowerCase()
    )

    if (!selectedRegionData || !selectedTimeSeriesData) {
      throw Error("Couldn't find data for region " + region)
    }

    returnData = {
      ...getTimeSeriesData(selectedTimeSeriesData, "infected"),
      region_label: "region " + capitalize(selectedRegionData.region),
      region: capitalize(selectedRegionData.region),
      intensive_care: replaceZeroWithDescriptor(selectedRegionData?.intensive_care),
      deceased: replaceZeroWithDescriptor(selectedRegionData?.deceased),
      infected_per_100000_ppl: Math.round(selectedRegionData.infected_per_100000_ppl),
    }
  } else {
    const infected = aggrTimeSeriesData.find((obj) => obj.name === "Totalt_antal_fall")
    const intensiveCare = aggrTimeSeriesData.find((obj) => obj.name === "Antal_intensivvardade")
    const deceased = aggrTimeSeriesData.find((obj) => obj.name === "Antal_avlidna")

    returnData = {
      ...getTimeSeriesData(infected, "infected"),
      ...getTimeSeriesData(intensiveCare, "intensive_care"),
      ...getTimeSeriesData(deceased, "deceased"),
    }
  }

  return returnData
}
