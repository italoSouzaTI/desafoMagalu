import { Text, View } from "react-native";
import { stylesHeader } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { IconFavorite } from "../IconFavorite/IconFavorite";
import { lightColors } from "@shared/help/colors";
import { Typography } from "../Typography/Typography";

export function Header() {
    const { top } = useSafeAreaInsets();
    return (
        <View style={[stylesHeader.container, { paddingTop: top }]}>
            <Typography label="AiqFome" />
            <View style={stylesHeader.containerIconsHeader}>
                <IconFavorite colorIcon="red" />
                <MaterialIcons name="logout" size={24} color={lightColors.white} />
            </View>
        </View>
    );
}
