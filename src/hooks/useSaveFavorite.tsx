import { useFavoriteStorageStore } from "@store/useFavoriteStorageStore";
import { useListProductStore } from "@store/useListProductStore";
import { IProduct } from "src/feature/https/types/getProducts";

export function useSaveFavorite() {
    const { setListProduct, listProduct } = useListProductStore((state) => state);
    const { favoriteProduct, setFavoriteProduct } = useFavoriteStorageStore((state) => state);
    function saveFavorite(product: IProduct) {
        let cloneFavoriteProduct = favoriteProduct.slice();
        let cloneListProduct = listProduct.slice();

        if (cloneFavoriteProduct.length) {
            let newFavorite;
            const isIncludes = cloneFavoriteProduct.includes(product.id);
            if (isIncludes) {
                newFavorite = cloneFavoriteProduct.filter((item) => item != product.id);
            } else {
                newFavorite = [...cloneFavoriteProduct, product.id];
            }
            setFavoriteProduct(newFavorite);
        } else {
            setFavoriteProduct([product.id]);
        }

        cloneListProduct.forEach((element) => {
            if (element.id == product.id && element.isFavorite) {
                element.isFavorite = false;
            } else if (element.id == product.id && !element.isFavorite) {
                element.isFavorite = true;
            } else {
                element;
            }
        });
        console.log("cloneListProduct", cloneListProduct);

        setListProduct(cloneListProduct);
    }
    return {
        saveFavorite,
    };
}
