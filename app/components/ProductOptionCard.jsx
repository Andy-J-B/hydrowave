import { View, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default ProductOptionCard = ({
  unitNumber,
  costPost,
  costPre,
  sale,
  cardKey,
}) => {
  return (
    <Button buttonStyle={styles.button}>
      <View style={styles.leftContainer}>
        <Text style={styles.unitNum}>
          {unitNumber} Unit{unitNumber === 1 ? "" : "s"}
        </Text>
        <Text style={styles.currentPrice}>${costPost} CAD/each</Text>
        <Text style={styles.beforePrice}>${costPre} CAD/each</Text>
      </View>
      {sale !== 0 && (
        <View style={styles.rightContainer}>
          <Text>{sale}% OFF!</Text>
        </View>
      )}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {},
});
