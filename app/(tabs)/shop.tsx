import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import React from "react";
import ProductOptionList from "../components/ProductOptionList";
import ProductSlideshow from "../components/ProductSlideshow";

export default function ShopScreen() {
  const purchaseOptions = [
    {
      unitNumber: 1,
      costPost: 79.99,
      costPre: 92.99,
      sale: 0,
    },
    {
      unitNumber: 2,
      costPost: 71.99,
      costPre: 92.99,
      sale: 10,
    },
    {
      unitNumber: 3,
      costPost: 63.99,
      costPre: 92.99,
      sale: 20,
    },
  ];
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FREE SHIPPING ON ALL ORDERS !!!</Text>
      </View>

      <ProductSlideshow></ProductSlideshow>

      <Text style={styles.productName}>
        HydroWave™ - The Hydrogen Water Bottle
      </Text>
      <View style={styles.productInfoContainer}>
        <Text style={[styles.priceSale, styles.productInfoText]}>
          Sale price $79.99 CAD
        </Text>
        <View style={styles.saleContainer}>
          <Text style={[styles.priceRegular]}>Regular price $92.99 CAD</Text>
          <View style={[styles.productInfoText, styles.saleSquare]}>
            <Text style={styles.saleText}>SALE</Text>
          </View>
        </View>
      </View>
      <View style={styles.shopContainer}>
        <Text style={styles.shopContainerTitle}>LIMITED TIME OFFER !</Text>
        <View style={styles.productTypes}>
          <ProductOptionList options={purchaseOptions}></ProductOptionList>
        </View>
      </View>

      <Button
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.buttonStyle}
        title="PROCEED TO PURCHASE"
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

  productInfoContainer: {
    marginTop: 20,
  },
  productInfoText: {
    margin: 1,

    textAlign: "center",
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
    marginLeft: 5,
  },
  saleText: { color: "white", marginLeft: 7 },
  saleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  shopContainer: {
    margin: "auto",
  },

  shopContainerTitle: {
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  productTypes: {},
  buttonStyle: {
    backgroundColor: "rgb(3, 78, 142)",
    width: 300,
    margin: "auto",
  },
  buttonTitle: { fontWeight: "bold", fontSize: 15 },
});
