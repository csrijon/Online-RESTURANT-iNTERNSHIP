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

// Sticky Navbar
window.addEventListener('scroll', function () {
    // Initialize WOW.js animations if needed

    if (window.scrollY > 45) {
        document.querySelector('.navbar').classList.add('sticky-top', 'shadow-sm');
    } else {
        document.querySelector('.navbar').classList.remove('sticky-top', 'shadow-sm');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    new WOW().init();
});

const chefs = [
    {
      imgSrc: "/image/Chefs.jpg",
      name1: "Srijon Chowdhury.",
      name2: "CEO, Co-Founder."
    },
    {
      imgSrc: "/image/Chefs.jpg",
      name1: "Srijon Chowdhury",
      name2: "Master Chefs."
    },
    {
        imgSrc: "/image/Chefs.jpg",
        name1: "Srijon Chowdhury.",
        name2: "Master Chefs."
    },
    {
        imgSrc: "/image/Chefs.jpg",
        name1: "Srijon Chowdhury.",
        name2: "Master."
      }

  ];

  const teamsmember = document.querySelector(".teamsmember")
  let delay= 0.1;

  chefs.forEach(chef => {
    const chefname = document.createElement("div")
    chefname.classList.add("chefsnamecard","wow","fadeInUp")
    chefname.setAttribute("data-wow-delay",`${delay}s`); 
    delay= delay+0.1;
    chefname.innerHTML = `
    <div class="chefsimg">
      <img src="${chef.imgSrc}" alt="Chef Image">
    </div>
    <div class="chefname">
      <p class ="bolder">${chef.name1}</p>
      <p>${chef.name2}</p>
    </div>`
  teamsmember.appendChild(chefname)
    
  });