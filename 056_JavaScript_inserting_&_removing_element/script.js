// document.querySelector(".container").innerText

// 'I AM BOX 1\nI AM BOX 2'

// document.querySelector(".box").innerText
// 'I AM BOX 1'

// document.querySelector(".box").innerHTML
// 'I AM BOX 1'

// document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">I AM BOX 1</div>\n        <div class="box">I AM BOX 2</div>\n    </div>'

// document.querySelector(".container").tagName
// 'DIV'

// document.querySelector(".container").nodeName
// 'DIV'

// document.querySelector(".container").textContent
// '\n        I AM BOX 1\n        I AM BOX 2\n    '

// document.querySelector(".box").innerHTML = "Writing through JS"
// 'Writing through JS'

// document.querySelector(".box").hasAttribute("style")
// true

// document.querySelector(".box").getAttribute("style")
// 'display: flex;'

// document.querySelector(".box").setAttribute("style", "display: inline;")
// undefined

// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

// document.querySelector(".box").removeAttribute("style")
// undefined

// let div = document.createElement("div")
// div.innerHTML = "I have been inserted using <b>JavaScript</b>"
// div.setAttribute("class", "created")
//document.querySelector(".container").append(div)  //append() adds element to thee last
// document.querySelector(".container").prepend(div)

let a = document.querySelector(".container")
a.insertAdjacentHTML("beforeend", "<h2> HELLO THIS IS ADDED USING insertAdjacentHTML()</h2>")

// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'yellow', value: 'container red yellow']

// document.querySelector(".container").className
// 'container red yellow'