/*
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

--------------------------------
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

*/


//lado de fora da function serve para importar coisa


import './App.css';
//import helloword from './componenetes/helloword'
import SayMyName from './componenetes/SayMyName';
//import Pessoa from './componenetes/Pessoa';
//import frase from './componenetes/frase'
import List from './componenetes/List';
import Evento from './componenetes/Evento'
import Form from './componenetes/Form'
import Eventu from './componenetes/Eventu';
import Condicional from './componenetes/Condicional';
import RendDeLista from './componenetes/RendDeLista';

function App() {
   const nome = '1 exemplo'
   const namu = nome.toUpperCase()
  let nn="jucano"               
                                  //aqui em baixo seria um objeto mais completo
                                  /*{framework:'x',alunos:123}*/
const meuItens=['react','php','html','css','javascript']//1 lista esse array
  return (
            
    <div className="App">
      <header className="App-header">
         <Condicional/>
         <p>{namu}</p>
         <SayMyName/>
        <Evento num ="1"/>
        <Evento num ="2"/>
        <List />
        <Form/>
        <Eventu/>
        <RendDeLista itens={meuItens}/>
        <RendDeLista itens={[]}/>
      </header>
    </div>

   
  );
}

export default App; 




