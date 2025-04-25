import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors, lightColors } from "@shared/help/colors";
import { spacing } from "@shared/help/spacing";
interface IconFavoriteProps {
    colorIcon: keyof Colors;
    sizeIcon?: number;
}
export function IconFavorite({ colorIcon = "gray", sizeIcon = spacing[24] }: IconFavoriteProps) {
    return <AntDesign name="heart" size={sizeIcon} color={colorIcon} />;
}
