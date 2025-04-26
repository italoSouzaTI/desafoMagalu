import { Header, Typography } from "@shared/components";
import { TouchableOpacity, View } from "react-native";
import { CardItem } from "./components/CardItem/CardItem";
import { stylesHome } from "./styles";
import { spacing } from "@shared/help/spacing";

import { lightColors } from "@shared/help/colors";
import { useModelViewHome } from "./useModelViewHome";
import { FlashList } from "@shopify/flash-list";
import { IProduct } from "../https/types/getProducts";

export function Home() {
    const { dataTab, handleTab, listProduct, loading } = useModelViewHome();

    if (loading && listProduct.length === 0) {
        return (
            <>
                <Header />
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography label="Carregando..." textColor="gray" textSize={spacing[16]} />
                </View>
            </>
        );
    }

    function renderItem(item: IProduct) {
        return <CardItem product={item} />;
    }
    function renderEmpty() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography label="Nehum item foi favoritado" textColor="gray" textSize={spacing[16]} />
            </View>
        );
    }
    console.log("listProduct", listProduct);
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
                <FlashList
                    contentContainerStyle={{
                        padding: spacing[16],
                        paddingBottom: spacing[32],
                    }}
                    data={listProduct}
                    renderItem={({ item }) => renderItem(item)}
                    ListEmptyComponent={renderEmpty}
                    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                    estimatedItemSize={50}
                />
            </View>
        </>
    );
}
