import React from "react";
import { moviesData } from "../moviesData";

console.log(moviesData[0].title);

const movie = moviesData[0];
movie.image = "https://image.tmdb.org/t//p/w500" + movie.backdrop_path;

class Image extends React.Component {
  render() {
    return <img width="100%" src={this.props.src} alt={this.props.alt} />;
  }
}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  // setState() {
  // this.state.show = !this.state.show;
  // }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log(this.state);

    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>Title: {title}</p>
        <p>Rating: {vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            className={this.state.like ? "btn--like" : ""}
            onClick={this.handleLike}
          >
            Like
          </button>
        </div>

        {this.state.show === true ? <p>{overview}</p> : null}
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    };
  }

  render() {
    return (
      <div>
        <div>
          <MovieItem data={movie} />
        </div>

        <div>
          {this.state.movies.map(item => {
            return <p>{item.title}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
