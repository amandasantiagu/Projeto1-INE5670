import React from 'react'
import { Card, ContainerAttractions, ItemsDiv } from './CardImagesStyles';
import { Link } from 'react-router-dom';

const Cards = () => {
    var attractions = require('../../DataBase/attractions.json');

  return (
    <>
        <ContainerAttractions>
            {attractions && attractions.map((attraction) => {
                return (
                    <>
                        <Card>
                        <Link to='/reservesInfo' state={attraction} >
                            <img src={attraction.imgs[0].url} alt="Logo"/>
                        </Link>
                            <ItemsDiv>
                                <h4>{attraction.name}</h4>
                                <p>{attraction.address}</p>
                            </ItemsDiv>
                        </Card> 
                    </>
                ) 
            })}
        </ContainerAttractions>
    </>
  );
}

export default Cards;
