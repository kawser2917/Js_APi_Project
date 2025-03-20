const loadButtons = () => {
    const url = 'https://openapi.programming-hero.com/api/peddy/categories'
    fetch(url)
    .then(res=> res.json())
    .then(data=>displayButtons(data.categories))
    .catch(err=> console.log(err))
}

const displayButtons = (buttons) => {
    const buttonContainer = document.getElementById('button-container')
    for(const btn of buttons){
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