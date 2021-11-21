import React from 'react'
import { ButtonStyle, HomeStyle } from '../Home/HomeStyles';
import { useLocation } from 'react-router';
import { AlignDiv, AStyled, ButtonBack, ImgItems, ItemsForm, ReservesAttractions } from './ReservesInformationStyles';
import { SiGooglemaps } from 'react-icons/si';
import { BsTelephoneOutboundFill } from  'react-icons/bs';
import { IoLogoYoutube } from  'react-icons/io';
import { Link } from 'react-router-dom';


const ReserveInformation = () => {
  const location = useLocation()
  let data = location.state

  console.log(data)

  return (
    <HomeStyle>
      <ReservesAttractions > 
        <h1> {data.name}</h1>                     
        {data.imgs.map(img => {
          return (
              <ImgItems className="imgArray" src={img.url} alt="Logo" />
          )
          })}

        <AlignDiv> 
          <p><ItemsForm>Endereço: </ItemsForm> {data.address}</p>
          <p><ItemsForm>Horario: </ItemsForm> {data.openingHours}</p>
          <p> <ItemsForm>Preço:</ItemsForm>{data.price}</p>

          <ButtonStyle>
            <AStyled href={data.website}> Website </AStyled>
          </ButtonStyle>

          <ButtonStyle>
            <BsTelephoneOutboundFill size={22}/>
            <AStyled href={`tel:${data.phoneNumber}`}> Telefone </AStyled>
          </ButtonStyle>

          <ButtonStyle>
            <SiGooglemaps size={22} style={{color: 'red'}}/>
            <AStyled href={data.maps} > Visitar Maps </AStyled>
          </ButtonStyle>

          <ButtonStyle>
            <IoLogoYoutube size={22} style={{color: 'red'}}/>
            <AStyled href={data.youtube} > Youtube </AStyled>
          </ButtonStyle>


          <ButtonBack>
            <Link to='/reserves'>
                Voltar
            </Link>
          </ButtonBack>
          
        </AlignDiv>
       </ReservesAttractions>
    </HomeStyle>
  );
}

export default ReserveInformation;
