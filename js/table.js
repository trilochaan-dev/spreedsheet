const sheet = document.getElementById('sheet');
const firstrow = sheet.rows[0]
for (let i=1 ; i < firstrow.cells.length;i++){
    firstrow.cells[i].textContent = String.fromCharCode(64 + i); 
}

for (let j=1 ; j <sheet.rows.length; j++){
    const row = sheet.rows[j];
    row.cells[0].textContent = j;
}