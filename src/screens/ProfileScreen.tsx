import { View, Text } from 'react-native';
import React from 'react';
import SubmitButton from '../components/SubmitButton/SubmitButton';
//components
import UserProfileImage from '../components/UserProfile/UserProfileImage';
import UserProfile from '../components/UserProfile/UserProfile';

//redux
import { useSelector, useDispatch } from 'react-redux';

import { logOutUser } from '../store/user/userAction';

export default function ProfileScreen() {
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();
  function handlePress() {
    dispatch(logOutUser());
  }
  return (
    <View style={{ flex: 1, padding: 16, alignItems: 'center' }}>
      <UserProfileImage />
      <UserProfile name={name} email="dummy@email.com" />
      <SubmitButton
        title={'Logout'}
        color="#EE4B2B"
        onPress={() => handlePress()}
      />
    </View>
  );
}
