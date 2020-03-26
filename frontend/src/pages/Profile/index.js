import React from 'react';
import { Link } from 'react-router-dom';

//components
import { FiPower, FiTrash2 } from 'react-icons/fi';

// styles
import './style.css';

// imgs
import logoImg from '../../assets/logo.svg';



export default function Register() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Bem vindo, Ongs</span>

        <Link className="button" to="/incident/new" >Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>Caso</strong>
          <p>Caso teste</p>

          <strong>Descricões</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>

        <li>
          <strong>Caso</strong>
          <p>Caso teste</p>

          <strong>Descricões</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>

        <li>
          <strong>Caso</strong>
          <p>Caso teste</p>

          <strong>Descricões</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
      </ul>
    </div>
  )
}