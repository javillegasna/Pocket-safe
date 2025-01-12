import { useTheme } from "@/src/hooks/useTheme";
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchema } from "@/src/adapters/models/auth";
import { Controller, useForm } from "react-hook-form";
import { router, Stack } from "expo-router";
import { useCurrentUser } from "@/src/hooks/useCurrentUser";;
import { UserRepository } from "@/src/adapters/db/repositories/userRepo";
import { useState } from "react";
export default function SingUpPage() {
    const [userNotFound, setUserNotFound] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const theme = useTheme();
  const onSubmit = async (data: LoginSchema) => {
    console.log(data);
    
     const result = await UserRepository.validateUser(data.email, data.password)
    
    console.log(data);
    if (result?.id) {
    console.log(result?.id);
      useCurrentUser(result?.id);
      router.push("/(tabs)");
    }
    else{
      setUserNotFound(true);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
        <View style={styles.header}>
          <Text variant="titleLarge" style={{ fontSize: 20 }}>
            Pocket Safe
          </Text>
        </View>
        {userNotFound && <Text style={styles.mainError}> Invalid Email or password </Text>}
        <View style={styles.form}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="jhon@example.com"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && <Text style={styles.textError}>{errors.email.message}</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                secureTextEntry
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && <Text style={styles.textError}>{errors.password.message}</Text>}
          <Button mode="contained" onPress={handleSubmit(onSubmit)}>
            Log in
          </Button>
        </View>
      <TouchableOpacity
        onPress={() => {
          router.replace("/auth/signup");
        }}
      >
        <Text style={styles.formFooter}>
          Don't have an account?{" "}
          <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingTop: 100,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  /** Header */
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    gap: 20,
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  textError: {
    color: "red",
  },
  mainError: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  }
});
