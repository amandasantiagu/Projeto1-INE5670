import React from 'react'
import { Link } from 'react-router-dom';
import { HomeStyle } from './HomeStyles';

function Home() {
  return (
    <>
        <HomeStyle>
            <h1>Turismo em Santa Catarina!</h1>
            <p>Escolha entre reservas naturais ou praias de Florianopolis</p>    
            <Link to={'/reserves'}>Reservas</Link>
            <Link to={'/reserves'}>Praias</Link>
        </HomeStyle>
    </>
  );
}

export default Home;
