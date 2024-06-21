import React from "react";

const NewsCard = ({ articles }) => {
  return (
    <>
      <div className="row g-4 mt-4">
        {articles.length == 0
          ? "No news available :("
          : articles.map((article, index) => {
              return (
                <div key={index} className="card col-12 p-0 mx-auto">
                  <a href={article.url} target="_blank">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={article.urlToImage}
                          alt={article.title}
                          className="img-fluid rounded object-fit-cover"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{article.title}</h5>
                          <p className="card-text">{article.content}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default NewsCard;
