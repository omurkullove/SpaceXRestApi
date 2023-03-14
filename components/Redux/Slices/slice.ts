import { IRocket } from "@/Interfaces/interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface initialStateProps {
  rockets: IRocket[];
  oneRocket: object;
}

const initialState: initialStateProps = {
  rockets: [],
  oneRocket: {},
};

const API = "https://api.spacexdata.com/v3/rockets";

export const getAllRocketAsync = createAsyncThunk(
  "getAllRocketAsync/rocket",
  async (_, { dispatch }) => {
    try {
      const res = await axios.get(API);
      const data = res.data;
      dispatch(setGetAllRocket(data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const getOneRocketAsync = createAsyncThunk(
  "getOneRocketAsync/rocket",
  async (id: string, { dispatch }) => {
    try {
      let rocket = await axios<IRocket>(`${API}/${id}`);
      dispatch(setGetOneRocket(rocket.data));
    } catch (err) {
      console.log(err);
    }
  }
);

const RocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    setGetAllRocket: (state, action: PayloadAction<IRocket[]>) => {
      state.rockets = action.payload;
    },
    setGetOneRocket: (state, action: PayloadAction<IRocket>) => {
      state.oneRocket = action.payload;
    },
  },
});

export const { setGetAllRocket, setGetOneRocket } = RocketSlice.actions;
export default RocketSlice.reducer;
