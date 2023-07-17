
function RendDeLista({itens}) {
    

    return(
        <>
             <h3>Lista de coisa Boas</h3>
             
             {itens.lenght != 0 ? (
                //aqui estar marpeando cada item
                //na funcao map terá como argumento o proprio itens
                //o index é o indice do elemento
                itens.map((item,index)=>(

                    <p key={index}> {item} </p>

                ))) : (
                    <p>Não há itens na lista</p>
                )
             }
        </>
    )
}

export default RendDeLista

//as {} dentro do return serve para fazer javascript 
//as () na function em map item é usado no return em JSX