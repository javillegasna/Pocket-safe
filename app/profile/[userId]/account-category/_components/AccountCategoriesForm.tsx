import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedInput } from "@/components/ThemedInput";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { StyleSheet } from "react-native";
import {
  accountCategoriesSchema,
  AccountCatSchema,
} from "@/adapters/db/schema/account";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "react-native";
type Props = {
  defaultValues: AccountCatSchema;
};

const AccountCategoriesForm = ({ defaultValues }: Props) => {

  const { control, handleSubmit } = useForm<AccountCatSchema>({
    resolver: zodResolver(accountCategoriesSchema),
    defaultValues,
  });

  const mode = useWatch({ control, name: "mode" });

  const onSubmit: SubmitHandler<AccountCatSchema> = (data) => console.log(data);
  return (
    <>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{mode === "create"? "Create": "Edit"} Account Category</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedInput control={control} name="categoryName" placeholder="Name" />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </ThemedView>
    </>
  );
};

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

export default AccountCategoriesForm;
