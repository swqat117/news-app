import * as types from '../constants/ActionTypes';
import { AsyncStorage } from 'react-native';
import news from "../api/getNews";


export const addNews = (title) => {
  return {
    type: types.ADD_NEWS,
    id: Date.now(),
    title
  };
};

export const receiveData = (news) => {
  return {
    type: types.RECEIVE_DATA,
    news: news || [],
  }
}

export const fetchAllData = () => {
  return dispatch => {
    return AsyncStorage.getItem('NEWS')
      .then((newsResponse) => {
          if(newsResponse){
              dispatch(receiveData(JSON.parse(newsResponse)))
          }
          else{
             news.getNews().then((res) =>{
                storeNews(res.data.articles)
                dispatch(receiveData(res.data.articles))
            });
          } 
      })
  }
}

export const fetchNewData = () => {
    return dispatch => {
        console.log('hit from api')

        return news.getNews().then((res) =>{
            console.log('hit from api')
            storeNews(res.data.articles)
            dispatch(receiveData(res.data.articles))
        });
    }
  }

const storeNews = async (value) => {
    try {
      await AsyncStorage.setItem("NEWS", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };