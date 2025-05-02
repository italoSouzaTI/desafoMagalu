import { useSaveFavorite } from "@hooks/useSaveFavorite";
import { useRoute } from "@react-navigation/native";
import { useCurrentFavoriteStore } from "@store/useCurrentFavoriteStore";
import { useFavoriteStorageStore } from "@store/useFavoriteStorageStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getProductId } from "../https/http";

export function useModelViewDetails() {
    const { params } = useRoute();
    const { favoriteProduct } = useFavoriteStorageStore((state) => state);
    const { currentFavorite, setCurrentFavorite } = useCurrentFavoriteStore((state) => state);
    const { saveFavorite } = useSaveFavorite();
    const ProductQuery = useQuery({
        enabled: !!params?.productId,
        queryKey: [`aiqFomeProducts/${params?.productId}`],
        queryFn: async () => await getProductId(Number(params.productId)),
    });
    useEffect(() => {
        if (params != undefined && ProductQuery.isSuccess && ProductQuery.data) {
            console.log("entrei", ProductQuery);
            console.log("favoriteProduct", favoriteProduct);
            let currentData = ProductQuery.data;
            const isFavorite = favoriteProduct.includes(Number(params.productId));
            currentData.isFavorite = isFavorite;
            setCurrentFavorite(currentData);
        }
    }, [ProductQuery.isSuccess, ProductQuery.data, setCurrentFavorite]);
    return {
        params,
        currentFavorite,
        ProductQuery,
        saveFavorite,
    };
}
