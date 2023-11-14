import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts/postsAction";
import { PostItem } from "./PostItem";

export const PostsList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    dispatch(getPosts(buttonType));
  };

  useEffect(() => {
    dispatch(getPosts(1));
  }, []);
  return (
    <>
      <div className="w-full flex justify-center">
        <button
          className={`bg-blue-500 rounded-lg m-4 p-2 border border-black hover:bg-[#303030B2] hover:text-white hover:border-white ${
            activeButton === 0 ? "bg-[#303030B2]" : ""
          }`}
          onClick={() => {
            handleButtonClick(0);
            dispatch(getPosts(0));
          }}
        >
          Teams
        </button>
        <button
          className={`bg-blue-500 rounded-lg m-4 p-2 border border-black hover:bg-[#5345FAB2] hover:text-white hover:border-white ${
            activeButton === 1 ? "bg-[#5345FAB2]" : ""
          }`}
          onClick={() => {
            handleButtonClick(1);
            dispatch(getPosts(1));
          }}
        >
          Works
        </button>
        <button
          className={`bg-blue-500 rounded-lg m-4 p-2 border border-black hover:bg-[#A253ECB2] hover:text-white hover:border-white ${
            activeButton === 2 ? "bg-[#A253ECB2]" : ""
          }`}
          onClick={() => {
            handleButtonClick(2);
            dispatch(getPosts(2));
          }}
        >
          Vacancies
        </button>
      </div>
      <div className="">
        {posts.map((post) => (
          <PostItem key={post.is} post={post} activeButton={activeButton} />
        ))}
      </div>
    </>
  );
};
