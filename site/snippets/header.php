<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title() ?> | <?= $page->title() ?></title>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <?= css([
	'assets/css/style.css',
	'@auto'
  ]) ?>
  
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js"></script>

</head>

  <?php if ($page->template() == "participant"): ?>
    <body class="artist cookieNotification">
    <?php else: ?>
    <body class="cookieNotification">
  <?php endif; ?>

  <header class="header">
    <?php if ( ($page->is("info")) || ($page->isChildOf("participants")) ) : ?>
      <a href="<?= $site->url() ?>/">Home</a>
    <?php else: ?>
    <label class="filter">
    <select name="filter" id="filter">
      <option selected disabled hidden value="">Filter</option>
      <option value="fashionandtextile">Fashion + Textile Design</option>
      <option value="product">Product Design</option>
      <option value="graphic">Graphic Design</option>
      <option value="mediation">Mediation</option>
      <option value="photography">Photography</option>
      <option value="scenography">Scenography</option>
      <!--<option value="awared">Awarded</option>-->
    </select>
    </label>
    <?php endif; ?>
    
    <a class="home" href="<?= $site->url() ?>/">
      <h1 class="header__mobile">SDA</h1>
      <h1 class="header__desktop">SWISS DESIGN AWARDS</h1>
    </a>
    
    <?php if ($page->is("info")): ?>
      <a href="javascript:history.go(-1)">Close</a>
    <?php else: ?>
      <a class="info" href="<?= $site->url() ?>/info/">Info</a>
    <?php endif; ?>
  </header>
  
  <main class="main">