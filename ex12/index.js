function highlightBold() {
    // highlight bold elements within the first paragraph on the page
    let thePara = document.getElementsByTagName('p')[0];
    // loop through children setting background-color to yellow 
    for (child of thePara.children){
        if (child.tagName.toLowerCase() == 'b'){
            child.style.backgroundColor = "yellow";
        }
    }
}

function removeHighlight() {
    // highlight bold elements within the first paragraph on the page
    let thePara = document.getElementsByTagName('p')[0];
    // loop through children setting background-color to yellow 
    for (child of thePara.children){
        if (child.tagName.toLowerCase() == 'b'){
            child.style.backgroundColor = "white";
        }
    }
}

