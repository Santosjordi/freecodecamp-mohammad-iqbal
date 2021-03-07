//will contain the links to the components and a login or logout button based on the user authentication state

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../utils/context';

const Header = () => {
    const context = useContext(Context)

    return (
        <div>
            <Link to='/' style={{padding: "5px"}}>
                Profile
            </Link>
            <link to='/profile' style={{padding: "5px"}}>
                Profile
            </link>
            <Link to='/hooksform' style={{padding: "5px"}}>
                Hooks Form
            </Link>
            <Link to='/hookscontainer' style={{padding: "5px"}}>
                Hooks Container
            </Link>
            <Link to='/privateroute' style={{padding: "5px"}}>
                Private Route
            </Link>
            {!context.authState
                ? <button onClick={() => context.authObj.login()}>Login</button>
                : <button onClick={() => context.authObj.logout()}>Login</button>
            }
        </div>
    )};

export default Header;