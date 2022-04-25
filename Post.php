<?php
if(empty($_POST['username']) || empty($_POST['password'])){
    header('location:index.php');
    include('index.php');
}

    echo 'Hoşgeldiniz “b1812100001”';


?>


<html>
    <br>
    <p>Sitem gitmek istersen her hang bir yerde tıkla</p>
    <form action="./HTML/AnaSayfa.html" >
        <button onclic="postGit"></button>
    </form>
</html>

<style>
    *{
    margin: 0;
}
button{
    width: 100%; 
    height: 740px;
    background-color: rgb(0, 0, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    border: 0;
}
</style>

