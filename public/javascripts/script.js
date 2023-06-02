//gestion d'erreur
const form = document.querySelector("form");
const errorElement = document.querySelector("#error");
let errors = [];

const validate = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  if (formIsValid(data)) {
    const json = JSON.stringify(data);
    //fetch()
  }
};

const formIsValid = (data) => {
  if (!data.name || !data.commentaire) {
    errors.push("renseigner tous les champs");
  } else {
    errors = [];
  }

  if (errors.length) {
    let errorHTML = "";
    errors.forEach((e) => {
      errorHTML += `<li>${e}</li>`;
    });
    errorElement.innerHTML = errorHTML;
  } else {
    errorElement.innerHTML = "";
  }
};

form.addEventListener("submit", validate);
