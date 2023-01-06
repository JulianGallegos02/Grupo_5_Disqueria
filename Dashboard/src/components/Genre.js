import React from "react";

function Genre(props) {

  var boxColor = {
    color: '#fb8501',
    }

  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card text">
          <div style={boxColor}  className="card-body">{props.genre_name}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Genre;
