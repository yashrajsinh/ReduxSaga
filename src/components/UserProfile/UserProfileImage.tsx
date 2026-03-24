import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

export default function UserProfileImage() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkztwfFdcsPmJWS1X5gZat4L_5WXleKkCYg&s',
        }}
        style={styles.image}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
