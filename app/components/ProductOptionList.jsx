import { useState } from "react";
import ProductOptionCard from "./ProductOptionCard";
import { View, StyleSheet } from "react-native";

export default ProductOptionList = ({ options }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Handler to update selected card
  const handleCardPress = (cardKey) => {
    setSelectedCard(cardKey === selectedCard ? null : cardKey); // Toggle press state
  };

  return (
    <View style={styles.container}>
      {options.map((card, index) => (
        <ProductOptionCard
          key={index}
          cardKey={index}
          unitNumber={card.unitNumber}
          costPost={card.costPost}
          costPre={card.costPre}
          sale={card.sale}
          isPressed={selectedCard === index} // Check if this card is pressed
          onPress={handleCardPress} // Handler to toggle pressed state
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
