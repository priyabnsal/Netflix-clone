import React, { useState, useEffect } from 'react'
import axios from "./axios";
import Requests from "./Requests";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(Requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1)+ "..." : str;
    }
    return (
        <header className="banner" style={{ backgroundSize: "cover", backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center center",}}> {/*bg image*/}
        <div className="banner_contents" >
            {/* title */}
            <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_des">{truncate(movie?.overview, 150)}</h1>
        </div>
            {/* div>2 button */}
            {/* description */}
            <div className="banner--fadebottom"></div>
        </header>
    )
}

export default Banner;
