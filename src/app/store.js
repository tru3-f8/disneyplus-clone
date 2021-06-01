import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import movieReducer from '../features/movie/movieSlice';
import headerReducer from '../features/header/headerSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    header: headerReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
