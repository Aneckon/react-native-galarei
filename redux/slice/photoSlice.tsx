import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    photoItem: null,
  },
  reducers: {
    setPhoto(state, action) {
      state.photoItem = action.payload;
    },
  },
});

export const { setPhoto } = photoSlice.actions;
export default photoSlice.reducer;
