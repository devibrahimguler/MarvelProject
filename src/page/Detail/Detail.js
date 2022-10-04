import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './Detail.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import GenerateImageUrl from '../../utilities/GenerateImageUrl';

import useFetch from '../../hooks/useFetch';
import BasicCard from '../../components/card/BasicCard';

const Detail = ({navigation, route}) => {
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useFetch('user');

  const {data} = route.params;

  const addUserFavori = () => {
    var object = {
      backUrl: GenerateImageUrl(data),
      favorite: data,
    };

    firestore().collection('user').doc(auth().currentUser.uid).update(object);
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.inner_container}>
          <Image
            style={!data.characters ? styles.image : styles.image_comics}
            source={{uri: GenerateImageUrl(data)}}
          />
          {userError ? (
            <Text>Error</Text>
          ) : userLoading ? (
            <ActivityIndicator size={20} />
          ) : (
            !data.characters && (
              <TouchableOpacity style={styles.icon} onPress={addUserFavori}>
                {userData.favorite.id == data.id ? (
                  <Icon name="cards-heart" size={60} color={'red'} />
                ) : (
                  <Icon name="cards-heart-outline" size={60} color={'black'} />
                )}
              </TouchableOpacity>
            )
          )}
          <Text style={styles.car_name}>
            {!data.characters ? data.name : data.title}
          </Text>
        </View>
        {!data.characters ? (
          <BasicCard navigation={navigation} data={data} />
        ) : (
          <FlatListCard
            navigation={navigation}
            data={data.characters}
            title={'Çizgi Roman Karakterleri :'}
            row={'characters'}
            col={'characters'}
            desctription={'Bu Çizgi Romanda karakter bulunamadı!'}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
