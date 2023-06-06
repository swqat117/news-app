import * as types from '../constants/ActionTypes'
import { AsyncStorage } from 'react-native';

const saveAllData = async (state) => {
  try {
    await AsyncStorage.setItem('NEWS', JSON.stringify(state));
  } catch (error) {
    console.log('AsyncStorage save error: ' + error.message);
  }
}

const newsSave = (state, action) => {
  switch(action.type) {
  case types.ADD_NEWS:
    return {
      id: action.id,
      title: action.title,
      createdAt: new Date(),
      completed: false,
    };
  default:
    return state;
  }
}

const Dailynews = (state = [], action) => {
  switch(action.type) {
  case types.ADD_NEWS:
    const news = [...state, newsSave(undefined,action)];
    saveAllData(news);
    return news;
  case types.RECEIVE_DATA:
    return action.news;
  default:
    return state;
  }
}
export default Dailynews;