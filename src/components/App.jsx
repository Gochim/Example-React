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
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

class MovieItem extends React.Component {
  render() {
    const {
      data: { title, vote_average, image }
    } = this.props;
    console.log(this);

    return (
      <div>
        <Image src={image} alt={title} />
        <p>Title: {title}</p>
        <p>Rating: {vote_average}</p>
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
