import React from 'react';
import image from '../assets/images/logo-prueba.svg';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastProductInDb from './LastProductInDb';
import AlbumsDb from './AlbumsDb';
import ContentTable from './ContentTable';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import { Link, Route, Switch } from 'react-router-dom';

function SideBar() {

    var sideBarColor = {
        backgroundColor: '#fb8501'
    }

    var logo = {
        filter: 'invert(100%)'
    }

    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul style={sideBarColor} className="navbar-nav  sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img style={logo} className="w-100" src={image} alt="Digital House" />
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/AlbumsDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Albums</span>
                    </Link>
                </li>


                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ContentTable">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentTable">
                <ContentTable />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/AlbumsDb">
                    <AlbumsDb />
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/ContentTable">
                    <ContentTable />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;