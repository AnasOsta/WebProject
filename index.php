<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./CSS/HeadStyle.css">
    <link rel="stylesheet" href="./CSS/login.css">
    <title>Giriş Sayfası</title>
</head>
<body>
    <header>
        <button id="tr" class="button"><img src="./Image/Language/Turkey.png" width="50%"> TR</button>
        <button id="en" class="button"><img src="./Image/Language/USA.png" width="50%">EN</button>
        <button id="ar" class="button"><img src="./Image/Language/Syria.png" width="50%">AR</button>
    </header>

    <section>
        <div class="login output" dir="rtl">   
            <form action="Post.php" method="POST" name="info">
                <label for="username">صفحة تسجيل الدخول</label><br>

                
                <input type="text" name="username" id="username" placeholder="أسم المستخدم" autocomplete="off"> <br>
                <input type="password" name="password" placeholder="كلمة المرور" id="password" autocomplete="off"><br>
                
                <button type="submit" name="submite" onclick="information()">تسجيل الدخول</button>
            </form>
        </div>
    </section>
</body>
    <script src="./JavaScript/Login.js"></script>
</html>