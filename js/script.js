new WOW().init();

const chaifood = document.querySelector(".chai-food");
const pizzafood = document.querySelector(".pizza-food");
const burgerfood = document.querySelector(".burger-food");
const allfood = document.querySelector(".all-food");
const promocards = document.querySelectorAll(".promo-card");



if (chaifood && promocards) {
    chaifood.addEventListener("click", (e) => {
        e.preventDefault();
        promocards.forEach(card => {
            card.style.display = "none"
            card.classList.remove("animate__fadeInUp");
            if (card.classList.contains("chinese")) {
                card.style.display = "block"
                card.classList.add("animate__animated", "animate__fadeInUp"); // Add the animation class
            };
        }); 
    }
    )
}else{
    console.log("Element not found")
}

if (pizzafood  && promocards) {
    pizzafood.addEventListener("click",(e) => {
        e.preventDefault();
        promocards.forEach(card => {
            card.style.display = "none"
            card.classList.remove("animate__fadeInUp");
            if (card.classList.contains("Pizzaboy")) {
                card.style.display = "block" 
                card.classList.add("animate__animated", "animate__fadeInUp");   
            }           
        });
    }
    )
}else{
    console.log("bhai khana nehi hai")
}

if (burgerfood && promocards ) {
    burgerfood.addEventListener("click",(e) => {
        e.preventDefault();
        promocards.forEach(card => {
            card.style.display = "none"
            card.classList.remove("animate__fadeInUp");
            if (card.classList.contains("burger")) {
                card.style.display ="block";
                card.classList.add("animate__animated", "animate__fadeInUp"); 
        }
    });
    })
}else{
    console.log("burger nehi hai")
}
if (allfood && promocards) {
    allfood.addEventListener("click",(e) => {
        e.preventDefault();
        promocards.forEach(card => {
            card.style.display ="block"
            card.classList.add("animate__animated", "animate__fadeInUp"); 
        });
    })
}else{
    console.log("all food nehi hai")
}
