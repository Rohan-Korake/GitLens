export function createField() {
  const workingStatus = document.getElementById("workingStatus");
  workingStatus.style.display = "none";

  const infoContainer = document.getElementById("infoContainer");
  infoContainer.style.display = "flex";

  const userFields = [
    { key: "User Id", value: "userId" },
    { key: "UserName", value: "userName" },
    { key: "Name", value: "name" },
    { key: "Type", value: "type" },
    { key: "Followers", value: "followers" },
    { key: "Following", value: "following" },
    { key: "Company", value: "company" },
    { key: "Public Repo", value: "publicRepo" },
    { key: "Public Gists", value: "publicGists" },
    { key: "Blog", value: "blog" },
    { key: "Hireable", value: "hireable" },
    { key: "Updated At", value: "updatedAt" },
    { key: "Email Id", value: "email" },
    { key: "Location", value: "location" },
    { key: "Biography", value: "biography" },
  ];

  const userInfoContainer = document.getElementById("userInfoContainer");
  const profilePic = document.getElementById("profilePic");
  profilePic.innerHTML = "";
  userInfoContainer.innerHTML = "";
  //   load HTML Element
  userFields.forEach((field) => {
    const fieldBlock = document.createElement("div");
    fieldBlock.classList.add("wrapper");

    const labelBlock = document.createElement("div");
    labelBlock.classList.add("container");

    const dt = document.createElement("dt");
    dt.classList.add("label");
    dt.innerText = field.key;

    const colon = document.createElement("div");
    colon.classList.add("divider");
    colon.innerText = ":";

    labelBlock.append(dt, colon);

    const dd = document.createElement("dd");
    dd.classList.add("value");
    dd.id = field.value;

    fieldBlock.append(labelBlock, dd);
    userInfoContainer.append(fieldBlock);
  });
}
