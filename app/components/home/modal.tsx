// app/components/home/Modal.js
import {
  Modal,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCompleteSetup = () => {
    // Implement profile setup logic
    navigation.navigate("Activities"); // Redirect to the dashboard after setup
  };

  const onCompleteSignUp = () => {
    navigation.navigate("Profile");
  };
  const handleGoogleSignUp = () => {
    navigation.navigate("Profile");
  };
  const handleFacebookSignUp = () => {
    navigation.navigate("Profile");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
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
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={onCompleteSignUp} />
        <TouchableOpacity
          onPress={handleGoogleSignUp}
          // style={styles.socialButton}
        >
          <Text
          // style={styles.socialButtonText}
          >
            Sign Up with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFacebookSignUp}
          // style={styles.socialButton}
        >
          <Text
          // style={styles.socialButtonText}
          >
            Sign Up with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    // width: "100%",
    // marginBottom: 50,
    // marginTop: 5,
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
