import { fetchNationalData } from "../api/fetchNationalData"

const getNarratoryResponse = (data: any, label: string) => {
  let returnData: any = {}

  returnData[`${label}`] = data.cumulative
  returnData[`${label}_yesterday`] = data.yesterday
  returnData[`${label}_day_before_yesterday`] = data.day_before_yesterday
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
    const selectedRegionDateData: any = regionTimeSeriesData.find((regionObj) => regionObj.name === region)
    
    const selectedRegionData: any = regionData.find(
      (regionObj) => regionObj && regionObj.region === region
    )

    returnData = {
      region_label: selectedRegionData.region + " län",
      ...getNarratoryResponse(selectedRegionDateData, "infected"),
      ...selectedRegionData,
      infected_per_100000_ppl: Math.round(selectedRegionData.infected_per_100000_ppl),
    }
  } else {
    const infected = aggrTimeSeriesData.find((obj) => obj.name === "Totalt_antal_fall")
    const intensiveCare = aggrTimeSeriesData.find((obj) => obj.name === "Antal_intensivvardade")
    const deceased = aggrTimeSeriesData.find((obj) => obj.name === "Antal_avlidna")

    returnData = {
      ...getNarratoryResponse(infected, "infected"),
      ...getNarratoryResponse(intensiveCare, "intensive_care"),
      ...getNarratoryResponse(deceased, "deceased"),
    }
  }

  return returnData
}
