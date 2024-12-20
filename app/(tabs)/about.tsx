import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
const LogoWText = require("../../assets/images/about/HydrowaveLogoWithTitle.webp");

export default function AboutUs() {
  return (
    <ScrollView style={styles.aboutContainer}>
      <View style={styles.section}>
        <Text style={styles.title}>About Us</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Who we are.</Text>
        <Text style={styles.text}>
          Welcome to HydroWave™, where innovation meets wellness. Our mission is
          clear: to revolutionize hydration with the power of hydrogen.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Why Hydrogen Water?</Text>
        <Text style={styles.text}>
          Hydrogen water is more than just a trend—it's a leap forward in health
          and wellness. Infused with molecular hydrogen, our water offers
          unparalleled antioxidant properties that can help reduce inflammation,
          improve metabolism, and boost overall energy levels. It's a refreshing
          way to support your body's natural healing processes.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Promise.</Text>
        <Text style={styles.text}>
          At HydroWave™, we are dedicated to providing the highest quality
          hydrogen water bottles that seamlessly blend science and convenience.
          Each bottle is designed with cutting-edge technology to ensure maximum
          hydrogen concentration, easy portability, and long-lasting durability.
          Experience the future of hydration with HydroWave™.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
          Thanks for shopping with us! Questions? E-mail us
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>
          <Image source={LogoWText} style={styles.logo}></Image>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8", // Light background color for the entire scroll view
  },
  section: {
    marginBottom: 24, // Adds space between sections
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center", // Center the title
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600", // Slightly bold subtitle
    textAlign: "center", // Center the title
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24, // Line height for better readability
    textAlign: "center", // Center the title
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
});
