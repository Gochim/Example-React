import React from "react";

const movie = {
  title: "Avengers: Infinity Wars",
  vote_average: 8.5,
  image: "https://image.tmdb.org/t//p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  overview:
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."
};

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

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

export default App;
