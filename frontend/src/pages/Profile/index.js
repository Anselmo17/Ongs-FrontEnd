import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

//components
import { FiPower, FiTrash2 } from 'react-icons/fi';

// styles
import './style.css';

// imgs
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function Profile() {

  // redirect
  const history = useHistory();

  //variables state
  const [incidents, setIncidents] = useState([]);

  // busca os dados no localStorage
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId')

  // funcoes

  // executa toda vez q chama a page
  useEffect(() => {

    // busca os dados profile
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    })
      .then((response) => {
        setIncidents(response.data);
      })
      .catch((error) => {
        alert("Houve um erro: " + error);
      })

  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      // filtra os dado diferente do id passado
      setIncidents(incidents.filter(incident => incident.id !== id));
      alert('Deletado com sucesso !!!');

    } catch (error) {
      alert('Erro ao deletar , tente novamente');
    }
  }

  
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Bem vindo, {ongName}</span>

        <Link className="button" to="/incident/new" >Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {
          incidents.map(incident => (
            <li key={incident.id}>
              <strong>Caso</strong>
              <p>{incident.title}</p>

              <strong>Descricões</strong>
              <p>{incident.description}</p>

              <strong>Valor:</strong>
              <p>{incident.value}</p>

              <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}