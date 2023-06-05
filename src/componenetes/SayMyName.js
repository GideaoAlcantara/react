//PROPS FICA DENTRO DA FUNÇAO ()
//o name é atributo do props ,na qual ele vai receber dados

function SayMyName(props) {
   
    return(
        <div>
            <p>Fala aí {props.nome}, suave?</p>
        </div>
    )
}

export default SayMyName