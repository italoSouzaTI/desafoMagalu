import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Header } from "@shared/components/Header/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
    return (
        <SafeAreaProvider>
            <Header />;
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
