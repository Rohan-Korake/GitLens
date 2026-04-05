export function renderProfile(data) {
  const profilePic = document.getElementById("profilePic");
  const img = document.createElement("img");
  img.src = data.avatar_url;
  profilePic.appendChild(img);
  document.getElementById("userName").innerText = data.login ?? "N/A";
  document.getElementById("name").innerText = data.name ?? "N/A";
  document.getElementById("userId").innerText = data.id ?? "N/A";
  document.getElementById("followers").innerText = data.followers ?? "N/A";
  document.getElementById("following").innerText = data.following ?? "N/A";
  document.getElementById("company").innerText = data.company ?? "N/A";
  document.getElementById("publicRepo").innerText = data.public_repos ?? "N/A";
  document.getElementById("publicGists").innerText = data.public_gists ?? "N/A";
  document.getElementById("blog").innerText = data.blog || "N/A";
  document.getElementById("type").innerText = data.type ?? "N/A";
  document.getElementById("hireable").innerText = data.hireable ?? "N/A";
  document.getElementById("updatedAt").innerText = data.updated_at ?? "N/A";
  document.getElementById("email").innerText = data.email ?? "N/A";
  document.getElementById("location").innerText = data.location ?? "N/A";
  document.getElementById("biography").innerText = data.bio ?? "N/A";
}
