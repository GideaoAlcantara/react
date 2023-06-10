//FRAGMENTOS -> CRIAR UM COMPONENTE SEM ELEMENTO PAI
//USA-SE <>  </>

import Item from './Item';

function List() {
    

    return(
        <>
              <h2>Minha Lista</h2>
              <ul>
                  <Item />
                  <Item marca="ferrari" ano_lancamento={1973}/>
                 <Item marca="ferrari" ano_lancamento={1973}/>
                 <Item marca="ferrari" ano_lancamento={1973}/>
              </ul>
        </>
    )
}

export default List 