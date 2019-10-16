//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadUsers(){
        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/?results=7",
            success: (users) => {
                let usersData = users.results
                this.data["users"] = []
                this.data["users"].push({mainUser: usersData.splice(0,1)})
                this.data["users"].push({friends: usersData}) 
            },
            error: function () {
                alert("Check your internet connection")
            }
        })
    }

    loadQuote(){
        $.ajax({
            method: "GET",
            url: "https://api.kanye.rest/",
            success: (quoteObj) => {
                let randQuote = quoteObj.quote
                this.data["quote"] = randQuote
            },
            error: function () {
                alert("Check your internet connection")
            }
        })
    }
        
    loadPokemon(){
        let randomPokeNum = Math.floor(Math.random() * 964)
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randomPokeNum}/`,
            success: (pokemon) =>{
                let pokemonName = pokemon.name
                let pokemonImg = pokemon.sprites.front_default
                this.data["pokemon"] = {name: pokemonName, image: pokemonImg}
            },
            error: function () {
                alert("Check your internet connection")
            }
            
        })
    }

    loadAbout(){
        let types = ["all-meat","meat-and-filler"]
        let indexType = Math.floor(Math.random() * 2)
        let type = types[indexType]
        let paras = 1
        let startWithLorem = Math.floor(Math.random() * 3)
        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=${type}&paras=${paras}&start-with-lorem=${startWithLorem}`,
            success: (backonIpsum) =>{
                this.data["about"] = backonIpsum[0]
            },
            error: function () {
                alert("Check your internet connection")
            }
        })
    }
    
 
    loadData() {
       this.loadUsers()
       this.loadQuote()
       this.loadPokemon()
       this.loadAbout() 
}
}

