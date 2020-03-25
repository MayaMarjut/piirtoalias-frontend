import React from 'react'
import { useAuth0 } from '../react-auth0-spa';
import { Link } from 'react-router-dom';

// This component is responsible for showing the login and logout buttons

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        
            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/profile">Profile</Link>
                    <Link to="/play">Pelaa</Link>
                </span>
    )}
        
        
        
        </div>
    );
};

export default NavBar;