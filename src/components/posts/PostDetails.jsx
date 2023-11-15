import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deletePost, getOnePost } from "../../store/posts/postsAction";
import styles from "./postsStyles.module.css";

export const PostDetails = () => {
  const { onePost, type } = useSelector((state) => state.posts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOnePost(id));
  }, []);

  return (
    <div className={`w-full ${styles.bg} pt-32`}>
      {onePost && (
        <div
          className={`w-1/2 p-4 m-auto rounded-lg ${
            type === 0
              ? "bg-[#303030B2]"
              : type === 1
                ? "bg-[#5345FAB2]"
                : type === 2
                  ? "bg-[#A253ECB2]"
                  : ""
          }`}
          onClick={() => {
            // dispacth(getOnePost(post.id));
            navigate(`/post-details/${onePost.id}`);
          }}
        >
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold line-clamp-2 w-4/5 h-14  ml-4 my-4">
              {onePost.title}
            </h3>
            <h3 className="m-4 text-lg font-normal">{onePost.royal}</h3>
            {/* <div className="w-8 h-8" onClick={() => setLikes(!likes)}>
             {!likes ? (
               <AiOutlineHeart className="w-full h-full text-red-500" />
             ) : (
               <AiFillHeart className="w-full h-full text-red-500" />
             )}
           </div> */}
          </div>
          <div className="flex justify-around">
            <h4 className="text-2xl font-bold">{onePost.salary}</h4>
            {onePost.deadline && (
              <h4 className="text-xl font-bold">
                срок сдачи: {onePost.deadline}
              </h4>
            )}
          </div>
          <h3 className="m-4">{onePost.name}</h3>
          {onePost.sity && <h3 className="m-4">Город: {onePost.sity}</h3>}
          {onePost.exp && <h3 className="m-4">Опыт: {onePost.exp}</h3>}
          <p
            className={`${
              type === 0
                ? "bg-[#5b5a5a]"
                : type === 1
                  ? "bg-[#897efcb2]"
                  : type === 2
                    ? "bg-[#be84f5b2]"
                    : ""
            } rounded-lg p-4`}
          >
            {onePost.description}
          </p>
          {onePost.requirements.map((item) => (
            <div
              className={`${
                type === 0
                  ? "bg-[#5b5a5a]"
                  : type === 1
                    ? "bg-[#897efcb2]"
                    : type === 2
                      ? "bg-[#be84f5b2]"
                      : ""
              } rounded-lg p-4 my-4`}
            >
              <h3 className="text-xl mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
      <div className="py-6 w-1/2 m-auto flex justify-around">
        <button
          className={`bg-blue-500 rounded-lg py-2 px-4 border border-black hover:bg-[#5345FAB2] hover:text-white hover:border-white ${
            type === 0
              ? "bg-[#5b5a5a]"
              : type === 1
                ? "bg-[#897efcb2]"
                : type === 2
                  ? "bg-[#be84f5b2]"
                  : ""
          }`}
          onClick={() => {
            dispatch(getOnePost(onePost.id));
            navigate(`/edit-post/${onePost.id}`);
          }}
        >
          Edit
        </button>
        <button
          className={`bg-blue-500 rounded-lg py-2 px-4 border border-black hover:bg-[#5345FAB2] hover:text-white hover:border-white ${
            type === 0
              ? "bg-[#5b5a5a]"
              : type === 1
                ? "bg-[#897efcb2]"
                : type === 2
                  ? "bg-[#be84f5b2]"
                  : ""
          }`}
          onClick={() => dispatch(deletePost(onePost.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
