import Header from './Header'
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Protected(props) {
    let Cmp=props.Cmp;
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push("/register");
        }
    }, []);
    return (
        <div>
            <Cmp />
            {/*<Header />
            <h1>Halaman Login</h1>*/}
        </div>
    )
}

export default Protected;