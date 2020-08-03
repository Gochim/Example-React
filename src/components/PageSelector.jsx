import React from "react";
import classNames from "classnames";

class PageSelector extends React.Component {
  render() {
    const { page, totalPages, prevPage, nextPage } = this.props;

    return (
      <div className="d-flex justify-content-between align-items-center">
        <button
          type="button"
          className={classNames("btn", { disabled: page === 1 })}
          onClick={() => {
            if (page > 1) {
              prevPage(page);
            }
          }}
        >
          Prev
        </button>
        <p className="mb-0">
          {page} from {totalPages}
        </p>
        <button
          type="button"
          className={classNames("btn", { disabled: page === totalPages })}
          onClick={() => {
            if (page < totalPages) {
              nextPage(page);
            }
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default PageSelector;
