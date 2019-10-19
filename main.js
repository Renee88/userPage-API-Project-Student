// Create instances of your classes
const api = new APIManager()
const renderer = new Renderer()

// Create the loadData and renderData functions - these should use the relevant instance
$("#load").on("click", function () {
    api.loadData()
})

$("#display").on("click", function () {
    renderer.render(api.data)
})

$("#save").on("click", function () {
    api.saveUser()
})

$(".users-dropdown").on("click",".dd-users",function(){
    let userName = $(this).text()
    let name = userName.split(" ").join("_")

    $("#load-page").on("click", function () {
        let savedUser = api.showSelectedUser(name)
        renderer.render(savedUser)
    })
})



$(".drop-down-menu").hover(
    renderer._renderSavedUsers,
    function () {
        $(".users-dropdown").empty()
    })



