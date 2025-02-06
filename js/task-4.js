
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  console.log(event);
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  };

  const data = {
    email: email,
    password: password,
  };

  console.log(data);

  form.reset();
};
