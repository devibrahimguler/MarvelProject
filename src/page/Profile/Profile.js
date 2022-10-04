import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './Profile.style';

import useFetch from '../../hooks/useFetch';

import Button from '../../components/Button';

const Profile = ({navigation}) => {
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useFetch('user');

  const toEditProfile = () => {
    navigation.navigate('EditProfilePage', userData);
  };

  return (
    <SafeAreaView style={styles.container}>
      {userError ? (
        <Text>{userError}</Text>
      ) : (
        <>
          {userLoading ? (
            <ActivityIndicator size={25} />
          ) : (
            <View style={styles.inner_container}>
              <Image style={styles.back_image} source={{uri: userData.imageUrl}} />
              <Image style={styles.image} source={{uri: userData.imageUrl}} />
              <View>
                <Text style={styles.username}>{userData.username}</Text>
                <Button title={"Profile Düzenle"} thema={"tertiary"} onPress={toEditProfile} />
              </View>
            </View>
          )}
        </>
      )}
      <View style={styles.body_container}>

      </View>
    </SafeAreaView>
  );
};

export default Profile;
