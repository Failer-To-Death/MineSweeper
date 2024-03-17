
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        //number cells 
        cell.innerText = (c + 1);
        cell.id = (c)
        container.appendChild(cell).className = "grid-item";
        clickCell(cell);
    };
};



function clickCell(c) {
    c.addEventListener('click', function(event) {
        this.style.backgroundColor = 'lightGrey';
    });
}

function reload(){
    window.location.reload();
}



/*
const para = document.getElementById("test");
document.createElement("p");
para.innerText = "This was created";
document.body.appendChild(para);*/

const container = document.getElementById("grid");
makeRows(10, 10);


