import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Profile</ThemedText>
    </ThemedView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white",
  },
});

export default Profile;
