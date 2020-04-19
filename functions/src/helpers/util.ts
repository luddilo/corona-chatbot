export const replaceZeroWithDescriptor = (num: number | string, descriptor: string = "inga") => {
  if (typeof num === "number") {
    return num == 0 ? descriptor : num
  } else {
    return "okänt antal"
  }
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

export const sumArray = (arr: number[]) => {
  return arr.reduce(function (acc, val) {
    return acc + val
  }, 0)
}
