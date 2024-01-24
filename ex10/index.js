function sphereVolume(e) {
    e.preventDefault();
    let theRadius = myForm["radius"].value;
    myForm["volume"].value = Math.PI*(4/3)*Math.pow(theRadius, 3);
}