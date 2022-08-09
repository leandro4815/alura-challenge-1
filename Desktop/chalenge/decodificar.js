function botaoDecodificar (){
    const textoDecodificado = decodificar(mensagem.value);
    inputTexto.value = textoDecodificado;

    function decodificar (stringDecodificada){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        
        stringDecodificada = stringDecodificada.toLowerCase();
    
        for ( let i= 0; i < matrizCodigo.length; i++){
            
                stringDecodificada = stringDecodificada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            
            
        }
        return stringDecodificada;
    
    }
}