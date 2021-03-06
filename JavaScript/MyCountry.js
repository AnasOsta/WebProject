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
    output.innerHTML = "";
    if(getLanguage === "ar"){
        title.innerHTML = "مدينتي";
        header.innerHTML = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="header" dir="rtl">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./AnaSayfa.html">الرئيسية</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="./MyCountry.html">مدينتي</a>
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
        output.innerHTML = "<section id='output' class ='ar' dir='rtl'><article><h1>مدينة حلب السورية</h1>"+
        "<h3>اين تقع مدينة حلب</h3>" +
        "<p>مدينة حلب هي مدينة عربية تابعة إلى جمهورية سوريا العربية، وتقع في جهة الشمالية من سوريا على دائرة عرض 36.2053 درجة شمال خط الاستواء، وعلى خط طول 37.1590 درجة شرق خط جرينتش، وتبلغ مساحة أراضيها 190كم²، وتعد من أكبر المدن في مناطق بلاد الشام، وتتبع إدارياً إلى محافظة حلب، نشأت في عام 10000ق.م، ومرت عليها عبر العصور الكثير من الأمم والحضارات؛ كالآرامية، والآشورية، والهيلينية، والرومانية، والفارسية، والبيزنطية، والإسلامية.</p></article>" + 
        "<article><h3>معلومات عن مدينة حلب السورية</h3><ul><li>تلقب باسم الشهباء، وترتفع عن مستوى سطح البحر 1,240 قدماً.</li><li>تتميز بمناخ شبه قاري؛ بسبب السلاسل الجبلية التي تحاذي البحر الأبيض المتوسط التي تحجب تيارات المناخ المتوسطي من العبور إلى أراضيها.</li><li>يبلغ عدد سكانها 5,132,10 نسمة وذلك حسب إحصائيات عام 2014م، ويتألف المجتمع السكاني فيها من العديد من المجموعات العرقية كالعرب وهم الغالبية، وأقليات من التركمان، والشركس، والأكراد، والأرمن.</li><li>تعتبر اللغة العربية اللغة الرسمية فيها، وتتميز بأنها ممزوجة ببعض الكلمات التركية.</li><li>تعد عملة الليرة السورية العملة الرسمية فيها.</li></ul></article>"+ 
        " <article id='eser'><h3>المعالم السياحية في مدينة حلب</h3><ul><li><strong>سوق خان الحرير : </strong> شيد في في القرن السادس عشر للميلاد، ويتميز بتجارة الأقمشة.</li><li><strong>خان الشونة :</strong> شيد في عام 1546م، واليوم أصبح مكاناً للصناعة اليدوية والحرفية.</li><li><strong>قلعة حلب :</strong> شيدت في الألف الأولى قبل الميلاد على تل اصطناعي يرتفع عن مستوى الأرض خمسين متراً.</li><li><strong>المدرسة الحلاوية :</strong> أصبحت مدرسة في أواخر القرن الثاني عشر للميلاد مكان كنيسة سانت هيلين التي شيدها قسطنطين الكبير في عام 1124م أيام روما القديمة.</li><li><strong>الأبواب التاريخية :</strong> باب الفرج، وأنطاكية، وقنسرين، والمقام، والأحمر، والنصر، والنيرب.</li><li><strong>معالم أخرى :</strong> سوق العطارين، ودار الكتب الوطنية، وقلعة سيف الدولة الحمداني، ومسجد الخسروية، و برج ساعة باب الفرج، وبيمارستان آرغون الكمالي، ومبنى القصر البلدي، وكنيسة الأربعين شهيداً، وخان الصابون، وعين دارة، ومدفن مار مارون، وساحة السبع بحرات، وجعدة المغارة، ودير وادي الساحور، وكهف الديدرية.</li></ul></article>"+
        "<article id='yemek'><h3>طعام حلب</h3><ul><li><strong>المامونية :</strong> تعتبر المامونية الحلبية من أشهر أطباق الحلويات في المطبخ الحلبي ، وهي من الأطباق الشعبية التي تقدم كثيراً في كل الأوقات وخصوصاً عند الفطور يوم الجمعة.</li><li><strong>الكويسات :</strong> وهي شرائح من لحم العجل أو الخروف، تتمّ خياطتها لتشبه الصرة، ثمّ يتم حشوها بالأرز واللحم والمكسرات، ومن ثم يتم خياطتها مرة ثانية وسلقها حتى تنضج .</li><li><strong>المحاشي :</strong> اشتهرت حلب بالمحاشي الشهية مثل محشي الكوسا والباذنجان والملفوف.<br><br>محشي الملفوف الحلبي: أكلة حلبية مشهورة بامتياز، رغم أن تحضيره يأخذ وقتاً طويلاً إلا أن طعمه اللذيذ يستحق كل هذا الوقت والجهد.</li><li><strong>الكبة المشوية : </strong> الكبّة هي أحد أشهر الأكلات الشرقية الدسمة التي تشتهر في منطقة بلاد الشام في سوريا والأردن وفلسطين ولبنان، كذلك فهي ذات شعبيّة كبيرة في العراق والكويت، لكن طريقة تحضيرها ومكوّناتها قد تختلف قليلاً في الكبّة السورية عن الكبّة العراقية، إلّا أنّها تحتل الصدارة في الموائد العائلية والعزائم والمناسبات؛ إذ قد يعتبرها البعض نوعاً من المُقبلات تقدّم إلى جانب الوجبة الرئيسية مع التبولة واللبن والحمص والسلطات؛ فهي ذات شكل جميل محبب لللصغار والكبار، ولها طعم مميّز وشهي.</li></ul></article>"+
        `<article>
          <div class = 'slider'>
            <ul id = 'right'>
              <li><a href="#eser"><img src='../Image/sehrim/AlMedrese.jpg' alt='المدرسة الحلاوية'><h5>المدرسة الحلاوية</h5></li>
              <li><img src='../Image/sehrim/door.jpg' alt='باب الفرج'><h5>باب الفرج</h5></li>
              <li><img src='../Image/sehrim/HalepKalesi.jpg' alt='قلعة حلب'><h5>قلعة حلب</h5></li>
              <li><img src='../Image/sehrim/hanAlHarir.jpg' alt='سوق خان الحرير'><h5>سوق خان الحرير</h5></li>
              <li><img src='../Image/sehrim/khanSone.jpg' alt='خان الشونة'><h5>خان الشونة</h5></li>
              <li><img src='../Image/sehrim/mesjid.jpg' alt='مسجد الخسروية'><h5>مسجد الخسروية</h5></a></li>
              <li><a href="#yemek"><img src='../Image/sehrim/Dolma.JPG' alt='محشي حلب'><h5>محسي حلب</h5></li>
              <li><img src='../Image/sehrim/mamuniye.jpg' alt='المامونية الحلبية'><h5>الماموينة الحلبية</h5></li>
              <li><img src='../Image/sehrim/qusset.jpg' alt='كويسات'><h5>كويسات</h5></li>
              <li><img src='../Image/sehrim/Kubba.jpg' alt='كبة مشوية'><h5>كبة مشوية</h5></a></li>
            </ul>
          </div>
        </article>`+
        "</section>";
        footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>تواصل معنا</a></legend>";
        
    }
    else if (getLanguage === "en"){
        title.innerHTML = "My Country";
        header.innerHTML = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="header">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./AnaSayfa.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="./MyCountry.html">MyCountry</a>
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
        output.innerHTML = "<section id='output' class ='tr'><article><h1>Syrian City of Aleppo</h1>"+
        "<h3>Where is Aleppo city</h3>" +
        "<p>Aleppo is an Arab city belonging to the Arab Republic of Syria, located on the northern side of Syria on a 36.2053 degree width north of the equator, and at a length line of 37.1590 degrees east of the Greenwich Line, with an area of 190 km², and is one of the largest cities In the levant, administratively traced to Aleppo province, it originated in 10,000 B.C., and throughout the ages has passed through many nations and civilizations, such as Aramaic, Assyrian, Hellenistic, Romanian, Persian, Byzantine, and Islamic.</p></article>" + 
        "<article><h3>Information about the Syrian city of Aleppo</h3><ul><li>Nicknamed the shehaba, it rises above sea level 1,240 feet.</li><li>It has a sub-continental climate because of the mountain ranges that border the Mediterranean sea, which block mediterranean climate currents from crossing into its territory.</li><li>With a population of 10,132,5,132, according to 2014 statistics, its population consists of many ethnic groups such as Arabs, the majority, minorities of Turkmen, Cherks, Kurds and Armenians.</li><li>Arabic is its official language and is mixed with some Turkish words.</li><li>The Syrian lira is its official currency.</li></ul></article>"+
        " <article id='eser'><h3>Sights in Aleppo</h3><ul><li><strong>Khan Silk Market : </strong> Built in the 16th century AD, it features a textile trade.</li><li><strong>Khan al-Shona :</strong> Built in 1546, it is now a place for handicrafts and crafts.</li><li><strong>Aleppo Castle :</strong>  Built in the first millennium BC on an artificial hill 50 meters above ground level.</li><li><strong>Hallawi School :</strong> In the late 12th century AD, a school became the place of the Church of St. Helen, built by Constantine the Great in 1124, the days of ancient Rome.</li><li><strong>Historical doors :</strong> Bab al-Faraj, Antioch, Constantine, Maqam, Red, Nasr and Nerb.</li><li><strong>Other landmarks :</strong> Al-Attarin Market, The National Book House, Saif al-Dawla Al-Hamdani Castle, Al-Khosrawia Mosque, Bab al-Faraj Clock Tower, Bimarstan Argon Al-Kamali, Municipal Palace Building, Church of the Forty Martyrs, Khan al-Sabab, Ain Dara, St. Maroun Cemetery, Al-Saba Bahrat Square, Al-Maghara' Al-Maghara Monastery, Wadi Al-Sahour Monastery and Kadria Cave.</li></ul></article>"+
        "<article id='yemek'><h3>Aleppo food</h3><ul><li><strong>Mamonia :</strong> Al-Mamunia Al-Halabia is one of the most popular dessert dishes in Aleppo cuisine, and is one of the popular dishes served a lot at all times, especially at breakfast on Fridays.</li><li><strong>Quissat :</strong> These are slices of veal or lamb, sewn to resemble a mast, then stuffed with rice, meat and nuts, and then sewn again and boiled until cooked.</li><li><strong>Mahshi :</strong> Aleppo is famous for its delicious stuffing such as zucchini, eggplant and cabbage.<br><br>Milky cabbage stuffed: Aleppo food is famous for its excellence, although it takes a long time to prepare, but its delicious taste is worth all the time and effort.</li><li><strong>Aleppo Kubba : </strong> Kibba is one of the most famous oriental fatty foods that are famous in the Levant region in Syria, Jordan, Palestine and Lebanon, as well as very popular in Iraq and Kuwait, but the way they are prepared and their ingredients may differ slightly in Syrian kubba from Iraqi kubba, but they are at the forefront of family tables, singles and events; And delicious.</li></ul></article>"+
        "<article><div class = 'slider'><ul><a href='#eser'><li><img src='../Image/sehrim/AlMedrese.jpg' alt='Hallawi school'><h5>Hallawi school</h5></li><li><img src='../Image/sehrim/door.jpg' alt='Bab al-Faraj'><h5>Bab al-Faraj</h5></li><li><img src='../Image/sehrim/HalepKalesi.jpg' alt='Aleppo Castle'><h5>Aleppo Castle</h5></li><li><img src='../Image/sehrim/hanAlHarir.jpg' alt='Khan Silk Market'><h5>Khan Silk Market</h5></li><li><img src='../Image/sehrim/khanSone.jpg' alt='Khan al-Shona'><h5>Khan al-Shona</h5></li><li><img src='../Image/sehrim/mesjid.jpg' alt='Al-Khosrawia Mosque'><h5>Al-Khosrawia Mosque</h5></li></a><a href='#yemek'><li><img src='../Image/sehrim/Dolma.JPG' alt='aleppo stuffing'><h5>aleppo stuffing</h5></li><li><img src='../Image/sehrim/mamuniye.jpg' alt='Al-Mamunia Al-Halabia'><h5>Al-Mamunia Al-Halabia</h5></li><li><img src='../Image/sehrim/qusset.jpg' alt='Quissat'><h5>Quissat</h5></li><li><img src='../Image/sehrim/Kubba.jpg' alt='Aleppo meatballs'><h5>Aleppo meatballs</h5></li></ul></a></div></article>"+        
        "</section>";
        footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>Contact</a></legend>";

    }
    else if (getLanguage === "tr"){
        title.innerHTML = "Şehrim";
        header.innerHTML = `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="header">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./AnaSayfa.html">AnaSayfa</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="./MyCountry.html">Şehrim</a>
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
        output.innerHTML = "<section id='output' class ='tr'><article><h1>HALEP</h1>"+
        "<h3>Halep nerededir ve Alanı kaçtır?</h3>" +
        "<p>Halep, Suriye'nin kuzey tarafında, ekvatorun kuzeyinde 36.2053 derece genişliğinde ve Greenwich Hattı'nın 37.1590 derece doğusunda, 190 km²'lik bir alana sahip bir uzunluk çizgisinde bulunan Suriye Arap Cumhuriyeti'ne ait bir Arap şehridir ve en büyük şehirlerden biridir Şam, idari olarak Halep eyaletine kadar izlenen, M.Ö. 10.000 yılında ortaya çıkmış ve çağlar boyunca Aramice, Asur, Helenistik, Romen, Farsça, Bizans ve İslam gibi birçok ulus ve medeniyetten geçmiştir.</p></article>" + 
        "<article><h3>Suriye'nin Halep şehri hakkında bilgi</h3><ul><li>Shehaba lakaplı, deniz seviyesinden 1.240 feet yükselir.</li><li>Akdeniz iklim akımlarının topraklarına geçmesini engelleyen Akdeniz'i sınırlayan dağ sıraları nedeniyle karasal bir iklime sahiptir.</li><li>2014 istatistiklerine göre 10.132.5.132 nüfusa sahip olan grubun nüfusu, Araplar, Türkmenlerin çoğunluğu, azınlıkları, Çevkler, Kürtler ve Ermeniler gibi birçok etnik gruptan oluşmaktadır.</li><li>Arapça resmi dilidir ve bazı Türkçe kelimelerle karıştırılır.</li><li>Suriye lirası resmi para birimidir.</li></ul></article>"+ 
        " <article id='eser'><h3>Halep sınırlarındaki Gezilecek Yerler</h3><ul><li><strong>Han İpek Pazarı : </strong> MS 16. yüzyılda inşa edilmiş, tekstil ticaretine sahiptir.</li><li><strong>Khan al-Shona :</strong> 1546 yılında inşa edilen bu yer, Bugünlerde el sanatları için açılmıştır.</li><li><strong>Halep Kalesi :</strong> M.Ö. birinci binyılda zemin seviyesinden 50 metre yükseklikte yapay bir tepe üzerine inşa edilmiştir.</li><li><strong>Hallawi Okulu :</strong> MS 12. yüzyılın sonlarında, bir okul, antik Roma günleri olan 1124'te Büyük Konstantin tarafından inşa edilen Sent Helen Kilisesi'nin yeri oldu.</li><li><strong>Tarihi kapılar :</strong> Bab al-Faraj, Antakya, Konstantin, Maqam, Kırmızı, Nasr ve Nerb.</li><li><strong>Diğer simge yapılar :</strong> Al-Attarin Pazarı, Ulusal Kitap Evi, Saif al-Dawla Al-Hamdani Kalesi, Al-Khosrawia Camii, Bab al-Faraj Saat Kulesi, Bimarstan Argon Al-Kamali, Belediye Sarayı Binası, Kırk Şehit Kilisesi, Khan al-Sabab, Ain Dara, St. Maroun Mezarlığı, Al-Saba Bahrat Meydanı, Al-Maghara' Al-Maghara Manastırı, Wadi Al-Sahour Manastırı ve Kadria Mağarası.</li></ul></article>"+
        "<article id='yemek'><h3>Halep yemeği</h3><ul><li><strong>Al-Mamunia Al-Halabia :</strong> Halep mutfağının en popüler tatlı yemeklerinden biridir ve özellikle cuma günleri kahvaltıda her zaman çok servis edilen popüler yemeklerden biridir.</li><li><strong>Quissat :</strong> Bunlar dana eti veya kuzu dilimleridir, bir direğe benzeyecek şekilde dikilir, daha sonra pirinç, et ve fındıkla doldurulur ve daha sonra tekrar dikilir ve pişene kadar kaynatılır.</li><li><strong>Halep dolması :</strong> kabak, patlıcan ve lahana gibi lezzetli dolmalarıyla ünlüdür.<br><br>Sütlü lahana dolması: Halep yemekleri, hazırlanması uzun zaman almasına rağmen, mükemmelliği ile ünlüdür, ancak lezzetli tadı her zaman ve çabaya değer.</li><li><strong>Halep köftesi : </strong> Suriye, Ürdün, Filistin ve Lübnan'daki Halep bölgesinde bilinen en ünlü oryantal yağlı yiyeceklerden biridir, ayrıca Irak ve Kuveyt'te çok popülerdir, ancak hazırlanma şekilleri ve malzemeleri Suriye kubbasında Irak kubbesinden biraz farklı olabilir, ancak bazıları onları tabbuleh, yoğurt, nohut ve salatalarla ana yemeğin yanında servis edilen bir tür meze olarak görebileceği için aile masalarının, ziyafetlerin ve etkinliklerin ön saflarında yer alırlar;</li></ul></article>"+
        "<article><div class = 'slider'><ul><a href='#eser'><li><img src='../Image/sehrim/AlMedrese.jpg' alt='Hallawi Okulu'><h5>Hallawi Okulu</h5></li><li><img src='../Image/sehrim/door.jpg' alt='Bab al-Faraj'><h5>Bab al-Faraj</h5></li><li><img src='../Image/sehrim/HalepKalesi.jpg' alt='Halep Kalesi'><h5>Halep Kalesi</h5></li><li><img src='../Image/sehrim/hanAlHarir.jpg' alt='Han İpek Pazarı'><h5>Han İpek Pazarı</h5></li><li><img src='../Image/sehrim/khanSone.jpg' alt='Khan al-Shona'><h5>Khan al-Shona</h5></li><li><img src='../Image/sehrim/mesjid.jpg' alt='Al-Khosrawia Camii'><h5>Al-Khosrawia Camii</h5></li></a><a href='#yemek'><li><img src='../Image/sehrim/Dolma.JPG' alt='Halep Dolması'><h5>Halep dolması</h5></li><li><img src='../Image/sehrim/mamuniye.jpg' alt='Al-Mamunia Al-Halabia'><h5>Al-Mamunia Al-Halabia</h5></li><li><img src='../Image/sehrim/qusset.jpg' alt='Quissat'><h5>Quissat</h5></li><li><img src='../Image/sehrim/Kubba.jpg' alt='Halep köftesi'><h5>Halep köftesi</h5></li></ul></a></div></article>"+
        "</section>";
    footer.innerHTML = "<legend id='footer'><a href='../HTML/Contact.php'>İletişim</a></legend>";

    }
}