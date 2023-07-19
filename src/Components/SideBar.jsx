import "../styles.css";

export const SideBar = ({ data }) => {
  return (
    <div className="side-bar">
      <i className="fa fa-home" aria-hidden="true"></i>Home
      <i className="fa fa-rocket" aria-hidden="true"></i>Explore
      <i className="fa fa-bookmark-o" aria-hidden="true"></i>Bookmarks
      <i className="fa fa-user" aria-hidden="true"></i>Profile
      <div className="user-profile">
        <p className="user">{data?.name}</p>
        <p className="user-name">@{data?.username}</p>
      </div>
    </div>
  );
};
