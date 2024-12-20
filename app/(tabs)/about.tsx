import { StyleSheet, View, Image, ScrollView, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Who we are.</Text>
        <Text style={styles.text}>
          Welcome to HydroWave™, where innovation meets wellness. Our mission is
          clear: to revolutionize hydration with the power of hydrogen.
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Why Hydrogen Water?</Text>
        <Text style={styles.text}>
          Hydrogen water is more than just a trend—it's a leap forward in health
          and wellness. Infused with molecular hydrogen, our water offers
          unparalleled antioxidant properties that can help reduce inflammation,
          improve metabolism, and boost overall energy levels. It's a refreshing
          way to support your body's natural healing processes.{" "}
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Our Promise.</Text>
        <Text style={styles.text}>
          At HydroWave™, we are dedicated to providing the highest quality
          hydrogen water bottles that seamlessly blend science and convenience.
          Each bottle is designed with cutting-edge technology to ensure maximum
          hydrogen concentration, easy portability, and long-lasting durability.
          Experience the future of hydration with HydroWave™.
        </Text>
      </View>

      <View>Thanks for shopping with us! Questions? E-mail us</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {},
  text: {},
});
