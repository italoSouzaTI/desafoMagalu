import { Colors } from "@shared/help/colors";
import { Text } from "react-native";
import { spacing } from "@shared/help/spacing";

interface TypographyProps {
    textColor?: keyof Colors;
    textSize?: typeof spacing;
    label: string;
    labelWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
}
export function Typography({ textSize = 20, textColor = "white", label, labelWeight = "bold" }: TypographyProps) {
    return (
        <Text
            style={{
                fontSize: textSize,
                color: textColor,
                fontWeight: labelWeight,
            }}
        >
            {label}
        </Text>
    );
}
