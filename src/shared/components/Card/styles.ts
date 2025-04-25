import { lightColors } from "@shared/help/colors";
import { spacing } from "@shared/help/spacing";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const stylesCard = StyleSheet.create({
    containerCard: {
        width: "100%",
        minHeight: 60,
        borderRadius: spacing[16],
        padding: spacing[16],
        borderWidth: 2,
        borderColor: "#EAE8E8",
        borderBottomWidth: 6,
    },
});
