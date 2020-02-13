import React from 'react';
import { Redirect } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h1 className="text-center">Stock-Portfolio</h1>
            {localStorage.token ? <Redirect to='/portfolio' />: <Redirect to='/register' />}
        </div>
    )
}