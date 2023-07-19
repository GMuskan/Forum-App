import { useContext } from "react";
import { PostCard } from "../Components/PostCard";
import { SideBar } from "../Components/SideBar";
import { SortBar } from "../Components/SortBar";
import { ForumContext } from "../Context/ForumContext";
import "../styles.css";
export const Home = () => {
  const { state } = useContext(ForumContext);
  return (
    <div className="home-page">
      <div>
        <SideBar data={state?.data} />
      </div>
      <div>
        <h1>My Forum</h1>
        <p>{state?.sort} Posts</p>
        {state?.data?.posts?.map((post) => (
          <PostCard key={post?.postId} post={post} />
        ))}
      </div>
      <div>
        <SortBar />
      </div>
    </div>
  );
};
