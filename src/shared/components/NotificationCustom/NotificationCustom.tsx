import { TouchableOpacity, View } from "react-native";
import { stylesNotification } from "./styles";
import { Typography } from "../Typography/Typography";
import { spacing } from "@shared/help/spacing";
import Ionicons from "@expo/vector-icons/Ionicons";
import { lightColors } from "@shared/help/colors";
import { NotificationProps, useNotificationStore } from "@store/useNotificationStore";
import { useNavigation } from "@react-navigation/native";

export function NotificationCustom() {
    const { setNotification, notification } = useNotificationStore((state) => state);
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            style={stylesNotification.containerNotification}
            activeOpacity={0.8}
            onPress={() => {
                console.log("data", notification.data);
                navigate("Details", { productId: notification.data.product });
                setNotification({});
            }}
        >
            <View style={stylesNotification.row}>
                <Ionicons name="notifications" size={24} color={lightColors.Yellow} />
                <Typography label={notification.title} labelWeight="bold" textSize={spacing[24]} />
            </View>
            <Typography label={notification.body} labelWeight="500" textSize={spacing[16]} />
        </TouchableOpacity>
    );
}
