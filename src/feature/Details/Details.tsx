import { Card, Header, Typography } from "@shared/components";
import { lightColors } from "@shared/help/colors";
import { spacing } from "@shared/help/spacing";
import { Image, StyleSheet, View } from "react-native";
import { stylesDetails } from "./styles";

export function Details() {
    return (
        <>
            <Header isGoBack title="Product details" />
            <View style={stylesDetails.ContainerImage}>
                <Image style={stylesDetails.ContainerImage} />
                <View style={stylesDetails.raite}>
                    <Typography label="3.9" labelWeight="bold" textColor="black" textSize={spacing[12]} />
                </View>
            </View>
            <View style={stylesDetails.containerData}>
                <Typography
                    textSize={spacing[28]}
                    label="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                    textColor="black"
                    labelWeight="bold"
                />
                <Typography
                    textSize={spacing[20]}
                    label="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
                    textColor="black"
                    labelWeight="300"
                />
            </View>
        </>
    );
}
