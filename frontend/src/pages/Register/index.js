import React from 'react';

// styles
import './style.css';

// components
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// images
import logoImg from '../../assets/logo.svg';


export default function Register() {

  const back = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '40px',
    color: '#41414d',
    fontSize: '18px',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'opacity 0.2s'
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
          </p>

          <Link style={{ ...back }} to="/">
            <FiArrowLeft size={16} color="#e02041" />
              Voltar
          </Link>
        </section>

        {/* formulario ONG*/}
        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="email" />
          <input placeholder="whatsApp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div >
  )
}