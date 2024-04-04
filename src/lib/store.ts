import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import activesSlice from "./features/actives/activesSlice";

export const store = configureStore({
  reducer: {
    [activesSlice.reducerPath]: activesSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
