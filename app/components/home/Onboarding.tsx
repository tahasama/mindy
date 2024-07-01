import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import ProfileSetup from "../ProfileSetup";
import { Image } from "expo-image";
import FeatureHighlight2 from "../FeatureHighlight2";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useHandler,
  useSharedValue,
} from "react-native-reanimated";
import ModalScreen from "./modal";
import { useState } from "react";

const Onboarding = () => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  const navigation = useNavigation<any>();

  const [modalVisible, setModalVisible] = useState(false);

  const handleCompleteSetup = (tab: string) => {
    // Implement profile setup logic
    navigation.navigate(tab); // Redirect to the dashboard after setup
  };

  const width = useSharedValue(50);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Image
        style={styles.image}
        source={require("../../../assets/images/landing.jpg")}
        placeholder={{ blurhash }}
        contentFit="contain"
        transition={1000}
      />
      <Text style={styles.title}>Your journey to well-being starts here.</Text>
      {/* <Text style={styles.subtitle}>
        Taking care of your mental health is essential for a balanced and
        fulfilling life.
      </Text> */}

      <Text style={styles.subtitle}>
        Looking to enhance your mindfulness? or simply find a moment of peace,
        we're here to support you.
      </Text>

      <Text style={styles.subtitle}>
        Mindy offers the tools and resources to help youe every step of the way
        !
      </Text>
      {/* <Button title="Join Us" onPress={handleCompleteSetup} /> */}
      <Pressable
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
        <ModalScreen
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Pressable>
      <View style={styles.section}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/meditation.jpg")}
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
        <TouchableOpacity onPress={() => handleCompleteSetup("Activities")}>
          <Text style={styles.textStyle}>Check activities</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/mood.jpg")}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Text style={styles.featureTitle}>Personalized Insights</Text>
        <Text style={styles.subtitle}>
          Receive insights and recommendations tailored to your mental health
          journey.
        </Text>

        <TouchableOpacity onPress={() => handleCompleteSetup("Assessments")}>
          <Text style={styles.textStyle}>Take assessment</Text>
        </TouchableOpacity>

        <Text style={styles.featureTitle}>Community Support</Text>
        <Text style={styles.subtitle}>
          Connect with a community of individuals who understand and support
          your journey.
        </Text>
        <TouchableOpacity onPress={() => handleCompleteSetup("Community")}>
          <Text style={styles.textStyle}>Join Community</Text>
        </TouchableOpacity>
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
    paddingTop: 7,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 12,
    borderRadius: 8,
    // marginTop: -14,
  },
  textStyle: {
    backgroundColor: "green",
    padding: 10,
    color: "#fff",
    borderRadius: 5,
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
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
});

export default Onboarding;
