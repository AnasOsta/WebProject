<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/HeadStyle.css">
    <link rel="stylesheet" href="../CSS/login.css">
    <title>Giriş Sayfası</title>
</head>
<body>

    <section>
        <div class="login output" dir="rtl">   
            <form method="POST" name="info">
                <label for="username">Giriş Sayfası</label><br>

                
                <input type="text" name="username" id="username" placeholder="Kullancı Adı" autocomplete="off"> <br>
                <input type="password" name="password" placeholder="Parol" id="password" autocomplete="off"><br>
                
                <button type="submit" name="submite" onclick="information()">Giriş Yap</button>
            </form>
        </div>
    </section>
</body>
    <script src="../JavaScript/Login.js"></script>
</html>