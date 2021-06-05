import React from 'react'
import Directory from './../../components/Directory'
import Carrousel from './../../components/Carrousel'
import './styles.scss';

const Homepage = props => {

    return (
        <section className="homepage">
            <Carrousel />

            <Directory />
        </section>
    );
};

export default Homepage;