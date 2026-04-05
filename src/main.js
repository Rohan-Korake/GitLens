import { createField } from "./createField.js";
import { renderProfile } from "./renderProfile.js";

document.addEventListener("DOMContentLoaded", () => {
  const fetchbutton = document.getElementById("fetchbutton");
  fetchbutton.addEventListener("click", () => {
    const inputUserName = document.getElementById("inputUserName").value;
    const workingStatus = document.getElementById("workingStatus");

    if (inputUserName == "") {
      workingStatus.innerText = "Enter GitHub Username ";
      return;
    }

    document.getElementById("workingStatus").style.display = "flex";
    document.getElementById("infoContainer").style.display = "none";

    const requestUrl = `https://api.github.com/users/${inputUserName}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestUrl);

    xhr.onreadystatechange = async function () {
      if (xhr.readyState === 1) {
        workingStatus.innerText = "Connecting...";
      }
      if (xhr.readyState === 2) {
        workingStatus.innerText = "Request sent...";
      }
      if (xhr.readyState === 3) {
        workingStatus.innerText = "Fetching data...";
      }
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(this.responseText);
          await sleep(1000);
          createField();
          renderProfile(data);
        } else {
          workingStatus.innerText = "Failed to fetch user data.";
        }
      }
    };
    xhr.send();
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
