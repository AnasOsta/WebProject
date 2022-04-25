let ar = document.getElementById("ar");
let en = document.getElementById("en");
let tr = document.getElementById("tr");
let title = document.getElementById("title");
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
function setLanguage(getLanguage){
    if(getLanguage === "ar"){
        title.innerHTML = "أثار مدينتي";
    output.innerHTML = "<section id='output' dir='rtl'>" + 
    "<article><h1>آثار حلب</h1><h3>المعالم الأثرية</h3><p> تحتوي حلب على العديد من الاماكن الأثرية والتاريخية وهي كالآتي :</p> <ul><li><details><summary>المداراس التاريخيّة مثل المدرسة الشاذبختية، والمدرسة الظاهريّة، والمدرسة الحلاوية، والمدرسة المقدميّة.</summary><p>المدرسة الشاذبختية إحدى المدارس التاريخية الأثرية في مدينة حلب القديمة. تم بنائها في أيام الملك الظاهر غازي عام 1193م. وتعرف باسم مسجد الشيخ معروف، تحتوي المدرسة لوحة شهيرة تحمل كتابة نسخيّة تدل على أن هذه المدرسة هي وقف قدمها 'شاذبخت عتيق' الملك العادل 'محمود بن زنكي' لأصحاب الإمام أبي حنيفة النعمان, و الشاذبختية هي مدرسة وتربة ينتهي بابها بنصف كرة ومقرنصات بديعة، وبالداخل غرفة مربعة كانت تتقدمها أقواس تهدمت في الوجه الغربي للباحة الداخلية وتعلو القبلية قبة تضم محراباً رائعاً أيوبي الطراز من المرمر وفيه عمودان ينتهيان بتيجان جميلة .</p><a href='https://cutt.us/L2Cy7'>المدرسة الظاهريّة</a><br><a href='https://cutt.us/dIINj'>المدرسة الحلاوية</a><br><a href='https://cutt.us/iVzk2'>المدرسة المقدميّة</a></details></li>"+
    "<li><details><summary>الأسواق القديمة مثل سوق المدينة، وسوق العطّارين، وسوق الياسمين، وسوق الصياغ، وسوق العتمة، وسوق الحدادين، وسوق العبارة، وسوق خان الحرير.</summary><P>سوق العطارين أحد أقدم الأسواق الواقعة داخل أسوار البلدة القديمة لمدينة القدس. يربط بين سوق باب خان الزيت و سوق الحصر، بموازاة سوق اللحامين. يتميز بسقف مقوس يعود إلى الفترة المملوكية يغطي السوق كله. وقد اشتق السوق اسمه من المحلات التجارية العديدة التي تبيع البهارات والأعشاب الطبية المصنوعة من مواد وألوان طبيعية.</p><a href='https://cutt.us/t9xX1'>بعض الصور الاضافة للأسواق</a></details></li>"+
    "<li><details><summary>القلاع مثل قلعة حلب، وقلعة سيف الدولة الحمدانيّ.</summary><p>قلعة حلب قصر محصن يعود إلى العصور الوسطى. تعتبر قلعة حلب إحدى أقدم وأكبر القلاع في العالم، يعود استخدام التل الذي تتوضع عليه القلعة إلى الألفية الثالثة قبل الميلاد، حيث احتلتها فيما بعد العديد من الحضارات بما في ذلك الإغريق والبيزنطيين والمماليك والأيوبيين، بينما يظهر أن أغلب البناء الحالي يعود إلى الفترة الأيوبية. أجرت عليها مؤسسة آغا خان للثقافة والجمعية الأثرية في حلب عمليات حفظ واسعة في عام 2000. تقع القلعة في مركز المدينة القديمة التي أدرجتها منظمة اليونسكو على لائحة مواقع التراث العالمي عام 1986.</p><a href='https://cutt.us/MT4iy'>قلعو سيف الدولة الحمداني</a></details></li>"+
    "<li><details><summary>دار الكتب الوطنيّة</summary><p>في عام 1924 صدر قرار من حكومة دمشق بتأسيس مكتبة في مدينة حلب باسم «مكتبة فرع المجمع العلمي العربي» وكلف هذه المهمة كل من العلامة الحلبي الشيخ كامل الغزي والقس مينش، وأرسلت إدارة المجمع حينذاك عددا من الكتب لتكون نواة للمكتبة، واختير لها المكان في دائرة الأوقاف الإسلامية التي كانت في خان الجمرك بالمدينة القديمة وخصصت لها غرفتان، وعمل على إدارتها الشيخ يونس رشدي وهاشم سويد، ولم يكن عدد الكتب المكتبة آنذاك يتجاوز 1500 كتاب وكانت نفقاتها من المجمع العربي.<br><br> ظل المجمع العلمي يشرف على المكتبة ويزودها ببعض الكتب والنفقات الضرورية ورواتب الموظفين حتى عام 1937، حين وضع حجر أساس لبناء دار الكتب الوطنية، التي اكتمل إنشاؤها وفي نهاية عام 1939، غير أن افتتاح المبنى تأخر بسبب الحرب؛ فقد احتل الفرنسيون المكان وجعلوه مقراً للدفاع المدني ثم احتلها الإنجليز ودام احتلالها حتى نهاية الحرب، ومن ثم دشن المبنى يوم الثلاثاء 4 ديسمبر (كانون الأول) 1945، وقد تحدث يوم التدشين الشيخ راغب الطباخ عن المكتبة وعن تاريخ المكتبات عند العرب.<br><br>شيدت الدار في ساحة باب الفرج بجهود من الأمير مصطفى الشهابي، محافظ حلب آنذاك، الذي أصبح في ما بعد رئيسا للمجمع العلمي العربي. وعند انتقال الدار، كان عدد الكتب نحو ستة آلاف كتاب تقريبا، وقامت البلدية بتأثيث قاعة المحاضرات وقاعة المطالعة وابتاعت الخزائن الحديثة لقاعة ومخزن الكتب من ستراسبورغ بفرنسا، وهي تتسع لمائة ألف كتاب. ودامت رعاية البلدية للدار حتى أواخر عام 1954، حين ألحقت بوزارة الثقافة ولا تزال.<br><br>زار الكثير من أعلام الأدب العربي المكتبة الوطنية بحلب، وأقاموا فيها أمسيات ثقافية ومحاضرات، ومنهم الشاعران اللبنانيان بشارة الخوري (الأخطل الصغير) وأمين نخلة والأدباء المصريون طه حسين وأحمد أمين وعائشة عبد الرحمن (بنت الشاطئ) وعباس محمود العقاد ومحمد حسين هيكل ومحمد مندور وأمين الخولي والشيخ محمد أبو زهرة وأمينة السعيد ودرية شفيق، كما استضافت أيضًا المؤرخين والشعراء والأدباء نقولا زيادة وفؤاد صروف وجورج طعمة وميخائيل نعيمة وسامي الدروبي وعبد السلام العجيلي وفؤاد أفرام البستاني وغيرهم.<br><br>كما أدار المكتبة عدد من الأسماء الثقافية والأدبية اللامعة في حلب، من بينهم الشاعر عمر أبو ريشة وسامي الكيالي وجلال زهدي الملاح وعلي الزيبق وغيرهم.</p><p>لمعلومات اكثر انقر<a href='https://cutt.us/tgBLq'>هنا</a></p></details></li>"+
    "<li><details><summary>الأبواب التاريخيّة مثل باب الجنان، وباب الفرج، وباب النصر، وباب أنطاكية، وباب الحديد، وباب قنسرين، وباب الأحمر، وباب المقام، وباب النيرب.</summary><p>يلفظه العامة ( باب جنين )، وقد سمي بذلك لأنه يفضي إلى جنان حلب الغربية، حيث بساتين الفستق والأشجار المثمرة (حيث يجري نهر قويق)  وقد كان مركزاً لتحويل النقود وشحن البضائع والتجارة العامة، وهو يبعد عن باب أنطاكية مئات الأذرع نحو الشمال .</p><p>معلومات عن باقي الابواب متواجدة <a href='https://cutt.us/X44ZC'>هنا</a></p></details></li>"+
    "<li><details><summary>المساجد مثل مسجد الخسروية.</summary><p>يعتبر مسجد الخسروية من المساجد القديمة والذي بناه خسرو باشا حاكم حلب في عهد السلطان سليمان الاول.معني مسجد الخسروية ( بالعربية : جامع الخسروية ، بالحروف اللاتينية: جامع الصروية ؛ بالتركية Husreviye Camii) كان مجمعا مسجدا في حلب ، وسوريا . تقع جنوب شرق القلعة .حيث تضرر المسجد من قبل إرهابي مسلح مرتبط بالقاعدة او القوات المسلحة السورية خلال معركة حلب ضمن الحرب الأهلية السورية.</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/pU5VS'>هنا</a></p></details></li>"+
    "<li><details><summary>برج ساعة باب الفرج.</summary><p>ساعة باب الفرج تقع بالقرب من باب الفرج وهو أحد أبواب حلب القديمة فإلى الشرق منها يقع مسجد بحسيتا (1350م) وإلى شرقه المدرسة القرموطية (1477م) وفي النهاية الشرقية يقع المسجد العمري (1393م) ثم جامع الدباغة العتيقة (1404م) كما تقع دار الكتب الوطنية بحلب مقابل برج الساعة مباشرة.</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/unXDs'>هنا</a></p></details></li>"+
    "<li><details><summary>بيمارستان آرغون الكمالي.</summary><p>يقع بيمارستان أرغون الكاملي بالقرب من خان الجمرك في حلب القديمة ويعود بنائه إلى فترة حكم المماليك حيث قام ببناءه أرغون الكاملي نائب السلطنة المملوكية في حلب وذلك في العام 1354، في عهد السلطان عماد الدين إسماعيل بن محمد بن قلاوون، ذلك وفق النقوش المكتوبة على مدخل البيمارستان. واعتبر أحد أفضل البيمارستانات الإسلامية في سورية ومصر.</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/D8UXh'>هنا</a></p></details></li>"+
    "<li><details><summary>جرف الأحمر</summary><p>يقع على بعد 17 كم شمال شرق حلب. اكتشف الموقع عام 1989 من قبل توم مكليلان ومعاونته مندي موترام، وتم التنقيب في مساحة 350 م2 من قبل دانييل ستوردر وبسام جاموس (البزور 2003: 69).كشفت الحفريات عن عدة سويات أثرية في الموقع وهي:• المنطقة الغربية وفيه أقدم السويات (E-4-7) وتميزت بمباني دائرية.• السوية الخامسة (E-5) وتظهر فيه التقسيمات الداخلية بواسطة جدران مستقيمة.• السوية الثانية (E-2) وتحتوي على مساكن لها جدران خارجية متعامدة.• السوية الثامنة (E-8) وتحتوي على مساكن مربعة الشكل.• السوية الثامنة (O/E) وتمثل مرحلة انتقالية بين العصر الحجري الحديث ما قبل الفخاري أ PPNA وما قبل الفخاري ب PPNB. وأهم المساكن التي اكتشف هي: EA53، EA30</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/RRuFo'>هنا</a></p></details></li>"+
    "<li><details><summary>الكنائس مثل كنيسة الأربعين شهيد, وكنيسة الشيباني.</summary><p>يعود تأسيس كاتدرائية الأربعين شهيد للأرمن الأرثوذكس في حلب، سورية إلى القرن السادس عشر، وتم توسيعها عام 1916 من قبل الوجيه الأرمني بيدروس في عهد السلطان الرابع. تحتوي الكنيسة مجموعة مميزة وفريدة من الأيقونات تعود إلى عصر النهضة بعض منها يعود لمدرسة الأيقونات الحلبية، أشهر هذه الأيقونات هي الدينونة الأخيرة التي رسمها الخوري نعمت الله بن الخوري يوسف. إضافة إلى أيقونات أخرى مثل أيقونة القديس جاور جيوس وأيقونة عماد السيد المسيح وأيقونة العذراء مع الطفل يسوع وإلى جانبها القديس يوسف ويوحنا المعمدان إضافة للوحات أخرى للشهداء الأربعين.</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/8CJA7'>هنا</a></p></details></li>"+
    "<li><details><summary>المكتبة العجمية.</summary><p>من المدارس التاريخية الأثرية في مدينة حلب، وهو قصرٌ بني في القرن الثاني عشر بالقرب من قلعة حلب من قبل الأمير 'مجد الدين بن الداي' من الأسرة الزنكية، تم تجديده في القرن 15 الهجري.وأصبح مقراً لمتحف التراث الشعبي بين عامي 1967 - 1975. يتمتع المتحف في حلب بدور مهم بالترويج السياحي إلى جانب إظهاره للعادات والأزياء الشعبية واحتوائه على العديد من المعروضات القديمة والتراثية مايجعله عنصراً جاذبا للحركة السياحية داخل المدينة حيث يقصده السياح من مختلف الجنسيات للتعرف على محتوياته وموقعه في حي الجديدة.</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/SStVk'>هنا</a></p></details></li>"+
    "<li><details><summary>مئذبة المسجد الأموية.</summary><p>جامع بني أمية الكبير، ويعرف اختصاراً بالجامع الأموي، هو المسجد الذي أمر الوليد بن عبد الملك بتشييده في دمشق، ويُعد رابع أشهر المساجد الإسلامية بعد حرمي مكة والمدينة والمسجد الأقصى، كما يُعد واحداً من أفخم المساجد الإسلامية، وأحد عجائب الإسلام السبعة في العالم</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/pS2WR'>هنا</a></p></details></li>"+
    "<li><details><summary>الخانات مثل خان البرغل, وخان الصابون, وخان الوزير,وخان النحاسين, وخان خيرري بيك, وخان البنادقة, وخان الشونة, وخان الجمرك</summary><p>خان البرغل الذي شُيِّد في العام 1472 للميلاد، وكان مقرًا للقنصلية البريطانية في المدينة حتى أوائل القرن العشرين للميلاد.</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/j1s7L'>هنا</a></p></details></li>"+
    "<li><details><summary>المتاحف مثل متحف قلعة حلب، ومتحف التقاليد الشعبيّة.</summary><p>متحف التقاليد الشعبية في مدينة حلب، سوريا يضم ويعرض لكافة التقاليد والفلكلور الاصيل في حلب, وقد أنشئ المتحف عام 1967 وكان مقره بناء أثري وهو البيت العجمي وبعد ذلك نقل إلى بناء تاريخي آخر وهو بيت أجقباش الأثري في حلب القديمة.</p></details></li>"+
    "<li><details><summary>من الأماكن التاريخيّة الأخرى: عين دارة، وجعده المغارة، ودير وادي الساحور، وكهف الديدريّة، ومدفن مار مارون، وقرية قصر البريج.</summary><p>عين دارة مدينة أثرية تقع غربي قرية عين دارا الحالية بمسافة / 1 / كم. وعلى مسافة / 5 / كم جنوبي مدينة عفرين في سوريا. تحيط بها سهول خصبة من ثلاث جهات، ويحدها نهر عفرين من الغرب على بعد بضع مئات من الأمتار منها. كما يخترق الموقع جدول ماء نبع عين دارة، الذي يأخذ مجراه من بحيرتها الصغيرة، ليصب في نهر عفرين غربي التل</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/ggBi9'>هنا</a></p><a href='https://cutt.us/mOL36'>كهف دودرية</a><br><a href='https://cutt.us/PyMfp'>مارون</a><br><a href='https://cutt.us/L0yMe'>قصر البريج</a></details></li>"+
    "<li><details><summary>ساحة السبع بحرات.</summary><p>ساحة السبع بحرات هي إحدى ساحات مدينة حلب في سوريا.</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/EyMU5'>هنا</a></p></details></li>"+
    "<li><details><summary>محطة قطار بغداد.</summary><p>بدأ المهندسون الألمان بتشييد محطة بغداد عام 1910، وهي ثاني محطة قطار في مدينة حلب بعد محطة الشام الواقعة في حي الجميلية، أمام المبنى الحديث لمديرية المالية، قبل إزالتها في 1950. واستكملوا أعمال البناء، بتشييد جسر معدني في منطقة الصيرفي، ملاصقاً لمعمل العوارض الإسمنتية التابع للسكك الحديدية، كما شيدوا جسراً اسمنتياً في منطقة الشيخ طه، وأنشأوا على جهته الغربية مجموعة من الملاجئ الحربية.</p><p>للمزيد من المعلومات اضغط <a href='https://cutt.us/b1igs'>هنا</a></p></details></li></ul></article>"+
    "</section>";
        
    }
    else if (getLanguage === "en"){
        title.innerHTML = "Our heritage";
        output.innerHTML = "<section id='output'>" +
        "<article><h1>Aleppo Antiquities</h1><h3>Monuments</h3><p>Aleppo contains many archaeological and historical sites and is as follows :</p> <ul><li><details><summary>Historical courses such as the Gay School, the Virtual School, the Halawi School, and the Introduced School</summary><p>The Shathibati School is an archaeological historical school in the ancient city of Aleppo. It was built in the days of King Dahir Ghazi in 1193. Known as Sheikh Ma 'ruf Mosque, the school contains a famous painting with copycat that indicates that this school is the stop of its presentation to the owners of Imam Abiy Hanifa al-Numan, Chathibati is a school and soil whose door ends with half a ball and exquisite pirates. Inside is a square room that was advanced by arches demolished in the western face of the indoor swimming pool. Tribalism is a dome with a magnificent Ayobi belligerent of Al Marmar with two columns ending in beautiful crowns.</p><a href='https://cutt.us/bB5Nm'>Halawi School</a><br><a href='https://cutt.us/mZeTN'>Presentation School</a></details></li>"+
        "<li><details><summary>Old markets such as Al Madina Market, Attarin Market, Jasmine Market, Drafting Market, Dark Market, Blacksmiths Market, Ferry Market and Khan Silk Market</summary><p>Al-Atarin Market is one of the oldest within the walls of Jerusalem's Old City. Linking the Bab Khan Oil Market to the Exclusive Market, parallel to the Welding Market. It features an arched ceiling dating back to the proprietary period covering the whole market. The market is derived from many shops selling spices and medicinal herbs made of natural materials and colors.</p><a href='https://cutt.us/t9xX1'>Some additional pictures of some markets</a></details></li>"+
        "<li><details><summary>Castles such as Aleppo Castle and Saif al-Dawla Al-Hamdani Castle</summary><p>Aleppo Castle is a fortified medieval palace. The citadel of Aleppo is one of the oldest and largest castles in the world, the use of the hill on which the castle is placed dates back to the third millennium BC, where it was later occupied by many civilizations including the Greeks, Byzantines, Malaysians and Ayubans, while most of the current construction appears to date back to the Ayuban era. The Aga Khan Foundation for Culture and the Aleppo Archaeological Society conducted extensive conservation operations in 2000. The castle is located in the centre of the Old City, which was listed by UNESCO on the World Heritage Sites List in 1986.</p><a href='https://cutt.us/whgI2'>Sayf al-Dawla</a></details></li>"+
        "<li><details><summary>National Book House</summary>"+
        "<p>In 1924, a decision was issued by the Government of Damascus to establish a library in the city of Aleppo in the name of 'Arab Scientific Society Branch Library'. This task was mandated by the Halabi label Sheikh Kamel al-Ghazi and Pastor Menche. and the complex's management then sent a number of books to serve as the nucleus of the library, She was chosen in the Islamic Endowment Department, which was in Khan Al-Jamarak in the Old City and allocated two rooms and managed by Sheikh Younis Rushdie and Hashim Swed, the library at that time had only 1,500 books and expenses from the Arab Complex."+
        "<br><br> The scientific complex continued to oversee the library and provide it with some books, necessary expenses and staff salaries until 1937, when a cornerstone was laid for the construction of the National Book House, which was completed and at the end of 1939, but the opening of the building was delayed by war; The French occupied the place, made it the headquarters of the Civil Defence, then occupied by the English and continued to occupy it until the end of the war. The building was then inaugurated on Tuesday, December 4, 1945. The day of the inauguration, Sheikh Ragheb, spoke of the library and the history of the libraries in Arabs.<br><br> The house in Bab al-Faraj Square was constructed with the efforts of Prince Mustafa al-Shihabi, then governor of Aleppo, who later became president of the Arab Scientific Complex. At the time of the house's relocation, there were approximately 6,000 books, the municipality furnished the auditorium and the auditorium and sold modern cabinets of the book hall and store from Strasbourg, France, with a capacity of 100,000 books. The municipality's sponsorship of the house lasted until late 1954, when it was attached to the Ministry of Culture and remains.<br><br> Many Arabic literature flags visited the National Library of Aleppo and held cultural evenings and lectures, including Lebanese poets Bashara al-Khoury Abd al-Rahman al-Khatif, Amin Nakhla and the Egyptian literature Taha Hussein, Ahmad Amin and Aisha Abd al-Rahman Abbas Mahmoud Al-Akkad, Mohammed Hussein Haikal, Mohamed Mandor, Amin Al-Khuli, Sheikh Mohammed Abu Zahra, Amina Al-Saeed and Dryya Shafiq also hosted historians, poets, Fouad Sarouf and others.<br><br> The library also operated a number of brilliant cultural and literary names in Aleppo, including poet Omar Abu Risha, Sami al-Kayali, Jalal Zahdi al-Mallah, Ali al-Zayliq and others.</p><p>For more information click<a href='https://cutt.us/9oLcz'>Here</a></p></details></li>"+
        "<li><details><summary>Historical doors such as Bab al-Jinan, Bab al-Faraj, Bab al-Nasr, Bab Antioch, Bab al-Hadid, Bab Qansrin, Bab al-Ahmar, Bab al-Maqam and Bab al-Naerb</summary><p>It is spoken by the public (Bab Jenin), which is called because it leads to western Jenan Aleppo, where the groves of pistachios and fruitful trees (where the Qouqiq River takes place) have been a centre for the transfer of cash, freight and general trade, and is far from the gate of Antioch hundreds of arms to the north.</p><p>For more information on historical doors click <a href='https://cutt.us/X44ZC'>Here</a></p></details></li>"+
        "<li><details><summary>Mosques such as Al-Khosrawiya Mosque</summary><p>Al-Khorouya mosque is one of the ancient mosques built by Khosro Basha, the ruler of Aleppo under Sultan Suleiman I.The mosque of al-Khorawiyah (Arabic: Jama 'a al-Khorawiyah, romanized: Jama' a al-Sarwiyah; Husreviye Camii was a mosque complex in Aleppo, Syria.It was located southeast of the castle.The mosque was damaged by an armed terrorist linked to al-Qaida or the Syrian armed forces during the Battle of Aleppo in the Syrian civil war.</p><p>For more information click <a href='https://cutt.us/pU5VS'>Here</a></p></details></li>"+
        "<li><details><summary>The tower of the watch of the door of the vulva</summary><p>Al-Faraj gate clock is located near Bab al-Faraj, one of Aleppo's old gates to the east. The mosque is located in Hossita (1350 m) and east of the Al-Qarmouti School (1477 m). The eastern end is the Al-Omari mosque (1393 m).</p><p>For more information click <a href='https://cutt.us/P6LbO'>Here</a></p></details></li>"+
        "<li><details><summary>Pimarstan Argonne Kamali</summary><p>Bemaristan Arjun al-Kamli is located near Khan al-Jamarak in Old Aleppo and its construction dates back to the Mamluk rule, where it was built by Arjun al-Kamli, Vice-Sultanate of the Mamluk in Aleppo in 1354, under the reign of Sultan Amad al-D-Din Ismail Ismail Bmail bin mohad bin MohMMmail bin mohad bin mohad bin al-QMamal-Qal-Q He was considered one of the best Islamic bimaristans in Syria and Egypt.</p><p>For more information click <a href='https://cutt.us/D8UXh'>Here</a></p></details></li>"+
        "<li><details><summary>Red Cliff</summary><p>It is located 17 km north-east of Aleppo. The site was discovered in 1989 by Tom McClellan and his collaborator, Mendy Mottram, and excavated in an area of 350 m2 by Daniel Sturder and Bassam Buffos (Bazur 2003:69).Excavations revealed several archaeological settlements at the site:• The western region has the oldest settlements (E-4-7) and has been marked by circular buildings.• The Fifth Floor (E-5) shows the interior divisions by straight walls.• The second floor (E-2) contains dwellings with perpendicular external walls.• The eighth floor (E-8) contains square-shaped housing.• The Eighth Equity (O/E) represents a transition between Neolithic pre-pottery A PPNA and pre-pottery B PPNB. The most important dwellings discovered are: EA53, EA30</p><p>For more information click <a href='https://cutt.us/RRuFo'>Here</a></p></details></li>"+
        "<li><details><summary>Churches such as the Church of the Forty Martyrs, and the Church of The Shaibani</summary><p>The founding of the Forty Shahid Orthodox Armenian Cathedral in Aleppo, Syria dates back to the 16th century and was expanded in 1916 by the Armenian leader Pedros during the reign of the Fourth Sultan. The church contains a distinctive and unique collection of iconography dating back to the Renaissance, some of which belong to the School of Halifi Iconography. The most famous of these iconography is the recent judgment painted by Al-Khoury Nimatullah Ben Al-Khoury Yousef. In addition to other icons such as St. Gower's icon Geus, Imad's icon Christ and the Virgin's icon with the child Jesus, along with St. Joseph and John the Baptist, as well as other paintings of the 40 martyrs.</p><p>For more information click <a href='https://cutt.us/mz2Yq'>Here</a></p></details></li>"+
        "<li><details><summary>Ajmiya Library</summary><p>An archaeological historical school in the city of Aleppo, a palace built in the 12th century near Aleppo Castle by Prince Majd al-Din bin al-Dai of the Zankind family, was renovated in the 15 century.It became the headquarters of the People's Heritage Museum between 1967 and 1975. The museum in Aleppo has an important role to play in promoting tourism as well as showing folk customs and costumes and containing many ancient and heritage exhibits that make it an attractive element for tourist movement within the city where tourists of various nationalities intend to learn about its contents and location in the neighbourhood of Jeddah.</p><p>For more information click <a href='https://cutt.us/SStVk'>Here</a></p></details></li>"+
        "<li><details><summary>The minaret of the Umayyad Mosque</summary><p>The Great Bani Umayya Mosque, known as the Umayyad Mosque, is the mosque that Alwaleed bin Abdulmalik ordered to construct in Damascus and is the fourth most famous Islamic mosque after the campuses of Mecca, Medina and Al-Aqsa Mosque, and one of the world's seven wonders of Islam</p><p>For more information click <a href='https://cutt.us/2aYtG'>Here</a></p></details></li>"+
        "<li><details><summary>Khan al-Barghal, Khan al-Sabun, Khan al-Wazir, Khan al-Nahasin, Khan Khairi Bey, Khan Al-Ba'erna, Khan al-Ba'ganeh, Khan al-Shona, and Khan al-Jamrak</summary><p>Khan al-Burghal, built in the 1472 year of birth, was the headquarters of the British consulate in the city until the early 20th century.</p><p>For more information click <a href='https://cutt.us/j1s7L'>Here</a></p></details></li>"+
        "<li><details><summary>Museums such as the Aleppo Castle Museum and the Museum of Popular Traditions</summary><p>The Museum of Folk Traditions in the city of Aleppo, Syria includes and displays all traditions and authentic folklore in Aleppo. The museum was established in 1967 and was based in an archaeological building, the Ajami House, after which it was transferred to another historic building, the Old Aleppo House of Aghbash.</p></details></li>"+
        "<li><details><summary>Other historical places include: Ain Dara, Jaeda al-Maghara, Wadi Al-Sahour Monastery, Al-Dadria Cave, St. Maroun Cemetery and The Village of Qasr al-Bureij</summary><p>Ain Dara is an archaeological city located west of the current village of Ain Dara at a distance of 1/km. 5 km south of the city of Afrin in Syria. It is surrounded by lush plains on three sides, bordered by the river Afrin from the west a few hundred metres from it. The site also penetrates the water stream of the Ain Dara Spring, which takes its course from its small lake, to pour into the Afrin River west of the hill</p><p>For more information click <a href='https://cutt.us/TVFo0'>Here</a></p><a href='https://cutt.us/mOL36'>Dodriya Cave</a><br><a href='https://cutt.us/D5jHu'>Maron</a><br><a href='https://cutt.us/L0yMe'>Burij Palace</a></details></li>"+
        "<li><details><summary>Seven Seas Square</summary><p>Seven Seas Square is one of the city's squares in Aleppo, Syria.</p><p>For more information click <a href='https://cutt.us/93gDF'>Here</a></p></details></li>"+
        "<li><details><summary>Baghdad train station</summary><p>German engineers began construction of the Baghdad station in 1910, the second train station in the city of Aleppo after Al-Sham station in the Al-Jameel neighbourhood, in front of the modern building of the Malian Directorate, before its removal in 1950. They completed construction work with the construction of a metal bridge in the Al-Masurfi area, adjacent to the railroad's concrete beam plant, as well as a cement bridge in the Sheikh Taha area, and set up a series of war shelters on its western side.</p><p>For more information click <a href='https://cutt.us/b1igs'>Here</a></p></details></li></ul></article>"
        +"</section>";
        
    }
    else if (getLanguage === "tr"){
        title.innerHTML = "Mirasımız";
        output.innerHTML = "<section id='output'>" 
        + "<article><h1>Halep Eski Eserleri</h1><h3>Anıt</h3><p>Halep birçok arkeolojik ve tarihi yeri içerir ve aşağıdaki gibidir :</p> <ul><li><details><summary>Eşcinsel Okulu, Sanal Okul, Halawi Okulu ve Tanıtılan Okul gibi tarihi kurslar.</summary><p>Shathibati Okulu, antik Aleppo kentindeki bir arkeoloji tarihi okuludur. 1193 yılında Kral Dahir Ghazi'nin günlerinde inşa edilmiştir. Sheikh mA'ruf Camii olarak bilinen okulda, bu okulun İmam Abiy Hanifa el Numan sahiplerine sunumunun durdurulduğunu gösteren, ünlü bir resim yer alıyor. Chathibati, kapısı yarı top ve seçkin korsanlarla biten bir okul ve topraktır. İçeride kapalı yüzme havuzunun batı cephesinde yıkılan kemerler tarafından gelişmiş bir kare oda var. Tribalizm, güzel karideslerle biten iki kolonun bulunduğu, muhteşem bir Ayobi'nin El Marmar belligerdanına sahip bir kubbedir.</p><p>Tarih okulları hakkında daha fazla bilgi edinmek istiyorsanız aşağıdaki bağlantılara giderek Google Translator'ı kullanarak Türkçe diline çevirebilirsiniz</p><a href='https://cutt.us/iVzk2'>Sunum Okulu</a><br><a href='https://cutt.us/dIINj'>Halawi Okulu</a><br><a href='https://cutt.us/L2Cy7'>Sanal Okul</a></details></li>"+
        "<li><details><summary>Medine Pazarı, Attarin Pazarı, Yasemin Pazarı, Taslak Pazarı, Karanlık Pazar, Demirciler Pazarı, Feribot Pazarı ve Han İpek Pazarı gibi eski pazarlar</summary><p>Al-Atarin Pazarı, Kudüs'ün Eski Şehri'nin duvarlarındaki en eski pazarlardan biridir. Bab Khan Petrol pazarını, Kaynak pazarına paralel olarak Özel pazara bağlamak. Tüm pazarı kapsayan özel döneme dayanan kemerli bir tavana sahiptir. Pazar, doğal malzemeler ve renklerden yapılmış baharatlar ve tıbbi otlar satan birçok dükkandan elde ediliyor.</p><a href='https://cutt.us/t9xX1'>Bazı pazarların bazı ek resimleri</a></details></li>"+
        "<li><details><summary>Halep Kalesi ve Saif al-Dawla Al-Hamdani Kalesi gibi kaleler</summary><p>Aleppo Kalesi, surlu bir ortaçağ saradır. Haleppo Kalesi, dünyanın en eski ve en büyük kalelerinden biridir. Kalenin yerleştirildiği tepe, daha sonra Yunanlılar, Bizans, Malezya ve Ayubans gibi pek çok medeniyetin işgal ettiği M.Ö. Üçüncü milenyumuma dayanmıştır. Mevcut inşaatın çoğu Ayuban dönemine kadar devam ederken görülüyor. Aga Khan Kültür Vakfı ve Aleppo Arkeoloji Derneği 2000 yılında kapsamlı koruma operasyonları yürüttü. Kale, UNESCO tarafından 1986 yılında Dünya Mirası Sahası listesinde yer alan Eski şehrin merkezinde yer alır.</p><a href='https://cutt.us/JUfvE'>Seyfüddevle el-Hamdânî kalesi</a></details></li>"+
        "<li><details><summary>Ulusal Kitap Evi</summary><p>1924 yılında Şam Hükümeti tarafından 'Arap Bilimsel Toplum Şube Kütüphanesi' adına Alevpo kentinde bir kütüphane kurma kararı alındı. Bu görev Halabi etiketi Şeyh Kamel el Ghazi ve Pastor Menche tarafından yönetildi. Ardından kompleks yönetimi kütüphanenin çekirdeğini üstlenmesi için bir dizi kitap gönderdi. Eski Şehir'deki Khan El Yamarak'da bulunan ve iki oda tahsis eden ve o dönemde kütüphane olan Şeyh Younis Rushdie ve Hashim Swed tarafından yönetilen Arap kompleksinden yalnızca 1,500 kitap ve harcama geldi.<br><br> Bilimsel kompleks kütüphaneyi denetlemeye ve 1939 yılı sonunda tamamlanan Ulusal Kitap Evi'nin inşaatına bir köşe taşının atıldığı 1937 yılına kadar bazı kitaplar, gerekli harcamalar ve personel maaşları sağlamaya devam etti. Ancak binanın açılması savaş yüzünden gecikti; yeri Fransız işgal etti, Sivil Savunma Merkezi'ni yaptı, sonra İngilizceyi işgal etti ve savaş sona erene kadar işgal etmeye devam etti. Binanın açılışı 4 Aralık 1945 Salı günü gerçekleşti. Açılış günü Sheikh Ragheb, kütüphaneden ve Arapların kütüphanelerinin tarihçesinden söz etti.<br><br> Bab el-Faraj Meydanı'ndaki ev, Prens Mustafa el-Şeybi'nin, daha sonra Arap Bilimsel Kompleksi'nin başkanı olan Aleppo valisinin çabalarıyla inşa edildi. Evin taşındığı sırada yaklaşık 6,000 kitap, belediye oditoryumu ve oditoryumu mobilize edip Fransa'nın Strazburg kentindeki kitap salonu ve mağazanın modern kabinlerini 100,000 kitap kapasitesiyle sattı. Belediyenin ev sponsorluğu, Kültür ve kalıntılar Bakanlığı'na eklendiği 1954 sonuna kadar sürdü.<br><br> Pek çok Arap edebiyat bayrağı Haleppo Ulusal Kütüphanesi'ni ziyaret ederek aralarında Lübnan şairleri Bashara el-Khoury ABD el Rahman el-Hhatif, Amin Nakhla ve Mısır edebiyatı Taha Hussein, Ahmed Amin ve Aişa ABD el-Rahman Abbas Mahmoud Al-Akkad, Hüseyin-Huşi, Huşmed Huşi, Huşi, Huşam Huşi, Huşam Huşi, Huşi Şeyh Muhammed Abu Zahra, Amina Al-Saeed ve Dryya Shafiq da tarihçiler, şairler, Fouad Sarouf ve diğerlerine ev sahipliği yaptı.<br><br> Kütüphane ayrıca, Pair Omar Abu Risha, Sami al-Kayali, Jalal Zahdi el Mallah, Ali el Zaylıq ve diğerleri de dahil olmak üzere Aleppo'da birçok muhteşem kültürel ve edebiyat adını işletiyordu.</p><p>Daha fazla bilgi istersiniz burada <a href='https://cutt.us/tgBLq'>tıkla</a></p></details></li>"+
        "<li><details><summary>Bab al-Jinan, Bab al-Faraj, Bab al-Nasr, Bab Antakya, Bab al-Hadid, Bab Qansrin, Bab al-Ahmar, Bab al-Maqam ve Bab al-Naerb gibi tarihi kapılar</summary><p>Halk tarafından seslendiriliyor, çünkü adı Cevar Aleppo'nun batısında olan ve (Qouqiq Nehri'nin olduğu) pistachios ve verimli ağaçların kasırgalarının nakit, yük ve genel ticaretin transferi için merkez olduğu Jenan Aleppo'ya gidiyor, Ve Antioch kapısından kuzeyde yüzlerce silah var.</p><p>Tarihsel kapılar hakkında daha fazla bilgi için buraya <a href='https://cutt.us/X44ZC'>Tıkla</a></p></details></li>"+
        "<li><details><summary>Al-Khosrawiya Camii gibi camiler</summary><p>El-Khorouya camii, Khosro başa tarafından inşa edilen ve Sultan Süleyman I.El-Khorawiye Camii (Arapça: Jama'a el-Khorawiye, romanize: Jama'a el-Sarwiyah; Hüsreviye Camii Suriye'nin Aleppo şehrinde bir cami kompleksiydi.Şatonun güneydoğusunda yer alıyor.Suriye'deki sivil savaşta Halep Savaşı sırasında cami, el Kaide veya Suriye silahlı kuvvetleriyle bağlantılı silahlı bir terör yüzünden hasar gördü.</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/pU5VS'>Tıklayın</a></p></details></li>"+
        "<li><details><summary>Vulva kapısının saatinin kulesi</summary><p>El-Faraj kapısı saati, doğudaki Halep'in eski kapılarından biri olan Bab el-Faraj'ın yakınında yer alır. Cami, Hossita'da (1350 m) ve El-Qarmouti Okulu'nun (1477 m) doğusunda yer alır. Doğu ucu Al-Omari camii (1393 m).</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/unXDs'>Tıklayın</a></p></details></li>"+
        "<li><details><summary>Pimaristan Argonne Kamali</summary><p>Bemaristan Arjun el Kamli, eski Aleppo'daki Khan el Jamarak'nın yanında yer alıyor ve 1354 yılında Aleppo'daki Mamluk Majun Sultanlığı'ndan Arjun el-Kamli tarafından inşa edildiği Mamluk hükümdarına dayanıyor. Sultan Amad el-D-DIN İsmail İsmail İsmail Bmail bin mohad bin MohMmail bin mohad bin el-QMamal-Qal-Q hükümdarlığı altında Suriye ve Mısır'daki en iyi İslamcı bıyıklardan biri olarak kabul edildi.</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/D8UXh'>Tıklayın</a></p></details></a></li>"+
        "<li><details><summary>Kırmızı Uçurum</summary><p>Aleppo'nun 17 km kuzeydoğusunda yer alır. Bölge 1989 yılında Tom McClellan ve işbirlikçisi Mendy Mottram tarafından keşfedildi ve Daniel Sturder ve Bassam Buffos (Bazur 2003:69) tarafından 350 m2'lik bir alanda kazıldı.Kazılar bölgede çok sayıda arkeolojik yerleşim ortaya çıkardı:• Batı bölgesi en eski yerleşim yerlerine (E-4-7) sahiptir ve dairesel binalar ile işaretlenmiştir.• Beşinci zemin (E-5) iç bölmeleri düz duvarlarla gösterir.• İkinci zemin (E-2), dikey dış duvarlara sahip kaplamaları içerir.• Sekizinci zemin (E-8) kare şekilli muhafaza içerir.• Sekizinci Özkaynak (O/E), Neolitik ön piyangodan Bir PPNA ve ön piyango B PPNB arasındaki geçişi temsil eder. Bulunan en önemli evler: EA53, EA30</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/uDKgX'>Tıklayın</a></p></details></li>"+
        "<li><details><summary>Kırk Şehit Kilisesi ve Şeybani Kilisesi gibi kiliseler</summary><p>Kırk Gölgeli Ortodoks Ermeni Katedrali'nin Aleppo'da kurulması 16. Yüzyıla dayanıyor ve 1916 yılında Ermeni lider Pedros tarafından dördüncü Sultan hükümdarlığı sırasında genişletiliyor. Kilise, bazıları Halifi Okulu ikonografisine ait olan Rönesans’a dayanan özgün ve benzersiz bir ikonografi koleksiyonu içerir. Bu ikonografinin en ünlüsü, El-Khoury Nimatullah Ben Al-Khoury Yousef tarafından yapılan yakın tarihli karardır. ST. Gower'ın ikonu Geus, İmam'ın ikonu Mesih ve Meryem'in ikonu, Aziz Joseph ve Baptist John'un yanı sıra 40 şehit'in diğer tablolarına da ek olarak İsa'nın çocuğu ile birlikte.</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/8CJA7'>Tıklayın</a></p></details></li>"+
        "<li><details><summary>Ajmiya Kütüphanesi</summary><p>Aleppo Kalesi yakınında 12. Yüzyılda Zankind ailesinden Prens Majd al-DIN bin al-Dai tarafından inşa edilen bir saray olan Aleppo kentindeki bir arkeolojik tarih okulu 15. Yüzyılda yenilenmiştir.1967 ile 1975 yılları arasında halkın Mirası Müzesi'nin merkezi haline geldi. Aleppo'daki müze, turizmin tanıtımında önemli rol oynamanın yanı sıra halk geleneklerini ve kostümlerini sergilemelerinde ve çeşitli uluslardan gelen turistlerin kendi hakkında bilgi edinmek istedikleri şehir içinde turist dolaşımı için çekici bir unsur haline gelen pek çok antik ve miras sergisi içermesinde de önemli rol oynuyor İçerikler ve konum Jeddah Mahallesi'nde.</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/SStVk'>Tıklayın</a></p></details></li>"+
        "<li><details><summary>Emevi Camii'nin minaresi</summary><p>Umayyad Camii olarak bilinen büyük Bani Umayya Camii, Alwaleed bin Abdülmalik'in Şam'da inşa etme emri verdiği ve Mekke, Medina ve El-Aqsa Camii'nin kampüsleri ve dünyanın yedi İslam harikalarından biri olan dördüncü en ünlü İslami camii</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/6YvoQ'>Tıklayın</a></p></details></li>"+
        "<li><details><summary>Han el-Barghal, Han el-Sabun, Han el-Wazir, Han el-Nahasin, Han Khairi Bey, Han Al-Ba'erna, Khan al-Ba'ganeh, Khan al-Shona ve Khan al-Jamrak</summary><p>1472 doğumgünü inşa edilen Khan al-Burghal, 20. Yüzyıl başlarına kadar kentteki İngiliz konsolosluğu binası olarak anıldı.</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/j1s7L'>Tıklayın</a></p></details></li>"+
        "<li><details><summary>Halep Kalesi Müzesi ve Popüler Gelenekler Müzesi gibi müzeler</summary><p>Suriye'deki Halep kentindeki Halk gelenekleri Müzesi, Halep'teki tüm gelenekleri ve otantik folkloru içerir ve sergiler. Müze 1967 yılında kuruldu ve bir arkeoloji binası olan Ajami Evi'nde inşa edildi. Bundan sonra Aghbash'taki eski Aghpo Evi olan başka bir tarihi binaya nakledildi.</p></details></li>"+
        "<li><details><summary>Diğer tarihi yerler şunlardır: Ain Dara, Jaeda al-Maghara, Wadi Al-Sahour Manastırı, Al-Dadria Mağarası, St. Maroun Mezarlığı ve Qasr al-Bureij Köyü</summary><p>Ain Dara, mevcut Ain Dara köyünün batısında 1/km mesafede bulunan bir arkeolojik şehirdir Suriye'deki Afrin şehrinin 5 km güneyinde. Batıdan birkaç yüz metre uzaklıktaki Afrin nehri tarafından çevrelenmiş üç tarafta yemyeşil düzlüklerle çevrilidir. Bölge ayrıca, küçük gölünden gelen Ain Dara Baharı'nın su akışına girerek tepenin batısındaki Afrin Nehri'ne akıyor</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/ggBi9'>Tıklayın</a></p><a href='https://cutt.us/mOL36'>Dodriya Mağarası</a><br><a href='https://cutt.us/PyMfp'>Maron</a><br><a href='https://cutt.us/L0yMe'>Burij Sarayı</a></details></li>"+
        "<li><details><summary>Yedi Deniz Meydanı</summary><p>yedi Deniz Meydanı, Suriye'nin Halep şehrindeki karelerden biridir.</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/EyMU5'>Tıklayın</a></p></details></li>"+
        "<li><details><summary>Bağdat tren istasyonu</summary><p>Alman mühendisler, 1950 yılında çıkarılmadan önce Al-Jameel Mahallesi'ndeki Al-Sham istasyonundan sonra, Aleppo kentindeki ikinci tren istasyonu olan Bağdat istasyonunun inşaatına 1910 yılında başladılar. El-Masurfi bölgesinde demiryolunun beton kiriş fabrikasının yanında bulunan bir metal köprünün inşası ile Sheikh Taha bölgesinde bir çimento köprüsü inşa çalışmalarını tamamladılar ve batı tarafına bir dizi savaş sığınağı kurdular.</p><p>Daha fazla bilgi için buraya <a href='https://cutt.us/b1igs'>Tıklayın</a></p></details></li></ul></article>"
        + "</section>";
    }
}