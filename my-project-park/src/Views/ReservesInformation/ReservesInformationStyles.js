import styled from 'styled-components';

export const ImgItems = styled.img`
    width: 80%;
    height: auto;
    margin: auto;
   
    @media (max-width:768px){ 
        margin: auto;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 1rem;

}  
`
export const ItemsForm = styled.div`
    font-weight: 600;
    padding-left: 1rem;
`;

export const FormAlign = styled.div`
    display: flex;
    width: 100%;
    padding-top: 1rem;
    height: 9vh;   
    @media (max-width:768px){ 
        display: flex;
}  
`;

export const ReservesAttractions = styled.div`
    display: grid;
    height: auto;
    flex-direction: column;    
    grid-template-columns: repeat( 1, minmax(180px, 1fr) );
    @media (max-width:768px){ 
      display: flex;
      flex-direction: column;        
    }
`;

export const AlignDiv = styled.div`
    display: flex;
    height: auto;
    width: 80%;
    flex-direction: column;    
    align-items: center;
    justify-content: center;

   @media (max-width:768px){ 
    width: 100%;
    display: flex; 
    padding-top: 1rem;
    height: 80vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`;

export const AStyled = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  color: #4141e4; 
`;

export const ButtonBack = styled.button`
  width: 6rem;
  height: 3rem;
  background: #68d9eb;
  color: black;
  border-radius: 4px;
  font-size: 1rem;
  border-width: 0px;
  margin-bottom: 1rem;
  &:hover {
    background: red;
  }
`