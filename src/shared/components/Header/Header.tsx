import { Text, TouchableOpacity, View } from "react-native";
import { stylesHeader } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { IconFavorite } from "../IconFavorite/IconFavorite";
import { lightColors } from "@shared/help/colors";
import { Typography } from "../Typography/Typography";
import { spacing } from "@shared/help/spacing";

export function Header() {
    const { top } = useSafeAreaInsets();
    return (
        <View style={[stylesHeader.container, { paddingTop: top }]}>
            <Typography label="Aiqfome" textSize={spacing[20]} />
            <View style={stylesHeader.containerIconsHeader}>
                <TouchableOpacity onPress={() => {}}>
                    <IconFavorite colorIcon="red" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <MaterialIcons name="logout" size={spacing[24]} color={lightColors.white} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
