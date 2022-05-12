<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../CSS/HeadStyle.css">
    <link rel="stylesheet" href="../CSS/FontStyle.css">
    <link rel="stylesheet" href="../CSS/Contact.css">
    <title id="title">İletişim</title>
</head>
<body>
    <header class="header fontNav">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" href="#">Kirito.g2</a>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
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
                    <a class="nav-link" href="./CV.html">CV</a>
                  </li>
                </ul>
                <div class="sidenav" id="ee">
                  <ul>
                      <li>
                      <button class="button "><img src="../Image/Language/Turkey.png" width="50%" onclick = "tr()"> TR</button>
                          <ul>
                              <li><button class="button"><img src="../Image/Language/Syria.png" width="50%" onclick = "ar()">AR</button></li>
                          <li><button class="button "><img src="../Image/Language/USA.png" width="50%" onclick = "en()">EN</button></li>
                          </ul>
                      </li>
                  </ul>
              </div>
              </div>
            </div>
          </nav>
    </header>

    <section>
        <div id="output">
            <form method="post" name="info">
                
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
        </div>
    </section>
    <footer>
        <fieldset>
            <legend id="footer"><a href="../HTML/Contact.php">İletişim</a></legend>
            <label id="telefon">Telefon : <a href="tel:05516881594">05516881594</a></label>
            <label id="email">Email : <a href="mailto:anas.osta@ogr.sakarya.edu.tr">ANAS OSTA</a></label>
        </fieldset>
    </footer>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script src="../JavaScript/Contact.js"></script>
</html>