import React, { useState } from 'react';

// styles
import './style.css';

// components
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// images
import logoImg from '../../assets/logo.svg';

// apis
import api from '../../services/api';


export default function Register() {

  // fix style
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

  // variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  // redireciona para uma rota da aplicacao
  const history = useHistory();

  // funcoes
  async function handleRegister(e) {
    e.preventDefault();

    // dados enviados
    const data = {
      name, email, whatsapp, city, uf
    };


    try {
      // enviar para api
      const response = await api.post('ongs', data);
      alert('Cadastro com sucesso , ID de acesso é ' + response.data.id);

      history.push('/');

      // caso tenha erro
    } catch (error) {
      alert('Não foi possivel fazer o cadastro :( ' + error);
    }

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
        <form onSubmit={handleRegister}>
          <input placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input type="email" placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input placeholder="whatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input placeholder="UF"
              style={{ width: 80 }}
              maxLength={2}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div >
  )
}