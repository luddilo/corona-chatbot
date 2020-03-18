import { listOptions } from "../visuals";

export const answerHelp = {
    say: [
      {
        cond: {
          platform: "voximplant"
        },
        text:
          "<speak><p>Du kan till exempel fråga hur du skyddar dig, </p><p>om din region har hög risk eller om du bör stanna hemma</p></speak>"
      },
      {
        text: "Du kan t.ex fråga om nedan saker",
        content: listOptions
      }
    ]
  }