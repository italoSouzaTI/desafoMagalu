import { lightColors } from "@shared/help/colors";
import { moderateScale, verticalScale } from "@shared/help/metrics";
import { spacing } from "@shared/help/spacing";
import { StyleSheet } from "react-native";

export const stylesButton = StyleSheet.create({
    containerBtn: {
        width: "100%",
        height: verticalScale(60),
        borderRadius: spacing[32],
        backgroundColor: lightColors.black,
        alignItems: "center",
        justifyContent: "center",
    },
});
