import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useState } from "react";

export default ProductSlideshow = () => {
  const images = [
    require("../../assets/images/shop/hydrowaveShop1.png"),
    require("../../assets/images/shop/hydrowaveShop2.png"),
  ];

  const [imageNumber, setImageNumber] = useState(0);

  const switchImageLeft = () => {
    setImageNumber((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const switchImageRight = () => {
    setImageNumber((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <View style={styles.imageContainer}>
      {/* Left Button */}
      <Pressable style={styles.leftButton} onPress={switchImageLeft}>
        <IconSymbol size={28} name="caretleft" color={"black"} />
      </Pressable>

      <View style={styles.imageWrapper}>
        <Image source={images[imageNumber]} style={styles.image} />
      </View>

      {/* Right Button */}
      <Pressable style={styles.rightButton} onPress={switchImageRight}>
        <IconSymbol size={28} name="caretright" color={"black"} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: "auto",
    marginTop: 20,
    flexDirection: "row",
  },
  leftButton: {
    margin: "auto",
  },
  rightButton: { margin: "auto" },
  imageWrapper: {
    width: 250,
    height: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    resizeMode: "contain",
  },
});
