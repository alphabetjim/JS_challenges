let row = 1;
let column = 1;
let cellString = "New cell text";

// Initially not worrying about user input of values
function changeContent() {
    let theRow = myTable.rows[row-1];
    let theCell = theRow.children[column-1];
    theCell.innerHTML = cellString;
    alert(theCell.innerHTML);
}