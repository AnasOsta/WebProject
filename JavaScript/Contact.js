const output = document.getElementById('output');

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
    if (getLanguage === "ar"){
        output.innerHTML = `<section>
        <div id="output" dir="rtl">
            <form method="post" name="info">

                <label>أسم المستخدم</label>
                <input type="text" name="adi" value="">
                
                <label>البريد الالكتروني</label>
                <input type="text" name="email" value="">
                
                <label>عنوان الشكوى</label>
                <input type="text" name="title" value="">
                
                <label>موضوع الشكوى</label>
                <input type="text" name="content" value="">
                
                <input type="submit" name="submit" value="ارسال" onclick="informationAr()">
                <button type="reset">تنظيف</button></form>
        </div>
    </section>`;
    }
    else if (getLanguage === "tr"){
        output.innerHTML = `
        <section>
        <div id="output">
            <form method="post" name="info">
                
                <label>Kullancı adı</label>
                <input type="text" name="adi" value="">
                
                <label>E-Posta</label>
                <input type="text" name="email" value="">
                
                <label>Ana başlık</label>
                <input type="text" name="title" value="">
                
                <label>Konu</label>
                <input type="text" name="content" value="">
                
                <input type="submit" name="submit" value="Gönder" onclick="information()">
                <button type="reset">Temizle</button></form>
        </div>
    </section>`;
    }
    else if (getLanguage === "en"){
        output.innerHTML =`
        <section>
        <div id="output">
            <form method="post" name="info">
                
                <label>User name</label>
                <input type="text" name="adi" value="">
                
                <label>Email</label>
                <input type="text" name="email" value="">
                
                <label>Title</label>
                <input type="text" name="title" value="">
                
                <label>Content</label>
                <input type="text" name="content" value="">
                
                <input type="submit" name="submit" value="Submit" onclick="informationEn()">
                <button type="reset">Reset</button></form>
        </div>
    </section>`;
    }
}