import { Header, Typography } from "@shared/components";
import { TouchableOpacity, View } from "react-native";
import { CardItem } from "./components/CardItem/CardItem";
import { stylesHome } from "./styles";
import { spacing } from "@shared/help/spacing";
import { useMdelViewHome } from "./components/useMdelViewHome";
import { lightColors } from "@shared/help/colors";

export function Home() {
    const { dataTab, handleTab } = useMdelViewHome();
    return (
        <>
            <Header />
            <View style={stylesHome.container}>
                <View style={stylesHome.rowTab}>
                    {dataTab.map((item) => (
                        <TouchableOpacity
                            onPress={() => handleTab(item.id)}
                            key={item.id}
                            style={[
                                stylesHome.containerTab,
                                {
                                    backgroundColor: item.active ? lightColors.purple700 : "transparent",
                                    borderColor: item.active ? lightColors.purple600 : lightColors.gray,
                                    borderWidth: item.active ? 2 : 1,
                                },
                            ]}
                        >
                            <Typography
                                label={item.label}
                                textColor={item.active ? "white" : "gray"}
                                textSize={spacing[16]}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <CardItem />
            </View>
        </>
    );
}
