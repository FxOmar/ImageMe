var tooltipSpan = document.getElementById("tooltip-span");
const images = document.getElementsByTagName("img");

function hasImage(id) {
  const childElements = document.getElementById(id).childNodes;

  for (let i = 0; i < childElements.length; i++) {
    if (
      childElements[i].localName != null &&
      childElements[i].localName.toLowerCase() == "img"
    ) {
      return true;
    }
  }
  return false;
}

function cloneAttributes(sourceNode) {
  const element = document.createElement("img");
  let attr = sourceNode.attributes.src;
  element.setAttribute(attr.nodeName, attr.nodeValue);

  tooltipSpan.appendChild(element);
}

// const img = document.getElementById("preview");
const img2 = document.getElementById("hel");

document.onmousemove = function (e) {
  var x = e.clientX,
    y = e.clientY;
  tooltipSpan.style.top = y + 20 + "px";
  tooltipSpan.style.left = x + 20 + "px";
};

document.onmouseover = function (e) {
  console.log(e);
  if (e.target.nodeName === "IMG") {
    cloneAttributes(e.target);
  }
};

// document.addEventListener(
//   "mouseover",
//   function (e) {
//     console.log(e.target);
//   },
//   false
// );
