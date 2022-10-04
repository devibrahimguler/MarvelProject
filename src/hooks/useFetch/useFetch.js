import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import md5 from 'md5';

const useFetch = (col, comsId = '') => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetch = () => {
    const id = auth().currentUser.uid;

    const publickey = 'ef8c3b9f78150e65a7f90109af6fa7b3';
    const privatekey = '1c7cfe99bcb3eb27c8d2b766c3773e33bb5ef915';
    const baseUrl = 'https://gateway.marvel.com/v1/public/';
    const ts = new Date().getTime();
    const stringToHash = ts + privatekey + publickey;
    const hash = md5(stringToHash);

    const url =
      baseUrl +
      col +
      comsId +
      '?limit=50&ts=' +
      ts +
      '&apikey=' +
      publickey +
      '&hash=' +
      hash;

    switch (col) {
      case 'user':
        firestore()
          .collection('user')
          .doc(auth().currentUser.uid)
          .get()
          .then(responseData => {
            if (responseData.data()) {
              setData(responseData.data());
              setLoading(false);
            }
          })
          .catch(err => {
            setError(err.code);
            setLoading(false);
          });
        break;

      case 'characters':
        axios
          .get(url)
          .then(responseData => {
            const myData = responseData.data.data.results;
            setData(myData);
            if (myData) {
              setLoading(false);
            }
          })
          .catch(err => {
            console.log(err);
          });
        break;

      case 'comics':
        axios
          .get(url)
          .then(responseData => {
            const myData = responseData.data.data.results;
            setData(myData);
            if (myData) {
              setLoading(false);
            }
          })
          .catch(err => {
            console.log(err);
          });
        break;
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {loading, error, data};
};

export default useFetch;
