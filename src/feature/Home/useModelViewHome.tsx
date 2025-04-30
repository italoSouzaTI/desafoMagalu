import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../https/http";
import { useFavoriteStorageStore } from "@store/useFavoriteStorageStore";
import { useListProductStore } from "@store/useListProductStore";
import { useDatatabStore } from "@store/useDatatabStore";
import firestore from "@react-native-firebase/firestore";
import { useUserCurrentStore } from "@store/useUserCurrentStore";
export function useModelViewHome() {
    const { setListProduct, listProduct } = useListProductStore((state) => state);
    const { favoriteProduct, setFavoriteProduct } = useFavoriteStorageStore((state) => state);
    const { token } = useUserCurrentStore((state) => state);
    const { dataTab, setDataTab } = useDatatabStore((state) => state);
    const listProductQuery = useQuery({
        queryKey: ["aiqFomeProducts"],
        queryFn: async () => await getProducts(),
    });
    function handleTab(id: number) {
        let cloneDataTab = dataTab.slice();
        cloneDataTab = cloneDataTab.map((item) => {
            if (item.id === id) {
                return { ...item, active: true };
            }
            return { ...item, active: false };
        });
        if (id === 1) {
            transformDataList();
        } else {
            handleFavorite();
        }

        setDataTab(cloneDataTab);
    }
    function handleFavorite() {
        let cloneListProduct = listProduct.slice();
        let newFavority = cloneListProduct.filter((item) => item.isFavorite === true);
        setListProduct(newFavority);
    }

    async function transformDataList() {
        try {
            const verifyExistFavoriteDB = await getFavorites();
            if (verifyExistFavoriteDB.length) {
                setFavoriteProduct(verifyExistFavoriteDB);
            }
            let auxData = listProductQuery.data;
            auxData?.map((item) => {
                item.isFavorite = false;
            });
            const updatedProducts = auxData.map((product) => {
                const isFavorite = favoriteProduct.includes(product.id);
                return {
                    ...product,
                    isFavorite,
                };
            });
            setListProduct(updatedProducts);
        } catch (error) {}
    }

    async function getFavorites() {
        try {
            const documentSnapshot = await firestore().collection("favorite").doc(String(token)).get();
            if (documentSnapshot.exists) {
                const data = documentSnapshot.data();
                return data.favorites || [];
            } else {
                return [];
            }
        } catch (error) {
            console.error("Erro ao buscar favoritos:", error);
            throw error;
        }
    }

    useEffect(() => {
        if (listProductQuery.hasOwnProperty("data") && listProductQuery.data != undefined) {
            transformDataList();
        }
    }, [listProductQuery.data]);

    return {
        listProduct,
        loading: listProductQuery.isLoading,
        listProductQuery,
        dataTab,
        handleTab,
    };
}
