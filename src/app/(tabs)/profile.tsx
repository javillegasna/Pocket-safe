import { SafeAreaView, StyleSheet, View } from "react-native";
import { Avatar, Card, Text, useTheme } from "react-native-paper";
import { UserRepository } from "@/src/adapters/db/repositories/userRepo";
import { Redirect } from "expo-router";
import { useCurrentUser } from "@/src/hooks/useCurrentUser";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Profile() {
  const userId = useCurrentUser();
  if (!userId) return <Redirect href={"/auth/login"} />;

  const userInfo = UserRepository.findUserInfoById(userId);
  if (!userInfo) return <Redirect href={"/auth/signup"} />;

  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Card
        style={{ marginTop: 4, maxHeight: 150, flex: 1, alignItems: "center" }}
      >
        <Card.Content
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Avatar.Text size={52} label={userInfo.userName.slice(0, 2)} />
          <Text variant="titleMedium"> {userInfo.userName} </Text>
          <Text variant="titleMedium">{userInfo.email}</Text>
        </Card.Content>
      </Card>

      <Text
        variant="titleLarge"
        style={{ marginTop: 20, margin: 10, fontSize: 24 }}
      >
        Configuration
      </Text>
      <Card style={{ margin: 10, padding: 8 }}>
        <Card.Content
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name="balance"
              size={24}
              color={theme.colors.secondary}
            />
            <Text style={{ marginLeft: 4, fontSize: 16 }} variant="titleMedium">
              Accounts
            </Text>
          </View>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={theme.colors.primary}
          />
        </Card.Content>
      </Card>
      <Card style={{ margin: 10, padding: 8 }}>
        <Card.Content
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name="category"
              size={24}
              color={theme.colors.secondary}
            />
            <Text style={{ marginLeft: 4, fontSize: 16 }} variant="titleMedium">
              Categories
            </Text>
          </View>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={theme.colors.primary}
          />
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
