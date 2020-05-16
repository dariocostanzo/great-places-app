export const ADD_PLACE = 'ADD_PLACE';
import * as FilySystem from 'expo-file-system';

export const addPlace = (title, image) => {
  return async dispatch => {
    const fileName = image.split('/').pop();
    const newPath = FilySystem.documentDirectory + fileName;

    try {
      FilySystem.moveAsync({
        from: image,
        to: newPath
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
    dispatch({ type: ADD_PLACE, placeData: { title: title, image: newPath } });
  };
};
