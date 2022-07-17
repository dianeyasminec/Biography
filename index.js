// Function upload data to server
function renderBook(dt){
    console.log(dt)
    // var elements = document.getElementsByClassName("column");
    // for(let i = 0; i < dt.length; i++){
    //    dt[i].style.width= "50%"
    // }
    const card = document.createElement('li')
    card.className = 'lists'
    card.id = `list-${dt.id}`
    card.innerHTML = 
    `
    <div class="row">
  <div class="column" >
   <div class="card-grid">
    <div class = "card">
    <div class="card card-shadow">
        <div class = "card-header card-image"> 
            <strong><div class='container'>
        ${dt.name} </strong>
        <br>
        <img class="card-image" src = "${dt.imgURL}" >
        <div class="card-body"> ${dt.description} </div>
        <div class= "card-footer">
        <button class = "btn"> Like </button>
      </div>
            </div>
        </div>
    </div>
  </div>
  </div>
  </div>
 
    `
  
    document.querySelector('#books').appendChild(card)
    const button = document.querySelector(".btn")
    button.addEventListener("click", () => {
        alert('Thank you !')
    })
}
 
//function loop through fetch data 
// function gridView(dt){
//     console.log(dt)
// }
// gridView()





// Let's create a function to fetch our information fron database

    function getAllBooks(){
    fetch('http://localhost:3000/Books')
    .then(response => {
       return  response.json()
    })
    .then(data =>{
        // console.log(data)
        // log only image
        // console.log(data.map(n =>{
        //     return n.imgURL
        // }))

        data.forEach(dt =>{
            renderBook(dt)
        })
    })
}

document.addEventListener('DOMContentLoaded', (addListener) => {
    getAllBooks();
  });

  // <img src= "${dt.imgURL}" >
    // <h4>${dt.name}</h4>
    // <hr>
    // // <h5>${dt.description}</h5>
