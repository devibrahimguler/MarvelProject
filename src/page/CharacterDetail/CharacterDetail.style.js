import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
});
