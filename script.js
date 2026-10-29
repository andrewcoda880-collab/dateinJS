    const date = new Date();

    var day = date.getDate();
    var month = 1 + date.getMonth();
    var year = date.getFullYear();

    document.body.innerHTML = "<h1>Today is " + month + "/" + day + "/" + year + "</h1>";