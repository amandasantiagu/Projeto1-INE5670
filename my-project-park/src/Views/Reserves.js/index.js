import React from 'react'
import Cards from '../../Components/CardsImages/CardImages';
import { HomeStyle } from '../Home/HomeStyles';

function Reserve() {
  return (
    <HomeStyle>
       <h1> Reservas Naturais no Estado de Santa Catarina</h1>
       <Cards />
    </HomeStyle>
  );
}

export default Reserve;
