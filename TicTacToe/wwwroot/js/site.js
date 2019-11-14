// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var selectedChecker;
var checkers = document.getElementsByTagName("circle");

function onClickChecker(event) {
    if (selectedChecker) {
        selectedChecker.setAttribute("stroke", "gray");
    }
        selectedChecker = event.target;
        event.target.setAttribute("stroke", "green");
}


for (var i = 0; i < checkers.length; i++) {
    checkers[i].addEventListener('click', onClickChecker);

}

var rects = document.getElementsByTagName("rect");

function onClickSquare(event) {
    if (selectedChecker) {
        document.getElementById("cx").value = selectedChecker.getAttribute("data-x");
        document.getElementById("cy").value = selectedChecker.getAttribute("data-y");
        document.getElementById("sx").value = event.target.getAttribute("data-x");
        document.getElementById("sy").value = event.target.getAttribute("data-y");
        document.getElementById("move-form").submit();

    }
}

for (var j = 0; j < rects.length; j++) {
    rects[j].addEventListener('click', onClickSquare);
}
