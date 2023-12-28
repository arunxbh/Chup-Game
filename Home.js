import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const handleNewGamePress = () => {
    navigation.navigate("GameSetup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chup!</Text>
      <TouchableOpacity style={styles.button} onPress={handleNewGamePress}>
        <Text style={styles.buttonText}>New Game</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
  },
  button: {
    borderWidth: 1,
    borderColor: "#black", // Blue color
    // borderColor: '#046307', // Dark emerald green color
    backgroundColor: "#046307",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
