import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

export default function WelcomeScreen() {
  const name = useSelector(state => state.name);
  // Simple static jokes (can randomize)
  const jokes = [
    'I just got fired from the keyboard factory… they said I wasn’t putting in enough shifts.',
    'Why don’t programmers like nature? Too many bugs.',
    'I told my boss I needed a raise… he said ‘you need a chair first.’',
    'Why do Java developers wear glasses? Because they don’t C#.',
    'I tried to lose weight but it keeps finding me.',
    'Debugging: Being the detective in a crime movie where you are also the murderer.',
    'I told my phone a joke… now it won’t stop cracking up (screen cracked).',
  ];
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome 👋</Text>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.subText}>Glad to see you here!</Text>
      {/* 👇 Dad Joke Section */}
      <View style={styles.jokeContainer}>
        <Text style={styles.jokeTitle}>😂 Dad Joke of the Day</Text>
        <Text style={styles.jokeText}>{randomJoke}</Text>
      </View>
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
    marginBottom: 30,
  },

  jokeContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 6,
    width: '100%',
  },
  jokeTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  jokeText: {
    fontSize: 14,
    color: '#444',
  },
});
