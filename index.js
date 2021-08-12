function submitData(name, email) {
    let data = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    
    return fetch('http://localhost:3000/users', configObj)
        .then(response => response.json())
        .then(json => {
            let id = json.id;
            let div = document.createElement('div');
            div.innerHTML = id;
            document.body.appendChild(div);
        })
        .catch(error => {
            let msg = error.message;
            let div = document.createElement('div');
            div.innerHTML = msg;
            document.body.appendChild(div);
        });
}