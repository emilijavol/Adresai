const adresai = []
const laukelis = document.querySelector ("#contacts");
const forma = document.querySelector ("#new-contact");
const mygtukas = document.querySelector ("#submit")
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

    const vardas = document.querySelector ("#vardas");
    const email = document.querySelector ("#email");

    
    if (adresai.length >0)
    adresai.forEach ((singleContact)=>{
     const duomenys = document.createElement ("div");
     const edit = document.createElement ("button");
     const favorite = document.createElement ("button")

     duomenys.textContent = (vardas, email)
     edit.textContent = "Redaguoti";
     favorite.textContent = "Mėgstamas"
     adresai.append (duomenys, edit, favorite);
    })
    

  })
