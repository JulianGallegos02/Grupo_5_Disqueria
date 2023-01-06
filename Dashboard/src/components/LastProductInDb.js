import React from 'react';

function LastProductInDb(props) {

    var tituloAlbum = {
    color: 'rgb(63 148 191)',
    fontSize: '45px',
    fontWeight: 600,
    }

    var tituloArtista = {
        color: '#fb8501',
        fontSize: '20px',
        fontWeight: 400,
        marginTop: "-20px"
        }

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Album Agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={props.image} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p style={tituloAlbum}>{props.name}</p>
                    <p style={tituloArtista}> {props.artist}</p>
                    <p> {props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
