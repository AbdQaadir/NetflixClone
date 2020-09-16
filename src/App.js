import React from "react";
import requests from "./requests";
// Components
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

// 94d2ceca9fafee6ec466a13d72292aed
function App() {
  return (
    <div className="App">
      <NavBar />

      {/* Banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
