import { createContext, useReducer, useState } from "react";
import { ForumReducer, initialState } from "../Reducer/ForumReducer";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ForumReducer, initialState);
  const [commentModal, setCommentModal] = useState(false);

  const upvotePost = (postId) => {
    const updatedPosts = state?.data?.posts?.map((post) => {
      if (post?.postId === postId)
        return { ...post, upvotes: post.upvotes + 1 };
      else return post;
    });

    const updatedData = { ...state?.data, posts: updatedPosts };
    dispatch({ type: "SET_FEED", payload: updatedData });
  };

  const downvotePost = (postId) => {
    const updatedPosts = state?.data?.posts?.map((post) => {
      if (post?.postId === postId)
        return { ...post, downvotes: post.downvotes + 1 };
      else return post;
    });

    const updatedData = { ...state?.data, posts: updatedPosts };
    dispatch({ type: "SET_FEED", payload: updatedData });
  };

  const bookmarkPost = (postId) => {
    const updatedPosts = state?.data?.posts?.map((post) => {
      if (post?.postId === postId)
        return { ...post, isBookmarked: !post?.isBookmarked };
      else return post;
    });

    const updatedData = { ...state?.data, posts: updatedPosts };
    dispatch({ type: "SET_FEED", payload: updatedData });
  };

  const sortedData = state?.data?.posts?.sort((a, b) => {
    if (state?.sort === "Latest") {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    }
    if (state?.sort === "Oldest") {
      return Date.parse(a.createdAt) - Date.parse(b.createdAt);
    }
    if (state?.sort === "Most Upvoted") {
      return b.upvotes - a.upvotes;
    }
  });

  return (
    <ForumContext.Provider
      value={{
        state,
        dispatch,
        upvotePost,
        downvotePost,
        bookmarkPost,
        commentModal,
        setCommentModal
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
