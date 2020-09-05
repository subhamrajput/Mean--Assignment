

let register = async () => {

    let name = document.querySelector("#name").value;
    let password = document.querySelector("#password").value;
    let email = document.querySelector("#email").value;
    let mobile = document.querySelector("#mobile").value;

    let url = `http://localhost:3000/adduser?name=${name}&password=${password}&email=${email}&mobile=${mobile}`;

    await fetch(url);
};