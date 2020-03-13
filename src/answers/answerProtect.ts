import { BotTurn, Card, Image, Button } from "narratory"

const card = new Card({
  title: "Tips på hur du skyddar dig",
  description:
    "1. Undvik röra vid ansikte och ögon \n 2. Undvik kontakt med sjuka människor \n 3. Tvätta händerna ofta med tvål och varmt vatten \n 4. Använd handsprit om du ej har tillgång till handtvätt \n 5. Hosta och nys i armvecket eller i en pappersnäsduk \n 6. Stanna hemma när du är sjuk",
  image: new Image("https://f.cdn-expressen.se/images/75/2f/752fb4237a2c4ad58740cc1a2c0d12a6/16x9/450.jpg", "some alt"),
  buttons: [
    new Button(
      "Öppna Folkhälsomyndighetens råd",
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/skydda-dig-och-andra/"
    )
  ]
})

export const answerProtect: BotTurn = {
  say: [
    {
      cond: {
        platform: "voximplant"
      },
      text:
        "Du skyddar dig genom att undvika att röra vid ansiktet, undvik kontakt med sjuka, tvätta händerna ofta. Hosta och nys i armvecket och stanna hemma när du är sjuk"
    },
    {
      text:
        "Du skyddar dig genom att undvika att röra vid ansiktet, undvik kontakt med sjuka, tvätta händerna ofta. Hosta och nys i armvecket och stanna hemma när du är sjuk. Läs gärna Folkhälsomyndighetens råd på nedan länk!",
      content: card
    }
  ]
}
