import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Alert} from 'react-native';
import styles from './EditProfile.style';
import {Formik} from 'formik';
import {launchImageLibrary} from 'react-native-image-picker';

import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import Button from '../../components/Button';
import Input from '../../components/Input';

const initialUserValue = {
  username: '',
};

const EditProfile = ({navigation, route}) => {
  const userData = route.params;

  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(userData.imageUrl);

  const handleSelectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      presentationStyle: 'formSheet',
      maxWidth: 300,
      maxHeight: 300,
    });
    if (!result.didCancel) {
      const pathToFile = result.assets[0].uri;
      setImgUrl(pathToFile);
    }
  };
  const toLogOut = async () => {
    await auth()
      .signOut()
      navigation.navigate('EntryScreen');
      navigation.goBack();
  };

  const addImage = async (username, pathToFile) => {
    const reference = storage().ref(`user/${auth().currentUser.uid}.png`);

    await reference.putFile(pathToFile);

    const url = await storage()
      .ref(`user/${auth().currentUser.uid}.png`)
      .getDownloadURL();
    var object = {
      username: username,
      imageUrl: url,
    };
    firestore().collection('user').doc(auth().currentUser.uid).update(object);
    setImgUrl(url);
    setLoading(false);
  };

  const toBack = () => {
    navigation.goBack();
  };

  const editProfile = values => {
    setLoading(true);
    if (values.username && imgUrl != userData.imageUrl) {
      addImage(values.username, imgUrl);
      setLoading(false);
      toBack();
    } else if (imgUrl != userData.imageUrl) {
      addImage(userData.username, imgUrl);
      setLoading(false);
      toBack();
    } else if (values.username) {
      var object = {
        username: values.username,
      };
      firestore().collection('user').doc(auth().currentUser.uid).update(object);
      setLoading(false);
      toBack();
    }
  };

  return (
    <View style={styles.model}>
      <TouchableOpacity onPress={handleSelectImage}>
        <Image style={styles.image} source={{uri: imgUrl}} />
      </TouchableOpacity>
      <Formik
        style={styles.model}
        initialValues={initialUserValue}
        onSubmit={editProfile}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              name={'account'}
              value={values.username}
              onChangeText={handleChange('username')}
              placeholder={userData.username}
            />
            <Button
              title={'Kaydet'}
              onPress={handleSubmit}
              animating={loading}
            />
          </>
        )}
      </Formik>
      <Button title={'Vazgeç'} onPress={toBack} animating={loading} />
      <Button title={'Çıkış Yap'} onPress={toLogOut} animating={loading} />
    </View>
  );
};

export default EditProfile;
