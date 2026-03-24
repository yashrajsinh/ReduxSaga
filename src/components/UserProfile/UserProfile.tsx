import { Text, StyleSheet, View } from 'react-native';
import React from 'react';

type UserInfoProps = {
  name: string;
  email: string;
};

export default function UserProfile({ name, email }: UserInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
});
