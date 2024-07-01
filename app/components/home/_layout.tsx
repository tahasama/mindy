// app/_layout.js
import { View } from "react-native";
import { Slot } from "expo-router";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
      <Slot />
    </View>
  );
}
