function hideCurrentBox() {
    let currentBox = document.getElementById("box-cont");
    currentBox.style.opacity = 0;
    currentBox.style.transform = "translateY(-100%)";
}

function change(color) {
    hideCurrentBox(); 

    setTimeout(function () {
        let boxCont = document.getElementById("box-cont");
        boxCont.style.borderColor = color;
        let lighterColor = tinycolor(color).lighten(20).toString(); 
        
        boxCont.style.backgroundColor = lighterColor + "99"; 
        boxCont.style.opacity = 1;
        boxCont.style.transform = "translateY(0)";

        setTimeout(function () {
            boxCont.style.backgroundColor = "white";
        }, 800);
    }, 1000); 
}
