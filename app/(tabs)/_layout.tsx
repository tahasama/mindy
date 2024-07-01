import { Stack, Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Activities"
        options={{
          title: "Activities",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="activity" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Community"
        options={{
          title: "Community",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={"users"} size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Assessments"
        options={{
          title: "Assessments",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="task" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={"user-circle-o"} size={18} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
