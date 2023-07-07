//Eventos com Formuarios


//--------- 1 EXEMPLO : JA DEIXAR O NOME PRESENTE NA CAIXA DE TEXTO -------------

//1 PASSO = ADD IMPORT USESTATE

import { useState } from "react";

function Form() {
    
    function cadastrarUsuario(evento) {
        //vai salvar e  preencher o dados para console do navegador
        evento.preventDefault()
        //3 PASSO = ADD LOG(NAME)
        //name serve para  reserta valor
        console.log(name);
        console.log("Cadastrou o usúario");
    }

    const [name, setName] = useState('Gilberto')

    return(
        <div>
             <h1>Meu Cadastro</h1>
             <form onSubmit={cadastrarUsuario}>
                 <div>
                 <label htmlFor="name">Nome:</label>
                 <input 
                 type="text" 
                 id="name" 
                 name="name"
                  placeholder="digite seu nome"
                  //2 PASSO = aqui indica que a cada letra que coloca modifica o useState
                  //setName serve para atribui
                  onChange={(evento) => setName(evento.target.value)}
                  //ja vem com o nome 'Gilberto' dentro de  const [name, setName] = useState('Gilberto')
                  value={name}/>
                 </div>
                 <div>
                 <label htmlFor="senh">Senha:</label>
                 <input type="password"
                        id="senh" 
                        name="senh"
                        placeholder="digite sua senha"/>
                 </div>
                 <div>
                 <input type="submit" value="Cadastrar"/>
                 </div>
             </form>
        </div>
    )
}

export default Form



// 2 EXEMPLO -> RESUMO FINAL 

//1 PASSO = ADD IMPORT USESTATE
/*
import { useState } from "react";

function Form() {
    
    function cadastrarUsuario(evento) {

        //vai salvar e  preencher o dados para console do navegador

        evento.preventDefault()

        //isso aqui serve para aviso no BackEnd  

        console.log(`usuario ${name} foi cadastrado com a senha ${password}`);
    }

    // 1 PARTE -> VARIAVEL + VARIAVEL QUE ATUALIZA

    const [name, setName] = useState()

    const [password,setPassword] = useState()

    return(
        <div>
             <h1>Meu Cadastro</h1>
             <form onSubmit={cadastrarUsuario}>

                 <div>
                     <label htmlFor="name">Nome:</label>
                     <input 
                             type="text" 
                             id="name" 
                             name="name"
                             placeholder="digite seu nome"
                             //2 PASSO = aqui indica que a cada letra que coloca modifica o useState
                             //setName serve para atribui
                             onChange={(evento) => setName(evento.target.value)}/>
                 </div>

                 <div>
                     <label htmlFor="senh">Senha:</label>
                     <input 
                            type="password"
                            id="senh" 
                            name="senh"
                            placeholder="digite sua senha"
                            onChange={(evento) => setPassword(evento.target.value)}/>
                 </div>

                 <div>
                      <input type="submit" value="Cadastrar"/>
                 </div>

             </form>
        </div>
    )
}

export default Form*/

/**
 ---RESUMO DA AULA DE USESTATE

 Nesse exemplo, o useState é usado para criar um estado chamado 'nome' e inicializá-lo como 'undefined'. A função 'setNome' é usada para atualizar o valor desse estado.



Quando o usuário digita algo no campo de input e aciona o evento 'onChange', a função '(e) => setNome(e.target.value)' é chamada. O evento 'onChange' é acionado sempre que o valor do campo de input muda. O parâmetro '(e)' representa o evento em si e contém informações sobre ele, como o valor digitado no campo de input.



Dentro da função '(e) => setNome(e.target.value)', estamos usando 'e.target.value' para obter o valor digitado no campo de input e passá-lo para a função 'setNome'. Assim, o valor do estado nome é atualizado com o valor digitado pelo usuário.



Quando o formulário é enviado, a função 'cadastrarUsuario' é chamada. Nesse exemplo, estamos apenas imprimindo no console uma mensagem com o valor atual do estado nome.



Dessa forma, o useState permite armazenar e atualizar o valor digitado pelo usuário no campo de input, mantendo-o acessível para outras partes do componente ou para ser usado em outras funcionalidades.
 */


