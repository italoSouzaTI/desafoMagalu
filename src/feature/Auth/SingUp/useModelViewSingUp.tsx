import { useState } from "react";
import { Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useModelViewSingUp() {
    const { top } = useSafeAreaInsets();
    const [emailSingUp, setEmailSingUp] = useState<string>();
    const [passwordSingUp, setPasswordSingUp] = useState<string>();
    const [loaginRegister, setLoadingRegister] = useState(false);
    function validation() {
        if (emailSingUp?.length == 0) {
            Alert.alert("Preencha o campo E-mail");
            return false;
        }
        if (passwordSingUp?.length == 0) {
            Alert.alert("Preencha o campo senha");
            return false;
        }
        return true;
    }
    return {
        top,
        emailSingUp,
        passwordSingUp,
        loaginRegister,
        setLoadingRegister,
        setEmailSingUp,
        setPasswordSingUp,
        validation,
    };
}
