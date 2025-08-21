function handleOnclick() {
    console.log("Ami Aclicked");
}

function handleOnclick() {
    const changeText = document.getElementById("change-heading");
    changeText.innerText = "Creative It Onek vlo";
    changeText.style.color = "green";
}

// =====================Type-02

document.getElementById("event-click").addEventListener('click', function(){
    const changeText = document.getElementById("change-heading");
    changeText.innerText = "My Name Is Sania Ahmed Im a Student Of Creative It";
    changeText.style.fontSize = "50px";
    changeText.style.color = "red";
    changeText.style.textTransform = "uppercase";
})

// =======================Tyep-03

document.getElementById("btn-update").addEventListener('click' , function(){
    const inputFeild = document.getElementById("input-feild");
    const inputText = inputFeild.value ;
    const paragraph = document.getElementById("update-paragraph");
    paragraph.innerText = inputText ;
    inputFeild.value = " " ;
})