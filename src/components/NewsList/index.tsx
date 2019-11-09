import React from "react";
import { NewsContext } from "../../context/NewsContext";
import NewsCard from "../NewsCard";

export default function NewsList() {
  const {
    state: { news },
    action: { getNews }
  } = React.useContext(NewsContext); // context api

  React.useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {news.map((post: any) => {
        return <NewsCard post={post} key={post.id} />;
      })}
    </div>
  );
}
