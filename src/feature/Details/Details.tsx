import { Card, Header, IconFavorite, Typography } from "@shared/components";
import { lightColors } from "@shared/help/colors";
import { spacing } from "@shared/help/spacing";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { stylesDetails } from "./styles";
import { useCurrentFavoriteStore } from "@store/useCurrentFavoriteStore";
import { useSaveFavorite } from "@hooks/useSaveFavorite";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductId } from "../https/http";
import { useFavoriteStorageStore } from "@store/useFavoriteStorageStore";

export function Details({ navigation }) {
    const { params } = useRoute();
    console.log(params);
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
            let currentData = ProductQuery.data;
            const isFavorite = favoriteProduct.includes(Number(params.productId));
            currentData.isFavorite = isFavorite;
            setCurrentFavorite(currentData);
        }
    }, [ProductQuery.isSuccess, ProductQuery.data, setCurrentFavorite]);
    if (params != undefined && ProductQuery.isLoading && !!currentFavorite) {
        return (
            <>
                <Header />
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography label="Carregando..." textColor="gray" textSize={spacing[16]} />
                </View>
            </>
        );
    }
    return (
        <>
            <Header
                isGoBack
                title="Product details"
                onpress={() => {
                    navigation.navigate("Home");
                }}
            />
            {JSON.stringify(currentFavorite) == "{}" ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography label="Nehum produto encontrado 😞" textColor="gray" textSize={spacing[16]} />
                </View>
            ) : (
                <>
                    <View style={stylesDetails.ContainerImage}>
                        <TouchableOpacity
                            onPress={() => {
                                saveFavorite(currentFavorite);
                            }}
                            style={{
                                position: "absolute",
                                zIndex: 5,
                                right: 30,
                                top: 20,
                            }}
                        >
                            <IconFavorite
                                sizeIcon={spacing[32]}
                                colorIcon={currentFavorite.isFavorite ? "red" : "gray"}
                            />
                        </TouchableOpacity>
                        <Image
                            style={stylesDetails.ContainerImage}
                            source={{ uri: currentFavorite.image }}
                            resizeMode="contain"
                        />
                        <View style={stylesDetails.raite}>
                            <Typography
                                label={String(currentFavorite.rating.rate)}
                                labelWeight="bold"
                                textColor="black"
                                textSize={spacing[12]}
                            />
                        </View>
                    </View>
                    <View style={stylesDetails.containerData}>
                        <Typography
                            textSize={spacing[28]}
                            label={currentFavorite.title}
                            textColor="black"
                            labelWeight="bold"
                        />
                        <Typography
                            textSize={spacing[20]}
                            label={currentFavorite.description}
                            textColor="black"
                            labelWeight="300"
                        />
                        <Typography
                            propsText={{
                                style: {
                                    textAlign: "center",
                                    fontSize: spacing[28],
                                    fontWeight: "bold",
                                },
                            }}
                            label={`$ ${currentFavorite.price}`}
                            textColor="black"
                        />
                    </View>
                </>
            )}
        </>
    );
}
