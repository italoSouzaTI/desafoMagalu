import { useEffect } from "react";
import { Alert, PermissionsAndroid, Platform } from "react-native";
import { Private, Public } from "@routes";
import { StatusBar } from "expo-status-bar";
import { lightColors } from "@shared/help/colors";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initializeStorage } from "@core/service/Database/storageService";
import { asyncStorage } from "@core/service/Database/storage/asyncStorage";
import { useUserCurrentStore } from "@store/useUserCurrentStore";
import messaging from "@react-native-firebase/messaging";
import { NotificationCustom } from "@shared/components";
import { useNotificationStore } from "@store/useNotificationStore";
import { NotificationProvider } from "src/Provider/NotificationProvider/NotificationProvider";

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
    const { notification } = useNotificationStore((state) => state);

    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor={lightColors.purple900} style="light" />
            <QueryClientProvider client={queryClient}>
                <NavigationContainer linking={linking}>
                    <NotificationProvider>
                        <>
                            {notification?.title?.length && <NotificationCustom />}
                            {TOKEN?.length ? <Private /> : <Public />}
                        </>
                    </NotificationProvider>
                </NavigationContainer>
            </QueryClientProvider>
        </SafeAreaProvider>
    );
}
