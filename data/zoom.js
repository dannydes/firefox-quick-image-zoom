var XML_NS = "http://www.w3.org/1999/xhtml/";
console.log(2);
var container = document.createElementNS(XML_NS, "div");
var image = document.createElementNS(XML_NS, "img");
console.log(1);
container.appendChild(image);
document.body.insertBefore(container, document.body.firstChild);console.log(0);

document.documentElement.addEventListener("mousemove", function (event) {console.log(event.target.outerHTML);
    var imageTop, imageLeft, i;
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var images = document.getElementsByTagName(XML_NS, "img");
    for (i = 0; i < images.length; i++) {
        imageTop = images[i].offsetTop;
        imageLeft = images[i].offsetLeft;
        if (mouseY >= imageTop && mouseY <= imageTop + images[i].height &&
                mouseX >= imageLeft && mouseX <= imageLeft + images[i].width) {
            image.src = images[i].src;
        } 
    }
});

document.documentElement.addEventListener("click", function (event) {
    image.src = "";
});