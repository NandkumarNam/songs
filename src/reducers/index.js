import {combineReducers} from 'redux';

//Reducer

const songReducer = () => {
  return [
    {title:'Dil chahata hai', duration: '4:23'},
    {title:'Tu tu hai wahi', duration: '4:40'},
    {title:'Aaila ek ladki aayi', duration: '3:56'},
    {title:'Kabootar ja ja', duration: '5:12'},
    {title:'Dil garden garden', duration: '2:56'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SELECT_SONG'){
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});