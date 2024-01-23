// initial attempt
function insert_Row_alternative() {
    let table = sampleTable;
    let nrowsPresent = table.rows.length;
    let row = document.createElement('tr');
    for (let i=0; i<2; i++){
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`Row${nrowsPresent+1}, cell${i+1}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    table.children[0].appendChild(row);
}

// solution provided, but with my improvements
function insert_Row() {
    let nRows = sampleTable.rows.length;
    let x = sampleTable.insertRow(nRows);
    let y = x.insertCell(0);
    let z = x.insertCell(1);
    y.innerHTML = `Row${nRows+1}, Cell1`;
    z.innerHTML = `Row${nRows+1}, Cell2`;
}