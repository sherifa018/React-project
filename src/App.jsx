import { useEffect, useState } from "react";
import axios from "axios";
import Moviecard from "./Moviecard";
// import AppNavbar from "./Nav";
import "./App.css";

function App() {
  // const [data, setdata] = useState();
  const API_KEY = "f3b5009479bb097ce58853620c892f33";
  const [data, setdata] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;
      const response = await axios.get(url);
      setdata(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  //
  async function fetchData() {
    try {
      setLoading(true);

      let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&api_key=${API_KEY}`;
      const resonse = await axios.get(url);
      setdata(resonse.data.results);
      console.log(resonse.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* {loading ? ( // If loading is true
      <p>Loading...</p>
    ) : */}
      <div>{/* <AppNavbar /> */}</div>
      <div className="parent-div">
        <header className="Search-engine">
          <h1 className="title">Movie Search App</h1>
          <div className="search-input-btn">
            <input
              type="text"
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for movies..."
            />
            <button className="search-btn" onClick={searchMovies}>
              Search
            </button>
          </div>
        </header>
        <div className="card-con">
          {data.map((item) => (
            <Moviecard
              key={item.id}
              title={item.original_title}
              description={item.overview}
              poster_path={item.poster_path}
              rating={item.vote_average}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
