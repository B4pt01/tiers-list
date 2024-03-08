<?php
include("../part/header.php");
include("../part/nav.php");
?>
<header>
    <h1>Classement des plats</h1>
</header>
<div class="recherche">
    <label>Entrer le nom d'un plat : </label>
    <input type="text" id="recherches" placeholder="Exemple : pasta">
    <button onclick="validerForm()">search</button>
</div>
<div class="selection" id="selection"></div>
<div class="fixedList" id="fixedList"></div>
<section class="tierList">
    <div class="drag_container" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="category">Délicieux</div>
    </div>
    <div class="drag_container" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="category">Bon</div>
    </div>
    <div class="drag_container" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="category">Moyen</div>
    </div>
    <div class="drag_container" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="category">Mauvais</div>
    </div>
</section>

<script src="../script/drag.js"></script>
<script src="../script/script.js"></script>
<?php
include("../part/footer.php");
?>