import React from 'react'
import { HomeStyle } from '../Home/HomeStyles';
import image1 from '../../assets/images/image1.png'
import { useLocation } from 'react-router';

const ReserveInformation = () => {
  const location = useLocation()
  let data = location.state

  return (
    <HomeStyle>
       <h1> {data.name}</h1>
       {data.imgs.map(img => {
        return (
          <img src={img.url} alt="Logo" />
        )
        })}

       <p> Endereço: {data.address}</p>
       <p> Telefone: {data.phoneNumber}</p>
       <p> Horario: {data.openingHours}</p>
       <p> Website: {data.website}</p>
       <p> Preço: {data.price}</p>
    </HomeStyle>
  );
}

export default ReserveInformation;
