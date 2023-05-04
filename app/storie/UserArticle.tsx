import React, { useState } from "react";
import UpdateForm from "./UpdateForm";

interface Props {
  article: {
    id: number;
    user_id: number;
    title: string;
    topic: string;
    story: string;
    time: number;
  };
  ondelete: (id: number) => void;
  onupdate: (formData: any) => void;
}

function UserArticle({ article, ondelete, onupdate }: Props) {
  const { title, topic, story, time } = article;
  const [update, setUpdate] = useState(false);

  function handleDelete() {
    ondelete(article.id);
  }

  function handleUpdate() {
    setUpdate(!update);
  }

  function articleUpdate(formData: any) {
    onupdate(formData);
    setUpdate(!update);
  }

  return (
    <div className="article-card">
      <div className="article-content">
        <h3>{title}</h3>
        <p>{story.substring(0, 350)}...</p>
        <p>
          <strong>Topic: </strong> {topic}
        </p>
        <p>
          <strong>Time to read:</strong> {time}
        </p>
        <div className="icons">
          <i className="fa-solid fa-pen-to-square" onClick={handleUpdate}></i>
          <i className="fa-sharp fa-solid fa-trash" onClick={handleDelete}></i>
        </div>
      </div>
      {update ? (
        <UpdateForm article={article} handleUpdate={articleUpdate} />
      ) : null}
    </div>
  );
}

export default UserArticle;
