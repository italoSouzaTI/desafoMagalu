import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 *  @default
 * verticalScale = height,marginTop,marginBottom,MarginVertical,line-height,paddingTop,paddingBottom,paddingVertical,likewise.
 * horizontalScale = width,marginLeft,marginRight,marginHorizontal,paddingLeft,paddingRight,PaddingHorizontal,likewise.
 * moderateScale = font-size, borderRadius,likewise.
 */

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const moderateScale = (size: number, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
const isTablet = Dimensions.get("screen").width > 600;

export { horizontalScale, verticalScale, moderateScale, isTablet };
