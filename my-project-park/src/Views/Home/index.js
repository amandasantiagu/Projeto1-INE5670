import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ButtonStyle, HomeStyle } from './HomeStyles';
import image5 from '../../assets/images/image5.jpg'
import image6 from '../../assets/images/image6.jpg'

function Home() {

  document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
      const splash = document.getElementById('splash')
      splash.classList.add('display-none')
    }, 2000)
  })

  
  return (
    <>
      <HomeStyle className="pt-4" >
        <div className="splash" id="splash">           
          <img className="img2" src={image6} alt="Home"/>
        </div>
            <h1 >Turismo em Santa Catarina!</h1>
            <Link to={'/reserves'}>
              <ButtonStyle> Reservas & Parques</ButtonStyle>
            </Link>

            <img className="img1" src={image5} alt="Home"/>
            <p>Conheça as reservas naturais de SC!</p>    
        </HomeStyle>
    </>
  );
}

export default Home;
