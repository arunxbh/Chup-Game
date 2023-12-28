import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import BackButton from "./components/BackButton";
import Instructions from "./components/Instructions";
import Timer from "./components/Timer";

const cardsData = [
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

const MainGame = ({ route, navigation }) => {
  //   const { players } = route.params;
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const [timerModalVisible, setTimerModalVisible] = useState(false);
  const [showNextRoundModal, setShowNextRoundModal] = useState(false);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [cards, setCards] = useState(cardsData);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleNewGame = () => {
    navigation.navigate("GameSetup");
  };

  //   const handleRestart = () => {
  //     navigation.navigate("MainGame", { players });
  //   };

  const handleEndGame = () => {
    navigation.navigate("Home");
  };

  const handleCloseInstructions = () => {
    setInstructionsVisible(false);
    setTimerModalVisible(true);
  };

  const handleStartGame = () => {
    setTimerModalVisible(false);
    setIsTimerRunning(true);
  };

  const onTimerEnd = () => {
    if (cards.length === 0) {
      setShowGameOverModal(true);
    } else {
      setShowNextRoundModal(true);
    }
    setIsTimerRunning(false);
  };

  const handleCardDiscard = () => {
    setCards((prevCards) => {
      const nextCards = prevCards.slice(1);
      if (nextCards.length === 0) {
        setShowGameOverModal(true);
      }
      return nextCards;
    });
  };

  const handleNextRound = () => {
    setShowNextRoundModal(false);
    setIsTimerRunning(true);
  };

  const handleCardClick = () => {
    if (cards.length > 1) {
      const nextCards = [...cards.slice(1), cards[0]];
      setCards(nextCards);
    }
  };

  const handleThumbsUp = () => {
    setCards((currentCards) => {
      const newCards = currentCards.slice(1);
      if (newCards.length === 0) {
        handleCardDiscard();
      }
      return newCards;
    });
  }; // Added missing closing brace here

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Timer isTimerRunning={isTimerRunning} onTimerEnd={onTimerEnd} />
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
      <Modal
        visible={showNextRoundModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowNextRoundModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Pass the phone to the right for the next round!
            </Text>
            <TouchableOpacity
              style={styles.startGameButton}
              onPress={handleNextRound}
            >
              <Text style={styles.startGameButtonText}>Start Game</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={showGameOverModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowGameOverModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Game Over! Tally your points and celebrate your winner.
            </Text>
            <View style={styles.gameOverButtonContainer}>
              <TouchableOpacity
                style={styles.startGameButton}
                onPress={handleNewGame}
              >
                <Text style={styles.startGameButtonText}>New Game</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={styles.startGameButton}
                onPress={handleRestart}
              >
                <Text style={styles.startGameButtonText}>Restart</Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={styles.startGameButton}
                onPress={handleEndGame}
              >
                <Text style={styles.startGameButtonText}>End Game</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
      ) : null}
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
    margin: 5,
  },
  startGameButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    // Ensure there's enough space for the modal content
    width: "80%",
    alignItems: "center",
  },
  //   new styles
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#6E44FF", // Purple border color
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 65,
    marginTop: 30,
    marginBottom: 80,
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
    marginTop: -60,
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

export default MainGame;