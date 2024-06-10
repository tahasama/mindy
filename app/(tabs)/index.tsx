import { Text, Image, StyleSheet, Platform, ScrollView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Header from "../components/Header";
import MoodSummary from "../components/MoodSummary";
import QuickActions from "../components/QuickActions";
import RecentActivities from "../components/RecentActivities";
import DailyTips from "../components/DailyTips";
import ProgressChart from "../components/ProgressChart";
import Dashboard from "../components/Dashboard";
import Onboarding from "../components/Onboarding";

export default function HomeScreen() {
  const isLoggedIn = false;
  return <ScrollView>{isLoggedIn ? <Dashboard /> : <Onboarding />}</ScrollView>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white",
  },
});
