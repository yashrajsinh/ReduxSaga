import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';

//InputText component
import InputField from '../components/InputField/InputField';

//Log in Button
import SubmitButton from '../components/SubmitButton/SubmitButton';
//Redux
import { useDispatch } from 'react-redux';

//action
import { setUserName } from '../store/userAction';

export default function LogInScreen() {
  //useState vars to access data temp
  const [userName, setUser] = useState('');
  const [password, setPassword] = useState('');
  //Dispatch redux
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUserName(userName));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oops! I don’t see anything… 😅</Text>

      <Image
        source={{
          uri: 'https://media.tenor.com/nC4k9qCO4s4AAAAM/embarrassed.gif',
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <InputField
        placeholder="Username"
        value={userName}
        onChangeText={setUser}
      />
      <InputField
        placeholder="Password"
        secure={true}
        value={password}
        onChangeText={setPassword}
      />
      <SubmitButton title="Log in" onPress={() => handleClick()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // center vertically
    paddingHorizontal: 20, //left & right spacing
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center', // center horizontally
    marginBottom: 20,
  },
});
