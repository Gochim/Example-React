import React from "react";

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.sort_by !== this.props.sort_by;
  }

  render() {
    const { sort_by, updateSortBy } = this.props;
    const handleCLick = value => () => updateSortBy(value);

    console.log("MovieTabs render");

    const getClassLink = value => {
      return `nav-link ${sort_by === value ? "active" : ""}`;
    };

    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={getClassLink("popularity.desc")}
            onClick={handleCLick("popularity.desc")}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassLink("revenue.desc")}
            onClick={handleCLick("revenue.desc")}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassLink("vote_average.desc")}
            onClick={handleCLick("vote_average.desc")}
          >
            Vote average
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
