import narrative from "./narrative"
import userInitiatives from "./userInitiatives"
import { Agent, Language } from "narratory"

const agent: Agent = {
  agentName: "HealthCareAgent",
  language: Language.Swedish,
  narrative, // See the file narrative.ts
  userInitiatives, // See the file userInitiatives.ts
  bridges: ["Så", "Var var vi", "Jo"],
  narratoryKey: require("../narratory_credentials.json").narratoryKey, // Populate this file with your Narratory key. Sign up att narratory.io if you don't have one!
  googleCredentials: require("../google_credentials.json") // Populate this file, or change the link to your existing credentials file. Check the README.md for how to create it.
}

export default agent
