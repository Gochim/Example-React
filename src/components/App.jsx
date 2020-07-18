import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

// const movie = moviesData[0];
// movie.image = "https://image.tmdb.org/t//p/w500" + movie.backdrop_path;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  addMovieToWIllWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({ moviesWillWatch: updateMoviesWillWatch });
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(item => {
      return movie.id !== item.id;
    });
    this.setState({ moviesWillWatch: updateMoviesWillWatch });
  };

  removeMovie = movie => {
    const updateMovie = this.state.movies.filter(item => {
      return movie.id !== item.id;
    });
    this.setState({ movies: updateMovie });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4">
                    <MovieItem
                      key={movie.id}
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWIllWatch={this.addMovieToWIllWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
