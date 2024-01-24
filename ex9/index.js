function getOptions() {
    let listItems = `The selector contains: `;
    for (let i=0; i<mySelect.length; i++) {
        listItems += `
        ${i} - ${mySelect.options[i].text}`;
    }
    listItems += `
    ${mySelect.children.length} in total.`
    alert(listItems);
}