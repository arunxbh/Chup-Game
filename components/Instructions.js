import { on } from "events";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Button,
} from "react-native";

const Instructions = ({ onClose }) => {
  const [instructionsVisible, setInstructionsVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={true} // The parent component controls this now
        onRequestClose={onClose} // Use the onClose prop
      >
        <Text style={styles.instructionsTitle}>Instructions</Text>

        <ScrollView style={styles.instructionsModal}>
          <Text style={styles.instructionsText}>
            Chup! is a version of the popular word-guessing game "Taboo".
            {"\n\n"}The objective of the game is for a player to have the rest
            of the party guess the word on their card without using the word
            itself or five additional words listed on the card.
            {"\n\n"}Example:
            {"\n"}Describe the word: Diwali
            {"\n"}Without using: Festival, Lights, Hindu, October, Fireworks
            {"\n\n"}Players may say "The biggest religious Indian event is:
            __________?".
            {"\n\n"}How to win:
            {"\n"}• Each team has 60 seconds to describe as many cards as
            possible.
            {"\n"}• Each correctly guessed card earns the guessing team 1 point.
            {"\n"}• You can skip cards if you do not know what is being
            described.
            {"\n"}• After 60 seconds, rotate the person describing and start the
            clock again.
            {"\n"}• The game ends after all cards have been described or teams
            decide to end the game. The team with the most points wins!
          </Text>
        </ScrollView>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8e8",
    alignItems: "center",
    justifyContent: "center",
  },
  instructionsModal: {
    marginTop: 10,
    padding: 20,
  },
  instructionsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: -20,
    marginTop: 40,
  },
  instructionsText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#046307",
    padding: 10,
    borderRadius: 0,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  // ...other styles...
});

export default Instructions;
