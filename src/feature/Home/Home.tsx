import { Card, Header } from "@shared/components";
import { lightColors } from "@shared/help/colors";
import { spacing } from "@shared/help/spacing";
import { StyleSheet, View } from "react-native";
import { CardItem } from "./components/CardItem/CardItem";
import { stylesHome } from "./styles";

export function Home() {
    return (
        <>
            <Header />
            <View style={stylesHome.container}>
                <CardItem />
            </View>
        </>
    );
}
