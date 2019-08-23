console.log("Alive!");

let xhr = new XMLHttpRequest();
xhr.open("GET", "/api/users", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.addEventListener("load", function () {
    let receivedUser = JSON.parse(xhr.response);

    let div = document.querySelector('.main');
    receivedUser.users.forEach((item,i,arr)=> {
        let h2 =  document.createElement('h2');
        h2.innerHTML=`${receivedUser['users'][i]['name']}`;
        div.appendChild(h2);
    });
});
xhr.send('ok');



document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();

    let userName = document.querySelector("#name").value;
    let user = JSON.stringify({name: userName});


    let xhr1 = new XMLHttpRequest();
    xhr1.open("POST", "/api/add", true);
    xhr1.setRequestHeader("Content-Type", "application/json");
    xhr1.addEventListener("load", function () {
        let receivedUser = JSON.parse(xhr1.response);
        console.log("add")
    });
    xhr1.send(user);

});

document.querySelector(".btn2").addEventListener("click", function (e) {
    e.preventDefault();
    let userName = document.querySelector("#name").value;
    let user = JSON.stringify({name: userName});

    let xhr2 = new XMLHttpRequest();
    xhr2.open("POST", "/api/delete", true);
    xhr2.setRequestHeader("Content-Type", "application/json");
    xhr2.addEventListener("load", function () {
        console.log("delete");

        let receivedUser = JSON.parse(xhr2.response);
    });
    xhr2.send(user);
});