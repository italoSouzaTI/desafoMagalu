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
        setDataTab(cloneDataTab);
    }

    async function transformDataList() {
        try {
            let auxData = listProductQuery.data;
            auxData?.map((item) => {
                item.isFavorite = false;
            });
            setListProduct(auxData);
        } catch (error) {}
    }
    useEffect(() => {
        if (listProductQuery.hasOwnProperty("data") && listProductQuery.data != undefined) {
            setListProduct(listProductQuery.data);
        }
    }, [listProductQuery.data]);
    return {
        listProduct,
        loading: listProductQuery.isLoading,
        dataTab,
        handleTab,
    };
}
