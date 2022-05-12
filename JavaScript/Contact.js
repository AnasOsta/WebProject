let header = document.getElementById("header");
let title = document.getElementById("title");
let ee = document.getElementById("ee");
const output = document.getElementById('output');
let footer = document.getElementById("footer");
onload = ()=>{
}

function information(){
    var adi = info.adi.value;
    var email = info.email.value;
    var title = info.title.value;
    var content = info.content.value;
    let emailTest = "" + email;
    if (adi == "" && email == "" && title == "" && content == ""){
    alert('Lütfen form boş bırakmayın');
    return;
    }
    else if (emailTest.indexOf("@") == -1 && email != "")
        {
            alert ('Girdinz Email değildir');
            return;
        }
        else if (adi == "" || email == "" || title == "" || content == "")
        {
            alert('Form içinde birşey boş');
            return;
        }
        else
            alert('Başarıyla form gönerdi');

    document.info.action = "./HTML/AnaSayfa.html";
}
function informationAr(){
    var adi = info.adi.value;
    var email = info.email.value;
    var title = info.title.value;
    var content = info.content.value;
    let emailTest = "" + email;
    if (adi == "" && email == "" && title == "" && content == ""){
    alert('رجاء لا ترسل الشكوى فارغة');
    return;
    }
    else if (emailTest.indexOf("@") == -1 && email != "")
        {
            alert ('البريد لالكتروني المدخل خطأ');
            return;
        }
        else if (adi == "" || email == "" || title == "" || content == "")
        {
            alert('هناك مدخل فارغ ارجو تعبأت جميع المدخلات');
            return;
        }
        else
            alert('لقد تم ارسال الشكوى بشكل ناجح');

    document.info.action = "./HTML/AnaSayfa.html";
}

function informationEn(){
    var adi = info.adi.value;
    var email = info.email.value;
    var title = info.title.value;
    var content = info.content.value;
    let emailTest = "" + email;
    if (adi == "" && email == "" && title == "" && content == ""){
    alert('Please do not leave the form blank');
    return;
    }
    else if (emailTest.indexOf("@") == -1 && email != "")
        {
            alert ('Your entry is not Email');
            return;
        }
        else if (adi == "" || email == "" || title == "" || content == "")
        {
            alert("Something's empty in a form");
            return;
        }
        else
            alert('Send form successfully');

    document.info.action = "./HTML/AnaSayfa.html";
}

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
    if (getLanguage === "ar"){
        title.innerHTML = "تواصل معنا";
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
                    <a class="nav-link" href="./CV.html">الملف.الشخصي</a>
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
        output.innerHTML = `
        <div id="output"  >
            <form method="post" name="info" id="login" >

                <label for="adi">أسم المستخدم</label>
                <input type="text" name="adi" id="adi" class="konu" value=""><br>
                
                <label for="email">البريد الالكتروني</label>
                <input type="text" name="email" id="email" class="konu" value=""><br>
                
                <label for="title1">عنوان الشكوى</label>
                <input type="text" name="title" id="title1" class="konu" value=""><br>
                
                <label for="content">موضوع الشكوى</label>
                <input type="text" name="content" id="content" value=""><br>
                
                <button type="submit" name="submit" value="ارسال" onclick="informationAr()">ارسال</button>
                <button type="reset">تنظيف</button></form>
        </div>`;
    footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>تواصل معنا</a></legend>";

    }
    else if (getLanguage === "tr"){
        title.innerHTML = "İletişim";
        header.innerHTML = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="header">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./AnaSayfa.html">AnaSayfa</a>
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
                    <a class="nav-link" href="./CV.html">CV</a>
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
        
        output.innerHTML = `
        <div id="output">
        <form method="post" name="info" id="login">
            
            <label for="adi">Kullancı adı</label><br>
            <input type="text" name="adi" id="adi" class="konu" value=""><br>
            
            <label for="email">E-Posta</label><br>
            <input type="text" name="email" id="email" class="konu" value=""><br>
            
            <label for="title1">Ana başlık</label><br>
            <input type="text" name="title" id="title1" class="konu" value=""><br>
            
            <label for="content">Konu</label><br>
            <input type="text" name="content" id="content" value=""><br>
            
            <button type="submit" name="submit" value="Gönder" onclick="information()">Gönder</button>
            <button type="reset">Temizle</button></form>
    </div>`;
    footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>İletişim</a></legend>";
    }
    else if (getLanguage === "en"){
        title.innerHTML = "Contact";
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
                    <a class="nav-link" href="./CV.html">CV</a>
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
        output.innerHTML =`
        <div id="output">
            <form method="post" name="info" id="login">
                
                <label for="adi">User name</label><br>
                <input type="text" name="adi" id="adi" class="konu" value=""> 
                
                <label for="email">Email</label><br>
                <input type="text" name="email" id="email" class="konu" value=""><br>
                
                <label for="title1">Title</label><br>
                <input type="text" name="title" id="title1" class="konu" value="">
                
                <label for="content">Content</label><br>
                <input type="text" name="content" id="content" value="">
                
                <button type="submit" name="submit" value="Submit" onclick="informationEn()">Submit</button>
                <button type="reset">Reset</button></form>
        </div>
`;
    footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>Contact</a></legend>";
    
    }
}