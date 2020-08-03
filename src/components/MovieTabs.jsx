import React from "react";
import classNames from "classnames";

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.sort_by !== this.props.sort_by;
  }

  render() {
    const { sort_by, updateSortBy } = this.props;
    const handleCLick = value => () => updateSortBy(value);

    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={classNames("nav-link", {
              active: sort_by === "popularity.desc"
            })}
            onClick={handleCLick("popularity.desc")}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={classNames("nav-link", {
              active: sort_by === "revenue.desc"
            })}
            onClick={handleCLick("revenue.desc")}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={classNames("nav-link", {
              active: sort_by === "vote_average.desc"
            })}
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
