import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const Post = ({ post }) => {
  const converter = new QuillDeltaToHtmlConverter(
    JSON.parse(post.content).ops,
    {}
  );
  const contentHTML = converter.convert();
  console.log(contentHTML);
  return (
    <article className="post container">
      <h1>{post.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      />
    </article>
  );
};

export default Post;
