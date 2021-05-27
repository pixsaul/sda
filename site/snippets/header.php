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

  <link rel="shortcut icon" type="image/x-icon" href="<?= url('favicon.ico') ?>">
</head>
  <?php if ($page->template() == "artist"): ?>
    <body class="artist">
    <?php else: ?>
    <body>
  <?php endif; ?>

  <header class="header">
    <?php if ($page->is("info")): ?>
    <a href="<?= $site->url() ?>/">Home</a>
    <?php else: ?>
    <div class="filter">Filter</div>
    <?php endif; ?>
    <a class="home" href="<?= $site->url() ?>/">
      <h1 class="header__mobile">SDA</h1>
      <h1 class="header__desktop">SWISS DESIGN AWARDS</h1>
    </a>
    <?php if ($page->is("info")): ?>
    <a href="javascript:history.go(-1)">Close</a>
    <?php else: ?>
      <a href="<?= $site->url() ?>/info/">Info</a>
    <?php endif; ?>
  </header>
  
  <main class="main">