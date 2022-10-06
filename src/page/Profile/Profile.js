import React, {useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  ActivityIndicator,
  ScrollView,
  Linking,
  Alert,
  TouchableOpacity,
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

  const toWebUrl = async url => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Hata', 'Web adresine ulaşılamadı!');
    }
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
                  { userData.favorite.description &&
                    <View>
                    <Text style={styles.sub_title}>Karakter Açıklama: </Text>
                    <Text style={styles.sub_name}>
                      {userData.favorite.description}
                    </Text>
                  </View>
                  }
                  {userData.favorite.urls[0].url && (
                    <TouchableOpacity
                      onPress={() => toWebUrl(userData.favorite.urls[0].url)}>
                      <Text style={styles.url}>Karakter Detay Link</Text>
                    </TouchableOpacity>
                  )}
                  {userData.favorite.urls[1].url && (
                    <TouchableOpacity
                      onPress={() => toWebUrl(userData.favorite.urls[1].url)}>
                      <Text style={styles.url}>Wikipedia Link</Text>
                    </TouchableOpacity>
                  )}
                  {userData.favorite.urls[2].url && (
                    <TouchableOpacity
                      onPress={() => toWebUrl(userData.favorite.urls[2].url)}>
                      <Text style={styles.url}>Çizgi Roman Link</Text>
                    </TouchableOpacity>
                  )}
                  <BasicCard navigation={navigation} data={userData.favorite} />
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
