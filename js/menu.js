import { user } from "./login.js";

/*  Ejemplo de user
const user = {
  email: "",
  usuario: "",
  password: "",
  novelas: "",
};
*/
// Botones hamburguesa
const lines = Array.from(document.querySelectorAll(".line_hamburger"));

// Movimiento de tamaño con o sin el menú
const menuHeader = document.querySelector("#menu_header");
const mainContent = document.querySelector(".main_content");

// Login menu
const ingresarBox = document.querySelector(".ingresar_box");
const registrarLink = document.querySelector(".registrar-link");
const ingresarLink = document.querySelector(".ingresar-link");
const loginIngresar = document.querySelector(".login_ingresar");
const iconoCerrarId = document.querySelector("#icono_cerrar");

document.querySelector(".hamgurger").addEventListener("click", () => {
  lines.forEach(line => line.classList.toggle("active"));
  menuHeader.classList.toggle("active");
  mainContent.style.right = (mainContent.style.right === "240px" || mainContent.style.right === "") ? "0" : "240px";
});

registrarLink.addEventListener("click", () => {
  ingresarBox.classList.add("active_ingresarBox");
});

ingresarLink.addEventListener("click", () => {
  ingresarBox.classList.remove("active_ingresarBox");
});

loginIngresar.addEventListener("click", () => {
  ingresarBox.classList.toggle("active_login_ingresar");
});

iconoCerrarId.addEventListener("click", () => {
  ingresarBox.classList.remove("active_login_ingresar");
});

//Con un usuario ingresado se cambia el nombre al que ingresaste 
const miClaseUsuarioNombre = document.querySelector(".usuario_nombre");
const miClaseEmail = document.querySelector(".usuario_email");

const pElementUsuario = document.createElement("p");
const pElementEmail = document.createElement("p");

const partesEmail = user.email.split("@");
const emailSinDominio = '@' + partesEmail[0];

pElementEmail.textContent = `${emailSinDominio}`;
pElementUsuario.textContent = user.usuario;

miClaseUsuarioNombre.appendChild(pElementUsuario);
miClaseEmail.appendChild(pElementEmail);


// Elimino el boton de ingresar
function eliminarBoton() {
  const contLoginButton = document.querySelector(".cont_login_button");
  if (user.usuario !== "") {
    contLoginButton.classList.add("login_buttonactive");
  }
}

eliminarBoton();





