import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon component

const GameCard = ({ cards, onDiscard }) => {
  const handleCardClick = () => {
    if (cards.length > 1) {
      const nextCards = [...cards.slice(1), cards[0]];
      setCards(nextCards);
    }
  };

  const handleThumbsUp = () => {
    setCards((currentCards) => {
      const newCards = currentCards.slice(1);
      // Call onDiscard inside this callback
      if (newCards.length === 0) {
        onDiscard();
      }
      return newCards;
    });
  };
  return (
    <View style={styles.container}>
      {cards.length > 0 ? (
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={handleCardClick}
        >
          <Text style={styles.describeText}>
            Describe the word "{cards[0].mainWord}" without using any of the
            words below:
          </Text>
          <Text style={styles.mainWord}>{cards[0].mainWord}</Text>
          <View style={styles.tabooWordsContainer}>
            {cards[0].tabooWords.map((word, index) => (
              <Text key={index} style={styles.tabooWord}>
                {word}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
      ) : (
        onDiscard()
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.chupButton]}
          onPress={handleThumbsUp}
        >
          <Text style={styles.buttonText}>Chup!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#6E44FF", // Purple border color
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 75,
    width: "80%",
    height: "60%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  describeText: {
    fontSize: 12,
    fontWeight: "light",
    marginBottom: 40,
  },
  mainWord: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6E44FF", // Purple text color
    marginBottom: 10,
  },
  tabooWordsContainer: {
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#6E44FF", // Purple line color
    paddingTop: 10,
    width: "100%", // Ensuring the line spans the entire width
  },
  tabooWord: {
    fontSize: 20,
    color: "#6E44FF", // Purple text color
    marginTop: 5,
  },

  chupButton: {
    backgroundColor: "#046307",
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: -40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    elevation: 2, // Optional: Adds a drop shadow for Android (iOS uses shadow props)
    shadowColor: "#000000", // Optional: Shadow color for iOS
    shadowOffset: { width: 0, height: 1 }, // Optional: Shadow offset for iOS
    shadowOpacity: 0.3, // Optional: Shadow opacity for iOS
    shadowRadius: 1, // Optional: Shadow blur radius for iOS
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20, // Adjust as needed to fit the circle
    textAlign: "center", // Ensure text is centered
  },
});

export default GameCard;
