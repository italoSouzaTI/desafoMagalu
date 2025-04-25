import { lightColors } from "@shared/help/colors";
import { horizontalScale, isTablet, moderateScale, verticalScale } from "@shared/help/metrics";
import { spacing } from "@shared/help/spacing";
import { StyleSheet } from "react-native";

export const stylesCardItem = StyleSheet.create({
    containerImg: {
        width: isTablet ? horizontalScale(89) : horizontalScale(99),
        minHeight: verticalScale(99),
        backgroundColor: lightColors.gray,
        borderRadius: moderateScale(8),
        position: "relative",
    },
    row: {
        flexDirection: "row",
        gap: spacing[16],
    },
    raite: {
        width: isTablet ? verticalScale(spacing[24]) : verticalScale(spacing[32]),
        height: isTablet ? verticalScale(spacing[24]) : verticalScale(spacing[32]),
        backgroundColor: lightColors.Yellow,
        borderRadius: isTablet ? verticalScale(spacing[24]) : moderateScale(spacing[32]),
        position: "absolute",
        zIndex: 5,
        left: isTablet ? horizontalScale(-8) : horizontalScale(-8),
        top: isTablet ? verticalScale(-8) : verticalScale(-8),
        justifyContent: "center",
        alignItems: "center",
    },
});
