import { Card, IconFavorite, Typography } from "@shared/components";
import { Image, TouchableOpacity, View } from "react-native";
import { stylesCardItem } from "./styles";
import { spacing } from "@shared/help/spacing";
import { isTablet, moderateScale } from "@shared/help/metrics";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { IProduct } from "src/feature/https/types/getProducts";
import { useCurrentFavoriteStore } from "@store/useCurrentFavoriteStore";
import { useFavoriteStorageStore } from "@store/useFavoriteStorageStore";
import { useListProductStore } from "@store/useListProductStore";
import { useSaveFavorite } from "@hooks/useSaveFavorite";

interface ICardItem {
    product: IProduct;
}
export function CardItem({ product }: ICardItem) {
    const { navigate } = useNavigation();
    const { setCurrentFavorite } = useCurrentFavoriteStore((state) => state);
    const { saveFavorite } = useSaveFavorite();
    return (
        <Card>
            <View style={stylesCardItem.row}>
                <TouchableOpacity
                    style={stylesCardItem.containerImg}
                    activeOpacity={1}
                    onPress={() => {
                        setCurrentFavorite(product);
                        navigate("Details");
                    }}
                >
                    <View style={stylesCardItem.raite}>
                        <Typography
                            label={product?.rating.rate}
                            labelWeight="bold"
                            textColor="black"
                            textSize={spacing[12]}
                        />
                    </View>
                    <Image
                        style={{ width: moderateScale(105), height: moderateScale(120), borderRadius: spacing[8] }}
                        source={{ uri: product.image }}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                <View
                    style={{
                        width: isTablet ? "68%" : "62%",
                        gap: spacing[8],
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            setCurrentFavorite(product);
                            navigate("Details");
                        }}
                    >
                        <Typography
                            textSize={spacing[16]}
                            label={product?.title}
                            textColor="black"
                            labelWeight="bold"
                        />
                        <Typography
                            textSize={spacing[16]}
                            label={product?.description}
                            textColor="black"
                            labelWeight="300"
                            propsText={{
                                numberOfLines: 2,
                            }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography
                            textSize={spacing[16]}
                            label={`$ ${product?.price}`}
                            textColor="black"
                            labelWeight="bold"
                        />
                        <TouchableOpacity
                            onPress={() => {
                                saveFavorite(product);
                            }}
                        >
                            <IconFavorite colorIcon={product.isFavorite ? "red" : "gray"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Card>
    );
}
