const bombs = 25
const rows = 10
const columns = 10


function placeBombs(){
    for (i=0; i<25; i++){
        let max = 99;
        let pick = Math.floor(Math.random() * max);
        let c = document.getElementById(pick)
        c.innerText = ' '
        //if (cell.innerText = ' '){   
        //    i= i-1;
        //}else{
        
        //}
    }
}

function makeRows(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        //number cells 
        cell.innerText = (c + 1);
        cell.id = (c)
        container.appendChild(cell).className = "grid-item";
        clickCell(cell);
        
    };
    placeBombs()
};

/* attempt to get a bomb img
        var img = document.createElement("img");
        img.src ="bomb.png";
        img.width = 10;
        img.height = 10;
        img.alt = 'bomb';
        c.appendChild(img)
*/

function clickCell(c) {
    c.addEventListener('click', function(event) {
        this.style.backgroundColor = 'lightGrey';
        c.innerText = ' '
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
makeRows(rows, columns);


