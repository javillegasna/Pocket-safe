import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { useTheme } from '@/src/hooks/useTheme';
import BlurTabBarBackground from '@/src/ui/TabBarBackground';
import { IconSymbol } from '@/src/ui/IconSymbol';

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarBackground: BlurTabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: theme.colors.elevation.level2,
            borderColor: theme.colors.border,
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="house.fill" color={color} />,
          tabBarStyle:{
            backgroundColor: theme.colors.elevation.level1,
          }
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: 'Accounts',
          headerStyle: {
            backgroundColor: theme.colors.elevation.level2,
            borderColor: theme.colors.border,
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="person.fill" color={color} />,
          tabBarStyle:{
            backgroundColor: theme.colors.elevation.level1,
          }
        }}
      />
    </Tabs>
  );
}
