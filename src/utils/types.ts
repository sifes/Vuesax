
export interface IProduct {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    images: string[]
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
}
export interface IFilters {
    category: string
    price: number
    rating: number
}
export interface ProductPageProps {
    initialProducts: IProduct[];
}
export interface ImagesModalProps {
    images: string[]
}
export interface CarouselProductProps {
    images: string[]
}
export interface CategoryProps {
    categories: string[]
    setActiveCategories: React.Dispatch<React.SetStateAction<string[]>>
}
export interface FiltersProps {
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}
export interface PriceSliderProps {
    maxPrice: number
    setActivePrice: React.Dispatch<React.SetStateAction<number[]>>
}
export interface RatingProps {
    setActiveRating: React.Dispatch<React.SetStateAction<string[]>>
}
export interface PaginationProductsProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
    count: number
}
export interface ProductsProps {
    products: IProduct[]
    currentPage: number
}
export interface OneProductPageProps extends IProduct {
}