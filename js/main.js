

document.querySelectorAll('button').forEach(function (element) {

    element.onclick = function () {
        document.querySelector('#text').style.color = element.dataset.coloor
    }

})