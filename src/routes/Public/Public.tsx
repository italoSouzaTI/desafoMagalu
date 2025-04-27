import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SingIn, SingUp } from "src/feature";

interface PublicProps {
    SingIn: undefined;
    SingUp: undefined;
}
export function Public() {
    const Stack = createNativeStackNavigator<PublicProps>();
    return (
        <Stack.Navigator
            initialRouteName="SingIn"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="SingIn" component={SingIn} />
            <Stack.Screen name="SingUp" component={SingUp} />
        </Stack.Navigator>
    );
}
