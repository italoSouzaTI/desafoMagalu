import { Alert, TouchableOpacity, View } from "react-native";
import { stylesHeader } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { lightColors } from "@shared/help/colors";
import { Typography } from "../Typography/Typography";
import { spacing } from "@shared/help/spacing";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { useUserCurrentStore } from "@store/useUserCurrentStore";
import { useFavoriteStorageStore } from "@store/useFavoriteStorageStore";
interface HeaderProps {
    title?: string;
    isGoBack?: boolean;
    isSingUp?: boolean;
}
export function Header({ title = "Aiqfome", isSingUp = true, isGoBack = false }: HeaderProps) {
    const { top } = useSafeAreaInsets();
    const { goBack } = useNavigation();
    const { removeToken } = useUserCurrentStore((state) => state);
    const { removeFavoriteProduct } = useFavoriteStorageStore((state) => state);
    async function logoutUser() {
        try {
            Alert.alert("Atenção", `Deseja mesmo sair da aplicação?\n Isso apagara seus favoritos `, [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: async () => {
                        await auth().signOut();
                        removeToken();
                        removeFavoriteProduct();
                    },
                },
            ]);
        } catch (error) {
            Alert.alert("Erro ao fazer logout:", error);
        }
    }
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
                {isSingUp && (
                    <TouchableOpacity onPress={logoutUser}>
                        <MaterialIcons name="logout" size={spacing[24]} color={lightColors.white} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
