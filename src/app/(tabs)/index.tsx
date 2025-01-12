import { ScrollView, StyleSheet } from "react-native";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { UserRepository } from "@/src/adapters/db/repositories/userRepo";
import { View } from "@/src/ui/ThemedView";
import { useTheme } from "@/src/hooks/useTheme";
import { Card, Text } from "react-native-paper";
import { Link, Redirect } from "expo-router";
import { IconSymbol } from "@/src/ui/IconSymbol";
import { useCurrentUser } from "@/src/hooks/useCurrentUser";

export default function ProfileScreen() {
  const userId = useCurrentUser()
  if (!userId) {
    return <Redirect href="/auth/login" />;
  }
  const { data } = useLiveQuery(UserRepository.findUserById(userId));
  const theme = useTheme();
  if (!data) {
    return (
      <View style={styles.container}>
        <Text variant="titleLarge"> Customer not found</Text>   
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text variant="titleLarge" style={{fontSize:20}}>My Accounts</Text>
        <Link
            href={{
              pathname: "/(tabs)/accounts",
            }}
          >
            <Text variant="titleMedium" style={{color:theme.colors.primary}}>All Accounts </Text> 
          </Link>
      </View>
      <ScrollView horizontal overScrollMode="auto" style={{ maxHeight:170, overflow:"hidden"}}>
        <Card style={{margin:10, width:250, height:150}}>
          <Card.Content>
            <Text variant="titleMedium">Name: </Text>
            <Text variant="titleMedium">Email: {data.email}</Text>
            <Text variant="titleMedium">Phone: </Text>
          </Card.Content>
        </Card>
        <Card style={{margin:10, width:250, height:150}}>
          <Card.Content>
            <Text variant="titleMedium">Name: </Text>
            <Text variant="titleMedium">Email: {data.email}</Text>
            <Text variant="titleMedium">Phone: </Text>
          </Card.Content>
        </Card>
        <Card style={{margin:10, width:250, height:150}}>
          <Card.Content>
            <Text variant="titleMedium">Name: </Text>
            <Text variant="titleMedium">Email: {data.email}</Text>
            <Text variant="titleMedium">Phone: </Text>
          </Card.Content>
        </Card>
      </ScrollView>
      <View style={styles.content}>
        <Text variant="titleLarge" style={{fontSize:20}}>Actions</Text>
      </View>
      <View style={styles.grid}>
        <Card style={styles.gridCard}>
          <Card.Content>
            <IconSymbol size={50} name="house.fill" color={theme.colors.primary} />
            <Text variant="titleMedium">Home</Text>
          </Card.Content>
        </Card>
        <Card style={styles.gridCard}>
          <Card.Content>
            <IconSymbol size={50} name="house.fill" color={theme.colors.primary} />
            <Text variant="titleMedium">Home</Text>
          </Card.Content>
        </Card>
        <Card style={styles.gridCard}>
          <Card.Content>
            <IconSymbol size={50} name="house.fill" color={theme.colors.primary} />
            <Text variant="titleMedium">Home</Text>
          </Card.Content>
        </Card>
        <Card style={styles.gridCard}>
          <Card.Content>
            <IconSymbol size={50} name="house.fill" color={theme.colors.primary} />
            <Text variant="titleMedium">Home</Text>
          </Card.Content>
        </Card>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 20,
    paddingTop: 5,
    overflow: "hidden",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  gridCard: {
    width: "30%",
    margin: 5,
  }
});
