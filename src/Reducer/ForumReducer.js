import { forumData } from "../data";

export const initialState = {
  data: forumData,
  sort: "Latest"
};

export const ForumReducer = (state, action) => {
  switch (action.type) {
    case "SET_FEED":
      return { ...state, data: action.payload };
    case "SORT":
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};
