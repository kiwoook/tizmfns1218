const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const sidebarImage = document.querySelector(".main_box");


bgImage.src = `img/${chosenImage}`;
bgImageUrl = `img/${chosenImage}`;
bgImage.id = 'bgImg';

//document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(${bgImageUrl})`;
sidebarImage.style.backgroundImage = `url(${bgImageUrl}) center no-repeat`;
sidebarImage.style.backgroundSize = "100vh";
document.body.style.backgroundSize = "100vw";




