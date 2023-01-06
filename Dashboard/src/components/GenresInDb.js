import React, { Component } from "react";
import Genres from "./Genre";

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      genresList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/products/genres")
    .then((response) => { 
      return response.json(); })
    .then((generos) => { this.setState({ genresList: generos.data }); })

    .catch((error) => console.log(error));

  }

    render() {
    return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Generos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {this.state.genresList.map((genres, index) => {
                  return <Genres {...genres} key={index} />;
              })}
          
           </div>
        </div>
      </div>
    </div>
  );
}
}

export default GenresInDb;
