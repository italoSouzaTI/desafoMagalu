import { TextInput, View, TextInputProps } from "react-native";
import { stylesInput } from "./styles";
import { Typography } from "../Typography/Typography";
import { lightColors } from "@shared/help/colors";

interface InputProps extends TextInputProps {
    label: string;
}
export function Input({ label, ...restInput }: InputProps) {
    return (
        <>
            <Typography label={label} />
            <View style={stylesInput.containerInput}>
                <TextInput
                    style={{
                        color: lightColors.white,
                    }}
                    {...restInput}
                />
            </View>
        </>
    );
}
