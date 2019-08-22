console.log("Alive!");



    // сериализуем данные в json
    let xhr = new XMLHttpRequest();
    // посылаем запрос на адрес "/api"
    xhr.open("GET", "/api/users", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("load", function () {
        // let receivedUser = JSON.parse(xhr.response);
        //получаем и парсим ответ сервера
        let receivedUser = JSON.parse(xhr.response);
        // let user=receivedUser.user
        let div = document.querySelector('.name');
        console.log(div);

        receivedUser.users.forEach((item,i,arr)=> {
           let h2 =  document.createElement('h2');
           h2.innerHTML=`${receivedUser['users'][i]['name']}`;
           div.appendChild(h2);
           // document.body.appendChild('h1');
            console.log(item);
        });
        console.log(receivedUser);
        // console.log(xhr.response);
    });

    //отправляем на сервер данные из инпутов
    xhr.send();
//${receivedUser['users'][i]['name']}