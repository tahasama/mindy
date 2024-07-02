import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";

const CompleteProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigation = useNavigation<any>();
  return (
    <ThemedView style={styles.container}>
      <Text>Your account details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      {/* <Button title="Complete Setup" onPress={handleProfileSetup} /> */}
    </ThemedView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
