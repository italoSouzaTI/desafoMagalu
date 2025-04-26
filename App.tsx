import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { lightColors } from "@shared/help/colors";
import { NavigationContainer } from "@react-navigation/native";
import { Private } from "@routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
if (__DEV__) {
    require("./src/core/ReactotronConfig");
}
export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor={lightColors.purple900} style="light" />
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                    <Private />
                </NavigationContainer>
            </QueryClientProvider>
        </SafeAreaProvider>
    );
}
