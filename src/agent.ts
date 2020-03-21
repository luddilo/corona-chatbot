import narrative from "./narrative"
import userInitiatives from "./userInitiatives"
import { Agent, Language } from "narratory"

const narratoryOptions = require("../config.json")

const agent: Agent = {
  agentName: "CoronaBot",
  language: Language.Swedish,
  narrative, // See the file narrative.ts
  userInitiatives, // See the file userInitiatives.ts
  bridges: ["Så"], // No bridges needed since we're looping the question state
  narratoryKey: narratoryOptions.narratoryKey,
  googleCredentials: require("../google_credentials_test.json"), // Populate this file, or change the link to your existing credentials file. Check the README.md for how to create it.
  fallbackWebhook: narratoryOptions.fallbackWebhook,
  logWebhook: narratoryOptions.logWebhook
}

export default agent
