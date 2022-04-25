const output = document.getElementById('output');

ar.onclick = ()=>{
    setLanguage("ar");
    localStorage.setItem("Lang", "ar");
};

en.onclick = ()=>{
    setLanguage("en");
    localStorage.setItem("Lang", "en");
};

tr.onclick = ()=>{
    setLanguage("tr");
    localStorage.setItem("Lang", "tr");
};

onload = ()=>{
    setLanguage(localStorage.getItem("Lang"));
}

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
        document.info.action = "./index.php";
    }
}

function setLanguage(getLanguage){
    if (getLanguage === "ar"){
        output.innerHTML = ``;
    }
    else if (getLanguage === "tr"){
        output.innerHTML = `
        <div class="login output">   
            <form action="Post.php" method="POST" name="info">
                <label for="username">Giriş sayfası</label><br><br>

                <?php if(isset($error_username))
                    echo '<p>'. $error_username .'</p>' ;?>
                <input type="text" name="username" id="username" placeholder="KullancıAdı" autocomplete="off"> <br>
               <br> <?php if(isset($error_passsword))
                    echo '<p>'.$error_passsword .'</p>' ;?>
                <input type="password" name="password" placeholder="Parola" id="password" autocomplete="off"><br>
                
                <button type="submit" name="submite" onclick="information()">Giriş yap</button>
            </form>
        </div>`;
    }
    else if (getLanguage === "en"){
        output.innerHTML =``;
    }
}