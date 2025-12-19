//getting date
const date = new Date();
const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

//list of all the images in img/ornaments
const ornamentImg = ["1.webp","2.gif","3.png","4.png","5.png","6.png","7.webp","8.png","9.png","10.png","11.png","12.png","13.png","14.jpg", "15.gif","16.png", "17.png", "18.png"];

console.log(days);
console.log(month);


//checks if the HTML elements have loaded before doing anything
document.addEventListener('DOMContentLoaded', () => {
    //sets the elements with the ID "decorations" and "date" to variables for easy access!
    const decorations = document.getElementById("decorations");
    const dateText = document.getElementById("date");

    dateText.innerHTML = days + "/" + month + "/" + year;

    if(month === 12){
        let daysTilChristmas = Math.max(25-days,0);
        for(let i = 0; i < daysTilChristmas; i++){
            const randomImg= ornamentImg[Math.floor(Math.random()*18)]
            decorations.innerHTML += `<img src="img/ornaments/${randomImg}" class="ornament" id="ornament${i}">`;
            const ornament = document.getElementById("ornament"+i);
            ornament.style.marginLeft = (Math.random()*10+4)+"rem";
            ornament.style.marginTop = (Math.random()*2+3)+"rem";
        }
    }
})
