import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import ProfileSetup from "./ProfileSetup";
import { Image } from "expo-image";

const Onboarding = () => {
  const navigation = useNavigation<any>();
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/landing.jpg")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />

      <Text style={styles.title}>Welcome to Mental Health App</Text>
      <Text style={styles.subtitle}>
        Your journey to well-being starts here.
      </Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Profile")}
      />

      <Text style={styles.title}>Track Your Mood</Text>
      <Text style={styles.subtitle}>
        Easily track your mood and monitor changes over time.
      </Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate("FeatureHighlight2")}
      />
      <ProfileSetup />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 32,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
    // height: 100,
    aspectRatio: 1,
    marginTop: 20,
  },
});
export default Onboarding;
