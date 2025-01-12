import { useTheme } from "@/src/hooks/useTheme";
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, registerSchema } from "@/src/adapters/models/auth";
import { Controller, useForm } from "react-hook-form";
import { router, Stack } from "expo-router";
import { useCurrentUser } from "@/src/hooks/useCurrentUser";;
import { UserRepository } from "@/src/adapters/db/repositories/userRepo";

export default function SignUpPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
    userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const theme = useTheme();
  const onSubmit = async (data: RegisterSchema) => {
    console.log(data);
    
     const result = await UserRepository.createUser(
        data
     )
    
    console.log(data);
    if (result) {
      useCurrentUser(result[0].id);
      router.push("/(tabs)");
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
            Welcome to Pocket Safe
          </Text>
        </View>
        <View style={styles.form}>
        <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                label={"User Name"}
              />
            )}
            name="userName"
          />
          {errors.userName && <Text>{errors.userName.message}</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
              autoCapitalize="none"
                label={"Email"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && <Text>{errors.email.message}</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                secureTextEntry
                autoCapitalize="none"
                label={"Password"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && <Text>{errors.password.message}</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                secureTextEntry
                autoCapitalize="none"
                label={"Confirm Password"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="confirmPassword"
          />
          {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}
          <Button mode="contained" onPress={handleSubmit(onSubmit)}>
            Sign in
          </Button>
        </View>
      <TouchableOpacity
        onPress={() => {
          router.replace("/auth/login");
        }}
      >
        <Text style={styles.formFooter}>
          you have an account?{" "}
          <Text style={{ textDecorationLine: "underline" }}>Log in</Text>
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
});
