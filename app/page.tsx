"use client";
import React, { useEffect, useState } from "react";
import Signin from "./login/page";
import Navbar from "./navbar";
import Pages from "./home/page";
import Stories from "./storie/page";
import Write from "./write/page";
import Articles from "./article/page";

interface IUser {
  id: number;
  name: string;
}

interface IArticle {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

function page(): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);
  const [articles, setArticles] = useState<IArticle[]>([]);

  // Auto login and keeps user logged in
  useEffect(() => {
    fetch("http://[::1]:3000/me").then((res) => {
      if (res.ok) {
        res.json().then((user: IUser) => setUser(user));
      }
    });
  }, []);

  //fetch articles
  useEffect(() => {
    fetch("http://[::1]:3000/articles")
      .then((res) => res.json())
      .then((data: IArticle[]) => setArticles(data));
  }, []);

  //Add article after post
  function handleAddArticle(article: IArticle) {
    setArticles([article, ...articles]);
  }

  if (!user) return <Signin onlogin={setUser} />;

  return (
    <>
      <Navbar setUser={setUser} user={user} />
      <main>
        <Pages articles={articles} />
        <Articles user={user} />
        <Stories setArticles={setArticles} articles={articles} user={user} />
        <Write addArticle={handleAddArticle} user={user} />
      </main>
    </>
  );
}

export default page;
