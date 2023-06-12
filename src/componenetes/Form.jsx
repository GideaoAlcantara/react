//Eventos com Formuarios

function Form() {
    
    function cadastrarUsuario(evento) {
        //vai salvar e  preencher o dados para console do navegador
        evento.preventDefault()
        console.log("Cadastrou o usúario");
    }

    return(
        <div>
             <h1>Meu Cadastro</h1>
             <form onSubmit={cadastrarUsuario}>
                 <div>
                 <label htmlFor="txt">Digite seu Nome:</label>
                 <input type="text" name="txt" id="txt" placeholder="Nome Sobrenome"/>
                 </div>
                 <div>
                      <input type="submit" value="Cadastrar"/>
                 </div>
             </form>
        </div>
    )
}

export default Form