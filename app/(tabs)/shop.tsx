import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function ShopifyStore() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://hydrowave.co/products/hydrowave%E2%84%A2-the-hydrogen-water-bottle",
        }} // Replace with your Shopify store URL
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
