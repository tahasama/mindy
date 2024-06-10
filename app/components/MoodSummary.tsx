import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MoodSummary = () => {
  const currentMood = "Happy"; // This would be fetched from mood tracking data

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Mood</Text>
      <Text style={styles.mood}>{currentMood}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mood: {
    fontSize: 24,
    color: "#6200ea",
    marginTop: 8,
  },
});

export default MoodSummary;
