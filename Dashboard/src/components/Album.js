import React from 'react';

function Album(props){
    return(
        <React.Fragment>
            <div className="col-products" >
                <div className="card text">
                    <div className="card-body" >
                        
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "18rem" }} src={props.image} alt=""/>
                       
                    <p style={{ width: "15rem" }}>  {props.name} </p>
                  
                        {props.artist}

                        
                       
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Album;