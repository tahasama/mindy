import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

const Community = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Community</ThemedText>
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
export default Community;
