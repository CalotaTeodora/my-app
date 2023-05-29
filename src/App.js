import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import AboutView from "./components/AboutView";
import MovieView from "./components/MovieView";
import SearchView from "./components/SearchView";
import NoPageFounded from "./components/NoPageFounded";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const Path = [
    '/',
    '/about',
    '/search',
    '/movie/:id'
  ];

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search" exact>
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movie/:id" component={MovieView} />
        <Route path='' exact>
          <NoPageFounded keyword={Path}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
