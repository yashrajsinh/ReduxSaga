import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

//assign type of props
type InputFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secure?: boolean;
};

{
  /* === InputField.tsx
         This component is responsible for rendeirng inputfield takes 
         1. value (value of the field)
         2. onChangeText (Change while text changes)
         3. placeholder
         4. secure (for password entry)
          === */
}
export default function InputField({
  value,
  onChangeText,
  placeholder,
  secure = false,
}: InputFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secure}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10, // spacing between fields
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
