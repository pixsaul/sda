<?php snippet('header') ?>

<?php if ($artistPage = page('participants')):

$artistPage = $artistPage->children()->listed() ?>

<?php if($tag = param('filter')) {
	$artistPage = $artistPage->filterBy('categories', $tag, ',');
}

$artistPage = $artistPage->paginate(9);

?>

  <div class="home-grid">
	<?php foreach ($artistPage as $artist): ?>
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

<?php if ($artistPage->pagination()->hasPages()): ?>
<nav class="pagination">

	<?php if ($artistPage->pagination()->hasNextPage()): ?>
	<a class="next" href="<?= $artistPage->pagination()->nextPageURL() ?>">
		‹ older posts
	</a>
	<?php endif ?>

	<?php if ($artistPage->pagination()->hasPrevPage()): ?>
	<a class="prev" href="<?= $artistPage->pagination()->prevPageURL() ?>">
		newer posts ›
	</a>
	<?php endif ?>

</nav>
<?php endif ?>
  
<?php snippet('footer') ?>