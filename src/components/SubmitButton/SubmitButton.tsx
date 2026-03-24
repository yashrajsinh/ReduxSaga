import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
//props types
type SubmitButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
};
{
  /* === SubmitButton.tsx
         This component is responsible for rendeirng button that takes 
         1. title (title of button)
         2. onPress 
         3. color (based on type assign color)
          === */
}
export default function SubmitButton({
  title,
  onPress,
  color = '#007BFF',
}: SubmitButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
