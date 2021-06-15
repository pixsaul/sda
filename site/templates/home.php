<?php snippet('header') ?>

<?php if ($artistPage = page('participants')):

$artistPage = $artistPage->children()->listed() ?>

<?php if($tag = param('filter')) {
	if(param('filter') === 'a-z') { 
		$artistPage = $artistPage->sortBy('title', 'asc');
	} else {
		$artistPage = $artistPage->filterBy('categories', $tag, ',');
	}
}
?>

<?php if(param('filter') === 'a-z') {
	$artistPage = $artistPage->paginate(12);
} else {
	$artistPage = $artistPage->paginate(12)->shuffle();
}
?>

	<div class="home-grid">
		<div id="grid-filler-container">
			<img src="/assets/images/redsquare.png"></img>
			<img src="/assets/images/redsquare.png"></img>
			<img src="/assets/images/redsquare.png"></img>
			<img id="fourthFiller" src="/assets/images/redsquare.png"></img>
		</div>
	<?php foreach ($artistPage as $artist): ?>
		<a class="grid-item" href="<?= $artist->url() ?>">
			<div class="seq">
				<?php
				$images = $artist->cover()->toFiles();
				$i = 0;
				$len = count($images);
				foreach($images as $image): ?>
				<?php
					if ($i == 0) { ?>
					<img src="<?= $image->url() ?>?width=601&quality=70" alt="">
				<?php } else if ($i == $len - 1) { ?>
					<img src="<?= $image->url() ?>?width=601&quality=70" alt="">
				<?php } else { ?>
					<img src="<?= $image->url() ?>?width=601&quality=30" alt="">
				<?php } ?>
				<?php endforeach ?>
			</div>
			<?php $firstImage = $artist->cover()->toFiles()->first(); ?>
			<img class="spacer" src="<?= $firstImage->url(); ?>?width=601&quality=1" />
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