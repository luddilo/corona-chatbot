import Axios from "axios"

export const getLinesFromTsv = async ({ url, skipRows }: { url: string; skipRows: number }) => {
  const response = await Axios.get(url)

  let allTextLines = response.data.split(/\r/).slice(skipRows)

  let numberOfDataRows = allTextLines.length
  let numberOfCols = allTextLines[0].split("\t").length

  let lines = []

  for (let i = 0; i < numberOfDataRows; i++) {
    // split content based on tab
    let data = allTextLines[i].split("\t")

    if (data.length >= numberOfCols) {
      let tarr = []
      for (let j = 0; j < numberOfCols; j++) {
        tarr.push(data[j].replace("\n", ""))
      }
      lines.push(tarr)
    } else {
      //console.log(data)
      console.log("row" + i + ": ", data.length, numberOfCols, (numberOfCols - data.length) + "missing")
    }
  }
  
  return lines
}
