<?php snippet('header') ?>

<?php if ($artistPage = page('participants')): ?>
  <div class="home-grid">
	<?php foreach ($artistPage->children()->listed() as $artist): ?>
	  <a class="grid-item" href="<?= $artist->url() ?>">
			<div class="seq">
				<?php
				$images = $artist->cover()->toFiles();
				foreach($images as $image): ?>
					<img src="<?= $image->url() ?>" alt="">
				<?php endforeach ?>
			</div>
			<?php $firstImage = $artist->cover()->toFiles()->first(); ?>
			<img class="spacer" src="<?= $firstImage->url(); ?>" />
			<span><?= $artist->title()->html() ?></span>
	  </a>
	<?php endforeach ?>
  </div>
<?php endif ?>
  
<?php snippet('footer') ?>