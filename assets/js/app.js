const $main = document.querySelector("main");
const $form = document.querySelector("form");
const $inputs = document.querySelectorAll("input");
const $buttonSubmit = document.querySelector("button");

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  $main.innerHTML = "";

  const $mainWrapper = document.createElement("div");
  $mainWrapper.classList.add("main-wrapper");

  const $mainWrapperInformations = document.createElement("div");
  $mainWrapperInformations.classList.add("main-informations");

  $inputs.forEach((input) => {
    checkInputs(input);
  });

  function checkInputs(input) {
    if (input.name === "full-name") {
      if (!input.value) {
        const $mainTitleName = document.createElement("h1");
        $mainTitleName.innerHTML = "Undefined";
        $mainTitleName.classList.add("main-title");

        const $fullName = document.createElement("h2");
        $fullName.textContent = "No name provided";
        $fullName.classList.add("name");

        $mainWrapperInformations.appendChild($fullName);
        $mainWrapper.appendChild($mainTitleName);
      } else {
        const $mainTitleName = document.createElement("h1");
        $mainTitleName.innerHTML = `Congrats, <span class="main-title-name">${input.value}!</span> Your Ticket is Ready`;
        $mainTitleName.classList.add("main-title");

        const $fullName = document.createElement("h2");
        $fullName.textContent = input.value;
        $fullName.classList.add("name");

        $mainWrapperInformations.appendChild($fullName);
        $mainWrapper.appendChild($mainTitleName);
      }
    }

    // L'email
    if (input.name === "email-address") {
      if (!input.value) {
        const $mainDescriptionEmail = document.createElement("p");
        $mainDescriptionEmail.innerHTML = `You not provided an email`;
        $mainDescriptionEmail.classList.add("main-description");
        $mainWrapper.appendChild($mainDescriptionEmail);
      } else {
        const $mainDescriptionEmail = document.createElement("p");
        $mainDescriptionEmail.innerHTML = `We've emailed your ticket to <span class="main-description-email">${input.value}</span> and will send updates in the run up to the event.`;
        $mainDescriptionEmail.classList.add("main-description");
        $mainWrapper.appendChild($mainDescriptionEmail);
      }
    }

    // La photo de profil
    if (input.name === "avatar") {
      if (!input.value) {
        const $notAvatarText = document.createElement("p");
        $notAvatarText.textContent = "You don't put an image";
        $notAvatarText.classList.add("not-avatar-text");
        $mainWrapperInformations.appendChild($notAvatarText);
      } else {
        const file = input.files[0];
        const $avatarUploaded = document.createElement("img");
        $avatarUploaded.classList.add("avatar-uploaded");
        $avatarUploaded.src = URL.createObjectURL(file);
        $mainWrapperInformations.appendChild($avatarUploaded);
      }
    }

    // Le username Github
    if (input.name === "github-username") {
      if (!input.value) {
        const $githubWrapper = document.createElement("div");
        $githubWrapper.classList.add("github-wrapper");
        const $githubUsername = document.createElement("span");
        $githubUsername.textContent = "No github username";

        const $githubIcon = document.createElement("img");
        $githubIcon.src = "../assets/images/github.svg";

        $githubWrapper.appendChild($githubIcon);
        $githubWrapper.appendChild($githubUsername);

        $mainWrapperInformations.appendChild($githubWrapper);
      } else {
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
    }
  }

  function displayDate() {
    const date = document.createElement("p");
    date.classList.add("date");
    const today = new Date();
    const formattedDate = today.toLocaleDateString("fr-FR");
    date.textContent = formattedDate;
    $mainWrapper.appendChild(date);
  }

  $main.appendChild($mainWrapper);
  $mainWrapper.appendChild($mainWrapperInformations);

  displayDate();
});
