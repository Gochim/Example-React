import React from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import PageSelector from "./PageSelector";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY_3 = "3f4ca4f3a9750da53450646ced312397";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: 1,
      totalPages: 1
    };
  }

  componentDidMount() {
    console.log("did mount");
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    } else if (prevState.page !== this.state.page) {
      this.getMovies();
    }
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

  prevPage = page => {
    this.setState({
      page: page - 1
    });
  };

  nextPage = page => {
    this.setState({
      page: page + 1
    });
  };

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${
        this.state.sort_by
      }&page=${this.state.page}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results,
          page: data.page,
          totalPages: data.total_pages
        });
      });
  };

  removeMovie = movie => {
    const updateMovie = this.state.movies.filter(item => {
      return movie.id !== item.id;
    });
    this.setState({ movies: updateMovie });
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value,
      // Reset the page count
      page: 1
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12">
                <PageSelector
                  page={this.state.page}
                  totalPages={this.state.totalPages}
                  prevPage={this.prevPage}
                  nextPage={this.nextPage}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div key={movie.id} className="col-6 mb-4">
                    <MovieItem
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
