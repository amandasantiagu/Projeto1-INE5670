import React from 'react'
import { Card, ContainerMovies } from './CardImagesStyles';
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <>
        <ContainerMovies>
            <Card>
            <Link to={'/reservesInfo'}>
                <img src={image1} alt="Logo"/>
            </Link>
                <p>Parque Ecológico Rio Camboriú - Balneario Camboriu</p>
               
            </Card>
            <Card>
                <img src={image2} alt="Logo" />
                <p>Medanos do Siriu - Garopaba</p>
               
            </Card>
            <Card>
                <img src={image3} alt="Logo" />
                <p>Parque Nacional de São Joaquim</p>
             </Card>
            <Card>
                <img src={image1} alt="Logo" />
                <p>Parque Ecológico Rio Camboriú</p>
                <p>Cidade</p>
            </Card>
            <Card>
                <img src={image1} alt="Logo" />
                <p>Parque Ecológico Rio Camboriú</p>
                <p>Cidade</p>
            </Card>
            <Card>
                <img src={image1} alt="Logo" />
                <p>Parque Ecológico Rio Camboriú</p>
                <p>Cidade</p>
            </Card>
        </ContainerMovies>
    </>
  );
}

export default Cards;
