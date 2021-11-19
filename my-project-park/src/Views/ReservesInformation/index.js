import React from 'react'
import { HomeStyle } from '../Home/HomeStyles';
import image1 from '../../assets/images/image1.png'

const ReserveInformation = ({props}) => {

  // var attractions = require('../../DataBase/attractions.json');
  // var attraction = attractions[0]

  return (
    <HomeStyle>
       <h1> Reserva NOME</h1>
       <img src={image1} alt="Logo"/>
    </HomeStyle>
  );
}

export default ReserveInformation;
