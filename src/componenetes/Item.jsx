import  PropTypes from "prop-types"
        //P maisúsculo
function Item(props) {
  
    return(
           <>
              <li>{props.marca} - {props.ano_lancamento}</li>
           </>
    )
}

//é uma propriedade do componente
//fazendo isso não pode mudar a string do props para number

//Item.prototype = {
   // marca: PropTypes.string,
   // ano_lancamento: PropTypes.number
//}
   //P minúsculo

Item.defaultProps = {
    marca: 'faltou a marca',
    ano_lancamento: 0,
}
export default Item