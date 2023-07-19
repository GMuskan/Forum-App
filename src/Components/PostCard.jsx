import { useContext } from "react";
import { ForumContext } from "../Context/ForumContext";
import { useNavigate } from "react-router-dom";

import "../styles.css";
import { getPostDate } from "../utils";
export const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const {
    upvotePost,
    downvotePost,
    bookmarkPost,
    setCommentModal
  } = useContext(ForumContext);

  return (
    <div className="post-card">
      <p>
        Posted By <span className="user-name">@{post?.username}</span> .{" "}
        {getPostDate(post?.createdAt)}
      </p>
      <p>{post?.post}</p>
      {post.tags.map((item) => (
        <button className="tag" key={item}>
          {item}
        </button>
      ))}
      <p>{post?.postDescription}</p>
      <div className="vote-section">
        <i
          className="fa fa-caret-up"
          aria-hidden="true"
          onClick={() => upvotePost(post?.postId)}
        ></i>
        {post?.upvotes}
        <i
          className="fa fa-caret-down"
          aria-hidden="true"
          onClick={() => downvotePost(post?.postId)}
        ></i>
        {post?.downvotes}
        {post?.downvotes > post?.upvotes && (
          <div className="total-votes">
            Total Votes = {post?.upvotes - post?.downvotes}
          </div>
        )}
      </div>
      <div className="action-buttons">
        <i
          className="fa fa-comment-o"
          aria-hidden="true"
          onClick={() => {
            setCommentModal(true);
            navigate(`/${post?.postId}`);
          }}
        ></i>
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        <i
          className="fa fa-bookmark"
          aria-hidden="true"
          style={{ color: post?.isBookmarked ? "green" : "black" }}
          onClick={() => bookmarkPost(post?.postId)}
        ></i>
      </div>
    </div>
  );
};
