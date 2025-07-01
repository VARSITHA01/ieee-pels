import React, { useEffect, useRef } from 'react';
import './Articles.css';
import articlesData from './Articles.json'; // Adjust the path as needed

function Articles() {
  const titleRef = useRef(null);

  // Apply animation to the title on component load
  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement) {
      titleElement.classList.add('animate__animated', 'animate__fadeInUp'); // Trigger title animation
    }
  }, []);

  return (
    <div className="articles">
      <h1 className="articletitle" ref={titleRef}>
        Articles & Newsletters
      </h1>
      <div className="articleslist">
        {articlesData.map((article) => (
          <a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="articlecard"
            aria-label={article.title}
          >
            <img
              src={article.image}
              alt={article.title}
              className="article-img"
            />
            <h3 className="article-title">{article.title}</h3>
            <p className="article-summary">{article.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Articles;
