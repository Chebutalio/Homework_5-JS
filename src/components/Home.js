import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1 className="home_header">Сапьор</h1>
            <Link to="/game" className="home_go">Го Грати!</Link>
        </div>
    )
}


export default Home;
