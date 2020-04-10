import { cloudFunction } from "narratory-cloud"
import Axios from "axios"

const url =
  "https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Statistikdatum%20desc&outSR=102100&resultOffset=0&resultRecordCount=2000&cacheHint=true"

let cachedResponse: any

const hasLatestData = (timeStamp: number) => {
  var yesterday = new Date().setHours(-24, 0, 0, 0)
  var thatDay = new Date(timeStamp).setHours(0, 0, 0, 0)
  return yesterday === thatDay
}

const getLabelledData = (data: any, label: string) => {
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

const getData = (label: string) => {
  const yesterday = cachedResponse.features[0].attributes[label]
  const day_before_yesterday = cachedResponse.features[1].attributes[label]
  const diff = yesterday - day_before_yesterday

  const cumulative = sumArray(cachedResponse.features.map((feature: any) => feature.attributes[label]))

  return {
    name: label.toLowerCase(),
    yesterday,
    day_before_yesterday,
    diff,
    cumulative,
  }
}

export const statistics = cloudFunction(async (req, res) => {
  const { region } = req.body

  if (!cachedResponse || !hasLatestData(cachedResponse.features[0].attributes.Statistikdatum)) {
    console.log("Fetching data!")
    cachedResponse = (await Axios.get(url)).data
  } else {
    console.log("Got data from cache!")
  }

  if (!cachedResponse) {
    res.json("Error")
    return
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

  const regionData = regions.map((_region) => getData(_region))

  const aggrData = categories.map((category) => getData(category))

  let returnData: any

  if (region) {
    const selectedRegionData: any = regionData.find((regionObj) => regionObj.name === region.toLowerCase())
    returnData = getLabelledData(selectedRegionData, "infected")
  } else {
    const infected = aggrData.find((obj) => obj.name === "totalt_antal_fall")
    const intensiveCare = aggrData.find((obj) => obj.name === "antal_intensivvardade")
    const deceased = aggrData.find((obj) => obj.name === "antal_avlidna")

    returnData = {
      ...getLabelledData(infected, "infected"),
      ...getLabelledData(intensiveCare, "intensive_care"),
      ...getLabelledData(deceased, "deceased"),
    }
  }
  res.json({ set: returnData })
})
