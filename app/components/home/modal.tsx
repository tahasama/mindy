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
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import google from "../../../assets/images/loginLogos/google.png";
import instagram from "../../../assets/images/loginLogos/instagram.png";
import facebook from "../../../assets/images/loginLogos/facebook.png";
import X from "../../../assets/images/loginLogos/X.png";
import signup from "../../../assets/images/loginLogos/signup.jpg";

export default function ModalScreen({ modalVisible, setModalVisible }: any) {
  const router = useRouter();
  const navigation = useNavigation<any>();

  const isPresented = router.canGoBack();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const socialLogin = [google, instagram, facebook, X];

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
        <View style={styles.subModalView}>
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

          <Text
            style={{
              color: "#219AF3",
              textDecorationLine: "underline",
              fontWeight: "500",
              fontSize: 14,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Forgot your Password?
          </Text>

          <TouchableOpacity
            onPress={onCompleteSignUp}
            style={[
              styles.signUpButton,
              {
                backgroundColor: "#2196F3",
              },
            ]}
          >
            <Text style={styles.signUpButtonText}>Sign Up with Email </Text>
          </TouchableOpacity>
        </View>
        <>
          <View style={styles.imageContainer}>
            {socialLogin.map((logo, index) => (
              <Image
                key={index}
                style={[
                  styles.image,
                  { transform: [{ scale: index === 3 ? 0.8 : 1 }] },
                ]}
                source={logo}
                // placeholder={{ blurhash }}
                contentFit="contain"
                transition={1000}
              />
            ))}
          </View>
        </>
        <Text style={{ fontWeight: "400" }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => {}} style={{ top: 10 }}>
          <Text
            style={{
              color: "#2196F3",
              textDecorationLine: "underline",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>

        <Image
          style={styles.signupImage}
          source={signup}
          // placeholder={{ blurhash }}
          contentFit="contain"
          transition={500}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // padding: 10,
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
  subModalView: {
    width: "90%",
  },
  close: {
    alignSelf: "flex-end",
    top: 16,
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
    marginTop: 0,
  },
  signUpButton: {
    backgroundColor: "#2196F3",
    padding: 14,
    borderRadius: 8,
    marginTop: 16,
    width: "100%",
  },
  signUpButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  imageContainer: {
    flexDirection: "row",
    padding: 24,
    gap: 20,
  },
  image: {
    width: 34,
    aspectRatio: 1,
  },
  signupImage: {
    width: "100%",
    aspectRatio: 1,
    bottom: 26,
    zIndex: 0,
  },
});
