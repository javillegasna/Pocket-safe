import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller, Control, FieldValues, Path} from 'react-hook-form';
type ControlledInputProps<T extends FieldValues>  = {
    control: Control<T>;
    name: Path<T>;
  } & React.ComponentProps<typeof TextInput>;
  
export const ThemedInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
  secureTextEntry,
}: ControlledInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});