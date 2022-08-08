import axios from "axios";
import *as Types from '../types';

const API_KEY = 'ab81beb5c4441fdabf9fcabfd8dcd0fb';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNetflixOriginals = () => async dispatch =>{
    try{
      const result = await axios.get(
        `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks = 213`
      );
      dispatch({type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results});
    } catch(error){
        console.log('Get Netflix Api error: ', error);
    }
}