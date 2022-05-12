let header = document.getElementById("header");
let title = document.getElementById("title");
let ee = document.getElementById("ee");
let footer = document.getElementById("footer");
function ar(){
    setLanguage("ar");
    localStorage.setItem("Lang", "ar");
}

function en (){
    setLanguage("en");
    localStorage.setItem("Lang", "en");
}

function tr() {
  
  setLanguage("tr");
  localStorage.setItem("Lang", "tr");
}
onload = ()=>{
    setLanguage(localStorage.getItem("Lang"));
}
function setLanguage(getLanguage){
    if(getLanguage === "ar"){
        title.innerHTML = "الملف الشخصي";
        header.innerHTML = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="header" dir="rtl">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./AnaSayfa.html">الرئيسية</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./MyCountry.html">مدينتي</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./Mirasimiz.html">آثار</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./Api.html">API</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="./CV.html">الملف.الشخصي</a>
                  </li>
                </ul>
        `;
        ee.innerHTML = `<div class="sidenav" id="ee">
        <ul>
            <li>
            <button class="button"><img src="../Image/Language/Syria.png" width="50%" onclick = "ar()">AR</button>
                <ul>
                    <li><button class="button "><img src="../Image/Language/USA.png" width="50%" onclick = "en()">EN</button></li>
                <li>
                <button class="button "><img src="../Image/Language/Turkey.png" width="50%" onclick = "tr()"> TR</button>
                </li>
                </ul>
            </li>
        </ul>
    </div>`;
    footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>تواصل معنا</a></legend>";
    }
    else if(getLanguage === "en"){
        title.innerHTML = "CV";
        header.innerHTML = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="header">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./AnaSayfa.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./MyCountry.html">MyCountry</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./Mirasimiz.html">archeology</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./Api.html">API</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="./CV.html">CV</a>
                  </li>
                </ul>
        `;
        ee.innerHTML = `<div class="sidenav" id="ee">
        <ul>
            <li>
            <button class="button "><img src="../Image/Language/USA.png" width="50%" onclick = "en()">EN</button>
                <ul>
                    <li><button class="button"><img src="../Image/Language/Syria.png" width="50%" onclick = "ar()">AR</button></li>
                <li>
                <button class="button "><img src="../Image/Language/Turkey.png" width="50%" onclick = "tr()"> TR</button>
                </li>
                </ul>
            </li>
        </ul>
    </div>`;
    footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>Contact</a></legend>";
    }
    else if(getLanguage === "tr"){
        title.innerHTML = "CV";
        header.innerHTML = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="header">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./AnaSayfa.html">AnaSayfa</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./MyCountry.html">Şehrim</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./Mirasimiz.html">Mirasımız</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./Api.html">API</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="./CV.html">CV</a>
                  </li>
                </ul>
        `;
        ee.innerHTML = `<div class="sidenav" id="ee">
        <ul>
            <li>
            <button class="button "><img src="../Image/Language/Turkey.png" width="50%" onclick = "tr()"> TR</button>
                <ul>
                    <li><button class="button"><img src="../Image/Language/Syria.png" width="50%" onclick = "ar()">AR</button></li>
                <li><button class="button "><img src="../Image/Language/USA.png" width="50%" onclick = "en()">EN</button></li>
                </ul>
            </li>
        </ul>
    </div>`;
    footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>İletişim</a></legend>";
    }
}