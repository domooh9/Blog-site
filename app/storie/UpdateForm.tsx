import React, { useState } from "react";

interface Article {
  user: {
    id: number;
  };
  title: string;
  topic: string;
  story: string;
  time: number;
  id: number;
}

interface Props {
  article: Article;
  handleUpdate: (formData: Article) => void;
}

function UpdateForm({ article, handleUpdate }: Props) {
  const { user, title, topic, story, time, id } = article;

  const [formData, setFormData] = useState<Article>({
    id: id,
    user: { id: user.id },
    title: title,
    topic: topic,
    story: story,
    time: time,
  });

  //update form data
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //handle update
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleUpdate(formData);
  }

  return (
    <div>
      <h3>Edit story:</h3>
      <form className="update-form" onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          name="title"
          type="text"
          onChange={handleChange}
          value={formData.title}
        />
        <input
          placeholder="Topic"
          name="topic"
          type="text"
          onChange={handleChange}
          value={formData.topic}
        />
        <input
          placeholder="Time"
          name="time"
          type="number"
          onChange={handleChange}
          value={formData.time}
        />
        <textarea
          placeholder="Story"
          name="story"
          onChange={handleChange}
          value={formData.story}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}

export default UpdateForm;
