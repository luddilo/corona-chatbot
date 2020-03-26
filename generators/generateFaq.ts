import { generateSimpleAnswers } from "./generateAnswersFromGoogleSheet"

async function main() {
    await generateSimpleAnswers()
    process.exit()
}

main()
