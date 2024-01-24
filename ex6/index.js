function changeContent() {
    // get values using JS user input
    let row = window.prompt("Input the row number (0-2)", "0");
    let column = window.prompt("Input the column number (0-1)", "0");
    let cellString = window.prompt("Enter the cell text content");
    let theRow = myTable.rows[parseInt(row,10)];
    let theCell = theRow.children[parseInt(column,10)];
    theCell.innerHTML = cellString;
}