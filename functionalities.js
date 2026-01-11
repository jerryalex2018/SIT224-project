let articleEl = document.querySelector(".card")
const cards = [
    {
        title:"mksu eagles",
description:"brute strength,speed,agility and tactical thinking are all elements associated with Rugby ",
image:"https://images.unsplash.com/photo-1664885440578-f91213035c26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVnYnklMjBiYWxsfGVufDB8fDB8fHww",
button:"learn more"
    },
    {
        title:"mksu football",
        description:"Whether you call it soccer or football, the lovely game draws crowds and punters from around the globe",
        image:"https://images.unsplash.com/photo-1660926655155-8b1f8f9079f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGwlMjBiYWxsfGVufDB8fDB8fHww",
        button:"learn more"
    },
    {
        title:"mksu basketball",
        description:"The game is split into four 12-minute quarters with a 15-minute interval",
        image:"https://images.unsplash.com/photo-1595861021888-e8192a7f774e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFza2V0JTIwYmFsbHxlbnwwfHwwfHx8MA%3D%3D",
        button:"learn more"
    },
    {
        title:"mksu hookey",
        description:"Fast-paced ice sport where teams use sticks to shoot a puck into opponent's goal",
        image:"https://media.istockphoto.com/id/1128697004/photo/looking-down-on-a-pair-of-field-hockey-sticks-with-ball-on-center-line.webp?a=1&b=1&s=612x612&w=0&k=20&c=XU_-XK5Vnd2UMy8t_B-gKGVOoRWQT9SzT-wpSlx7B-s=",
        button:"learn more"
    },
    {
        title:"mksu handball",
        description:" Fast team sport where players throw a ball into opponent's goal using only hands",
        image:"https://images.unsplash.com/photo-1553627220-92f0446b6a5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZCUyMGJhbGx8ZW58MHx8MHx8fDA%3D",
        button:"learn more"
    },
    {
        title:"mksu dart",
        description:"Precision throwing game where players toss pointed missiles at a circular numbered dartboard target",
        image:"https://images.unsplash.com/photo-1704823822189-7a4cc1bc3fab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFydCUyMGJvYXJkfGVufDB8fDB8fHww",
        button:"learn more"
    }
]



cards.forEach((sport)=>{
      let divmain =document.createElement("div")
        divmain.classList.add("divmain")


        let divEl = document.createElement("div")
        divEl.classList.add("div1")
        divEl.innerHTML= `
        <p class ="title">${sport.title}</p>`

let divtwo = document.createElement("div")
divtwo.classList.add("div2")
divtwo.innerHTML =`
<img src="${sport.image}" alt="ball">

`

let divthree = document.createElement("div")
divthree.classList.add("div3")
divthree.innerHTML = `
<p class="description"> ${sport.description}</p>
`
let divfour =document.createElement("div")
divfour.classList.add("div4")
divfour.innerHTML = `
<button class="learn-more">${sport.button}</button>


`

divmain.append(divEl,divtwo,divthree,divfour)
articleEl.append(divmain)
})
    
  


    
function showsidebar(){
    const side = document.querySelector(".sidebar")
    side.style.display = "flex"
}
 function closesidebar(){
    const side = document.querySelector(".sidebar");
    side.style.display = "none"
 }


 // Get current page filename
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Get all nav links
const navLinks = document.querySelectorAll('nav a');

// Add active class to matching link
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

