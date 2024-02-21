import { Children, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
        type :'DELETE_POST',
        payload:{
            postId,
        }
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Bengaluru",
    body: "Hii friends . I am going to work bengaluru for my work. Hope i will enjoy my day",
    reactions: 2,
    userId: "user-7",
    tags: ["work", "Bengaluru", "hardworker"],
  },
  {
    id: "2",
    title: "Going to Mumbai",
    body: "Hii friends . I am going to work bengaluru for my vacation. Hope i will enjoy my day",
    reactions: 5,
    userId: "user-12",
    tags: ["vacation", "mumbai", "enjoy"],
  },
];

export default PostListProvider;
