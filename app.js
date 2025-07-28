// La función crea directamente un elemento nuevo con un texto dado.
function ElementoNuevo(tipo, texto){
        let elementoParaAdicionar = document.createElement(tipo);
        elementoParaAdicionar.textContent = texto;
        return elementoParaAdicionar;
};

function agregarAmigo(){

    // Selecciono el elemento donde es presentado el resultado para verificar si no está vacío y entonces limpiar el texto interno.
    let cuadroResultado = document.getElementById("resultado");
    (cuadroResultado.innerHTML.length) && (cuadroResultado.innerHTML = "");

    // Obtengo el objeto de cuadro de texto donde serán ingresados los nombres.
    const cuadroTexto = document.getElementById("amigo"); cuadroTexto.value.trim();

    // Verifico que el cuadro de texto no esté vacío, para entonces añadir su contenido en la lista donde se muestran los nombres.
    if(cuadroTexto.value){
        document.getElementById("listaAmigos").appendChild(ElementoNuevo("li",cuadroTexto.value));
        cuadroTexto.value = "";
    } else{
        alert("Ingresa un nombre válido.");
    }
};

// Usando la longitud de un arreglo, establece el rango del número aleatorio de acuerdo a su valor máximo de índice.
function numeroAleatorio(arreglo){
    return Math.floor(Math.random()*arreglo.length);
};

function sortearAmigo(){
    // Toma las etiquetas internas dentro de un arreglo
    let ListaDeAmigos = document.getElementById("listaAmigos");
    const ArrayListaDeAmigos = Array.from(ListaDeAmigos.children);

    // Se verifica que hayan etiquetas
    if (ArrayListaDeAmigos.length){
        // Es escogido un número aleatorio de índice del arreglo y se obtiene el texto interno del elemento elegido.
        const anuncioAmigoSorteado = `El amigo secreto sorteado es: ${ArrayListaDeAmigos[numeroAleatorio(ArrayListaDeAmigos)].textContent}`;
        document.getElementById("resultado").appendChild(ElementoNuevo("li",anuncioAmigoSorteado));

        // Al anunciar el amigo secreto sorteado, la lista de amigos es limpiada.
        ListaDeAmigos.innerHTML = "";
    } else{
        alert("La lista de amigos esta vacía.");
    }
};

