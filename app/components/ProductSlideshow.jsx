import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useState } from "react";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

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

  // Handling swipe gestures
  const onGestureEvent = (event) => {
    if (event.nativeEvent.translationX < -50) {
      // Swipe Left
      switchImageRight();
    } else if (event.nativeEvent.translationX > 50) {
      // Swipe Right
      switchImageLeft();
    }
  };

  return (
    <>
      <View style={styles.imageContainer}>
        <Pressable style={styles.leftButton} onPress={switchImageLeft}>
          <IconSymbol size={28} name="caretleft" color={"black"} />
        </Pressable>
        <Image source={images[imageNumber]}></Image>
        <Pressable style={styles.rightButton} onPress={switchImageRight}>
          <IconSymbol size={28} name="caretright" color={"black"} />
        </Pressable>
      </View>

      <GestureHandlerRootView style={styles.container}>
        <View style={styles.imageContainer}>
          {/* Left Button */}
          <Pressable style={styles.leftButton} onPress={switchImageLeft}>
            <IconSymbol size={28} name="caret-left" color={"black"} />
          </Pressable>

          {/* Pan Gesture Handler for Image Swipe */}
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <View style={styles.imageWrapper}>
              <Image source={images[imageNumber]} style={styles.image} />
            </View>
          </PanGestureHandler>

          {/* Right Button */}
          <Pressable style={styles.rightButton} onPress={switchImageRight}>
            <IconSymbol size={28} name="caret-right" color={"black"} />
          </Pressable>
        </View>
      </GestureHandlerRootView>
    </>
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
});
