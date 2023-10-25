import { useState } from "react";
import "./App.css"

function Livro(props) {
  const [mostrarAutor, setMostrarAutor] = useState(false);

  const alternarAutor = () => {
    setMostrarAutor(!mostrarAutor);
  };

  return (
    <div>
      <img
        src={props.imagem}
        alt="Capa do Livro"
      />
      <h2 onClick={alternarAutor}>
        {mostrarAutor ? `Nome do autor: ${props.autor}` : props.nome}
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="Menu">
        <nav>
          <ul>
            <li>
              <a href="./Home">Home</a>
            </li>
            <li>
              <a href="/Formulario">Formulário</a>
            </li>
            <li>
              <a href="/Contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        
        </div>
        <br></br>
      <header>RM98413 RM550684 RM552310</header>
      <h1>Seja Bem-Vindo a nossa livraria</h1>
      <Livro nome="Dom Quixote" autor="Miguel de Cervantes" imagem="./Domquixote.jpg" />
      <Livro nome="Moby Dick" autor="Herman Melville" imagem="./mobyDick.jpg" />
      <Livro nome="Robinson Crusoe" autor="Daniel Defoe" imagem="./RobinsonCrusoe.jpg" />
      <Livro nome="O lobo do Mar" autor="Jack London" imagem="./OloboDomar.jpg" />
      <Livro nome="A Ilha Misteriosa" autor="Jules Verne" imagem="./aIlhaMisteriosa.jpg" />
      <Livro nome="O Chamado Selvagem" autor="Jack London" imagem="./Ochamado.jpg" />
      <Livro nome="A Ilha do Tesouro" autor="Robert Louis Stevenson" imagem="./AilhaTesouro.jpg" />
    </div>
  );
}

export default App;