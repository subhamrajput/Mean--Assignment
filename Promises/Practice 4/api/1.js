
window.addEventListener("load", () => {

    let xhr = new XMLHttpRequest();

    let url = "http://localhost:5600/";

    xhr.open("GET", url);

    xhr.onload = () => {
        let jsonData = JSON.parse(xhr.responseText);
        let data = jsonData.list;
        domHandler(data);
    };

    xhr.send();

});





let domHandler = (data) => {

    let parent = document.querySelector("#parentId");

    for (let i = 0; i < data.length; i++) {

        let item = data[i];

        let newElement = parent.children[0].cloneNode(true);

        newElement.children[0].innerHTML = "city : " + item.city;


        parent.insertBefore(newElement, parent.firstChild);
    }


};