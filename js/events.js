function makeRed() {
    document.body.style.backgroundColor = 'red';
};
// option-04
const pinkBtn = document.getElementById("make-pink");
pinkBtn.addEventListener('click' , makePink);

function makePink(){
    document.body.style.background = 'pink';
};

// option:05
const greenBtn = document.getElementById("green");
greenBtn.addEventListener('click' , function makeGreen(){
    document.body.style.background = 'blue';
})


// Most use case======

document.getElementById('black').addEventListener('click', function(){
    document.body.style.background = '#000000';
})