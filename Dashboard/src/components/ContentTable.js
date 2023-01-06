import React, { useState, useEffect } from "react";
import SmallCard from './SmallCard';


function ContentTable() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [genres, setGenres] = useState([]);


    useEffect(() => {


        fetch("http://localhost:3000/api/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
    
    
        fetch("http://localhost:3000/api/users")
          .then((response) => response.json())
          .then((data) => setUsers(data))     
          .catch((error) => console.log(error));   
          
      }, []);

      useEffect(() => {
    
    
        fetch("http://localhost:3000/api/products/genres")
          .then((response) => response.json())
          .then((data) => setGenres(data))     
          .catch((error) => console.log(error));   
          
      }, []);

    /*  Cada set de datos es un objeto literal */

    /* <!-- Movies in DB --> */

    let albumInDB = {
        title: "Total de Discos",
        color: 'primary',
        cuantity: products.count,
        icon: 'fa-compact-disc'
    }

    /* <!-- Total awards --> */

    let totalAwards = {
        title: 'Total de Usuarios',
        color: 'success',
        cuantity: users.count,
        icon: 'fa-user-check'
    }

    /* <!-- Actors quantity --> */

    let actorsQuantity = {
        title: 'Total de Generos',
        color: 'warning',
        cuantity: genres.count,
        icon: 'fa-clipboard-list'
    }

    let cartProps = [albumInDB, totalAwards, actorsQuantity];

        return (

            <div className="row">

                {cartProps.map((movie, i) => {

                    return <SmallCard {...movie} key={i} />

                })}

            </div>
        )
    }

    export default ContentTable;