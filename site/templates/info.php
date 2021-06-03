<?php snippet('header') ?>

<div class="language-select">
	<button class="lanauage lang--EN" data-lang="EN">EN</button>
	<button class="lanauagelang--FR" data-lang="FR">FR</button>
	<button class="lanauage lang--DE" data-lang="DE">DE</button>
</div>

<div class="info-wrapper">
	<div class="project-text text project-text--info lang--EN active">
		<?= $page->textEN()->kt() ?>
	</div>
	
	<div class="project-text text project-text--info lang--FR">
		<?= $page->textFR()->kt() ?>
	</div>
	
	<div class="project-text text project-text--info lang--DE">
		<?= $page->textDE()->kt() ?>
	</div>
</div>

<div class="confederation-wrapper">
	<div class="conf lang--EN active">
		<?php if($image = $page->confEN()->toFile()): ?>
			<img class="active" src="<?= $image->url() ?>" alt="">
		<?php endif ?>
	</div>
	
	<div class="conf lang--FR active">
		<?php if($image = $page->confFR()->toFile()): ?>
			<img src="<?= $image->url() ?>" alt="">
		<?php endif ?>
	</div>
	
	<div class="conf lang--DE active">
		<?php if($image = $page->confDE()->toFile()): ?>
			<img src="<?= $image->url() ?>" alt="">
		<?php endif ?>
	</div>
</div>

<div class="info-links">
	<div class="info-links__row info--years">
		<div><a href="https://2020.swissdesignawardsblog.ch/" target="_blank" class="btn">2020</a></div>
		<div><a href="https://2019.swissdesignawardsblog.ch/" target="_blank" class="btn">2019</a></div>
		<div><a href="https://2018.swissdesignawardsblog.ch/" target="_blank" class="btn">2018</a></div>
	</div>
	<div class="info-links__row">
		<div><a href="http://archives.swissdesignawardsblog.ch/" target="_blank" class="btn">2017-2014</a></div>
		<div style="width:41%;"><a href="https://schweizerkulturpreise.ch" target="_blank" class="btn">SCHWEIZERKULTURPREISE.CH</a></div>
		<div><a href="https://www.instagram.com/swissdesignawards" target="_blank" class="btn">INSTAGRAM</a></div>
	</div>
</div>

<?php snippet('footer') ?>