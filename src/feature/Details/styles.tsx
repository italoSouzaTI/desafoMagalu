import { lightColors } from "@shared/help/colors";
import { horizontalScale, isTablet, moderateScale, verticalScale } from "@shared/help/metrics";
import { spacing } from "@shared/help/spacing";
import { Dimensions, StyleSheet } from "react-native";

export const stylesDetails = StyleSheet.create({
    ContainerImage: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height / 4,
        backgroundColor: lightColors.black,
        position: "relative",
    },
    raite: {
        width: isTablet ? verticalScale(spacing[24]) : verticalScale(spacing[32]),
        height: isTablet ? verticalScale(spacing[24]) : verticalScale(spacing[32]),
        backgroundColor: lightColors.Yellow,
        borderRadius: isTablet ? verticalScale(spacing[8]) : moderateScale(spacing[8]),
        position: "absolute",
        zIndex: 5,
        left: isTablet ? horizontalScale(8) : horizontalScale(8),
        bottom: isTablet ? -25 : -15,
        justifyContent: "center",
        alignItems: "center",
    },
    containerData: {
        width: "100%",
        gap: spacing[16],
        padding: spacing[16],
        paddingTop: spacing[32],
    },
});
