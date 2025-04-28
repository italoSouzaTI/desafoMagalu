import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../https/http";
import { IProduct } from "../https/types/getProducts";
import { useFavoriteStorageStore } from "@store/useFavoriteStorageStore";
import { useListProductStore } from "@store/useListProductStore";
import { useDatatabStore } from "@store/useDatatabStore";
export function useModelViewHome() {
    const { setListProduct, listProduct } = useListProductStore((state) => state);
    const { favoriteProduct } = useFavoriteStorageStore((state) => state);
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
