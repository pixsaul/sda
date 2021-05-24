<?php snippet('header') ?>
<h1><?= $page->title() ?></h1>
<p><?= $page->text() ?></p>

<?php if ($artistPage = page('artists')): ?>
  <ul class="home-grid">
	<?php foreach ($artistPage->children()->listed() as $artist): ?>
	<li>
	  <a href="<?= $artist->url() ?>">
		<figure>
		  <?php if ($cover = $artist->cover()): ?>
		  <?= $cover->resize(1024, 1024) ?>
		  <?php endif ?>
		  <figcaption>
			<span>
			  <span class="example-name"><?= $artist->title()->html() ?></span>
			</span>
		  </figcaption>
		</figure>
	  </a>
	</li>
	<?php endforeach ?>
  </ul>
  <?php endif ?>
  
  <?php snippet('footer') ?>