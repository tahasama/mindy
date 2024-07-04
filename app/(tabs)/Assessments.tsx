import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";

import { useNavigation } from "@react-navigation/native";
import assessment from "../../assets/images/assessment/assessment.jpg";
import { LinearGradient } from "expo-linear-gradient";

const AssessmentScreen = () => {
  const navigation = useNavigation();

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
            Embrace a consistent approach to unlock your full potential and
            enhance productivity.
          </Text>
          <Text style={styles.explanationText}>
            Discover diverse categories of activities designed for daily and
            weekly assessments.
          </Text>
          <Text style={styles.highlightText}>
            Aim to complete activities across all categories daily to maintain
            progress and achieve your goals.
          </Text>
        </View>
      </View>
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
});

export default AssessmentScreen;
