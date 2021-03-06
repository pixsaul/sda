<?php snippet('header') ?>

<!-- room scripts -->
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/three.min.js"></script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/Tween.js"></script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/ObjectControls.js"></script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/ExtendMaterial.js"></script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/ImageMesh.js"></script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/FresnelMaterial.js"></script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/OBJLoader.js"></script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/GLTFLoader.js"></script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/inflate.min.js"></script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/dat.gui.min.js"></script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/js/FBXLoader.js"></script>

<!-- room config -->
<script>
	roomConfig = {
		images: [],
		blobs: []
	};
</script>
<script crossorigin="anonymous" src="<?= $site->url() ?>/assets/scenes/<?= $page->slug() ?>/config.js"></script>

<main class="project">
  <article>
		<div id="videoTextureContainer"></div>
		<div id="loader">
			<div id="loaderImg"><img src="/assets/images/loader.svg" /></div>
			<div id="loaderText">loading</div>
		</div>
		<div id="canvasBg">
		</div>
		<div id="canvasContainer">
			<canvas id="threeCanvas">
			</canvas>
		</div>
		<div id="minimapContainer">
			<div id="minimapArtistImgs"></div>
			<div id="minimapArtistNames"></div>
			<div id="minimap">
			</div>
		</div>
		<script src="<?= $site->url() ?>/assets/js/SDARoom.js"></script>
		<script src="<?= $site->url() ?>/assets/js/Minimap.js"></script>
		<div class="project-text text">
			
			<h1><?= $page->title() ?></h1>			
			
			<span class="projectCat">
			<?php
				$field = $page->blueprint()->field('categories');
				$categories = $page->categories()->split(',');
				$categories = $categories[0];
				echo $field['options'][$categories] ?? html($categories); 
			?>
			</span>
			
			<h2><?= $page->subtitle() ?></h2>
			
			<div class="projectCopy">
				<?= $page->text()->kirbytext() ?>
			</div>
			
			<div class="projectGallery">
				<?php
				$images = $page->gallery()->toFiles();
				foreach($images as $image): ?>
					<img data-flickity-lazyload="<?= $image->url() ?>?width=800&quality=70" alt="">
				<?php endforeach ?>
			</div>
			
			<div class="projectCredits">
				<?= $page->credits()->kirbytext() ?>
			</div>
			
			<?php if ($page->video()->isNotEmpty()): ?>
			<div class="projectVideo">
				<h3>Behind the scene</h3>
				<div class="videoOverflow">
					<div class="videoWrap">
						<video id="video" loop playsinline onclick="this.paused?this.play():this.pause();">
							<source src="<?= $page->video() ?>#t=0.001" type="video/mp4">
							Sorry, your browser doesn't support embedded videos.
						</video>
						<div class="videoOver">
							<img src="<?= $site->url() ?>/assets/images/frame.png" accesskey=""/>
							<img class="playBtn" src="<?= $site->url() ?>/assets/images/play.svg" />
						</div>
					</div>
				</div>
			</div>
			<?php endif; ?>
			
			<?php $thisPage = $page->id(); ?>
			<?php if ($artistPage = page('participants')):
				$artistPage = $artistPage->children()->listed()->shuffle()->filterBy('id', '!=', $thisPage);
				$tag = $page->categories()->split(',');
				$artistPage = $artistPage->filterBy('categories', $tag[0], ',');
				$artistPage = $artistPage->paginate(4);
			?>
			
			<?php if ($artistPage->isEmpty() == false) : ?>
				<div class="projectRelated">
					<h3>Related participants</h3>
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
								foreach($images as $image): ?>
									<img src="<?= $image->url() ?>?width=600&quality=40" alt="">
								<?php endforeach ?>
							</div>
							<?php $firstImage = $artist->cover()->toFiles()->first(); ?>
							<img class="spacer" src="<?= $firstImage->url(); ?>?width=600&quality=1" />
							<span><?= $artist->title()->html() ?></span>
						</a>
					<?php endforeach ?>
					</div>
				</div>
				<?php endif; ?>
		<?php endif ?>
		
  </article>
</main>

<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

<script>

Flickity.createMethods.push('_createPrevNextCells')
Flickity.prototype._createPrevNextCells = function() {
	this.on( 'select', this.setPrevNextCells )
}
Flickity.prototype.setPrevNextCells = function() {
	// remove classes
	changeSlideClasses( this.previousSlide, 'remove', 'is-prev' )
	changeSlideClasses( this.nextSlide, 'remove', 'is-next' )
	// set slides
	if (this.selectedIndex - 1 < 0) {
		this.previousSlide = this.slides[ this.slides.length - 1 ]
	}
	else {
		this.previousSlide = this.slides[ this.selectedIndex - 1 ]
	}
	if (this.selectedIndex + 1 === this.slides.length) {
		this.nextSlide = this.slides[0]
	}
	else {
		this.nextSlide = this.slides[this.selectedIndex + 1]
	}
	// add classes
	changeSlideClasses( this.previousSlide, 'add', 'is-prev' )
	changeSlideClasses( this.nextSlide, 'add', 'is-next' )
}
function changeSlideClasses( slide, method, className ) {
	if (!slide) {
		return
	}
	slide.getCellElements().forEach( function( cellElem ) {
		cellElem.classList[ method ]( className )
	})
}

var elem = document.querySelector('.projectGallery');
var flkty = new Flickity( elem, {
	imagesLoaded: true,
	prevNextButtons: false,
	pageDots: false,
	cellAlign: 'center',
	wrapAround: true,
	lazyLoad: 3
});

var $carousel = $('.projectGallery').flickity();

$(document).on('click', '.is-next', function(){
	$carousel.flickity( 'next', true );
});

$(document).on('click', '.is-prev', function(){
	$carousel.flickity( 'previous', true );
});


</script>

<?php snippet('footer') ?>