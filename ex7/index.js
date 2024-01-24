function createTable() {
    // Ask user for number of rows and columns
    let nRows = window.prompt('Enter the number of rows in the table', '1');
    let nCols = window.prompt('Enter the number of columns in the table', '1');
    nRows = parseInt(nRows, 10);
    nCols = parseInt(nCols, 10);
    let table = document.getElementById('myTable');
    for (let i =0; i<nRows; i++) {
        let newRow = table.insertRow(i);
        for (let j=0; j<nCols; j++) {
            let newCell = newRow.insertCell(j);
            newCell.innerHTML = `Row-${i} Column-${j}`;
        }
    }
}