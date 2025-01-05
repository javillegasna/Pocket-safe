import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import AccountCategoriesForm from "./_components/AccountCategoriesForm";
import { useLocalSearchParams } from "expo-router";

export default function CreateAccountCategory() {
  const { userId } = useLocalSearchParams<{ userId: string }>();
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
      <AccountCategoriesForm
				defaultValues={{
					mode: "create",
					categoryName: "",
          userId: Number(userId),
				}}
      />
        
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
});
