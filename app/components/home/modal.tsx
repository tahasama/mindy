// app/components/home/Modal.js
import {
  Modal,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ModalScreen({ modalVisible, setModalVisible }: any) {
  const router = useRouter();
  const navigation = useNavigation<any>();

  const isPresented = router.canGoBack();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleCompleteSetup = () => {
    // Implement profile setup logic
    navigation.navigate("Activities"); // Redirect to the dashboard after setup
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        if (isPresented) {
          router.back();
        }
      }}
    >
      <View style={styles.modalView}>
        <AntDesign
          name="closecircleo"
          size={28}
          color="grey"
          onPress={() => setModalVisible(false)}
          style={styles.close}
        />

        <View style={styles.profileSetup}>
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
          <Button title="Complete Setup" onPress={handleCompleteSetup} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    width: "100%",
    marginBottom: 50,
    marginTop: 5,
    backgroundColor: "#f5f5f5",

    // borderTopEndRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  close: {
    alignSelf: "flex-end",
  },
  profileSetup: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  input: {
    width: "100%",
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});
