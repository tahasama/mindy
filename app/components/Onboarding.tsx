import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import ProfileSetup from "./ProfileSetup";
import { Image } from "expo-image";
import FeatureHighlight2 from "./FeatureHighlight2";

const Onboarding = () => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  const navigation = useNavigation<any>();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleCompleteSetup = () => {
    // Implement profile setup logic
    navigation.navigate("Dashboard"); // Redirect to the dashboard after setup
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/landing.jpg")}
        placeholder={{ blurhash }}
        contentFit="contain"
        transition={1000}
      />

      <Text style={styles.title}>Your journey to well-being starts here.</Text>
      <Text style={styles.subtitle}>
        Taking care of your mental health is essential for a balanced and
        fulfilling life.
      </Text>

      <Text style={styles.subtitle}>
        Looking to enhance your mindfulness? or simply find a moment of peace,
        we're here to support you.
      </Text>

      <Text style={styles.subtitle}>
        Mindy offers the tools and resources to help youe every step of the way
        !
      </Text>

      <View style={styles.section}>
        <Image
          style={styles.image}
          source={require("../../assets/images/meditation.jpg")}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Text style={styles.featureTitle}>Track Your Mood</Text>
        <Text style={styles.subtitle}>
          Easily track your mood and monitor changes over time.
        </Text>
        <Text style={styles.featureTitle}>Guided Meditations</Text>
        <Text style={styles.subtitle}>
          Access a variety of guided meditations to help you relax and
          de-stress.
        </Text>
      </View>

      <View style={styles.section}>
        <Image
          style={styles.image}
          source={require("../../assets/images/mood.jpg")}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Text style={styles.featureTitle}>Personalized Insights</Text>
        <Text style={styles.subtitle}>
          Receive insights and recommendations tailored to your mental health
          journey.
        </Text>
        <Text style={styles.featureTitle}>Community Support</Text>
        <Text style={styles.subtitle}>
          Connect with a community of individuals who understand and support
          your journey.
        </Text>
      </View>

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    // padding: 16,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
    textAlign: "center",
  },
  section: {
    marginBottom: 32,
    width: "100%",
    alignItems: "center",
  },
  benefit: {
    fontSize: 16,
    textAlign: "left",
    marginVertical: 4,
    paddingHorizontal: 16,
  },
  testimonial: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  profileSetup: {
    width: "100%",
    alignItems: "center",
    marginTop: 32,
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
});

export default Onboarding;
