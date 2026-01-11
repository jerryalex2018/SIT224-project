let rugbyPlayers=[
    {
        image:"https://plus.unsplash.com/premium_photo-1752502981932-16a2c0ae9da1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        name:"Lamech Nyamosi",
        Position:"prop"
    },
    {
        image:"",
        name:"Jerry okoth",
        position:"hooker"
    },
    {
        image:"",
        name:"Adrew Mugera",
        position:"hooker"
    },
    {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    },
     {
        image:"",
        name:"",
        position:""
    }
]
let containerEl = document.querySelector("#rugplayer")
rugbyPlayers.forEach((player)=>{
    let cover = document.createElement("div");
    cover.classList.add("cover-container")
containerEl.append(cover)


    let imgContainer = document.createElement("div")
    imgContainer.classList.add("imgContainer")
    cover.append(imgContainer);
    imgContainer.innerHTML = `
    <img src="${player.image}" alt="player.name">

    `

})