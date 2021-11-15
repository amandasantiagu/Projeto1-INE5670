import React from 'react'
import { Link } from 'react-router-dom';

function Parks() {
  return (
    <>
     <Link to={'/reserves'}>
        <h1>Escolha seu park de Santa Catarina!</h1>
    </Link>
    </>
  );
}

export default Parks;
