import React, { useState } from 'react';

import './style.css';

// apis
import api from '../../services/api';

// components
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

// images
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';



export default function Logon() {

  // variables
  const [id, setId] = useState('');

  // redirect
  const history = useHistory();


  async function handleLogin(e) {

    e.preventDefault();

    try {
      const response = await api.post('session', { id });

      // salva no localStorage
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      //redirect router
      history.push('/profile');

      // caso erro
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  };

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        {/* formulario de login */}
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

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