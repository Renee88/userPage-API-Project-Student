// Fill in the functions for your Renderer Class

class Renderer{

     _renderUsers(users) {
        let mainUser = users[0].mainUser
        let source = $("#user-template").html()
        let template = Handlebars.compile(source)
        let newUserHTML = template({mainUser})
        $(".user-container").append(newUserHTML)
    }

    _renderFriends(users) {
        let friends = users[1].friends
        let source = $("#friends-template").html()
        let template = Handlebars.compile(source)
        let newFriendsHTML = template({friends})
        $(".friends-container").append(newFriendsHTML)
    }

    _renderQuote(quote) {
        let source = $("#quote-template").html()
        let template = Handlebars.compile(source)
        let newQuoteHTML = template({quote})
        $(".quote-container").append(newQuoteHTML)
    }

    _renderPokemon(pokemon) {
        let source = $("#pokemon-template").html()
        let template = Handlebars.compile(source)
        let newPokemonHTML = template(pokemon)
        $(".pokemon-container").append(newPokemonHTML)
    }

    _renderMeat(about) {
        let source = $("#about-template").html()
        let template = Handlebars.compile(source)
        let newAboutHTML = template({about})
        $(".about-container").append(newAboutHTML)
    }

    render(data){
     this._renderUsers(data.users) 
     this._renderFriends(data.users)
     this._renderQuote(data.quote)
     this._renderPokemon(data.pokemon)
     this._renderMeat(data.about)
    }
}



