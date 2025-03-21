const loadButtons = () => {
    const url = 'https://openapi.programming-hero.com/api/peddy/categories'
    fetch(url)
        .then(res => res.json())
        .then(data => displayButtons(data.categories))
        .catch(err => console.log(err))
}
const loadPets = () => {
    const url = "https://openapi.programming-hero.com/api/peddy/pets"
    fetch(url)
        .then(res => res.json())
        .then(data => displayPets(data.pets))
        .catch(err => console.log(err))
}
const displayPets = (pets) => {
    const petContainer = document.getElementById('pets-container')
    pets.forEach(pet => {
        console.log(pet)
        const newPetContainer = document.createElement('div')
        newPetContainer.classList = "card shadow-xl"
        newPetContainer.innerHTML = `
        <figure class="px-10 pt-10">
            <img
            src="${pet.image}"
            alt="Shoes"
            class="rounded-xl h-full w-full object-cover" />
        </figure>
        <div class="card-body">
            <h2 class="font-bold text-2xl">${pet.pet_name}</h2>
            <div class="flex gap-2">
                <img class="w-[20px]" src="https://img.icons8.com/?size=100&id=aEUiCprmQXz9&format=png&color=000000" />
                <p>Breed : ${typeof pet.breed === "undefined" ? "Unavailable" : pet.breed}</p>
            </div>
            <div class="flex gap-2">
                <img class="w-[20px]" src="https://img.icons8.com/?size=100&id=cK7uZER0KLcc&format=png&color=000000" />
                <p> Birth: ${pet.date_of_birth == null ? "Unavailable" :pet.date_of_birth.split('-')[0] }</p>
            </div> 
            <div class="flex gap-2">
                <img class="w-[20px]" src="https://img.icons8.com/?size=100&id=1LSsC486xOwm&format=png&color=000000" />
                <p> Gender: ${typeof pet.gender == "undefined" ? "Unavailable" : pet.gender}</p>
            </div> 
            <div class="flex gap-2">
                <img class="w-[20px]" src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000" />
                <p> Gender: ${pet.price}</p>
            </div> 
            <div class="card-actions flex justify-between">
                <button class="btn">
                    <img class="w-[20px]" src="https://img.icons8.com/?size=100&id=L2sPz0nl-coE&format=png&color=000000" />
                </button>
                <button class="btn text-[#0E7A81] text-[18px]">
                    Adopt
                </button>
                <button class="btn text-[#0E7A81] text-[18px]">
                   Details
                </button>
            </div>
        </div>
        `
        petContainer.appendChild(newPetContainer)
    });
}

const displayButtons = (buttons) => {
    const buttonContainer = document.getElementById('button-container')
    for (const btn of buttons) {
        const buttonDiv = document.createElement('div')
        buttonDiv.innerHTML = `
        <div class="border rounded-2xl border-[#2E3E51] p-6 lg:w-[312px] flex justify-center">
            <button class="flex gap-4 justify-center items-center"> 
                <img class="w-12 h-12" src="${btn.category_icon}">
                <p class="text-3xl">${btn.category}</p>
            </button> 
        </div>
       
        `
        buttonContainer.appendChild(buttonDiv)
    }
}
loadButtons()
loadPets()