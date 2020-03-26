import React from 'react';

import './style.css';

// components
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

// images
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';



export default function Logon(params) {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        {/* formulario de login */}
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>

          <Link className=".back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
              Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
};