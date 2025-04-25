import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { lightColors } from "@shared/help/colors";
import { spacing } from "@shared/help/spacing";
import { Card, Header } from "@shared/components";
import { Home } from "src/feature";
export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor={lightColors.purple900} style="light" />
            <Home />
        </SafeAreaProvider>
    );
}
