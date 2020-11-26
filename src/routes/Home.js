import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie.js';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoding: true,
    movies:[],
  };
  getMovies = async () => {
    const {
      data:{
        data:{movies}
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoding: false});
    console.log(movies)
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoding, movies} = this.state;
    return (
      <section className = "container">
        {isLoding 
        ? (<div className="loader"><span className="loder-text"/>loading</div>)
        : 
        <div className="movies">{movies.map((movie) => {
            return(
              <Movie
              key={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              rating={movie.rating}
              />
            )})}
            </div>
            }
      </section>
        
  );
}
}


export default Home;
