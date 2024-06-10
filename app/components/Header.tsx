import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  const userName = "John"; // This would be fetched from user data
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>{`${greeting}, ${userName}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: "#6200ea",
    alignItems: "center",
    borderRadius: 8,
  },
  greeting: {
    fontSize: 24,
    color: "#fff",
  },
});

export default Header;
