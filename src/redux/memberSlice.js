import { createSlice } from "@reduxjs/toolkit";
import { member } from "../config/getAPI";

const memberSlice = createSlice({
  name: "member",
  initialState: {
    data: member,
  },
  reducers: {
    getMember: () => {},
  },
});

export const { getMember } = memberSlice.actions;

export default memberSlice.reducer;
