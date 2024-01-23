// my solution
function getAttributes() {
    let attributes = w3r.attributes;
    for (attribute of attributes) {
        console.log(attribute);
    }
}

// given solution
function getAttributesAsAlerts() {
    let u = w3r.href;
    alert(`The href is ${u}`);
    let v = w3r.hreflang;
    alert(`The hreflang is ${v}`);
    let w = w3r.rel;
    alert(`The rel is ${w}`);
    let x = w3r.target;
    alert(`The target is ${x}`);
    let y = w3r.type;
    alert(`The type is ${y}`);
}