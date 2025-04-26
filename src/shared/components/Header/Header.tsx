import { TouchableOpacity, View } from "react-native";
import { stylesHeader } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { IconFavorite } from "../IconFavorite/IconFavorite";
import { lightColors } from "@shared/help/colors";
import { Typography } from "../Typography/Typography";
import { spacing } from "@shared/help/spacing";
import { useNavigation } from "@react-navigation/native";
interface HeaderProps {
    title?: string;
    isGoBack?: boolean;
}
export function Header({ title = "Aiqfome", isGoBack = false }: HeaderProps) {
    const { top } = useSafeAreaInsets();
    const { goBack } = useNavigation();
    return (
        <View style={[stylesHeader.container, { paddingTop: top }]}>
            {isGoBack && (
                <TouchableOpacity
                    onPress={() => {
                        goBack();
                    }}
                >
                    <Ionicons name="chevron-back" size={spacing[24]} color={lightColors.white} />
                </TouchableOpacity>
            )}
            <Typography label={title} textSize={spacing[20]} />
            <View style={stylesHeader.containerIconsHeader}>
                <TouchableOpacity onPress={() => {}}>
                    <MaterialIcons name="logout" size={spacing[24]} color={lightColors.white} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
