import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
import { forwardRef } from "react";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  console.log(movie);
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate line={1} element="p" text={movie.overview} />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.release_date || movie.first_air_date} •
        <ThumbUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
