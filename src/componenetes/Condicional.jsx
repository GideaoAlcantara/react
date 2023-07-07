//1 PASSO
import { useState } from "react";

function Condicional(){

        const[email,setEmail]=useState()
        //aqui em baixo vai ser a parte onde ele vai passar primeiro com o email 
        const[userEmail,setUserEmail]=useState()

        function enviarEmail(props){
                   //obs preventDefault a letra D tem que ser maiuscula.
              props.preventDefault()
               //o email dentro de setUserEmail ativa o props dentro do enviarEmail que faz o setEmail receber o dado do email.
              setUserEmail(email)
              console.log(userEmail);

        }
         //essa função vai limpar a div que mosttrou o email
        function limparEmail(){
                  setUserEmail('')
            }


    return(
        <div>
             <h2>Cadastro o seu Email :</h2>
             <form>
              <input type="email" name="iemail" placeholder="digite seu email" onChange= {(props)=>setEmail(props.target.value)}/>
                <button onClick={enviarEmail}>enviar email</button>
             </form> 
             {userEmail && (
                <div>
                   <p>   o email do usuario é : {userEmail}</p>
                   <button onClick={limparEmail}>Limpar email</button>
                </div>
             )}
        </div>
    )
}

export default Condicional