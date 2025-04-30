import { useDatatabStore } from "@store/useDatatabStore";
import { useFavoriteStorageStore } from "@store/useFavoriteStorageStore";
import { useListProductStore } from "@store/useListProductStore";
import { IProduct } from "src/feature/https/types/getProducts";
import firestore from "@react-native-firebase/firestore";
import { useUserCurrentStore } from "@store/useUserCurrentStore";
export function useSaveFavorite() {
    const { dataTab } = useDatatabStore((state) => state);
    const { token } = useUserCurrentStore((state) => state);
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
            saveFavoritesDB();
        } catch (error) {}
    }
    async function saveFavoritesDB() {
        try {
            const userFavoritesRef = firestore().collection("favorite").doc(String(token));
            await userFavoritesRef.set(
                {
                    favorites: favoriteProduct,
                    updatedAt: firestore.FieldValue.serverTimestamp(),
                },
                { merge: true }
            );
            console.log("Favoritos salvos com sucesso para o token:", token);
        } catch (error) {
            console.error("Erro ao salvar favoritos:", error);
            throw error;
        }
    }
    return {
        saveFavorite,
    };
}
