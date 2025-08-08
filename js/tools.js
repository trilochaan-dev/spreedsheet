let text = "";

sheet.addEventListener("click" ,e =>{
  console.log("hello")
  const cell = e.target.closest("td")

  if (!cell) return;

  const rowIndex = cell.parentElement.rowIndex;
  const cellIndex = cell.cellIndex;

  const input = cell.querySelector("input");
  const select = cell.querySelector("select");


  if (!input){
    console.log("no input cells");
    return;
  }

  const value = input ? input.value : select.value;
  text = value;
  

  console.log(text);
});


function copy(){
  if (!text){
    alert("no text")
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => alert("Copied: " + text))
    .catch(err => alert("Failed to copy: " + err));
}