import React, { Component } from 'react';
import Album from './Album';

class AlbumsDb extends Component{

    constructor() {
        super()
        this.state = {
            productsList: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/products")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((products) => {
            console.log(products)
            this.setState({ productsList: products.products });
          })
          .catch((error) => console.log(error));
    }    

   
    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4" style={{ width: "65rem" }}>
                        <div className="card-header py-3" style={{ width: "100%" }}>
                            <h6 className="m-0 font-weight-bold text-gray-800" >Lista de Albumes</h6>
                        </div>

                        <div className="card-body fondoCaja" style={{ width: "100%" }}>
                            <div className="row">
                                {
                                    this.state.productsList.map((product, index) => {
                                        return <Album {...product} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default AlbumsDb;