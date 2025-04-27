import { lightColors } from "@shared/help/colors";
import { verticalScale } from "@shared/help/metrics";
import { spacing } from "@shared/help/spacing";
import { StyleSheet } from "react-native";

export const stylesInput = StyleSheet.create({
    containerInput: {
        width: "100%",
        height: verticalScale(50),
        borderRadius: spacing[8],
        borderWidth: 1,
        borderColor: lightColors.gray,
        paddingHorizontal: spacing[16],
        justifyContent: "center",
        // marginTop: spacing[8],
    },
});
