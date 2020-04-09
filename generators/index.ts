import { generateFaq } from "./generateFaq"
import { generateNews } from "./generateNews"

async function main() {
    await Promise.all([
        generateFaq(), 
        generateNews()])
    process.exit()
}

main()
