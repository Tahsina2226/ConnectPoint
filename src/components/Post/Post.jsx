/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Post = ({ post }) => {
  // Destructuring inside the component body
  const { title, content } = post;
  //   console.log(post);
  return (
    <div className="bg-white p-5 rounded-lg shadow mb-5">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Post;
