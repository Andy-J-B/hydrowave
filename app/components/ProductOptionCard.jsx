import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

export default ProductOptionCard = ({
  unitNumber,
  costPost,
  costPre,
  sale,
  cardKey,
  isPressed,
  onPress,
}) => {
  return (
    <Pressable
      onPress={() => onPress(cardKey)}
      style={[
        styles.button,
        isPressed && styles.buttonPressed, // Apply additional styles when pressed
      ]}
    >
      <View style={styles.leftContainer}>
        <Text style={styles.unitNum}>
          {unitNumber} Unit{unitNumber === 1 ? "" : "s"}
        </Text>
        <Text style={styles.currentPrice}>${costPost} CAD/each</Text>
        <Text style={styles.beforePrice}>${costPre} CAD/each</Text>
      </View>
      {sale !== 0 && (
        <View style={styles.rightContainer}>
          <Text style={styles.sale}>{sale}% OFF!</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: "auto",
    padding: 20,
    margin: 10,
    backgroundColor: "white",
    borderWidth: 2,
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonPressed: {
    borderColor: "rgb(3, 78, 142)",
    borderWidth: 5,
  },
  leftContainer: {
    flexDirection: "column",
  },
  rightContainer: {},
  unitNum: {},
  currentPrice: {},
  beforePrice: {},
  rightContainer: {
    flexDirection: "column",
  },
  sale: {},
});
