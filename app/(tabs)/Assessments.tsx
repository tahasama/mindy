import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Image } from "expo-image";

import { useNavigation } from "@react-navigation/native";
import assessment from "../../assets/images/assessment/assessment.jpg";
import { LinearGradient } from "expo-linear-gradient";
import DailyAsessment from "../components/assessments/DailyAssessment";
import ModalAssessment from "../components/assessments/modal";

const AssessmentScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={assessment}
        // placeholder={{ blurhash }}
        contentFit="contain"
        transition={1000}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["#D5FFFD", "#f5f5f5"]}
        style={{ height: 120 }}
      />
      <View style={styles.container}>
        <View style={styles.explanationContainer}>
          <Text style={styles.explanationText}>
            Take daily and weekly assessments cover various activity categories.
          </Text>
          <Text style={styles.explanationText}>
            Your answers will help us improve our recommendations and track your
            progress.
          </Text>
          <Text style={styles.highlightText}>
            Aim to complete as much as possible for more precise results.
          </Text>
        </View>
      </View>
      <Pressable
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Take you daily assessment!</Text>
        <DailyAsessment
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 36,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    // marginBottom: 12,
    // borderRadius: 8,
  },
  explanationContainer: {
    marginBottom: 20,
    marginTop: -160,
    paddingHorizontal: 15,
  },
  explanationText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  highlightText: {
    color: "red",
    fontWeight: "bold",
  },

  textStyle: {
    backgroundColor: "green",
    padding: 10,
    color: "#fff",
    borderRadius: 5,
    fontSize: 16,
    textAlign: "center",
  },
});

export default AssessmentScreen;
