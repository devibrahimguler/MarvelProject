import {StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  inner_container: {
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  image: {
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 100,
  },
  car_name: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    position: "absolute",
    top: 200,
    start: 12,
  }
});

export default StyleSheet.create({
  ...base_style,
  image_comics: {
    ...base_style.image,
    borderBottomRightRadius: 300,
  },
});
