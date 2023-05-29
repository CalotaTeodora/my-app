import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// API : 3f8ff0c1398b5b3adc5a787b0794fa72

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3f8ff0c1398b5b3adc5a787b0794fa72&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovie() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }

    if (isLoading === false) {
      //TODO:Deal with image null
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      const imageExist = movieDetails.poster_path;
      if (imageExist !== null) {
        return (
          <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
            <div className="container my-5">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src={posterPath}
                    className="img-fluid rounded"
                    alt={movieDetails.original_title}
                  />
                </div>
                <div className="col-md-9">
                  <h2>{movieDetails.original_title}</h2>
                  <p className="lead">{movieDetails.overview}</p>
                </div>
              </div>
            </div>
          </>
        );
      }
      if (imageExist === null) {
        return (
          <>
            <Hero text={movieDetails.original_title} />
            <div className="container my-5">
              <div className="row">
                <div className="col-md-3">
                  <h3 className="">No image available</h3>
                </div>
                <div className="col-md-9">
                  <h2>{movieDetails.original_title}</h2>
                  <p className="lead">{movieDetails.overview}</p>
                </div>
              </div>
            </div>
          </>
        );
      }
    }
  }
  return renderMovie();
};

export default MovieView;
