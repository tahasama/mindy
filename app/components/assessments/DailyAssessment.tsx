import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
// import { RadarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const DailyAsessment = () => {
  const [mood, setMood] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [focus, setFocus] = useState(5);
  const [sleep, setSleep] = useState(5);
  const [stress, setStress] = useState<any>(5);
  const [social, setSocial] = useState(5);

  const data = {
    labels: ["Mood", "Energy", "Focus", "Sleep", "Stress", "Social"],
    datasets: [
      {
        data: [mood, energy, focus, sleep, stress, social],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  const submitAssessment = () => {
    console.log("Assessment submitted:", {
      mood,
      energy,
      focus,
      sleep,
      stress,
      social,
    });
    // Add further submission logic here (e.g., API call)
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    color: "#666",
  },
  assessmentContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    color: "#333",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  chart: {
    marginVertical: 16,
  },
  button: {
    backgroundColor: "#1FB28A",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DailyAsessment;
