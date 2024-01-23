function setBackground() {
    paragraphs = document.getElementsByTagName('p');
    theColor = 0x0;
    for (paragraph of paragraphs){
        console.log(theColor);
        paragraph.style.backgroundColor = `#${theColor}`;
        theColor += 1113;
    }
}