export const replaceZeroWithDescriptor = (num: number, descriptor : string = "inga") => {
    return num == 0 ? descriptor : num
}