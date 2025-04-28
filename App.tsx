import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { lightColors } from "@shared/help/colors";
import { NavigationContainer } from "@react-navigation/native";
import { Private, Public } from "@routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initializeStorage } from "@core/service/Database/storageService";
import { asyncStorage } from "@core/service/Database/storage/asyncStorage";
import { useUserCurrentStore } from "@store/useUserCurrentStore";

const queryClient = new QueryClient();
if (__DEV__) {
    require("./src/core/ReactotronConfig");
}
initializeStorage(asyncStorage);
const linking = {
    prefixes: ["desafioaiqfome://", "com.italo.aiqfome://"],
    config: {
        screens: {
            Details: {
                path: "/Details/:productId",
                parse: {
                    productId: (productId: string) => productId,
                },
            },
        },
    },
};
export default function App() {
    const TOKEN = useUserCurrentStore((state) => state.token);
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor={lightColors.purple900} style="light" />
            <QueryClientProvider client={queryClient}>
                <NavigationContainer linking={linking}>{TOKEN?.length ? <Private /> : <Public />}</NavigationContainer>
            </QueryClientProvider>
        </SafeAreaProvider>
    );
}
