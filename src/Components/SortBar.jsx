import { useContext } from "react";
import { ForumContext } from "../Context/ForumContext";

export const SortBar = () => {
  const { dispatch } = useContext(ForumContext);
  return (
    <div>
      <h1>Sort By</h1>
      <select
        onChange={(e) => dispatch({ type: "SORT", payload: e.target.value })}
      >
        <option value="Latest">Latest</option>
        <option value="Most Upvoted">Most Upvoted</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  );
};
