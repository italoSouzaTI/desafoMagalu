import { Button, Input, Typography } from "@shared/components";
import { Image, View } from "react-native";
import { stylesSingIn } from "./styles";
import { spacing } from "@shared/help/spacing";
import Logo from "@assets/logo.png";
import { useModelViewSingIn } from "./useModelViewSingIn";

export function SingIn({ navigation }) {
    const { top, loadingSingIn, emailSingIn, passwordSingIn, setEmailSingIn, setPasswordlSingIn, loginUser } =
        useModelViewSingIn();
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
