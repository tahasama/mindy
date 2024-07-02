import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, Text } from "react-native";

const index = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigation = useNavigation<any>();

  // const user = {
  //   name: "John Doe",
  //   age: "25",
  // };

  const user = { name, age };

  const handleProfileSetup = () => {
    // Implement profile setup logic
    navigation.navigate("CompleteProfile"); // Redirect to the dashboard after setup
  };

  return (
    <ThemedView style={styles.container}>
      <Text>Your account details</Text>

      {user.name === "" && (
        <>
          <Text>
            your profile is incomplete, for better result please complete your
            profile
          </Text>
          <Button title="Complete Setup" onPress={handleProfileSetup} />
        </>
      )}
    </ThemedView>
  );
};
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

export default index;
