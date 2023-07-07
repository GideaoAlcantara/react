//AULA DE METODOS PROPS

import Buttom from "./evento/Buttom";


function Eventu(){

         function meuEventu(){

             console.log(`add no carrinho`);

         }

         function segundoEvento(){

            console.log('add favorito');
            
         }

          /** AQUI VAI MUDAR O TEXTO DO BUTÃO APARTE DESSE EVENTO 
           * <button onClick={meuEventu}>clicar</button>
           * 
          */
    return(
       <div>
            <p>clique para disparar evento 02</p>

            <Buttom event={meuEventu} text='carrinho de compras' />

            <Buttom event={segundoEvento} text='estrela de favoritos' />

       </div>
    )
}

export default Eventu 