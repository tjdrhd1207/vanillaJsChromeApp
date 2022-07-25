const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`
bgImage.id = "bgImg";           //id 부여
document.body.appendChild(bgImage)

console.log(bgImage);

