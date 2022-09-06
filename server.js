const express = require('express');
const app = express();
//const cors = require('cors');
const PORT = 8000

const xenobladeHeroes = {
    'shulk':{
        'age': 18,
        'name': 'Shulk',
        'species': 'Homs',
        'birthPlace': 'Colony 9',
        'game': 'Xenoblade Chronicles / Xenoblade Chronicles DE'
    },
    'rex':{
        'age': 15,
        'name': 'Rex',
        'species': 'Leftherian',
        'birthPlace': 'unknown... raised on Fonsett Village',
        'game': 'Xenoblade Chronicles 2'
    },
    'noah':{
        'age': '18 (apparent) / 9 (real)',
        'name': 'Noah',
        'species': 'Kevesi Human',
        'birthPlace': 'Kevesi',
        'game': 'Xenoblade Chronicles 3'
    },
    'cross':{
        'age': 'unknown',
        'name': 'Cross (X)',
        'species': 'unknown',
        'birthPlace': 'unknown',
        'game': 'Xenoblade Chronicles X'
    },

}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:heroName', (request, response) => {
    const heroesName = request.params.heroName.toLowerCase()
    if(xenobladeHeroes[heroesName]){
        response.json(xenobladeHeroes[heroesName])
    }else{
        response.json(xenobladeHeroes['cross'])
    }
    //response.json(xenobladeHeroes)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})