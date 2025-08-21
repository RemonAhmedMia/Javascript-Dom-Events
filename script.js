// type-01:

document.getElementById("hide-input").addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById("dlt-btn");
    if(text === "delete") {
        deleteButton.removeAttribute("disabled")
    } else{
        deleteButton.setAttribute("disabled" , true)
    }
})

document.getElementById("dlt-btn").addEventListener('click' , function(){
    const hidetext = document.getElementById("hide-text");
    hidetext.style.display = "none"
})
