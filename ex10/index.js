function sphereVolume(e) {
    e.preventDefault();
    let theRadius = myForm["radius"].value;
    theRadius = Math.abs(theRadius);
    myForm["volume"].value = Math.PI*(4/3)*Math.pow(theRadius, 3);
}