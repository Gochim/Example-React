import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

// const movie = moviesData[0];
// movie.image = "https://image.tmdb.org/t//p/w500" + movie.backdrop_path;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    };
  }

  removeMovie = movie => {
    const updateMovie = this.state.movies.filter(item => {
      return movie.id !== item.id;
    });
    this.setState({ movies: updateMovie });
  };

  render() {
    return (
      <div>
        {this.state.movies.map(movie => {
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              removeMovie={this.removeMovie}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
