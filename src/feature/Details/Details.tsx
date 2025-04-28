import { Header, IconFavorite, Typography } from "@shared/components";
import { spacing } from "@shared/help/spacing";
import { Image, TouchableOpacity, View } from "react-native";
import { stylesDetails } from "./styles";
import { useModelViewDetails } from "./useModelViewDetails";

export function Details({ navigation }) {
    const { params, currentFavorite, ProductQuery, saveFavorite } = useModelViewDetails();
    if (params != undefined && ProductQuery.isLoading && !!currentFavorite) {
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
    return (
        <>
            <Header
                isGoBack
                title="Product details"
                onpress={() => {
                    navigation.navigate("Home");
                }}
            />
            {JSON.stringify(currentFavorite) == "{}" ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography label="Nehum produto encontrado 😞" textColor="gray" textSize={spacing[16]} />
                </View>
            ) : (
                <>
                    <View style={stylesDetails.ContainerImage}>
                        <TouchableOpacity
                            onPress={() => {
                                saveFavorite(currentFavorite);
                            }}
                            style={{
                                position: "absolute",
                                zIndex: 5,
                                right: 30,
                                top: 20,
                            }}
                        >
                            <IconFavorite
                                sizeIcon={spacing[32]}
                                colorIcon={currentFavorite.isFavorite ? "red" : "gray"}
                            />
                        </TouchableOpacity>
                        <Image
                            style={stylesDetails.ContainerImage}
                            source={{ uri: currentFavorite.image }}
                            resizeMode="contain"
                        />
                        <View style={stylesDetails.raite}>
                            <Typography
                                label={String(currentFavorite.rating.rate)}
                                labelWeight="bold"
                                textColor="black"
                                textSize={spacing[12]}
                            />
                        </View>
                    </View>
                    <View style={stylesDetails.containerData}>
                        <Typography
                            textSize={spacing[28]}
                            label={currentFavorite.title}
                            textColor="black"
                            labelWeight="bold"
                        />
                        <Typography
                            textSize={spacing[20]}
                            label={currentFavorite.description}
                            textColor="black"
                            labelWeight="300"
                        />
                        <Typography
                            propsText={{
                                style: {
                                    textAlign: "center",
                                    fontSize: spacing[28],
                                    fontWeight: "bold",
                                },
                            }}
                            label={`$ ${currentFavorite.price}`}
                            textColor="black"
                        />
                    </View>
                </>
            )}
        </>
    );
}
