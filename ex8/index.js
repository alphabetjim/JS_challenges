function removecolor() {
    // get the colour that the user would like removed
    let listItems = `Which colour would you like to remove? `;
    for (let i=0; i<colorSelect.children.length; i++) {
        listItems += `${i} - ${colorSelect.children[i].innerHTML} `;
    }
    let toRemove = window.prompt(listItems, '0');
    toRemove = parseInt(toRemove, 10);
    colorSelect.remove(toRemove);
}