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
import BackButton from "./components/BackButton";
import Instructions from "./components/Instructions";
import GameCard from "./components/GameCard";
import Timer from "./components/Timer";

const MainGame = ({ route, navigation }) => {
  const { players } = route.params;
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const [timerModalVisible, setTimerModalVisible] = useState(false);

  const handleCloseInstructions = () => {
    setInstructionsVisible(false);
    setTimerModalVisible(true);
  };

  const handleStartGame = () => {
    setTimerModalVisible(false);
    setIsTimerRunning(true);
  };

  const [isTimerRunning, setIsTimerRunning] = useState(false);

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Text style={styles.headerLabel}>Chup!</Text>
      {instructionsVisible && (
        <Instructions onClose={handleCloseInstructions} />
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={timerModalVisible}
        onRequestClose={() => setTimerModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              When you hit "Start Game", a 60-second timer will begin.
              {"\n"}Once the timer runs out, your turn is over for the round.
            </Text>
            <TouchableOpacity
              style={styles.startGameButton}
              onPress={handleStartGame}
            >
              <Text style={styles.startGameButtonText}>Start Game</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <GameCard cardsData={cardTest} />
      <View style={styles.timerAndThumbsContainer}>
        <TouchableOpacity
          style={[styles.iconButton, styles.thumbsDownButton]}
          // onPress function for thumbs down
        >
          {/* thumbs down icon */}
        </TouchableOpacity>

        <Timer
          isTimerRunning={isTimerRunning}
          onTimerEnd={() => setIsTimerRunning(false)}
        />

        <TouchableOpacity
          style={[styles.iconButton, styles.thumbsUpButton]}
          // onPress function for thumbs up
        >
          {/* thumbs up icon */}
        </TouchableOpacity>
      </View>
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
  headerLabel: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: -70,
    textAlign: "center",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // This will "grey out" the background
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  startGameButton: {
    backgroundColor: "#046307",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  startGameButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  timerAndThumbsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    paddingVertical: 10,
  },
  // Add styles for thumbs buttons if not already styled
  iconButton: {
    // Define common button styles here
  },
  thumbsDownButton: {
    // Define thumbs down button styles here
  },
  thumbsUpButton: {
    // Define thumbs up button styles here
  },
});

export default MainGame;

const cardTest = [
  {
    mainWord: "Bollywood",
    tabooWords: ["Movies", "India", "Cinema", "Actors", "Mumbai"],
  },
  {
    mainWord: "Diwali",
    tabooWords: ["Festival", "Lights", "Hindu", "October", "Fireworks"],
  },
  {
    mainWord: "Cricket",
    tabooWords: ["Sport", "Bat", "Ball", "India", "Team"],
  },
];
