
window.addEventListener("load", () => {

    let url = "http://localhost:5600/";

    $.ajax(url).done((data) => {
        domHandler(data);
    });

});





let domHandler = (data) => {
    let item = data.list;
    let parent = $("#parentId");

    for (let i = 0; i < item.length; i++) {

        let x = item[i];

        let newElement = $("#parentId :nth-child(1)").cloneNode(true);

        newElement.children[0].innerHTML = "city : " + x.city;


        parent.insertBefore(newElement, parent.firstChild);
    }


};