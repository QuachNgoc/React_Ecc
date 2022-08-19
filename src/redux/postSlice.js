import { createSlice } from "@reduxjs/toolkit";
import { posts } from "../config/getAPI";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    data: posts,
  },
  reducers: {
    getData: () => {},
  },
});

export const { getData } = postSlice.actions;

export default postSlice.reducer;
