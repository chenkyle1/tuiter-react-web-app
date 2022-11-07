import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "https://imgs.search.brave.com/bEt8pZy-hJFXXBPd8Bur6O9iVHkuslhQ2czHCy5qYOA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL25hc2EtbG9n/by1wbmctbmFzYS1s/b2dvLTE2NjQucG5n",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
  deleteTuit(state, action) {
   const index = state
       .findIndex(tuit =>
           tuit._id === action.payload);
   state.splice(index, 1);
  },

  createTuit(state, action) {
   state.unshift({
    ...action.payload,
    ...templateTuit,
    _id: (new Date()).getTime(),
   })
  }
 }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;