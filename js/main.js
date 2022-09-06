alert('working')

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const heroesName = document.querySelector('input').value
    try{
        const response = await fetch(`https://xenoblade-heroes-api.herokuapp.com/api/${heroesName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.name').innerText += ` ${data.name}`
        document.querySelector('.age').innerText += ` ${data.age}`
        document.querySelector('.species').innerText += ` ${data.species}`
        document.querySelector('.birthPlace').innerText += ` ${data.birthPlace}`
        document.querySelector('.game').innerText += ` ${data.game}`
    }catch(error){
        console.log(error)
    }
}