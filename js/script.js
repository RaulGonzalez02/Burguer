let orderimg = document.getElementById("orderimg");
let chat = document.getElementById("chat");
let chat_close = document.getElementById("chat_close");
let home_btn = document.getElementById("home_btn");
let chat_button = document.getElementById("chat_button");
let chat_input = document.getElementById("chat_input");
let chat_items = document.getElementById("chat_items");

// Menú hamburguesa
let nav_burguerbutton = document.getElementById("nav_burguerbutton");
let nav = document.getElementById("nav");


//funciones
const mostrarmenuHamburguesa = () => {
    nav.classList.toggle("nav__show")
}

const mostrarPedido = () => {
    if (chat.classList.contains("mostrar_chat")) {
        chat.classList.remove("mostrar_chat")
        chat.classList.add("ocultar_chat")
    } else {
        chat.classList.remove("ocultar_chat")
        chat.classList.add("mostrar_chat")
    }

}

const cerrarChat = () => {
    chat.classList.remove("mostrar_chat")
    chat.classList.add("ocultar_chat")
}

const aniadirPedido = () => {
    let fragment = document.createDocumentFragment()
    if (chat_input.value != "") {
        let container_item=document.createElement("div")
        container_item.classList.add("chat__container-item--user")
        let chat_item=document.createElement("span")
        chat_item.textContent=chat_input.value
        chat_item.classList.add("chat__item--user")
        container_item.append(chat_item)
        chat_items.append(container_item)
    }
}
//listener
nav_burguerbutton.addEventListener("click", mostrarmenuHamburguesa)
orderimg.addEventListener("click", mostrarPedido)
chat_close.addEventListener("click", cerrarChat)
chat_button.addEventListener("click", aniadirPedido)
