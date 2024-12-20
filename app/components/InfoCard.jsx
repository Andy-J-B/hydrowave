import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default InfoCard = ({ name, detail, imageUrl, cardKey }) => {
  return (
    <View style={styles.card}>
      <Image
        source={imageUrl}
        style={cardKey === 6 ? styles.image7 : styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.detail}>{detail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 500,
    borderRadius: 8,
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
  image7: {
    width: "100%",
    borderRadius: 8,
    resizeMode: "contain",
  },
});
