/* eslint-disable no-unused-vars */

import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { title, image, description };

    console.log("Post Submitted:", newPost);

    // Later: send to backend using fetch/axios
    // axios.post("/api/posts", newPost);

    setTitle("");
    setImage("");
    setDescription("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-5">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Create a New Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Post Title
            </label>
            <input
              type="text"
              placeholder="Enter your title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Image URL
            </label>
            <input
              type="text"
              placeholder="https://example.com/image.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Description
            </label>
            <textarea
              placeholder="Write something..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none h-32 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition-all"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
