import { spacing } from "@shared/help/spacing";
import { StyleSheet } from "react-native";

export const stylesNotification = StyleSheet.create({
    containerNotification: {
        width: "95%",
        minHeight: 80,
        margin: spacing[8],
        padding: spacing[16],
        backgroundColor: "rgba(0,0,0,0.9)",
        borderRadius: spacing[8],
        zIndex: 9,
        gap: spacing[8],
        position: "absolute",
        top: 85,
    },
    row: {
        gap: spacing[16],
        flexDirection: "row",
        alignItems: "center",
    },
});
