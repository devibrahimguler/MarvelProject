import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import styles from './Profile.style';

import useFetch from '../../hooks/useFetch';

import Button from '../../components/Button';
import BasicCard from '../../components/card/BasicCard';

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
      <ScrollView>
        {userError ? (
          <Text>{userError}</Text>
        ) : (
          <>
            {userLoading ? (
              <ActivityIndicator size={25} />
            ) : (
              <>
                <View style={styles.inner_container}>
                  <Image
                    style={styles.back_image}
                    source={{uri: userData.backUrl}}
                  />
                  <Image
                    style={styles.image}
                    source={{uri: userData.imageUrl}}
                  />
                  <View style={styles.edit_container}>
                    <Text style={styles.username}>{userData.username}</Text>
                    <Button
                      title={'Profile Düzenle'}
                      thema={'tertiary'}
                      onPress={toEditProfile}
                    />
                  </View>
                </View>
                <View style={styles.body_container}>
                  <Text style={styles.title}>Favori karakter: </Text>
                  <View>
                    <Text style={styles.sub_title}>Karakter Adı: </Text>
                    <Text style={styles.sub_name}>
                      {userData.favorite.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.sub_title}>Karakter Açıklama: </Text>
                    <Text style={styles.sub_name}>
                      {userData.favorite.description}
                    </Text>
                  </View>
                  {userData.favorite.urls[0].url && (
                    <View>
                      <Text style={styles.sub_title}>Detay Url: </Text>
                      <Text style={styles.url}>
                        {userData.favorite.urls[0].url}
                      </Text>
                    </View>
                  )}
                  {userData.favorite.urls[1].url && (
                    <View>
                      <Text style={styles.sub_title}>Wikipedia Url: </Text>
                      <Text style={styles.url}>
                        {userData.favorite.urls[1].url}
                      </Text>
                    </View>
                  )}
                  {userData.favorite.urls[2].url && (
                    <View>
                      <Text style={styles.sub_title}>Çizgi Roman Url: </Text>
                      <Text style={styles.url}>
                        {userData.favorite.urls[2].url}
                      </Text>
                    </View>
                  )}
                  
                  
                </View>
              </>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
