import React from "react";
import { useSearchParams } from "react-router-dom";
const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return <div>Blog page</div>;
};

export default BlogPage;
