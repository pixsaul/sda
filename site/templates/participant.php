<?php snippet('header') ?>

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

<main class="project">
  <article>
		
		<div id="loader">
			<div id="loaderImg"></div>
			<div id="loaderText">loading</div>
		</div>
		<div id="canvasBg">
		</div>
		<canvas id="threeCanvas">
		</canvas>

		<div class="project-text text">
			
			<h1><?= $page->title() ?></h1>			
			
			<span class="projectCat">
			<?php
			$field = $page->blueprint()->field('categories');
			$categories = $page->categories()->split(',');
			foreach ($categories as $category) {
					echo $field['options'][$category] ?? html($category);
			}?>
			</span>
			
			<h2><?= $page->subtitle() ?></h2>
			
			<div class="projectCopy">
				<?= $page->text()->kirbytext() ?>
			</div>
			
			<div class="projectGallery">
				<?php
				$images = $page->gallery()->toFiles();
				foreach($images as $image): ?>
					<img data-flickity-lazyload="<?= $image->url() ?>" alt="">
					
				<?php endforeach ?>
				
			</div>
			
			<div class="projectCredits">
				<?= $page->credits()->kirbytext() ?>
			</div>
			
			<div class="projectVideo">
				<h3>Behind the scene</h3>
				<div class="videoOverflow">
					<div class="videoWrap">
						<video autoplay loop muted>
							<source src="<?= $page->video() ?>" type="video/mp4">
							Sorry, your browser doesn't support embedded videos.
						</video>
						<div class="videoOver">
							<img src="<?= $site->url() ?>/assets/scenes/global/frame.png"/>
						</div>
					</div>
				</div>
			
	  
		</div>

  </article>
</main>

<script src="<?= $site->url() ?>/assets/js/SDARoom.js"></script>

<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

<script>

var elem = document.querySelector('.projectGallery');
var flkty = new Flickity( elem, {
	imagesLoaded: true,
	prevNextButtons: false,
	pageDots: false,
	cellAlign: 'left',
	wrapAround: true,
	lazyLoad: 3
});

var $carousel = $('.projectGallery').flickity()

//set previous slide
var $selectedSlide = $(flkty.selectedElement);

//set next slide
var $nextSlide = ($selectedSlide).next().next();
$nextSlide.addClass("is-next");

$carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
	var $selectedSlide = $(flkty.selectedElement);
	var $nextSlide = ($selectedSlide).next().next();
	
	//if next slide is start, set it
	if (!($nextSlide).length ) {
		var $nextSlide = $(".flickity-slider img:first-child");
	}
	var $currSlide = $(cellElement);
	
	$(".flickity-slider img").removeClass("is-next");
	
	if ( cellElement == flkty.selectedElement ) {
		$carousel.flickity( 'previous', true );

	} else if ( $currSlide.is($nextSlide) ) {
		$carousel.flickity( 'next', true );
	} else {
		$carousel.flickity( 'next', true );
	}
});

//update next slide once moved
$carousel.on( 'change.flickity', function( event, index ) {
	var $selectedSlide = $(flkty.selectedElement);
	var $nextSlide = ($selectedSlide).next().next();
	
	if ( ($nextSlide).length ) {
		$nextSlide.addClass("is-next");
	} else {
		$(".flickity-slider img:first-child").addClass("is-next");
	}
	
	if (($selectedSlide).is(':last-child')) {
		$(".flickity-slider img").removeClass("is-next");
		$(".flickity-slider img:first-child").next().addClass("is-next");
	}

});

</script>

<?php snippet('footer') ?>