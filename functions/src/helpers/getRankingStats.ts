import { fetchNationalData } from "../api/fetchNationalData"

export const getRankingStats = async () => {
  const { regionData } = await fetchNationalData()
  
  const regionWithMostCases : any = regionData.sort((a, b) => b?.infected - a?.infected)[0]
  const regionWithMostCasesPerCapita: any = regionData.sort(
    (a, b) => b?.infected_per_100000_ppl - a?.infected_per_100000_ppl
  )[0]

  return {
    region_most_cases: regionWithMostCases.region + " län",
    infected: regionWithMostCases.infected,
    region_most_cases_per_capita: regionWithMostCasesPerCapita.region  + " län",
    infected_per_100000_ppl: Math.round(regionWithMostCasesPerCapita.infected_per_100000_ppl)
  }
}
