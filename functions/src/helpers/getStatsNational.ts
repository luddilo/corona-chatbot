/*
Dashboard: https://experience.arcgis.com/experience/09f821667ce64bf7be6f9f87457ed9aa

SOME requests (not all..)

Kommalativa fall per dag
https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=OBJECTID%2CKumulativa_fall%2CStatistikdatum&orderByFields=Statistikdatum%20asc&outSR=102100&resultOffset=0&resultRecordCount=2000&cacheHint=true

Antal intensivvårdade
https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=OBJECTID%2CAntal_intensivvardade%2CStatistikdatum&orderByFields=Statistikdatum%20asc&outSR=102100&resultOffset=0&resultRecordCount=2000&cacheHint=true

Avlidna
https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=OBJECTID%2CAntal_avlidna%2CStatistikdatum&orderByFields=Statistikdatum%20asc&outSR=102100&resultOffset=0&resultRecordCount=2000&cacheHint=true

Åldersgrupp
https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/4/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=%C3%85ldersgrupp2&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Totalt_antal_avlidna%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true
https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/4/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=%C3%85ldersgrupp2&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Totalt_antal_avlidna%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&outSR=102100&cacheHint=true
https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/4/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=%C3%85ldersgrupp2&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Totalt_antal_fall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true
https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/4/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=%C3%85ldersgrupp2&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Totalt_antal_fall%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&outSR=102100&cacheHint=true

Main
https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Statistikdatum%20desc&outSR=102100&resultOffset=0&resultRecordCount=2000&cacheHint=true
*/

import Axios from "axios"

const urlSweden =
  "https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Statistikdatum%20desc&outSR=102100&resultOffset=0&resultRecordCount=2000&cacheHint=true"

let cachedResponse: any

const hasLatestData = (timeStamp: number) => {
  var yesterday = new Date().setHours(-24, 0, 0, 0)
  var thatDay = new Date(timeStamp).setHours(0, 0, 0, 0)
  return yesterday === thatDay
}

const getNarratoryResponse = (data: any, label: string) => {
  let returnData: any = {}

  returnData[`${label}_total`] = data.cumulative
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

const sumArray = (arr: number[]) => {
  return arr.reduce(function (acc, val) {
    return acc + val
  }, 0)
}

const extractDataFromResponse = (label: string, response: any) => {
  const yesterday = response.features[0].attributes[label]
  const day_before_yesterday = response.features[1].attributes[label]
  const diff = yesterday - day_before_yesterday

  const cumulative = sumArray(response.features.map((feature: any) => feature.attributes[label]))

  return {
    name: label.toLowerCase(),
    yesterday,
    day_before_yesterday,
    diff,
    cumulative,
  }
}

export const getStatsNational = async (region: string) => {
  if (!cachedResponse || !hasLatestData(cachedResponse.features[0].attributes.Statistikdatum)) {
    console.log("Fetching data!")
    cachedResponse = (await Axios.get(urlSweden)).data
  } else {
    console.log("Got data from cache!")
  }

  if (!cachedResponse) {
    throw Error("No response from API and no data cached")
  }

  const categories = [
    "Statistikdatum",
    "Totalt_antal_fall",
    "Kumulativa_fall",
    "Antal_avlidna",
    "Kumulativa_avlidna",
    "Antal_intensivvardade",
    "Kumulativa_intensivvardade",
  ]

  const regions = [
    "Blekinge",
    "Dalarna",
    "Gotland",
    "Gävleborg",
    "Halland",
    "Jämtland",
    "Jönköping",
    "Kalmar",
    "Kronoberg",
    "Norrbotten",
    "Skåne",
    "Stockholm",
    "Södermanland",
    "Uppsala",
    "Värmland",
    "Västerbotten",
    "Västernorrland",
    "Västmanland",
    "Västra Götaland",
    "Örebro",
    "Östergötland",
  ]

  const regionData = regions.map((_region) => extractDataFromResponse(_region, cachedResponse))

  const aggrData = categories.map((category) => extractDataFromResponse(category, cachedResponse))

  let returnData: any

  if (region) {
    const selectedRegionData: any = regionData.find((regionObj) => regionObj.name === region.toLowerCase())
    returnData = getNarratoryResponse(selectedRegionData, "infected")
  } else {
    const infected = aggrData.find((obj) => obj.name === "totalt_antal_fall")
    const intensiveCare = aggrData.find((obj) => obj.name === "antal_intensivvardade")
    const deceased = aggrData.find((obj) => obj.name === "antal_avlidna")

    returnData = {
      ...getNarratoryResponse(infected, "infected"),
      ...getNarratoryResponse(intensiveCare, "intensive_care"),
      ...getNarratoryResponse(deceased, "deceased"),
    }
  }
  
  return returnData
}
