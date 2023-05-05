"use client";
import React, { useState } from "react";
import Error from "../login/Error";
import "./write.css";

function Write({ user, addArticle }) {
  const [formData, setFormData] = useState({
    user_id: user?.id || "",
    title: "",
    topic: "",
    story: "",
    time: "",
  });

  const [errors, setErrors] = useState([]);

  //Update form data
  function handleChange(event: any) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //Handle artcile submit
  function handleSubmit() {
    // e.preventDefault()
    fetch("http://[::1]:3000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((article) => addArticle(article));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });

    //Clear form
    setFormData({
      user_id: user.id,
      title: "",
      topic: "",
      story: "",
      time: "",
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="container">
            <div className="card">
              <form onSubmit={handleSubmit}>
                <h2>Post your story</h2>
                <div className="input_text">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Title..."
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={formData.title}
                  />
                </div>
                <div className="input_text">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Topic..."
                    type="text"
                    name="topic"
                    onChange={handleChange}
                    value={formData.topic}
                  />
                </div>
                <div className="input_text">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="message"
                    placeholder="Tell your story..."
                    type="text"
                    name="story"
                    onChange={handleChange}
                    value={formData.story}
                  />
                </div>
                <div className="input_text">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Time to read.."
                    type="number"
                    name="time"
                    onChange={handleChange}
                    value={formData.time}
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

      {errors.map((error) => {
        return <Error key={error} error={error} />;
      })}
    </>
  );
}

export default Write;
