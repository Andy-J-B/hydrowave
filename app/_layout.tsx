import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { View, Image, Text, StyleSheet } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              contentStyle: { justifyContent: "center" },
              headerStyle: {
                backgroundColor: "white",
              },
              headerTitle: () => (
                <View style={styles.headerContainer}>
                  <Image
                    source={require("../assets/images/home/HydrowaveLogo.png")} // Replace with your image path
                    style={styles.headerImage}
                  />
                  <Text style={styles.headerTitle}>HYDROWAVE</Text>
                </View>
              ),
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  headerTitle: {
    color: "rgb(3, 78, 142)",
    fontSize: 18,
  },
});
