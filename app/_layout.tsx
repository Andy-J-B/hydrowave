import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function CustomHeader() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.customHeader}>
        <Image
          source={require("../assets/images/home/HydrowaveLogo.png")}
          style={styles.headerImage}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>HYDROWAVE</Text>
      </View>
    </SafeAreaView>
  );
}

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
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              header: () => <CustomHeader />, // Custom header component
            }}
          />

          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
  },
  customHeader: {
    height: 50, // Custom header height
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  headerTitle: {
    color: "rgb(3, 78, 142)",
    fontSize: 20,
  },
});
