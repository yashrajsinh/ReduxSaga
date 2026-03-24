import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

export default function WelcomeScreen() {
  const name = useSelector(state => state.name);
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome 👋</Text>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.subText}>Glad to see you here!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
  },
  nameText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginVertical: 10,
  },
  subText: {
    fontSize: 16,
    color: '#666',
  },
});
