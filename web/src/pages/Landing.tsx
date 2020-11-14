import React from 'react';
import '../styles/pages/landing.css';
import logoImg from '../images/logoeclipse.svg';
import {Link} from 'react-router-dom';

function Landing() {
    return (
        <div id="page-landing">
          <div className="content-wrapper">
              <img src={logoImg} alt="Miguéis"/> 
    
              <main>
              <h1>Bem Vindo</h1>
              <h2>Cardápio</h2>
              </main>
              <Link to="app" className="enter-app">
            
                
                </Link>
            </div>
        </div>
      );
    }

export default Landing;
