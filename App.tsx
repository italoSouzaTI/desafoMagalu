import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { lightColors } from "@shared/help/colors";
import { Home } from "src/feature";
import { NavigationContainer } from "@react-navigation/native";
import { Private } from "@routes";
export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor={lightColors.purple900} style="light" />
            <NavigationContainer>
                <Private />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
