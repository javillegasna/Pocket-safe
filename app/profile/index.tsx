import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { UserRepository } from "@/adapters/db/repositories/userRepo";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";

export default function ProfileScreen() {
  const { data } = useLiveQuery(UserRepository.findUserById(1));
  if (!data) {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <IconSymbol
            size={310}
            color="#808080"
            name="person.fill"
            style={styles.headerImage}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">User Not Found!</ThemedText>
          <HelloWave />
        </ThemedView>
      </ParallaxScrollView>
    );
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="person.fill"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hi {data?.userName}!</ThemedText>
        <HelloWave />
      </ThemedView>
      <Collapsible title="Check you info">
        <ThemedText>
          Email: <ThemedText type="defaultSemiBold">{data?.email}</ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Check categories">
        <ThemedText>
          Account types:{" "}
          {data.accountCategories.map((category) => (
            <ThemedText type="defaultSemiBold" key={category.id}>
              {category.categoryName}
            </ThemedText>
          ))}
        </ThemedText>
        <ThemedText>
          <Link
            href={{
              pathname: "/profile/[userId]/account-category",
              params: { userId: 1 },
            }}
          >
            Create categories
          </Link>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Check Transaction categories">
        <ThemedText>
          Transaction types:{" "}
          {data.transactionCategories.map((transactionCategory) => (
            <ThemedText type="defaultSemiBold" key={transactionCategory.id}>
              {transactionCategory.categoryName}
            </ThemedText>
          ))}
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
