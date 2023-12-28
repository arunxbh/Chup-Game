import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Button,
} from "react-native";
import BackButton from "./components/BackButton";

const GameSetupScreen = ({ navigation }) => {
  const [players, setPlayers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleAddPlayer = () => {
    if (players.length < 30 && newPlayerName.trim() !== "") {
      setPlayers([...players, newPlayerName]);
      setNewPlayerName("");
    }
    setModalVisible(false);
  };

  const handleDeletePlayer = (index) => {
    setPlayers(players.filter((_, idx) => idx !== index));
  };

  const handleStartGame = () => {
    navigation.navigate("MainGame", { players });
  };

  const isStartGameButtonDisabled = players.length < 4;

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Text style={styles.headerLabel}>Setup your game:</Text>
      <Text style={styles.disclaimerText}>Must have 4 players to start!</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Add Player +</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView} horizontal={false}>
        {players.map((player, index) => (
          <View key={index} style={styles.playerContainer}>
            <Text style={styles.player}>
              Player {index + 1}: {player}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeletePlayer(index)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.startGameButton,
          isStartGameButtonDisabled && styles.disabledButton,
        ]}
        onPress={handleStartGame}
        disabled={isStartGameButtonDisabled}
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={setNewPlayerName}
              value={newPlayerName}
              placeholder="Player Name"
            />
            <Button title="Add" onPress={handleAddPlayer} />
          </View>
        </View>
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
  headerLabel: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  disclaimerText: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
    marginBottom: 20,
  },

  scrollView: {
    flex: 1,
    marginTop: 0,
    width: "100%",
  },
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginHorizontal: 10,
    marginBottom: 10,
    width: "75%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  player: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 12,
  },
  addButton: {
    backgroundColor: "#046307",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  startGameButton: {
    backgroundColor: "#046307",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 40,
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
});

export default GameSetupScreen;
