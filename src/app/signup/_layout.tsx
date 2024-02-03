import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function StackRoutesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="stepone" options={{ title: "Step One" }} />
      <Stack.Screen name="steptwo" options={{ title: "Step Two" }} />
      <Stack.Screen name="completed" options={{ title: "Step Two" }} />
    </Stack>
  );
}
