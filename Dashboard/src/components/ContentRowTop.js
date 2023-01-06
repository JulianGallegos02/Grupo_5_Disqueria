import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentTable from './ContentTable';

function ContentRowTop(){

	var fondoColor = {
		background: 'linear-gradient(0deg, rgba(2, 48, 71, 1) 0%, rgba(33, 158, 188, 1) 100%)'
        }

		var colorTitulo = {
			color: "white"
		}

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div style={fondoColor} className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 style={colorTitulo} className="h3 mb-0 text-white-800 ">Dashboard Sound Bites</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentTable />
					<ContentRowCenter />
					
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;