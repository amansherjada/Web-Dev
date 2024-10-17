console.log("Running...")

let boxes = document.getElementsByClassName("box")

function getRandomColor() {
    // a + r (b-a)
    // 0 + random (255-0)
    // 0 + random * 255
    let val1 = Math.ceil(0 + Math.random() * 255); //Math.ceil rounds a number UP to the nearest integer (4.22 to 5)
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
});