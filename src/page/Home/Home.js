import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './Home.style';

import Button from '../../components/Button';
import useFetch from '../../hooks/useFetch';
import ComicCard from '../../components/card/ComicCard';
import CharacterCard from '../../components/card/CharacterCard';

const Home = () => {
  const [selection, setSelection] = React.useState(true);
  const {
    loading: charLoading,
    error: charError,
    data: charData,
  } = useFetch('character');

  const {
    loading: comLoading,
    error: comError,
    data: comData,
  } = useFetch('comics');

  const renderComic = ({item}) => <ComicCard data={item} />;
  const renderCharacter = ({item}) => <CharacterCard data={item} />;

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
        {selection ? (
          <FlatList numColumns={2} data={charData} renderItem={renderCharacter} />
        ) : (
          <FlatList numColumns={2} data={comData} renderItem={renderComic} />
        )}
      </View>
    </View>
  );
};

export default Home;
