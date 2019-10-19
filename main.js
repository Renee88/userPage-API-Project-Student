// Create instances of your classes
const api = new APIManager()
const renderer = new Renderer()

// Create the loadData and renderData functions - these should use the relevant instance
$("#load").on("click",function(){
    api.loadData()
})

$("#display").on("click", function(){
    renderer.render(api.data)
})

$("#save").on("click",function(){
    api.saveUser()
})

$("#load-page").on("click",function(){
    let savedUsers = api.loadSavedUsers()
    renderer.render(savedUsers)
})

$("#dropdownbtn").hover(
    renderer._renderSavedUsers,
     function(){
    $(".users-dropdown").empty()
})