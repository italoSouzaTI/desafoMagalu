import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../https/http";
import { IProduct } from "../https/types/getProducts";
export function useModelViewHome() {
    const [listProduct, setListProduct] = useState<IProduct[]>([]);
    const [dataTab, setDataTab] = useState([
        {
            id: 1,
            label: "Lista",
            active: true,
        },
        {
            id: 2,
            label: "Favorito",
            active: false,
        },
    ]);
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
            setListProduct(listProductQuery.data);
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
            console.log("0-0");
            setListProduct(auxData);
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
        dataTab,
        handleTab,
    };
}
