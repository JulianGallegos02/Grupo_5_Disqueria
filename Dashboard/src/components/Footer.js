import React from 'react';

function Footer(){

	var fondoColor = {
		background: 'rgba(2, 48, 71, 1)'
        }

    return (
        <React.Fragment>
			<footer style={fondoColor}  className="sticky-footer ">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2023</span>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;