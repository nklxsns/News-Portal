import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import "./Home.css";
import Pagination from "../components/Pagination";
import Category from "../components/Category";
import Loading from "../components/Loading";

const Home = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [loading, setLoading] = useState(true);
  const [category, setcategory] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [newsPerPage, setnewsPerPage] = useState(6);

  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setArticles([]);
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}`
        );

        setArticles(
          response.data.articles.filter((article) => {
            return article.title != "[Removed]" && article.urlToImage != null;
          })
        );
        setcurrentPage(1);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [category]);

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentArticles = Articles.slice(firstNewsIndex, lastNewsIndex);

  return (
    <>
      <Category category={category} setcategory={setcategory} />
      {loading ? <Loading /> : <NewsCard articles={currentArticles} />}
      {
        <Pagination
          totalNews={Articles.length}
          newsPerPage={newsPerPage}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
        />
      }
    </>
  );
};

export default Home;
