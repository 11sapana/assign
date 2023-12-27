


let product = [
    fetch('https://fakestoreapi.com/products').then((data) => {
        return data.json();
    }).then((completedata) => {
        console.log(completedata[2].title)

        let data1 = "";
        completedata.map((values) => {
            data1 += `
            <div class="cards">
                <h1 class="title">${values.title}</h1>
         <img src=${values.image}  alt="img" class="images">
         
         <p class="category">${values.category}</p>
         <p class="price"  color = "red" >${values.price}</p>  
      
        </div> 
            `
        })

        document.getElementById("cards").innerHTML = data1








    })
]


