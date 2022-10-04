const TurnBoolean = (col, data, docId) => {
  switch (col) {
    case 'fav':
      return !data.some((key) => {
        if(key.data().docId == docId){
          return true;
        }
      });

    case 'equal':
      return !data.some((key) => {
        if(key.data().docId == docId){
          return true;
        }
      });

    default:
      return false;
  }
};

export default TurnBoolean;
