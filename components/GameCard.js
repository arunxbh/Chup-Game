import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon component

const GameCard = ({ cardsData }) => {
  const [cards, setCards] = useState(cardsData);

  const handleCardClick = () => {
    if (cards.length > 1) {
      const nextCards = [...cards.slice(1), cards[0]];
      setCards(nextCards);
    }
  };

  const handleThumbsDown = () => {
    if (cards.length > 1) {
      setCards(cards.slice(1));
    }
  };

  const handleThumbsUp = () => {
    if (cards.length > 1) {
      setCards(cards.slice(1));
    } else {
      // Handle the case where there are no more cards
    }
  };
  return (
    <View>
      <TouchableOpacity style={styles.cardContainer} onPress={handleCardClick}>
        <Text style={styles.describeText}>
          Describe the word "{cards[0].mainWord}" without using any of the words
          below:
        </Text>
        <Text style={styles.mainWord}>{cards[0].mainWord}</Text>
        <View style={styles.tabooWordsContainer}>
          {cards[0].tabooWords.map((word, index) => (
            <Text key={index} style={styles.tabooWord}>
              {word}›
            </Text>
          ))}
        </View>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.iconButton, styles.thumbsDownButton]}
          onPress={handleThumbsDown}
        >
          <Icon name="thumb-down" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconButton, styles.thumbsUpButton]}
          onPress={handleThumbsUp}
        >
          <Icon name="thumb-up" size={24} color="#FFFFFF" />
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
    color: "#grey",
    marginBottom: 50,
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
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "20%",
    backgroundColor: "#6E44FF", // Purple footer background
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  thumbsDownButton: {
    backgroundColor: "maroon",
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 25, // Half the size of width/height to make it a circle
    justifyContent: "center",
    alignItems: "center",
  },
  thumbsUpButton: {
    backgroundColor: "#046307", // Emerald Green
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 25, // Half the size of width/height to make it a circle
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    color: "white",
    fontSize: 24, // Adjust size as needed
  },
});

export default GameCard;
