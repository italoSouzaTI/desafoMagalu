import { Card, IconFavorite, Typography } from "@shared/components";
import { Image, TouchableOpacity, View } from "react-native";
import { stylesCardItem } from "./styles";
import { styles } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList";
import { spacing } from "@shared/help/spacing";
import { isTablet } from "@shared/help/metrics";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function CardItem() {
    const [isFavorite, setIsFavorite] = useState(false);
    const { navigate } = useNavigation();
    return (
        <Card>
            <View style={stylesCardItem.row}>
                <TouchableOpacity
                    style={stylesCardItem.containerImg}
                    activeOpacity={1}
                    onPress={() => {
                        navigate("Details");
                    }}
                >
                    <View style={stylesCardItem.raite}>
                        <Typography label="3.9" labelWeight="bold" textColor="black" textSize={spacing[12]} />
                    </View>
                    <Image style={stylesCardItem.containerImg} />
                </TouchableOpacity>
                <View
                    style={{
                        width: isTablet ? "68%" : "62%",
                        gap: spacing[8],
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            navigate("Details");
                        }}
                    >
                        <Typography
                            textSize={spacing[16]}
                            label="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                            textColor="black"
                            labelWeight="bold"
                        />
                        <Typography
                            textSize={spacing[16]}
                            label="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
                            textColor="black"
                            labelWeight="300"
                            propsText={{
                                numberOfLines: 2,
                            }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography textSize={spacing[16]} label="$109.95" textColor="black" labelWeight="bold" />
                        <TouchableOpacity
                            onPress={() => {
                                setIsFavorite(!isFavorite);
                            }}
                        >
                            <IconFavorite colorIcon={isFavorite ? "red" : "gray"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Card>
    );
}
