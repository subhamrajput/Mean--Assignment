

let register = async () => {

    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;


    const user = {
        name,
        password,
        email,
        mobile,
    };

    const url = "http://localhost:3000/adduser";

    await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    });
};