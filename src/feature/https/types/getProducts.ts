export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: TRatingProps;
    isFavorite?: boolean;
}
type TRatingProps = {
    rate: number;
    count: number;
};
