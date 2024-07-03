import {
  Text,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  Button,
  View,
} from "react-native";
import Dashboard from "../components/home/Dashboard";
import Onboarding from "../components/home/Onboarding";
import { useEffect, useRef, useState } from "react";

export default function index() {
  const isLoggedIn = false;

  return (
    <>
      <ScrollView>{isLoggedIn ? <Dashboard /> : <Onboarding />}</ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white",
  },
});
