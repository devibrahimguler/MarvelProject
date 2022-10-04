import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './Home.style';

import Button from '../../components/Button';
import useFetch from '../../hooks/useFetch';
import HomeCard from '../../components/card/HomeCard';

const Home = ({navigation}) => {
  const [selection, setSelection] = React.useState(true);

  const {
    loading: charLoading,
    error: charError,
    data: charData,
  } = useFetch('characters');

  const {
    loading: comLoading,
    error: comError,
    data: comData,
  } = useFetch('comics');
  
  const renderCharacter = ({item}) => (
    <HomeCard
      navigation={navigation}
      data={item}
      title={selection ? 'Karakter İsmi:' : 'Çizgi Roman İsmi:'}
    />
  );

  const toggleSelection = () => {
    setSelection(!selection);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <View style={styles.inner_container}>
          <Button
            style={styles.button}
            title={'Karakter'}
            thema={selection ? 'selection' : 'none_selection'}
            onPress={toggleSelection}
          />
        </View>
        <View style={styles.inner_container}>
          <Button
            style={styles.button}
            title={'Çizgi Roman'}
            thema={!selection ? 'selection' : 'none_selection'}
            onPress={toggleSelection}
          />
        </View>
      </View>
      <View style={styles.body_container}>
        <FlatList
          numColumns={2}
          data={selection ? charData : comData}
          renderItem={renderCharacter}
        />
      </View>
    </View>
  );
};

export default Home;
