import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
const shop1 = require("../../assets/images/shop/hydrowaveShop1.png");

export default function ShopScreen() {
  return (
    <ScrollView>
      <View>
        <Text>FREE SHIPPING ON ALL ORDERS !!!</Text>
      </View>
      <View>
        <Image source={shop1}></Image>
      </View>
      <View>
        <Text>HydroWave™ - The Hydrogen Water Bottle</Text>
        <Text>Sale price $79.99 CAD</Text>
        <Text>Regular price $92.99 CAD</Text>
        <View>
          <Text>SALE</Text>
        </View>
      </View>
      <View>
        <Text>LIMITED TIME OFFER !</Text>
        <View></View>
      </View>
      <View>
        <Text>Proceed to checkout</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
