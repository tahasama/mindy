import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileSetup = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigation = useNavigation<any>();

  const handleProfileSetup = () => {
    // Implement profile setup logic
    navigation.navigate("Dashboard"); // Redirect to the dashboard after setup
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Up Your Profile</Text>
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
      <Button title="Complete Setup" onPress={handleProfileSetup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

export default ProfileSetup;
