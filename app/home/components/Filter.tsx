import React, { useEffect, useState } from "react";

function Filter() {
  const [articles, setArticles] = useState([]);

  // TODO: fetch article topics
  useEffect(() => {
    // fetch('/article_topics')
    //   .then(res => res.json())
    //   .then(data => setArticles(data))
    //   .catch(err => console.error(err))
  }, []);

  return (
    <div>
      {/* <input className='search-bar' type='text' placeholder='Search article...' value={search} onChange={onSearchChange} /> */}
    </div>
  );
}

export default Filter;
