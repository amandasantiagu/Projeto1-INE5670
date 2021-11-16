import styled from 'styled-components';

export const ContainerMovies = styled.div`
    margin-top: 2em;
    margin-left: 2.3em;
    display: grid;
    align-items: center;
    grid-template-columns: repeat( 3, minmax(180px, 1fr) );
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
    width:22rem;
    height: 15rem;
  }
 
  &:hover{
      transform: scale(1.02);
      cursor: pointer;
      filter: blur(0);
  }
 
    @media (max-width:768px){ 
        width: 80%;

    }
`;