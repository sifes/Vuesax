import { IProduct } from "@/pages/products"

export function toCategories(arr: IProduct[]): string[] {
    const categories = arr.map((product: IProduct) => product.category)
    const uniqueCategories = [... new Set(categories)]
    return [...uniqueCategories]
}
export function toMaxPrice(arr: IProduct[]): number {
    return arr.reduce((accum: number, currVal: IProduct) => Math.max(currVal.price, accum), 0)
}
export function toPagesCount(arr: IProduct[]): number {
    return Math.ceil(arr.length / 15)
}