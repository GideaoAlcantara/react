//lado de fora da function serve para importar coisa


import logo from './logo.svg';
import './App.css';
import helloword from './componenetes/helloword'
import SayMyName from './componenetes/SayMyName';
import Pessoa from './componenetes/Pessoa';

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

  //aqui podemos criar um atributo pra pronts
  const nome="José"

  return (
    
    <div className="App">
      <header className="App-header">
        
         <span>{helloword()}</span>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloade.
        </p>

        <SayMyName nome="Mateus"/>
        <SayMyName nome="Maria"/>
        <SayMyName nome={nome}/>

        <Pessoa 
        nome="teo"
        idade="28"
        profissao="Prof" 
        foto="https://via.placeholder.com/150" />
        

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
