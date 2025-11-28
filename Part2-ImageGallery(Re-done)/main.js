/*
  Name: Hrigdev Thapa
  Date:2025/11/27
  Filename: main.js
  Description: This JavaScript file builds a simple image gallery. It loads thumbnails,
  updates the large image when clicked, and includes a button to darken or lighten the image.
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// List of image objects
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

const baseURL = "./";

// Create thumbnail images
for (const img of images) {
  const newImage = document.createElement("img");
  newImage.src = baseURL + img.filename;
  newImage.alt = img.alt;

  newImage.setAttribute("tabindex", "0");

  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () => {
    updateDisplayedImage(newImage);
  });

  newImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      updateDisplayedImage(newImage);
    }
  });
}

// Update large image
function updateDisplayedImage(image) {
  displayedImage.src = image.src;
  displayedImage.alt = image.alt;
}

// Darken/Lighten button
btn.addEventListener("click", () => {
  const current = btn.getAttribute("class");

  if (current === "dark") {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    btn.setAttribute("class", "light");
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    btn.setAttribute("class", "dark");
  }
});
