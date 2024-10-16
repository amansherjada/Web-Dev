let button = document.getElementById("btn")

// Mouse events = https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>HELLO I BEEN TOUCHED</b>"
    // document.querySelector(".box").classList.toggle("red")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.code)
})

