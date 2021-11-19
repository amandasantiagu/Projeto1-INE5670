import React from 'react'
import { Card, ContainerMovies } from './CardImagesStyles';
import { Link } from 'react-router-dom';

function Cards() {

    var attractions = require('../../DataBase/attractions.json'); //(with path)


  return (
    <>
        <ContainerMovies>
            {attractions && attractions.map((attraction) => {
                return(
                <>
                    <Card>
                    <Link to='/reservesInfo' state={attraction} >
                        <img src={attraction.imgs[0].url} alt="Logo"/>
                    </Link>
                        <p> {attraction.name}</p>
                        <p> {attraction.address}</p>
                    </Card> 
                </>
                ) 
            })}
        </ContainerMovies>
    </>
  );
}

export default Cards;
