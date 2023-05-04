import React from "react";
import Article from "./components/Article";
import "bootstrap/dist/css/bootstrap.min.css";

interface ArticleProps {
  id: number;
  user_id: number;
  title: string;
  topic: string;
  story: string;
  time: number;
}

interface Props {
  articles: ArticleProps[];
}

function Pages({ articles = [] }: Props) {
  const displayArticles = Array.isArray(articles)
    ? articles.map((article) => {
        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <Article key={article.id} article={article} />
            </div>
          </div>
        </div>;
      })
    : null;

  return (
    <div className="col-sm-6 col-lg-4">
      <div className="card">
        <div className="card-body">
          {/* <Filter /> */}
          <h2 className="home-header">Whats new</h2>
          {displayArticles}
        </div>
      </div>
    </div>
  );
}

export default Pages;
