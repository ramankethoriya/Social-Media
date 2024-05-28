import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post_list_store";
import WelcomeMsg from "./WelcomeMsg";
const PostList = () => {
  const { postList } = useContext(PostListData);

 

  return (
    <>
      {postList.length === 0 && <WelcomeMsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
