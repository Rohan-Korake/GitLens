import { createField } from "./createField.js";
import { renderProfile } from "./renderProfile.js";

document.addEventListener("DOMContentLoaded", () => {
  const fetchbutton = document.getElementById("fetchbutton");
  fetchbutton.addEventListener("click", () => {
    const inputUserName = document.getElementById("inputUserName").value;
    const workingStatus = document.getElementById("workingStatus");
    const progressBar = document.getElementById("progressBar");

    if (inputUserName == "") {
      workingStatus.innerText = "Enter GitHub Username ";
      return;
    }

    toggleBlock("status");
    const requestUrl = `https://api.github.com/users/${inputUserName}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestUrl);

    xhr.onreadystatechange = async function () {
      if (xhr.readyState === 1) {
        workingStatus.innerText = "Connecting...";
        progressBar.style.width = "25%";
      }
      if (xhr.readyState === 2) {
        workingStatus.innerText = "Request sent...";
        progressBar.style.width = "50%";
      }
      if (xhr.readyState === 3) {
        workingStatus.innerText = "Fetching data...";
        progressBar.style.width = "75%";
      }
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          progressBar.style.width = "100%";
          const data = JSON.parse(this.responseText);
          await sleep(1000);
          progressBar.style.width = "0%";
          createField();
          renderProfile(data);
        } else {
          workingStatus.innerText = "Failed to fetch user data.";
          progressBar.style.width = "0%";
        }
      }
    };
    xhr.send();
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function toggleBlock(blockName) {
  const infoContainer = document.getElementById("infoContainer");
  const workingStatus = document.getElementById("workingStatus");

  if (blockName == "status") {
    infoContainer.style.animation = "hiddenAnimation 1 0.4s ease";
    infoContainer.addEventListener("animationend", () => {
      infoContainer.style.display = "none";
      workingStatus.style.display = "flex";
    });

    workingStatus.style.animation = "showAnimation 1 0.6s ease";
    workingStatus.addEventListener("animationend", () => {
      workingStatus.style.display = "flex";
      infoContainer.style.display = "none";
    });
    return;
  }

  if (blockName == "info") {
    workingStatus.style.animation = "hiddenAnimation 1 0.6s ease";
    workingStatus.addEventListener("animationend", () => {
      workingStatus.style.display = "none";
      infoContainer.style.display = "flex";
    });

    infoContainer.style.animation = "showAnimation 1 0.6s ease";
    infoContainer.addEventListener("animationend", () => {
      infoContainer.style.display = "flex";
      workingStatus.style.display = "none";
    });
  }
}
