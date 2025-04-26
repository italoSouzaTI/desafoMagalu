import { Card, Header, IconFavorite, Typography } from "@shared/components";
import { lightColors } from "@shared/help/colors";
import { spacing } from "@shared/help/spacing";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { stylesDetails } from "./styles";
import { useCurrentFavoriteStore } from "@store/useCurrentFavoriteStore";
import { useSaveFavorite } from "@hooks/useSaveFavorite";

export function Details() {
    const { currentFavorite } = useCurrentFavoriteStore((state) => state);
    const { saveFavorite } = useSaveFavorite();
    return (
        <>
            <Header isGoBack title="Product details" />
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
                    <IconFavorite sizeIcon={spacing[32]} colorIcon={currentFavorite.isFavorite ? "red" : "gray"} />
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
                <Typography textSize={spacing[28]} label={currentFavorite.title} textColor="black" labelWeight="bold" />
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
    );
}
