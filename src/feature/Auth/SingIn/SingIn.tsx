import { Button, Input, Typography } from "@shared/components";
import { Alert, Image, View } from "react-native";
import { stylesSingIn } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { spacing } from "@shared/help/spacing";
import Logo from "@assets/logo.png";
import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { useUserCurrentStore } from "@store/useUserCurrentStore";

export function SingIn({ navigation }) {
    const { top } = useSafeAreaInsets();
    const [loadingSingIn, setLoadingSingIn] = useState(false);
    const [emailSingIn, setEmailSingIn] = useState<string>();
    const [passwordSingIn, setPasswordlSingIn] = useState<string>();
    const { setToken } = useUserCurrentStore((state) => state);
    function validation() {
        if (emailSingIn?.length == 0) {
            Alert.alert("Preencha o campo E-mail");
            return false;
        }
        if (passwordSingIn?.length == 0) {
            Alert.alert("Preencha o campo senha");
            return false;
        }
        return true;
    }
    async function loginUser() {
        try {
            if (validation) {
                setLoadingSingIn(true);
                const userCredential = await auth().signInWithEmailAndPassword(emailSingIn, passwordSingIn);
                setToken(userCredential.user.uid);
            }
        } catch (error) {
            // Tratamento de erros específicos
            if (error.code === "auth/user-not-found") {
                Alert.alert("Usuário não encontrado!");
            } else if (error.code === "auth/wrong-password") {
                Alert.alert("Senha incorreta!");
            } else if (error.code === "auth/invalid-email") {
                Alert.alert("Email inválido!");
            } else if (error.code === "auth/too-many-requests") {
                Alert.alert("Muitas tentativas falhas. Tente novamente mais tarde!");
            } else {
                Alert.alert("Erro ao fazer login:", error);
            }
            throw error; // Rejeita a promise para tratamento adicional se necessário
        } finally {
            setLoadingSingIn(false);
        }
    }
    return (
        <View style={[stylesSingIn.containerSigIn, { paddingTop: top }]}>
            <View
                style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: spacing[16],
                }}
            >
                <Image source={Logo} resizeMode="cover" />
            </View>
            <Input label="E-mail" value={emailSingIn} onChangeText={setEmailSingIn} />
            <Input label="Senha" value={passwordSingIn} onChangeText={setPasswordlSingIn} secureTextEntry />
            <View
                style={{
                    alignItems: "flex-end",
                    paddingVertical: spacing[8],
                }}
            >
                <Typography
                    propsText={{
                        onPress: () => {
                            navigation.navigate("SingUp");
                        },
                    }}
                    labelWeight="500"
                    label="Criar conta"
                />
            </View>
            <Button onPressBtn={loginUser} titleLabel="Entrar" loading={loadingSingIn} />
        </View>
    );
}
