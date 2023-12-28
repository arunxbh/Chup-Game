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
            {"\n\n"}Players may NOT say "The festival of lights in Hindu culture
            is: __________?".
            {"\n\n"}How to play:
            {"\n"}• Each team has 100 seconds to describe as many cards as
            possible.
            {"\n"}• Each correctly guessed card earns the guessing team 1 point.
            {"\n"}• You can skip cards if you do not know what is being
            described.
            {"\n"}• After 100 seconds, move to a new clue-giver and start the
            clock again.
            {"\n"}• The game ends after all cards have been described or teams
            decide to end the game. The team with the most points wins!
            {"\n\n"}How to use Chup!:
            {"\n"}• If you want to skip a card, tap the card itself. This will
            ensure the card comes up again later
            {"\n"}• If a card is guessed correctly or you accidently use a
            forbidden word, click the Chup! button, this will remove the card
            from the deck for the rest of the game
            {"\n\n"}How to track points:
            {"\n"}The clue-giver must identify the person who guesses correctly
            after each card by either pointing at them or shouting out their
            name. You may use any points system you prefer. Some that we
            reccomend are:
            {"\n"}• Give each player a paper and pen, each player can track
            their own points
            {"\n"}• Keep a large deck of cards in the middle, anytime a player
            gets a question right, they take a card. The team with the most
            cards at the end wins
            {"\n\n"}Chup! has a total of ~300 cards, keeping the fun going for a
            long time!
            {"\n\n"}When you are ready, close this instructions page to start
            playing!
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
    marginTop: 20,
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
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    margin: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  // ...other styles...
});

export default Instructions;
