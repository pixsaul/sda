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
			
			<?= $page->text()->kirbytext() ?>
	  
		</div>

  </article>
</main>

<script src="<?= $site->url() ?>/assets/js/SDARoom.js"></script>

<?php snippet('footer') ?>