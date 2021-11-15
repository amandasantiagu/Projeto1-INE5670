import React from 'react'
import { Link } from 'react-router-dom';

function Reserve() {
  return (
    <>
     <Link to={'/reserves'}>
        <h1>Escolha seu park de Santa Catarina!</h1>
    </Link>
    </>
  );
}

export default Reserve;
