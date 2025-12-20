/* eslint-disable no-unused-vars */
import React from "react";

const RightSidebar = () => {
  return (
    <div className="hidden lg:block w-1/5 h-screen sticky top-0 bg-white shadow p-4 overflow-hidden rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Suggestions</h2>
      <div className="space-y-3">
        <p className="bg-gray-100 p-3 rounded">User Suggestion 1</p>
        <p className="bg-gray-100 p-3 rounded">Trending Topic 1</p>
        <p className="bg-gray-100 p-3 rounded">Trending Topic 2</p>
      </div>
    </div>
  );
};

export default RightSidebar;
