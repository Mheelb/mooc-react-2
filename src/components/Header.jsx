import React, { useCallback, useContext } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Context } from '../context';
import classnames from 'classnames';

function Header() {

    const { context, dispatch } = useContext(Context);

    const handleLogout = useCallback(() => {
        dispatch({ type: 'logout' });
    }, [dispatch]);

    const switchTheme = useCallback(() => {
        dispatch({ type: 'switchTheme' });
    }, [dispatch]);

    return (
        <div>
            <nav className={classnames("navbar navbar-expand-md", context.theme === "light" ? "navbar-dark bg-dark" : "navbar-light bg-secondary")}>
                <div className="container-fluid">
                    <div className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-bottom"></img>
                        MOOC React
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/counter" className="nav-link">Compteur</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/roles" className="nav-link">Rôles</Link>
                        </li>
                    </ul>
                    <div className="navbar text me-2">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={switchTheme} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{context.theme}</label>
                        </div>
                    </div>
                    <div className='navbar-text'>
                        {context.user.name
                            ? <div>
                                <span>Bienvenue {context.user.name} -</span>
                                <button
                                    id="logout"
                                    className={'ms-2 btn btn-outline-' + context.theme}
                                    onClick={handleLogout}
                                >
                                    Deconnexion</button>
                            </div>
                            : <div>
                                <Link to="/login">Connectez-vous !</Link>
                                <br />ou&nbsp;
                                <Link to="/register">inscrivez-vous !</Link>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;