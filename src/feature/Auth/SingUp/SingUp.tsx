import { useState } from "react";
import { Alert, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Header, Input, Typography } from "@shared/components";
import { stylesSingUp } from "./styles";
import { createUserWithEmailAndPassword } from "@react-native-firebase/auth";

export function SingUp({ navigation }) {
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
    async function handleRegister() {
        try {
            setLoadingRegister(true);
            if (validation) {
                createUserWithEmailAndPassword(emailSingUp, passwordSingUp);
                Alert.alert("Sucesso", "Conta criada com sucesso", [
                    {
                        text: "OK",
                        onPress: () => {
                            navigation.goBack();
                        },
                    },
                ]);
            }
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                Alert.alert("That email address is already in use!");
            } else if (error.code === "auth/invalid-email") {
                Alert.alert("That email address is invalid!");
            } else {
                console.error(error);
            }
        } finally {
            setLoadingRegister(false);
        }
    }
    return (
        <>
            <Header title="Novo Cadastro" isSingUp={false} isGoBack />
            <View style={[stylesSingUp.containerSigUp, { paddingTop: top }]}>
                <Input label="E-mail" value={emailSingUp} onChangeText={setEmailSingUp} />
                <Input label="Senha" value={passwordSingUp} onChangeText={setPasswordSingUp} secureTextEntry />
                <Button onPressBtn={handleRegister} titleLabel="Cadastrar" loading={loaginRegister} />
            </View>
        </>
    );
}
