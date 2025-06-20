import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Image"} 
            alt={movie.Title}
             />
             <div className="movie-info">
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
                <p><strong>{movie.Type}</strong></p>
             </div>
        </div>
    );
};

export default MovieCard;