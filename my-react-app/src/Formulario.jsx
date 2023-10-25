import { useState } from 'react';
import './Formulario.css';

function Formulario() {
  
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [localizacao, setLocalizacao] = useState(''); 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Localização:', localizacao);
  };
  return (
    <div>
      <h2>Formulário de Informações Pessoais</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="localizacao">Localização:</label>
          <input
            type="text"
            id="localizacao"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default Formulario;