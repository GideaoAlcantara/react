 import PropTypes from "prop-types"

 function Evento({num}) {
    
    function meuEvento(){
        console.log(`opá ! Fui Ativado seu ${num}`);
    }

    return(
        <>
          <div>
                <p>clique para disparar um evento:</p>
                <button onClick={meuEvento}>Ativar</button>
          </div>
        </>
    )
 }

 export default Evento

 Evento.prototype={
    num:PropTypes.number
 }