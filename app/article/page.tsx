"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Comment from "../home/components/Comment";
import "./article.css";

interface User {
  id: string;
}

interface Article {
  id: string;
  title: string;
  story: string;
  comments: Comment[];
}

interface Comment {
  id: string;
  user_id: string;
  article_id: string;
  comment: string;
  created_at: string;
  user: User;
}

interface FormData {
  article_id: string;
  user_id: string;
  comment: string;
}

interface Props {
  user: User;
}

function Articles({ user }: Props) {
  const router = useRouter();

  const [data, setData] = useState<Article>({
    id: "",
    title: "",
    story: "",
    comments: [],
  });
  const { id, title, story, comments } = data;
  const [formData, setFormData] = useState<FormData>({
    article_id: id,
    user_id: user?.id ?? 0,
    comment: "",
  });

  // fetch article data
  useEffect(() => {
    fetch(`http://[::1]:3000/articles/${id}`)
      .then((res) => res.json())
      .then((r: Article) => setData(r));
  }, [id]);

  // update form data
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("http://[::1]:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((r: Comment) => console.log(r));

    setFormData({
      article_id: id,
      user_id: user.id,
      comment: "",
    });
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="container">
          <div>
            <h2>{title}</h2>
            <p>{story}</p>
          </div>
          <div>
            {comments?.map((comment: Comment) => {
              return <Comment key={comment.id} check={comment} />;
            })}
          </div>
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="input_text">
                <textarea
                  id="message"
                  placeholder="Comment.."
                  name="comment"
                  onChange={handleChange}
                  value={formData.comment}
                />
              </div>
              <div className="btn">
                <button
                  className="flex w-full justify-center 
                rounded-md bg-indigo-600 px-3 py-1.5 
                text-sm font-semibold leading-6 text-white shadow-sm
               hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  type="submit">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
