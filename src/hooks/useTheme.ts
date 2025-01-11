import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useColorScheme } from "react-native";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...NavigationDefaultTheme,
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
  fonts: {
    ...NavigationDefaultTheme.fonts,
    // Define all expected variants, falling back to 'regular' or another existing variant
    displayLarge: NavigationDefaultTheme.fonts.regular,
    displayMedium: NavigationDefaultTheme.fonts.regular,
    displaySmall: NavigationDefaultTheme.fonts.regular,
    headlineLarge: NavigationDefaultTheme.fonts.regular,
    headlineMedium: NavigationDefaultTheme.fonts.regular,
    headlineSmall: NavigationDefaultTheme.fonts.regular,
    titleLarge: NavigationDefaultTheme.fonts.regular,
    titleMedium: NavigationDefaultTheme.fonts.medium, // Example using medium for title variants
    titleSmall: NavigationDefaultTheme.fonts.medium,
    labelLarge: NavigationDefaultTheme.fonts.medium,
    labelMedium: NavigationDefaultTheme.fonts.medium,
    labelSmall: NavigationDefaultTheme.fonts.medium,
    bodyLarge: NavigationDefaultTheme.fonts.regular,
    bodyMedium: NavigationDefaultTheme.fonts.regular,
    bodySmall: NavigationDefaultTheme.fonts.regular,
  },
};
const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
  fonts: {
    ...NavigationDefaultTheme.fonts,
    // Define all expected variants, falling back to 'regular' or another existing variant
    displayLarge: NavigationDefaultTheme.fonts.regular,
    displayMedium: NavigationDefaultTheme.fonts.regular,
    displaySmall: NavigationDefaultTheme.fonts.regular,
    headlineLarge: NavigationDefaultTheme.fonts.regular,
    headlineMedium: NavigationDefaultTheme.fonts.regular,
    headlineSmall: NavigationDefaultTheme.fonts.regular,
    titleLarge: NavigationDefaultTheme.fonts.regular,
    titleMedium: NavigationDefaultTheme.fonts.medium, // Example using medium for title variants
    titleSmall: NavigationDefaultTheme.fonts.medium,
    labelLarge: NavigationDefaultTheme.fonts.medium,
    labelMedium: NavigationDefaultTheme.fonts.medium,
    labelSmall: NavigationDefaultTheme.fonts.medium,
    bodyLarge: NavigationDefaultTheme.fonts.regular,
    bodyMedium: NavigationDefaultTheme.fonts.regular,
    bodySmall: NavigationDefaultTheme.fonts.regular,
  },
};

export function useTheme(props: { light?: string; dark?: string } = {}) {
  const colorSchema = useColorScheme() ?? "light";
  const colorFromProps = props[colorSchema];

  const getPaperTheme = (colorSchema: string) =>
    colorSchema === "dark"
      ? CombinedDarkTheme
      : CombinedDefaultTheme;

  if (colorFromProps) {
    return getPaperTheme(colorFromProps);
  } else {
    return getPaperTheme(colorSchema);
  }
}
