import { Button } from "@material-ui/core";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogPageDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  console.log(slug);
  return (
    <div>
      abc
      <Button
        onClick={() => navigate("/blog")}
        variant="contained"
        color="primary"
      >
        Navigate
      </Button>
    </div>
  );
};

export default BlogPageDetails;
