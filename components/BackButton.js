import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Text style={styles.text}>{"<"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "transparent",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});

export default BackButton;
