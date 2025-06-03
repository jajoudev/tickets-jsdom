const $main = document.querySelector("main");
const $form = document.querySelector("form");
const $inputs = document.querySelectorAll("input");
const $buttonSubmit = document.querySelector("button");

// Formulaire
$form.addEventListener("submit", (event) => {
  event.preventDefault();
  $main.innerHTML = "";

  const $mainWrapper = document.createElement("div");
  $mainWrapper.classList.add("main-wrapper");

  const $mainWrapperInformations = document.createElement("div");
  $mainWrapperInformations.classList.add("main-informations");

  // La date d'aujourd'hui
  const date = document.createElement("p");
  date.classList.add("date");
  const today = new Date();
  const formattedDate = today.toLocaleDateString("fr-FR");
  date.textContent = formattedDate;

  // Tous les inputs
  $inputs.forEach((input) => {
    // Le nom
    if (input.name === "full-name") {
      const $mainTitleName = document.createElement("h1");
      $mainTitleName.innerHTML = `Congrats, <span class="main-title-name">${input.value}!</span> Your Ticket is Ready`;
      $mainTitleName.classList.add("main-title");

      const $fullName = document.createElement("h2");
      $fullName.textContent = input.value;
      $fullName.classList.add("name");

      $mainWrapperInformations.appendChild($fullName);
      $mainWrapper.appendChild($mainTitleName);
    }

    // L'email
    if (input.name === "email-address") {
      const $mainDescriptionEmail = document.createElement("p");
      $mainDescriptionEmail.innerHTML = `We've emailed your ticket to <span class="main-description-email">${input.value}</span> and will send updates in the run up to the event.`;
      $mainDescriptionEmail.classList.add("main-description");
      $mainWrapper.appendChild($mainDescriptionEmail);
    }

    // La photo de profil
    if (input.name === "avatar") {
      const file = input.files[0];
      console.log(file);
      const $avatarUploaded = document.createElement("img");
      $avatarUploaded.classList.add("avatar-uploaded");
      $avatarUploaded.src = URL.createObjectURL(file);
      $mainWrapperInformations.appendChild($avatarUploaded);
    }

    // Le username Github
    if (input.name === "github-username") {
      const $githubWrapper = document.createElement("div");
      $githubWrapper.classList.add("github-wrapper");
      const $githubUsername = document.createElement("span");
      $githubUsername.textContent = input.value;

      const $githubIcon = document.createElement("img");
      $githubIcon.src = "../assets/images/github.svg";

      $githubWrapper.appendChild($githubIcon);
      $githubWrapper.appendChild($githubUsername);

      $mainWrapperInformations.appendChild($githubWrapper);
    }
  });

  $main.appendChild($mainWrapper);
  $mainWrapper.appendChild($mainWrapperInformations);
  $mainWrapper.appendChild(date);
});
