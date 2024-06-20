import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [article, setarticle] = useState(null);

  

  return <div>DetailPage</div>;
};

export default DetailPage;
