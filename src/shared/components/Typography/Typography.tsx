import { Colors } from "@shared/help/colors";
import { Text, TextProps } from "react-native";
import { spacing } from "@shared/help/spacing";
type SpacingKeys = keyof typeof spacing;
interface TypographyProps {
    textColor?: keyof Colors;
    textSize?: number;
    label: string;
    labelWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    propsText?: TextProps;
}
export function Typography({
    textSize = spacing[20],
    textColor = "white",
    label,
    labelWeight = "bold",
    propsText,
}: TypographyProps) {
    return (
        <Text
            style={{
                fontSize: textSize,
                color: textColor,
                fontWeight: labelWeight,
            }}
            {...propsText}
        >
            {label}
        </Text>
    );
}
