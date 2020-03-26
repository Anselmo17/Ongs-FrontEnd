import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { FiArrowLeft } from 'react-icons/fi';

// styles
import './style.css';


//img
import logoImg from '../../assets/logo.svg';


export default function NexIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastra novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
              Voltar para Home
          </Link>
        </section>

        {/* formulario Incidents*/}
        <form>
          <input placeholder="Título do caso" />
          <textarea type="email" placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div >
  )
};