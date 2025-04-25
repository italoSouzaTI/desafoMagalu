import { View } from "react-native";
import { stylesCard } from "./styles";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}
export function Card({ children }: CardProps) {
    return <View style={stylesCard.containerCard}>{children}</View>;
}
