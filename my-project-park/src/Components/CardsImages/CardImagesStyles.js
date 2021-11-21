import styled from 'styled-components';

export const ContainerAttractions = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat( 3, minmax(180px, 1fr) );
    @media (max-width:768px){ 
      display: flex;
      flex-direction: column;        
    }
`;

export const Card = styled.article`
  display: flex;
  align-items: center;
  margin-top: 2em;
  flex-direction: column;

  @media (max-width:768px){ 
        width: 80%;
    }

  img{
    width:18rem;
    height: 12rem;
  }
 
  &:hover{
      transform: scale(1.01);
      cursor: pointer;
      filter: blur(0);
  }
 
    @media (max-width:768px){ 
        width: 80%;
        
    }
`;

export const ItemsDiv = styled.div``;