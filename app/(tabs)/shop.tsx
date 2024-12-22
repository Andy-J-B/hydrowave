import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import React from "react";
const shop1 = require("../../assets/images/shop/hydrowaveShop1.png");

export default function ShopScreen() {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FREE SHIPPING ON ALL ORDERS !!!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={shop1}></Image>
      </View>
      <Text style={styles.productName}>
        HydroWave™ - The Hydrogen Water Bottle
      </Text>
      <View style={styles.productInfoContainer}>
        <Text style={[styles.priceSale, styles.productInfoText]}>
          Sale price $79.99 CAD
        </Text>
        <Text style={[styles.priceRegular, styles.productInfoText]}>
          Regular price $92.99 CAD
        </Text>
        <View style={[styles.saleSquare, styles.productInfoText]}>
          <Text style={styles.saleText}>SALE</Text>
        </View>
      </View>
      <View style={styles.shopContainer}>
        <Text style={styles.shopContainerTitle}>LIMITED TIME OFFER !</Text>

        <View style={styles.productTypes}></View>
      </View>

      <Button
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.buttonStyle}
        title="ADD to cart"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: "rgba(210, 246, 248, 0.1)",
  },
  header: {
    backgroundColor: "rgb(3, 78, 142)",
    height: 50,
  },
  headerText: {
    textAlign: "center",
    color: "white",
    margin: "auto",
    fontSize: 20,
  },
  imageContainer: {
    margin: "auto",
    marginTop: 20,
  },
  productInfoContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  productInfoText: {
    margin: 10,
  },
  productName: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  priceSale: { fontSize: 15, color: "green" },
  priceRegular: {
    fontSize: 15,
    color: "red",
    textDecorationLine: "line-through",
  },
  saleSquare: {
    backgroundColor: "red",
    width: 50,
    height: 20,
    borderRadius: 5,
  },
  saleText: { color: "white", marginLeft: 7 },
  shopContainer: {
    margin: "auto",
  },
  shopContainerTitle: { margin: 20 },
  productTypes: {},
  buttonStyle: {
    backgroundColor: "rgb(3, 78, 142)",
    width: 200,
    margin: "auto",
  },
  buttonTitle: { fontWeight: "bold", fontSize: 15 },
});
