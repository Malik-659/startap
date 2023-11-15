import React from "react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePost, getOnePost } from "../../store/posts/postsAction";
import { useNavigate } from "react-router-dom";
import styles from "./postsStyles.module.css";

export const PostItem = ({ post, activeButton }) => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  // const [likes, setLikes] = useState(false);
  return (
    <div className={styles.bg}>
      <div className="w-full p-4">
        <div
          className={`w-1/2 p-4 m-auto rounded-lg ${
            activeButton === 0
              ? "bg-[#303030B2]"
              : activeButton === 1
                ? "bg-[#5345FAB2]"
                : activeButton === 2
                  ? "bg-[#A253ECB2]"
                  : ""
          }`}
          onClick={() => {
            // dispacth(getOnePost(post.id));
            navigate(`/post-details/${post.id}`);
          }}
        >
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold line-clamp-2 w-4/5 h-14 ml-4 my-4">
              {post.title}
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
          {post.sity && <h3 className="m-4">Город: {post.sity}</h3>}
          {post.exp && <h3 className="m-4">Опыт: {post.exp}</h3>}
          <p
            className={`${
              activeButton === 0
                ? "bg-[#5b5a5a]"
                : activeButton === 1
                  ? "bg-[#897efcb2]"
                  : activeButton === 2
                    ? "bg-[#be84f5b2]"
                    : ""
            } rounded-lg p-4`}
          >
            {post.description}
          </p>
        </div>
      </div>
    </div>
  );
};
