<!DOCTYPE html>
<html lang="en">
<head>
<?php include './elements/head.php';?>
</head>
<body>

<?php include './elements/menu.php';?>

<div id="popup">
  <div class="bar">  <h4 id="title"></h4>
<span onclick="this.parentElement.parentElement.style.display='none'" class="closebtn">&times;</span>
</div>
<div class=content>
  <img id="expandedImg">
  <br>
  <p id="discription"></p>
  <br>
  <h4>Process:</h4>
  <div id="procces" class="procces"></div>
</div>
</div>

<div class="row portfolioGallery s12" id="gallery">
</div>
<h1>Sketches</h1>
<div class="row s12">
  <div id="sketchBox"class="sketchBox s12">

  </div>
  
</div>

<div id="background"></div>

<script src="./js/script.js"></script>
<script src="./js/p5.min.js"></script>
<script src="./js/sketch.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TLQS7LTSBH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TLQS7LTSBH');
</script>
</body>
</html>