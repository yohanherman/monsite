console.log("bb");
//gestion d'erreur
const form = document.querySelector("form");
const errorElement = document.querySelector("#error");

const validate = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  if (formIsValid(data)) {
    const json = JSON.stringify(data);

    fetch("http://localhost:3000/commentaires", {
      method: "POST",
      body: json,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
};

const formIsValid = (data) => {
  let errors = [];
  if (!data.name || !data.commentaire) {
    errors.push("veuillez renseigner tous les champs");
  } else {
    errors = [];
  }

  if (errors.length) {
    let errorHTML = "";
    errors.forEach((e) => {
      errorHTML += `<li>${e}</li>`;
    });
    errorElement.innerHTML = errorHTML;
    return false;
  } else {
    errorElement.innerHTML = "";
    return true;
  }
};

form.addEventListener("submit", validate);
