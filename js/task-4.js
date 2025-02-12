
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  console.log(e);
  e.preventDefault();

  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  };

  const data = {
    email,
    password,
  };

  console.log(data);

  form.reset();
};