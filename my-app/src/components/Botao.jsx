function Botao(){
   function mostrarMensagem(){

    alert("Botão Clicado!")
}
   
    return(
    
    <div>
        <button onClick={mostrarMensagem}>Clique Aqui</button>
    </div>

    )
} export default Botao
