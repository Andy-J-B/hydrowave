// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { SymbolWeight } from "expo-symbols";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  // Material Icons
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",

  // AntDesign Icons
  "shoppingcart.fill": "shoppingcart",
  infocirlceo: "infocirlceo",
  caretright: "caretright",
  caretleft: "caretleft",
} as Partial<
  Record<
    string, // SF Symbol names
    string // Material or AntDesign icon names
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  const iconName = MAPPING[name];

  // If there's no corresponding icon name, return null
  if (!iconName) {
    return null;
  }

  // Determine which icon component to use (MaterialIcons or AntDesign)
  const isMaterialIcon = ["home", "send", "code", "chevron-right"].includes(
    iconName
  ); // Add other MaterialIcons names if needed
  const isAntDesign = [
    "shoppingcart",
    "infocirlceo",
    "caretright",
    "caretleft",
  ].includes(iconName); // Add other AntDesign names if needed

  if (isMaterialIcon) {
    return (
      <MaterialIcons name={iconName} size={size} color={color} style={style} />
    );
  }

  if (isAntDesign) {
    return (
      <AntDesign name={iconName} size={size} color={color} style={style} />
    );
  }

  return null; // Fallback if no icon is found
}
