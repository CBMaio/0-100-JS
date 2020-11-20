const ids = ["name", "lastname", "email", "password"];
let user = {};

const showPassword = () => {
  const password = document.getElementById("password");
  password.type === "password"
    ? (password.type = "text")
    : (password.type = "password");
};

const hideForm = () => {
  const form = document.getElementById("form-container");
  form.classList.add("hidden");
};

const showUser = () => {
  const userBox = document.getElementById("user-container");
  userBox.classList.add("show");
  const title = document.getElementById("welcome-title");
  const emailUser = document.getElementById("email-user");
  title.innerText = user.name || "Bienvenido Usuario";
  emailUser.innerHTML = user.email;
};

const register = () => {
  for (id of ids) {
    const element = document.getElementById(id).value;
    user[id] = element;
  }
  hideForm();
  showUser();
};

const goBack = () => {
  const userBox = document.getElementById("user-container");
  userBox.classList.remove("show");
  const form = document.getElementById("form-container");
  form.classList.remove("hidden");
};
