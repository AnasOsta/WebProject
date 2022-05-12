let header = document.getElementById("header");
let title = document.getElementById("title");
let ee = document.getElementById("ee");
const output = document.getElementById('output');
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
        title.innerHTML = "من نحن؟";
        header.innerHTML = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="header" dir="rtl">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./AnaSayfa.html">الرئيسية</a>
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
        <section id="output" dir="rtl" class ="ar">
            <h1>من نحن؟؟</h1>
            <p>لقد ولدت في سوريا وترعرت فيها. ولقد كنت مثل اي طفل عادي اذهب إلى المدرسة في الصباح واعود إلى المنزل في العصر وكنت مولعا بالحاسوب من العاب إلى تنصيب النظازم إلى تصليحه ....الخ</p>
            <p>وبعدها بفترة اندلعت الحرب في سوريا واطررت إلى الذهاب إلى تركيا لانها كانت الاقرب وهي ايضا تعتبر احد البلاد المتطورة.</p>
            <p>أسمي أنس وانا سوري الجنسية عمري 20 عاما وانا اعيش في تركيا</p>
            <p>في هذه الصفحة سأتحدث عن نفسي وهوايات واشياء اخرى لذلك اتمنى لك قراءة ممتعة.</p>
            <h2>الهوايات</h2>
            <p>احد افضل هواياتي في الصغر هي لعبة الشطرنج لقد كنت العبها مع عائلتي كثيرا وكنت احبها حتى تعلقت بألعاب الفيديو التي اتاحت لي الفرصة للعب مع اصدقائي وعائلتي وكانت افضل لعبة لي في الصغر هي <a href="https://ar.wikipedia.org/wiki/%D9%85%D9%8A%D8%AC%D8%A7_%D9%85%D8%A7%D9%86">ميغا مان</a> عندما كبرت وتطورت العاب بشكل كبيرة احببت لعبة <a href="https://ar.wikipedia.org/wiki/%D8%B1%D9%8A%D8%B2%D8%AF%D9%86%D8%AA_%D8%A5%D9%8A%D9%81%D9%84_(%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%A3%D9%84%D8%B9%D8%A7%D8%A8)">ريزدينت ايفيل</a>. إذا قراءة المزيد من المعلوامات عن الالعاب التي احبها <a href="https://www.samma3a.com/tech/ar/best-old-pc-games/">انقر هنا</a></p>
            <h2>نشاطاتي اليومية</h2>
            <p>غالبا ما ادرس كل يوم لفترات طويلة وبعض الاوفات ابحث وادرس اشياء تفيديني في المستقبل مثل تطوير لغات البرمج واحدث لغات البرمجة مقل لغة <a href="https://harelang.org/#:~:text=For%20an%20introduction%20to%20Hare%20with%20%20considerations,management%2C%20no%20runtime%2C%20and%20uses%20the%20C%20ABI.?msclkid=8053bb5acfc311ec9c3a5ccbd7982fa1">Hare</a></p>
            <p>وبعض الاوقات اقوم بتصوير الطبيعة الخلابة وساقوم بمشاركة بعض الصور من تصويري.</p>
        </section>`;
        footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>تواصل معنا</a></legend>";
    }
    else if(getLanguage == "en"){
        title.innerHTML = "Who are we?";
        header.innerHTML = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="header">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./AnaSayfa.html">Home</a>
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
        output.innerHTML = `
        <section id="output" class ="tr">
            <h1>Who we are??</h1>
            <p>I was born and raised in Syria. I lived a life there. By the way I liked the computer how to make taamir how to download new Windows .... etc</p>
            <p>Then the war started in Syria. I came to Turkey because it was the closest country to Turkey and it is a developed country.</p>
            <p>My name is Master Enes. And I'm Syrian, I'm 20.</p>
            <p>I'm going to talk about myself on this page.</p>
            <h2>Hobbies</h2>
            <p>My best hobby is chess. I used to play a lot when I was a kid. I played a lot with my family and then I loved video games and started playing with my friends and family. And the best game I played as a kid was <a href="https://tr.wikipedia.org/wiki/Mega_Man">Mega Man</a> and after growing up and the games were developed, I liked <a href="https://tr.wikipedia.org/wiki/Resident_Evil">Residence Eiffel</a>. You want more information here <a href="https://cutt.us/PrdzN"></a></p>
            <h2>Events</h2>
            <p>My daily activities are to work hard and look for things that will benefit my future, such as programming languages, the latest changes in these, and even new languages such as <a href="https://harelang.org/#:~:text=For%20an%20introduction%20to%20Hare%20with%20%20considerations,management%2C%20no%20runtime%2C%20and%20uses%20the%20C%20ABI.?msclkid=8053bb5acfc311ec9c3a5ccbd7982fa1"> "Hare"</a>.</p>
            <p>And sometimes I take the beautiful nature and I will share some pictures with you.</p>
        </section>
        `;
        footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>Contact</a></legend>";
    }
    else if(getLanguage == "tr"){
        title.innerHTML = "Biz Kimiz?";
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
        <section id="output" class ="tr">
            <h1>Biz Kimiz??</h1>
            <p>Suriye'de doğdum ve orada büyüdüm. Orada numal bir hayat yaşadım. Bu arada bilgisayar sevdim nasıl taamir yapcağım nasıl yeni Windows indirecem ....vb</p>
            <p>Sonra Suriye'de savaş başladı. Türkiye'ye geldim çünkü Türkiye'ye en yakın ülkeydi ve gelişmiş bir ülke.</p>
            <p>Benim adım Enes Usta. Ve ben Suriyeliyim,  20 yaşındayım.</p>
            <p>Bu sayfada kendimden bahsedeceğim. İyi okumalar.</p>
            <h2>Hobiler</h2>
            <p>En iyi hobim satranç. Çocukken çok oynardım. Ailemle çok oynardım ve sonra video oyunlarını sevdim ve arkadaşlarım ve ailemle oynamaya başladım. Ve çocukken oynadığım en iyi oyun <a href="https://tr.wikipedia.org/wiki/Mega_Man">Mega Man</a> ve büyüdükten ve oyunlar geliştirildikten sonra <a href="https://tr.wikipedia.org/wiki/Resident_Evil">Residence Eiffel</a> oyununu beğendim. Fazla bilgi istersiniz burada <a href="https://www.webtekno.com/eski-pc-oyunlari-h96086.html?msclkid=9499547ecfc111ec8af3ae2568ca97cb">Tıkla</a></p>
            <h2>Etkinlikler</h2>
            <p>Günlük aktivitelerim çok çalışmak ve programlama dilleri, bunlardaki en son değişiklikler ve hatta <a href="https://harelang.org/#:~:text=For%20an%20introduction%20to%20Hare%20with%20%20considerations,management%2C%20no%20runtime%2C%20and%20uses%20the%20C%20ABI.?msclkid=8053bb5acfc311ec9c3a5ccbd7982fa1">"Hare"</a> gibi yeni diller gibi geleceğime fayda sağlayacak şeyleri aramaktır.</p>
            <p>Ve bazen güzel doğayı çekiyorum ve sizinle bazı resimler paylaşacağım.</p>
        </section>`;
    footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>İletişim</a></legend>";
    }
}