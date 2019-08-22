console.log("Alive!");



    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/users", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("load", function () {
        //получаем и парсим ответ сервера
        let receivedUser = JSON.parse(xhr.response);

        let div = document.querySelector('.usersList');
        receivedUser.users.forEach((item,i,arr)=> {
           let h2 =  document.createElement('h2');
           h2.innerHTML=`${receivedUser['users'][i]['name']}`;
           div.appendChild(h2);
        });
        console.log(receivedUser);
    });
    //отправляем на сервер данные из инпутов
    xhr.send();

    let xhr1 = new XMLHttpRequest();
    xhr1.open("POST", "/api/add", true);
    xhr1.setRequestHeader("Content-Type", "application/json");
    xhr1.addEventListener("load", function () {
        //получаем и парсим ответ сервера
        let receivedUser = JSON.parse(xhr1.response);

        let div = document.querySelector('.add_userForm');

        console.log(receivedUser);
    });
    // отправляем на сервер данные из инпутов
    xhr1.send();
