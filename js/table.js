const sheet = document.getElementById('sheet');
const firstrow = sheet.rows[0]
for (let i=1 ; i < firstrow.cells.length;i++){
    firstrow.cells[i].textContent = String.fromCharCode(64 + i); 
}

for (let j=1 ; j <sheet.rows.length; j++){
    const row = sheet.rows[j];
    row.cells[0].textContent = j;
}

const menu = document.getElementById('dd-menu');

sheet.addEventListener("contextmenu",e =>{
    const cell = e.target.closest("td");
    if (!cell) return;

    e.preventDefault();

    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;
    menu.style.display = "flex";

    document.addEventListener("click", () => {
        menu.style.display = "none";
    });

});