import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonStyle, HomeStyle } from './HomeStyles';
import image5 from '../../assets/images/image5.jpg'
import { SiYourtraveldottv } from 'react-icons/si'

function Home() {

  document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
      const splash = document.getElementById('splash')
      splash.classList.add('display-none')
    }, 2000)
  })

  
  return (
    <>
      <HomeStyle>
        <div className="splash" id="splash">
          <SiYourtraveldottv className="fade-in" size={130} style={{color: '#3a4ccd', margin: 'auto' }} />
        </div>
        
          <div className="flex align-center justify-center">
            <SiYourtraveldottv size={80} style={{color: '#3a4ccd', marginTop:'4rem' }}/> 
            <h1>Turismo em Santa Catarina!</h1>
              <Link to={'/reserves'}>
                <ButtonStyle> Reservas & Parques</ButtonStyle>
              </Link>

              <img className="img1" src={image5} alt="Home"/>
              <p>Conheça as reservas naturais de SC!</p>    
          </div>    
        </HomeStyle>
    </>
  );
}

export default Home;
