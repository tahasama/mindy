import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DailyTips = () => {
  const tip = "Take a few minutes to meditate today.";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Tip</Text>
      <Text style={styles.tip}>{tip}</Text>
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
  tip: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default DailyTips;
