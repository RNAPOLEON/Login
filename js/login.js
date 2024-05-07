export const user = {
  email: "",
  usuario: "",
  password: "",
  novelas: "",
};

// Función para guardar los datos del usuario en el almacenamiento local
const guardarUsuarioEnAlmacenamiento = () => {
  localStorage.setItem("user", JSON.stringify(user));
};

// Función para obtener los datos del usuario del almacenamiento local
const obtenerUsuarioDeAlmacenamiento = () => {
  const usuarioGuardado = localStorage.getItem("user");
  return JSON.parse(usuarioGuardado);
};

// Obtener los datos del usuario del almacenamiento local al cargar la página
const usuarioGuardado = obtenerUsuarioDeAlmacenamiento();
if (usuarioGuardado) {
  user.email = usuarioGuardado.email;
  user.usuario = usuarioGuardado.usuario;
  user.password = usuarioGuardado.password;
}

const btnLogin = document.getElementById("login_button");
const btnRegister = document.getElementById("register_button");

btnLogin.addEventListener("click", () => {
  const userEncontrado = basedatos.find(
    (el) => el.usuario === user.usuario && el.password === user.password
  );
  alert(userEncontrado ? "encontrado" : "No estas registrado Pa");
  console.log(userEncontrado);
});

btnRegister.addEventListener("click", () => {
  inputRegistro.forEach((el) => {
    user.email = el.name === "email" ? el.value : user.email;
    user.usuario = el.name === "usuario" ? el.value : user.usuario;
    user.password = el.name === "password" ? el.value : user.password;
  });
  guardarUsuarioEnAlmacenamiento();
  alert(`${user.email} ${user.usuario} ${user.password}`);
  console.log(user);
});

const inputIngreso = document.querySelectorAll(".inputIngreso");
const inputRegistro = document.querySelectorAll(".inputRegistro");

inputIngreso.forEach((el) => {
  el.addEventListener("input", (e) => {
    user.email = e.target.name === "email" ? e.target.value : user.email;
    user.password = e.target.name === "password" ? e.target.value : user.password;
    guardarUsuarioEnAlmacenamiento();
  });
});

inputRegistro.forEach((el) => {
  el.addEventListener("input", (e) => {
    user.usuario = e.target.name === "nombreUs" ? e.target.value : user.usuario;
    guardarUsuarioEnAlmacenamiento();
  });
});

const inputPassword = document.querySelector("#contraseña");

inputPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    btnLogin.click();
  }
});

const inputPassword2 = document.querySelector("#contraseña");

inputPassword2.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    btnRegister.click();
  }
});
