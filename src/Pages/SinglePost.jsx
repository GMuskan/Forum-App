import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostCard } from "../Components/PostCard";
import { SideBar } from "../Components/SideBar";
import { ForumContext } from "../Context/ForumContext";
import { useNavigate } from "react-router-dom";
import "../styles.css";
export const SinglePost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { state, commentModal } = useContext(ForumContext);
  const post = state?.data?.posts?.find((post) => post?.postId === postId);
  return (
    <div className="single-post-view">
      <div>
        <SideBar data={state?.data} />
      </div>
      <div className="single-post-card">
        <div className="single-post-card-header">
          <i
            class="fa fa-arrow-left"
            aria-hidden="true"
            onClick={() => navigate("/")}
          ></i>
        </div>
        <PostCard post={post} />
        <div className="comment-section">
          {commentModal && post.comments?.length ? (
            <div>
              <h3>Comments</h3>
              {post.comments.map((comment) => (
                <div key={comment.commentId}>
                  <div className="comment-user-details">
                    <p className="comment-user-name">{comment?.name}</p>
                    <p className="comment-user-username">@{comment.username}</p>
                  </div>
                  <p>
                    Replying to{" "}
                    <span className="replying-to-user-detail">
                      @{post?.username}
                    </span>
                  </p>
                  <p>{comment?.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h3>Comments</h3>
              <p>No Comments</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
