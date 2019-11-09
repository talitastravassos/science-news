import React from "react";

interface Props {
  post: any;
}

export default function NewsCard({ post }: Props) {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
