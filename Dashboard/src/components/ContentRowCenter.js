import React, { Component } from "react";
import LastProductInDb from './LastProductInDb';
import GenresInDb from './GenresInDb';

class ContentRowCenter extends Component {
    constructor() {
        super();
        this.state = {
        lastAlbum: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/products/lastAlbum")
        .then((response) => { 
          return response.json(); })
        .then((album) => { this.setState({ lastAlbum: album.data }); })
    
        .catch((error) => console.log(error));
    
      }


    render() {
        return (
            <div className="row">

                {/*<!-- Last Movie in DB -->*/}
                 {this.state.lastAlbum.map((album, index) => {
                  return <LastProductInDb {...album} key={index} />;
              })}
                {/*<!-- End content row last movie in Data Base -->*/}

                {/*<!-- Genres in DB -->*/}
                <GenresInDb />

            </div>
        )
    }
}

export default ContentRowCenter;