// Function upload data to server
function renderBook(dt){
    const card = document.createElement('li')
    card.className = 'lists'
    card.id = `list-${dt.id}`
    card.innerHTML = 
    `
   
    <div>
    <h4>${dt.name}</h4>
    <h5>${dt.description}</h5>
    </div>
  
    `
    document.querySelector('#books').appendChild(card)
}
 // <img src = ${imgURL} alt="book image ">






// Let's create a function to fetch our information fron database
console.log('bb')
    function getAllBooks(){
    fetch('http://localhost:3000/Books')
    .then(response => {
       return  response.json()
    })
    .then(data =>{
        console.log(data)
        // log only name 
        console.log(data.forEach(dt =>{
            renderBook(dt)
        }))
    })
}

document.addEventListener('DOMContentLoaded', (addListener) => {
    getAllBooks();
  });
