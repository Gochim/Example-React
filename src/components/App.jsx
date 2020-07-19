import React from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY_3 = "3f4ca4f3a9750da53450646ced312397";

// const movie = moviesData[0];
// movie.image = "https://image.tmdb.org/t//p/w500" + movie.backdrop_path;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: []
    };
  }

  componentDidMount() {
    console.log("did mount");
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
      });
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
                  <div key={movie.id} className="col-6 mb-4">
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
