import Axios from "axios"
import { regions, categories } from "../constants/nationalData"
import { capitalize } from "../helpers/util"

const urlSwedenPerDate =
  "https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Statistikdatum%20desc&outSR=102100&resultOffset=0&resultRecordCount=2000&cacheHint=true"

const urlSwedenPerRegion =
  "https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/0/query?f=json&where=Region%20%3C%3E%20%27dummy%27&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&resultOffset=0&resultRecordCount=25&cacheHint=true"

let cachedResponse: any

const sumArray = (arr: number[]) => {
  return arr.reduce(function (acc, val) {
    return acc + val
  }, 0)
}

const hasLatestData = (timeStamp: number) => {
  var yesterday = new Date().setHours(-24, 0, 0, 0)
  var thatDay = new Date(timeStamp).setHours(0, 0, 0, 0)
  return yesterday === thatDay
}

const extractDataFromDateResponse = (label: string, response: any) => {
  const yesterday = response.features[0].attributes[label]
  const day_before_yesterday = response.features[1].attributes[label]
  const diff = yesterday - day_before_yesterday

  const cumulative = sumArray(response.features.map((feature: any) => feature.attributes[label]))

  return {
    name: label,
    yesterday,
    day_before_yesterday,
    diff,
    cumulative,
  }
}

const extractDataFromRegionResponse = (region: string, response: any) => {
  /*
  Region: "Gotland",
  Totalt_antal_fall: 16,
  Fall_per_100000_inv: 26.806957244873,
  Totalt_antal_intensivvårdade: 1,
  Totalt_antal_avlidna: 0,
  Shape__Area: 3110741392.74902,
  Shape__Length: 390069.071487898
  */

  const data = response.features.find((feature: any) => feature.attributes.Region === region)
  if (!data) {
    return null
  }

  const infected = data.attributes.Totalt_antal_fall
  const infected_per_100000_ppl = data.attributes.Fall_per_100000_inv
  const intensive_care = data.attributes.Totalt_antal_intensivvårdade
  const deceased = data.attributes.Totalt_antal_avlidna

  return {
    region,
    infected,
    infected_per_100000_ppl,
    intensive_care,
    deceased,
  }
}

export const fetchNationalData = async () => {
  if (!cachedResponse || !hasLatestData(cachedResponse.perDate.features[0].attributes.Statistikdatum)) {
    console.log("Fetching data!")
    cachedResponse = {
      perDate: (await Axios.get(urlSwedenPerDate)).data,
      perRegion: (await Axios.get(urlSwedenPerRegion)).data,
    }
  } else {
    console.log("Got data from cache!")
  }

  if (!cachedResponse) {
    throw Error("No response from API and no data cached")
  }
  return {
    regionTimeSeriesData: regions.map((_region) =>
      extractDataFromDateResponse(capitalize(_region).replace(" ", "_"), cachedResponse.perDate)
    ),
    aggrTimeSeriesData: categories.map((category) => extractDataFromDateResponse(category, cachedResponse.perDate)),
    regionData: regions.map((_region) => extractDataFromRegionResponse(_region, cachedResponse.perRegion)),
  }
}
