import React, { createContext, useContext, useEffect } from "react";
import messaging from "@react-native-firebase/messaging";
import { PermissionsAndroid, Platform } from "react-native";
import { useNotificationStore } from "@store/useNotificationStore";
import { useNavigation } from "@react-navigation/native";

// Contexto vazio (não será usado para valores)
const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
    const { setNotification } = useNotificationStore();
    const navigation = useNavigation();

    // 1. Solicitar permissões
    const requestPermissions = async () => {
        try {
            if (Platform.OS === "ios") {
                const authStatus = await messaging().requestPermission();
                const enabled =
                    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

                if (!enabled) {
                    console.log("Permissão de notificação negada");
                    return;
                }
            }

            if (Platform.OS === "android" && Platform.Version > 32) {
                await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
            }

            // Obter token se necessário (descomente se for usar)
            const token = await messaging().getToken();
            console.log("FCM Token:", token);
        } catch (error) {
            console.error("Erro nas permissões:", error);
        }
    };

    // 2. Configurar listeners de notificação
    const setupNotificationListeners = () => {
        // Notificação recebida em primeiro plano
        const onMessageUnsubscribe = messaging().onMessage((remoteMessage) => {
            setNotification({
                title: remoteMessage.notification?.title,
                body: remoteMessage.notification?.body,
                data: remoteMessage.data,
            });
        });

        // App aberto a partir de notificação (background)
        const onOpenedUnsubscribe = messaging().onNotificationOpenedApp((remoteMessage) => {
            console.log("App aberto a partir de notificação (background)");
            handleNotificationNavigation(remoteMessage);
        });

        // App aberto a partir de notificação (fechado)
        messaging()
            .getInitialNotification()
            .then((remoteMessage) => {
                if (remoteMessage) {
                    console.log("App aberto a partir de notificação (fechado)");
                    handleNotificationNavigation(remoteMessage);
                }
            });

        return () => {
            onMessageUnsubscribe();
            onOpenedUnsubscribe();
        };
    };

    // 3. Navegação baseada em notificação
    const handleNotificationNavigation = (remoteMessage) => {
        if (!remoteMessage?.data?.product) return;
        console.log("remoteMessage", remoteMessage);
        navigation.navigate("Details", {
            productId: remoteMessage.data.product,
        });
        console.log("passei");
    };

    useEffect(() => {
        requestPermissions();
        return setupNotificationListeners();
    }, []);

    return <NotificationContext.Provider value={null}>{children}</NotificationContext.Provider>;
};

export const useNotification = () => useContext(NotificationContext);
