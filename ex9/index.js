function getOptions() {
    let listItems = `The selector contains: `;
    for (let i=0; i<mySelect.children.length; i++) {
        listItems += `
        ${i} - ${mySelect.children[i].innerHTML}`;
    }
    listItems += `
    ${mySelect.children.length} in total.`
    alert(listItems);
}