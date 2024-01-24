window.addEventListener("resize", function() {
    infoContent = `The window width is ${this.innerWidth} and height is ${this.innerHeight}.<br>`
    windowSize.innerHTML = infoContent;
})