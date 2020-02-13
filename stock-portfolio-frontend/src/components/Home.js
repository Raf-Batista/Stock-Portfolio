import React from 'react'
import Register from './Register';

export const Home = () => {
    return (
        <div>
            <h1 className="text-center">Stock-Portfolio</h1>
            {!localStorage.token ? <Register /> :null}
        </div>
    )
}