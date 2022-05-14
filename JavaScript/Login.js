function information(){
    let password = "" + info.password.value;
    let username = "" + info.username.value;

    if (username === "b1812100001@sakarya.edu.tr"){
        if (password === "b1812100001"){
            alert("Hoşgeldiniz benim sitem");
            document.info.action = "./Post.php";
        }
    }
    else if (username === "" || password === "")
        alert("Kullancı adı yada Parola boş");
    else {
        alert("Kullancı adı yada Parola yanlış");
    }
}