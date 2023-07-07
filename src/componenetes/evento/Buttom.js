
               //props => elemento pai
function Buttom(props){

//Caso no return tiver só uma tag , ex:'button', não precisa usar () no return.
//aqui em aiixo é o componente pai
    return(
        <div>
             <button onClick={props.event}>{props.text}</button>  
        </div>
    )
}

export default Buttom