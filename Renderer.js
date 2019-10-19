// Fill in the functions for your Renderer Class

class Renderer {

    _renderUsers(users) {
        $(".user-container").empty()
        let mainUser = users.mainUser
        let source = $("#user-template").html()
        let template = Handlebars.compile(source)
        let newUserHTML = template({mainUser})
        $(".user-container").append(newUserHTML)
    }

    _renderFriends(users) {
        $(".friends-container").empty()
        let friends = users.friends
        let source = $("#friends-template").html()
        let template = Handlebars.compile(source)
        let newFriendsHTML = template({ friends })
        $(".friends-container").append(newFriendsHTML)
    }

    _renderQuote(quote) {
        $(".quote-container").empty()
        let source = $("#quote-template").html()
        let template = Handlebars.compile(source)
        let newQuoteHTML = template({ quote })
        $(".quote-container").append(newQuoteHTML)
    }

    _renderPokemon(pokemon) {
        $(".pokemon-container").empty()
        let source = $("#pokemon-template").html()
        let template = Handlebars.compile(source)
        let newPokemonHTML = template(pokemon)
        $(".pokemon-container").append(newPokemonHTML)
    }

    _renderMeat(about) {
        $(".about-container").empty()
        let source = $("#about-template").html()
        let template = Handlebars.compile(source)
        let newAboutHTML = template({ about })
        $(".about-container").append(newAboutHTML)
    }

    _renderSavedUsers(){
            Handlebars.registerHelper("firstUpper", function(name){
                let upperName = name[0].toUpperCase() + name.slice(1)
                return upperName
            })
            $(".users-dropdown").empty()
            let dropDownUsers = api.showSavedUsers()
            let source = $("#menu-template").html()
            let template = Handlebars.compile(source)
            let newDropDownHTML = template({dropDownUsers})
            $(".users-dropdown").append(newDropDownHTML)
        
    }


    render(data) {
        Handlebars.registerHelper("firstUpper", function(name){
            let upperName = name[0].toUpperCase() + name.slice(1)
            return upperName
        })

        let key = Object.keys(data)
        if(key.length == 1){
        this._renderUsers(data[key])
        this._renderFriends(data[key])
        this._renderQuote(data[key].quote)
        this._renderPokemon(data[key].pokemon)
        this._renderMeat(data[key].about)
        } else{
        this._renderUsers(data.users)
        this._renderFriends(data.users)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.about)
        }
        
        
    }
}

