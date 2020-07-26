import React from 'react';
import Row from "./Row";
import Requests from './Requests';
import "./app.css"
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
    return (
        <div className="App">
         <Nav/>
         <Banner/>

         <Row isLargeRow={true} title= "NETFLIX ORIGINALS" fetchUrl={Requests.fetchNetflixOriginals} />
         <Row title= "Trending Now" fetchUrl={Requests.fetchTrending} />
         <Row title= "Top Rated" fetchUrl={Requests.fetchTopRated} />
         <Row title= "Action Movies" fetchUrl={Requests.fetchActionMovies} />
         <Row title= "Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
         <Row title= "Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
         <Row title= "Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
         <Row title= "Documentaries" fetchUrl={Requests.fetchDocumentaries} />

        </div>
    )
}

export default App;
