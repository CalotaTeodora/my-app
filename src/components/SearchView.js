import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Hero from "./Hero";

const Movie = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailURL = `/movie/${movie.id}`;

  return (
    <div className="col-lg-4 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailURL} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const resultsHtml = searchResults.map((obj, i) => {
    return <Movie movie={obj} key={i} />;
  });
  return (
    <>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
      {
        resultsHtml.length === 0 && (
          <h1 className='text-center mt-5'>Upsss, we can't find what you want</h1>
        )
      }
    </>
  );
};

export default SearchView;
