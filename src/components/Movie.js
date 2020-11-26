import React from 'react';
import Proptypes from 'prop-types'
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({year,title,summary,poster,genres,rating}) {
return( 
    <div className="movie">
      <Link
        to={{
          pathname:'/movie-detail',
          state:{year,title,summary,poster,genres,rating},
        }}
      >  
      <img src={poster} alt={title} title={title}/>
      <div className="movie-data">
          <h3 className="movie-title">{title}</h3>
          <h5 className="movie-year">{year}</h5>
          <ul className="movie-genres">
            {genres.map((genre,index)=>{
                return<li key={index} className="movie__genre">{genre}</li>
            })}
          </ul>
          <p className="movie-summery">{summary.slice(0, 100)}...</p>
      </div>
      </Link>
    </div>
);
}
Movie.propTypes = {
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired,
    rating : Proptypes.number.isRequired,
};
export default Movie;
