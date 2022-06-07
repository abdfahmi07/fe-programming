import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATION(id));

    setMovies(response.data.results);
  }

  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title="Recommendation Movies" />
    </>
  );
}

export default Detail;
