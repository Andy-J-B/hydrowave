import { StyleSheet, ScrollView, Text, View } from "react-native";
import React from "react";
import InfoCard from "../components/InfoCard";

const homepage1 = require("../../assets/images/home/pages/homepage1.jpg");
const homepage2 = require("../../assets/images/home/pages/homepage2.jpg");
const homepage3 = require("../../assets/images/home/pages/homepage3.jpg");
const homepage4 = require("../../assets/images/home/pages/homepage4.webp");
const homepage5 = require("../../assets/images/home/pages/homepage5.jpg");
const homepage6 = require("../../assets/images/home/pages/homepage6.jpg");
const homepage7 = require("../../assets/images/home/pages/homepage7.webp");

export default function HomeScreen() {
  const infoCards = [
    {
      name: "Introducing the HydroWave™ Hydrogen Water Bottle",
      detail:
        "Experience hydration innovation with the HydroWave™ Hydrogen Water Bottle. Combining cutting-edge technology with sleek design, this bottle is perfect for those who value quality and performance.",
      imageUrl: homepage1,
    },
    {
      name: "Innovation in Every Detail",
      detail:
        "At HydroWave, we believe in the power of innovation. Explore the craftsmanship behind our hydrogen water bottle, featuring premium materials and cutting-edge technology. Each image highlights the attention to detail that ensures your bottle is not just functional but a statement of style and sustainability.",
      imageUrl: homepage2,
    },
    {
      name: "Premium Materials and Innovative Design",
      detail:
        "The HydroWave™ is made from high borosilicate glass, known for its durability and resistance to thermal shock. This ensures that your bottle is not only stylish but also built to last.",
      imageUrl: homepage3,
    },
    {
      name: "Hydrogen-Powered Wellness",
      detail:
        "The HydroWave™ bottle features a push-button generator and a portable ioniser, transforming ordinary water into a refreshing, hydrogen-rich beverage.",
      imageUrl: homepage4,
    },
    {
      name: "Eco-Friendly & Rechargeable for a Greener Tomorrow",
      detail:
        "The HydroWave™ bottle is designed as an eco-friendly alternative, single-use plastics, and it’s rechargeable feature helps you enjoy fresh hydrogen-infused water again and again, making it a smart choice for both your health and the environment.",
      imageUrl: homepage5,
    },
    {
      name: "Advanced Hydrogen Filtration Technology",
      detail:
        "The HydroWave™ bottle features state-of-the-art filtration technology that enhances your water with pure hydrogen. Our multi-layer filtration system efficiently infuses hydrogen molecules into the water, improving its taste and promoting better hydration.",
      imageUrl: homepage6,
    },
    {
      name: "Health-Boosting Benefits of Hydrogen-Infused Water",
      detail:
        "Hydrogen-infused water offers superior hydration to increased energy and enhanced antioxidant support.",
      imageUrl: homepage7,
    },
  ];

  return (
    <ScrollView style={styles.infoCardContainer}>
      {infoCards.map((card, index) => (
        <InfoCard
          name={card.name}
          detail={card.detail}
          imageUrl={card.imageUrl}
          cardKey={index}
          key={index}
        ></InfoCard>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoCardContainer: {
    backgroundColor: "rgb(228, 246, 248)",
  },
});
