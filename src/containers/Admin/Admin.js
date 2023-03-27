import React, { useState } from "react";

const Admin = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  console.log(blogPosts);

  return (
    <div>
      <h1>This is the admin area</h1>
    </div>
  );
};

export default Admin;
