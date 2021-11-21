import styled from 'styled-components';

export const HomeStyle = styled.main`
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  background: #b5d4f3;
  .splash{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height:100vh;
    background: #b5d4f3;
    z-index: 200;
    color: white;
    line-height:90vh;
  }

  .splash.display-none{
    position: fixed;
    opacity:0;
    top:0;
    left: 0;
    width:100%;
    height:100vh;
    background: #b5d4f3;
    z-index: -10;
    color: white;
    line-height:90vh;
    transition: all 0.10s
  }

  @keyframes fadeIn{
  to{
    opacity:1;
  }
}

  .fade-in{ 
    opacity:0;
    animation: fadeIn 1s ease-in forwards;
  }

  .img2{
    width: 100%;
    height: auto;

    @media (max-width:768px){ 
      width: 100%;
      height: 100%;
  }
  }

  .img1{
    width: 100%;
    height: auto;

    @media (max-width:768px){ 
      width:100%;
      height: auto;
  }
  }
`

export const ButtonStyle = styled.button`
  width: 14rem;
  height: 3.5rem;
  background: #68d9eb;
  color: black;
  border-radius: 4px;
  font-size: 1rem;
  border-width: 0px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #89c14c;
  &:hover {
    background: #89c14c;
  }
`