import React from "react";
import { useRouter } from "next/navigation";

type User = {
  username: string;
  profile_image: string;
};

type ArticleType = {
  id: number;
  title: string;
  user: User;
  topic: string;
  created_at: string;
  story: string;
  time: number;
};

type Props = {
  article: ArticleType;
};

function Article({ article }: Props) {
  const { id, title, user, topic, created_at, story, time } = article;
  const router = useRouter();

  function handleClick() {
    router.push(`/${id}`);
  }

  return (
    <div>
      <div className="profile">
        <img className="profile_image" src={user.profile_image} alt="DP" />
        <h4 className="username">{user.username}</h4>
        <p className="date_created">• {created_at.substring(0, 10)}</p>
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="story">{story}...</p>
      </div>
      <div className="btns">
        <button className="btn">{topic}</button>
        <button onClick={handleClick} className="btn">
          {time}min read
        </button>
      </div>
    </div>
  );
}

export default Article;
