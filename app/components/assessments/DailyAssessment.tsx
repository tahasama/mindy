import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ModalAssessment from "./modal";

const AssessmentScreen = ({ modalVisible, setModalVisible }: any) => {
  const [mood, setMood] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [focus, setFocus] = useState(5);
  const [sleep, setSleep] = useState(5);
  const [stress, setStress] = useState(5);
  const [social, setSocial] = useState(5);

  const submitAssessment = () => {
    // Implement the logic to handle assessment submission
    console.log("Assessment submitted");
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Open Assessment</Text>
      </TouchableOpacity>
      <ModalAssessment
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Daily Self-Assessment</Text>
          <Text style={styles.description}>
            Take a few moments to assess your current state across various
            dimensions. This helps us to understand your overall well-being.
          </Text>

          <View style={styles.assessmentContainer}>
            <Text style={styles.label}>Mood: {mood}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={mood}
              onValueChange={setMood}
              minimumTrackTintColor="#1FB28A"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#1FB28A"
            />

            <Text style={styles.label}>Energy: {energy}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={energy}
              onValueChange={setEnergy}
              minimumTrackTintColor="#1FB28A"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#1FB28A"
            />

            <Text style={styles.label}>Focus: {focus}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={focus}
              onValueChange={setFocus}
              minimumTrackTintColor="#1FB28A"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#1FB28A"
            />

            <Text style={styles.label}>Sleep: {sleep}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={sleep}
              onValueChange={setSleep}
              minimumTrackTintColor="#1FB28A"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#1FB28A"
            />

            <Text style={styles.label}>Stress: {stress}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={stress}
              onValueChange={setStress}
              minimumTrackTintColor="#1FB28A"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#1FB28A"
            />

            <Text style={styles.label}>Social: {social}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={social}
              onValueChange={setSocial}
              minimumTrackTintColor="#1FB28A"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#1FB28A"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={submitAssessment}>
            <Text style={styles.buttonText}>Submit Assessment</Text>
          </TouchableOpacity>
        </ScrollView>
      </ModalAssessment>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // padding: 16,
    // backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  assessmentContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  slider: {
    width: "100%",
    height: 30,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#1FB28A",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AssessmentScreen;
