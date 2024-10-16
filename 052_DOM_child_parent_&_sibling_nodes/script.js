console.log("Running...")


document.body.firstChild
// #text

document.body.firstElementChild
{/* <div class=​"container">​…​</div>​  */}

document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

document.body.firstElementChild.children[1]
{/* <div class=​"box">​Box 2​</div>​ */}

document.body.firstElementChild.children[1].nextElementSibling
// <div class=​"box">​Box 3​</div>​

document.body.firstElementChild.children[1].previousElementSibling
// <div class=​"box">​Box 1​</div>​

document.body.firstElementChild.children[1].previousSibling
// #text