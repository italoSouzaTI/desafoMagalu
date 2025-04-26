import { lightColors } from "@shared/help/colors";
import { spacing } from "@shared/help/spacing";
import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightColors.background,
        paddingTop: spacing[16],
    },
    rowTab: {
        flexDirection: "row",
        gap: spacing[24],
        alignItems: "center",
        justifyContent: "center",
        marginBottom: spacing[16],
    },
    containerTab: {
        borderRadius: spacing[16],
        padding: spacing[8],
    },
});
