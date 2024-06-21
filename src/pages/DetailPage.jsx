import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  const [article, setarticle] = useState(null);

  useEffect(() => {
    function fetchData() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          setarticle(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    fetchData();
  }, []);

  return <div>{article}</div>;
};

export default DetailPage;
