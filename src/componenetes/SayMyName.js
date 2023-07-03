//PROPS FICA DENTRO DA FUNÇAO ()
//o name é atributo do props ,na qual ele vai receber dados

function SayMyName(props) {
     
    return(
        <>
          <div>
            <p>------------------------------------</p>
              <p>Fala aí {props.nome}, suave?</p>
              <p>numero: {props.numero}</p>
              <p>testando importação</p>
              <p>----------------------------------</p>
          </div>
        </>
    )
}

export default SayMyName

SayMyName.defaultProps={
     nome:'josiane',
     numero:190
}