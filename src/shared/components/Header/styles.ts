import { lightColors } from "@shared/help/colors";
import { verticalScale } from "@shared/help/metrics";
import { spacing } from "@shared/help/spacing";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const stylesHeader = StyleSheet.create({
    container: {
        width: "100%",
        minHeight: verticalScale(80),
        backgroundColor: lightColors.purple900,
        paddingHorizontal: spacing[16],
        paddingBottom: spacing[16],
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerIconsHeader: {
        flexDirection: "row",
        gap: spacing[16],
    },
});
