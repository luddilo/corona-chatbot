import Axios from "axios"

let cachedResponse: { timeStamp: number; response: any }

export const fetchInternationalData = async () => {
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

  if (!cachedResponse) {
    throw Error("No ")
  }

  return {
    allCountryData: cachedResponse.response.data,
  }
}
