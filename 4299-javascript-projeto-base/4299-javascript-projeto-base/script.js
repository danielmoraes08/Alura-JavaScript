const inputItem = document.getElementById("input-item");
let contador = 0;
const listaDeCompras = document.getElementById("lista-de-compras");

const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.addEventListener("click",  (evento) => {
    evento.preventDefault();
    if (inputItem.value === "") {
        alert("Por favor, insira um item.");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerLista = document.createElement("div");
    containerLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", () => {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    containerLista.appendChild(inputCheckbox);
    containerLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerLista);
    
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: 'long'});
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", {hour: 'numeric', minute: 'numeric'});
    const dataCompleta = `${diaDaSemana} (${data})  às ${hora}`;
    itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemDaLista.appendChild(itemData);
    itemData.classList.add("texto-data");

    
    listaDeCompras.appendChild(itemDaLista);

    

})
