import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface ActivesState {
  id: number;
  title: string;
  isChecked: boolean;
  bgColor: string;
}

interface IAddPayLoad {
  title: string;
  bgColor: string;
}

interface IChangePayLoad {
  id: number;
  checked: boolean;
}

const initialState: { data: ActivesState[] } = {
  data: [],
};

export const ActivesSlice = createSlice({
  name: "actives",
  initialState,
  reducers: {
    addActive: (state, action: PayloadAction<IAddPayLoad>) => {
      const idRandom = Date.now();
      const newActive = {
        id: idRandom,
        title: action.payload.title,
        isChecked: false,
        bgColor: action.payload.bgColor,
      };
      state.data = [...state.data, newActive];
    },
    changeChecked: (state, action: PayloadAction<IChangePayLoad>) => {
      const updatedActive = state.data.map((active) =>
        active.id === action.payload.id
          ? {
              id: active.id,
              title: active.title,
              isChecked: action.payload.checked,
              bgColor: active.bgColor,
            }
          : active
      );

      state.data = updatedActive;
    },
  },
});

export const { addActive, changeChecked } = ActivesSlice.actions;
export const selectActives = (state: RootState) => state.actives.data;
export default ActivesSlice;
