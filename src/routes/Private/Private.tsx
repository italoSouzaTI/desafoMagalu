import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Home } from "src/feature";

interface PrivateProps {
    Home: undefined;
    Details: { productId: number };
}
export function Private() {
    const Stack = createNativeStackNavigator<PrivateProps>();
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}
