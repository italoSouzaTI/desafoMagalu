import { TouchableOpacity, ActivityIndicator } from "react-native";
import { Typography } from "../Typography/Typography";
import { stylesButton } from "./styles";
import { lightColors } from "@shared/help/colors";

interface ButtonProps {
    titleLabel: string;
    onPressBtn: Function;
    loading?: boolean;
}
export function Button({ titleLabel, onPressBtn, loading }: ButtonProps) {
    return (
        <TouchableOpacity style={stylesButton.containerBtn} onPress={onPressBtn}>
            {loading ? (
                <ActivityIndicator size="large" color={lightColors.purple700} />
            ) : (
                <Typography label={titleLabel} />
            )}
        </TouchableOpacity>
    );
}
