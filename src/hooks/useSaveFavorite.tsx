import { useDataTabStore } from "@store/useDataTabStore";
import { useFavoriteStorageStore } from "@store/useFavoriteStorageStore";
import { useListProductStore } from "@store/useListProductStore";
import { IProduct } from "src/feature/https/types/getProducts";

export function useSaveFavorite() {
    const { dataTab } = useDataTabStore((state) => state);
    const { setListProduct, listProduct } = useListProductStore((state) => state);
    const { favoriteProduct, setFavoriteProduct } = useFavoriteStorageStore((state) => state);
    function saveFavorite(product: IProduct) {
        try {
            //id que estão favoritados=> favoriteProduct
            //Todos produtos=> listProduct
            let cloneFavoriteProduct = favoriteProduct.slice();
            let cloneListProduct = listProduct.slice();
            let finish;

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
            let actionTab = dataTab.filter((item) => item.active);
            //verificar qual tipo de tab ta seleciodo
            if (actionTab[0].id == 1) {
                finish = cloneListProduct;
            } else {
                finish = cloneListProduct.filter((item) => item.isFavorite);
            }

            setListProduct(finish);
        } catch (error) {}
    }
    return {
        saveFavorite,
    };
}
