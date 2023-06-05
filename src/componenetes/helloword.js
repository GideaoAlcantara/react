import frase from './frase'


//OBS01; nomalmente o nome da function tem o mesmo do arquivo

function helloword() {
    
    return (
        <div>
            <span>{frase()}</span>
            <span>{frase()}</span>
            <span>{frase()}</span>
            <h1>Meu primeiro componente</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex blanditiis, vero dignissimos mollitia quod esse voluptas dolorem dicta aliquid laudantium molestiae iure tempore quibusdam. Repudiandae maiores debitis veniam quo.</p>
        </div>
    )
}

//OBS02; serve para exportar a funcão
export default helloword