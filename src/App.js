//lado de fora da function serve para importar coisa


import logo from './logo.svg';
import './App.css';

function App() {
  //a function é algo resolve tudo aqui

  //1EX -> const namo = 'gil' vai ser add na tag P com{namo}
  const namo = 'gil'
  const namu = namo.toUpperCase()
  //2EX -> dentro do returne dar pra somar
  //3EX -> pode criar uma function dentro da function

  function sum(a,b) {
    return a * b
  }

  //4EX -> alteração de atributo por exemplo uma imagem da internet
  const url = 'https://via.placeholder.com/150'

  //obs: só pode ter até 2 elemento pai ! como por ex div > header 
  //obs: aqui usa CLASSNAME ,que é diferente na HTML

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloade.
        </p>

        

        <p>olá,{namu}</p>

        <p>soma: {2+2}</p>

        <p>multiplica: {sum(3,3)}</p>

        <img src={url} alt="minha imagem"/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
