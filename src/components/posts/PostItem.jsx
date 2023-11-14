import React from "react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePost, getOnePost } from "../../store/posts/postsAction";
import { useNavigate } from "react-router-dom";

export const PostItem = ({ post, activeButton }) => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  // const [likes, setLikes] = useState(false);
  return (
    <div className="w-full">
      <div
        className={`w-1/2 my-4 p-4 m-auto rounded-lg ${
          activeButton === 0
            ? "bg-[#303030B2]"
            : activeButton === 1
              ? "bg-[#5345FAB2]"
              : activeButton === 2
                ? "bg-[#A253ECB2]"
                : ""
        }`}
        onClick={() => {
          dispacth(getOnePost(post.id));
          navigate(`/edit-post/${post.id}`);
        }}
      >
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold line-clamp-2 w-4/5 h-14">
            {post.description}
          </h3>
          <h3 className="m-4 text-lg font-normal">{post.royal}</h3>
          {/* <div className="w-8 h-8" onClick={() => setLikes(!likes)}>
            {!likes ? (
              <AiOutlineHeart className="w-full h-full text-red-500" />
            ) : (
              <AiFillHeart className="w-full h-full text-red-500" />
            )}
          </div> */}
        </div>
        <div className="flex justify-around">
          <h4 className="text-2xl font-bold">{post.salary}</h4>
          {post.deadline && (
            <h4 className="text-xl font-bold">срок сдачи: {post.deadline}</h4>
          )}
        </div>
        <h3 className="m-4">{post.name}</h3>
        <p className="">{post.description}</p>
        <div className="py-6 w-full flex justify-around">
          <button
            className={`bg-blue-500 rounded-lg py-2 px-4 border border-black hover:bg-[#5345FAB2] hover:text-white hover:border-white ${
              activeButton === 0 ? "bg-[#5345FAB2]" : ""
            }`}
          >
            Edit
          </button>
          <button
            className={`bg-blue-500 rounded-lg py-2 px-4 border border-black hover:bg-[#5345FAB2] hover:text-white hover:border-white ${
              activeButton === 0 ? "bg-[#5345FAB2]" : ""
            }`}
            onClick={() => dispacth(deletePost(post.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
