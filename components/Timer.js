import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = ({ onTimerEnd, isTimerRunning }) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let interval;
    if (isTimerRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((secs) => secs - 1);
      }, 1000);
    } else if (seconds === 0) {
      onTimerEnd();
      setSeconds(60); // Reset timer
    }
    return () => clearInterval(interval);
  }, [seconds, isTimerRunning, onTimerEnd]);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{seconds}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    padding: 10,
    marginBottom: 100,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#6E44FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
  },
  timerText: {
    fontSize: 28,
    color: "#6E44FF",
    textAlign: "center",
  },
});

export default Timer;
