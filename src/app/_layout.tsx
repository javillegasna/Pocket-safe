import { Text, View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { db, expodb } from "@/src/adapters/db";
import migrations from "@/src/adapters/db/migrations/migrations";
import { useTheme } from "@/src/hooks/useTheme";
import { PaperProvider, ThemeProvider } from "react-native-paper";

export default function RootLayout() {
  const { error } = useMigrations(db, migrations);
  useDrizzleStudio(expodb);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }
  const paperTheme = useTheme();
  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider theme={paperTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}
