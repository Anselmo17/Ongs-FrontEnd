import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

//icons
import { FiArrowLeft } from 'react-icons/fi';

//apis
import api from '../../services/api'

// styles
import './style.css';


//img
import logoImg from '../../assets/logo.svg';


export default function NewIncident() {


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const history = useHistory()

  const ongId = localStorage.getItem('ongId')

  async function handleNewIncident(e) {
    e.preventDefault()

    // adiciona os dados
    const data = {
      title,
      description,
      value,
    }

    // cadastra os dados
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      })

      alert('Cadastro com sucesso!!!');

      // redirect
      history.push('/profile')
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

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
        <form onSubmit={handleNewIncident}>
          <input placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />

          <textarea placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)} />

          <input placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)} />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div >
  )
};