import narrative from "./narrative"
import userInitiatives from "./userInitiatives"
import { Agent, Language } from "narratory"
import { bridge } from "./bridge"

const config = require("../config.json")

const agent: Agent = {
  agentName: "CoronaBot",
  language: Language.Swedish,
  narrative, // See the file narrative.ts
  userInitiatives, // See the file userInitiatives.ts
  bridges: bridge,
  narratoryKey: require("../narratory_credentials.json").narratoryKey,
  googleCredentials: require("../google_credentials_test.json"), // Populate this file, or change the link to your existing credentials file. Check the README.md for how to create it.
  fallbackWebhook: config.fallbackWebhook,
  logWebhook: config.logWebhook
}

export default agent
