import React, { useState, useEffect } from 'react';
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url= "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const[movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        // console.log(request.data.results);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
    }, [fetchUrl]);
    console.table(movies);

    const opts= {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || "")
            .then(url => {
                // https://www.youtube.com/watch?v=XtMThy8QKqU&t=9753s
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error));
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            {/* <img scr="https://image.tmdb.org/t/p/original/wrLC5kx0nEq9U0MyJD7dnOT6m5F.jpg"/>
            <img src="https://image.tmdb.org/t/p/original/wrLC5kx0nEq9U0MyJD7dnOT6m5F.jpg" alt= "myPic" className="card_img"/>
             */}
            <div className="row_posters">

                {movies.map((movie) => (
                    <img key={movie.id} onClick={() => handleClick(movie)} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt= {movie.name} className={`row_poster ${isLargeRow && "row_posterLarge"}`}/>
                    
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts= {opts}/>}
        </div>
    );
}

export default Row;
