import { Card, Header, Typography } from "@shared/components";
import { lightColors } from "@shared/help/colors";
import { spacing } from "@shared/help/spacing";
import { Image, StyleSheet, View } from "react-native";
import { stylesDetails } from "./styles";
import { useCurrentFavorite } from "@store/useCurrentFavorite";

export function Details() {
    const { currentFavorite } = useCurrentFavorite((state) => state);
    console.log("currentFavorite", currentFavorite);
    return (
        <>
            <Header isGoBack title="Product details" />
            <View style={stylesDetails.ContainerImage}>
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
