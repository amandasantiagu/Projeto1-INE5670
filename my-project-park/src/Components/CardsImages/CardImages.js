import React from 'react'
import { Card, ContainerMovies } from './CardImagesStyles';
import image1 from '../../assets/images/image1.png'

function Cards() {
  return (
    <>
        <ContainerMovies>
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
