export const replaceZeroWithDescriptor = (num: number, descriptor: string = "inga") => {
  return num == 0 ? descriptor : num
}

const capitalizeWord = (str: string) => {
  return str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : ""
}

export const capitalize = (str: string) => {
  return str
    ?.split(" ")
    .map((word) => capitalizeWord(word))
    .join(" ")
}
