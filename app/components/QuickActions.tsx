import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const QuickActions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Actions</Text>
      <View style={styles.buttons}>
        <Button title="Log Mood" onPress={() => {}} />
        <Button title="Start Assessment" onPress={() => {}} />
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
});

export default QuickActions;
