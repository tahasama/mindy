import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigation = useNavigation<any>();
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, height],
        ["#f5f5f5", "#e0f7fa"]
      ),
    };
  });

  const handleCompleteSetup = () => {
    navigation.navigate("Dashboard"); // Redirect to the dashboard after setup
  };

  return (
    <Animated.ScrollView
      contentContainerStyle={styles.container}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      <Animated.View style={[styles.section, backgroundColorStyle]}>
        <Image
          style={styles.image}
          source={require("../../assets/images/landing.jpg")}
          // placeholder={{ blurhash: 'LKO2?U%2Tw=w]~RBVZRi};RPxuwH' }}
          // contentFit="contain"
          // transition={1000}
        />
        <Text style={styles.title}>
          Your journey to well-being starts here.
        </Text>
        <Text style={styles.subtitle}>
          Taking care of your mental health is essential for a balanced and
          fulfilling life.
        </Text>
        <Text style={styles.subtitle}>
          Looking to enhance your mindfulness? Or simply find a moment of peace,
          we're here to support you.
        </Text>
        <Text style={styles.subtitle}>
          Mindy offers the tools and resources to help you every step of the
          way!
        </Text>
      </Animated.View>

      <Animated.View style={[styles.section, backgroundColorStyle]}>
        <Image
          style={styles.image}
          source={require("../../assets/images/meditation.jpg")}
          // placeholder={{ blurhash: 'LKO2?U%2Tw=w]~RBVZRi};RPxuwH' }}
          // contentFit="contain"
          // transition={1000}
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
      </Animated.View>

      <Animated.View style={[styles.section, backgroundColorStyle]}>
        <Image
          style={styles.image}
          source={require("../../assets/images/mood.jpg")}
          // placeholder={{ blurhash: 'LKO2?U%2Tw=w]~RBVZRi};RPxuwH' }}
          // contentFit="contain"
          // transition={1000}
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
      </Animated.View>

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
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  section: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: "100%",
    height: height / 3,
    marginBottom: 16,
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
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
    textAlign: "center",
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

export default OnboardingScreen;
