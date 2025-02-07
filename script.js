const boxes = document.getElementsByClassName("child")
const erase = document.getElementById("Erase")
const erase_all = document.getElementById("Erase_All")
const colorbtn = document.getElementById("color_btn")
const selectclr = document.getElementById("color")
const Download = document.getElementById("Download")
let color = "black"
// function for erase 
erase.onclick = () => {
    color = "white"
};

// for erase all 

erase_all.onclick = () => {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "white";
        }
    };
color = selectclr.value;
selectclr.addEventListener ("input" , (event) => {
    color = event.target.value;
})
// console.log(color)
// board.addEventListener("mouseenter")

let mouseClicked = false;

document.onmousedown =() => {
    mouseClicked = true;
};


document.onmouseup = () => {
    mouseClicked = false;
};

for(let i = 0 ;i < boxes.length;i++){
    boxes[i].onmouseenter = () =>{
        if(mouseClicked === true){
        boxes[i].style.backgroundColor = color;
        }
    };
}

// function to download the draw board
download.onclick = () => {
    html2canvas(document.getElementById("board")).then(function(canvas) {
        const link = document.createElement("a");
        link.download = "drawboard.pdf";
        link.href = canvas.toDataURL();
        link.click();
    });
};