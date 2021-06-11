// Begin variables and definitions

const config = {
	simulateMobileTap: false,
	mobileTapRotateAmount: 1,
	blobFresnelColour: 0xff3f26,
	blobFresnelAmount1: 0.1,
	blobFresnelAmount2: 1.18,
	blobFresnelAmount3: 0.32,
	blobFresnelAmount4: 0.28,
	blobFresnelAmount5: 0,
	blobFresnelAmount6: 0,
	blobFresnelAmount7: 0,
	blobFresnelAmount8: 0,
	initialFov: 97,
	cameraDist: 8.8,
	selectedDist: 0.5,
	selectedScale: 0.63,
	showLightHelpers: false,
	restrictMobile: false,
	infiniteFloorSize: 100,
}

// True if user device can hover (i.e mouse opposed to touch)
const hasHover = window.matchMedia("(hover: hover)").matches;

const renderer = new THREE.WebGLRenderer({
	alpha: true,
	canvas: document.getElementById('threeCanvas'),
	antialias: true,
      // preserveDrawingBuffer: false,
      // depth: true,
      // stencil: true,
      // canvas: document.querySelector('canvas'),
      logarithmicDepthBuffer: false,
      // powerPreference: 'high-performance',

});
const canvas = renderer.domElement;
const cWidth = canvas.clientWidth;
const cHeight = canvas.clientHeight;
renderer.setPixelRatio(window.devicePixelRatio * 1);
if (canvas.width !== cWidth || canvas.height !== cHeight) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(cWidth, cHeight, false);
    // update any render target sizes here
  }

renderer.setClearColor(0xFFFFFF, 0);

const camera = new THREE.PerspectiveCamera(
	config.initialFov,
	cWidth / cHeight,
	0.001,
	20000
);
camera.position.z = Math.sqrt((config.cameraDist*config.cameraDist)/2);
camera.position.y = Math.sqrt((config.cameraDist*config.cameraDist)/2);
camera.lookAt(0,0,0);

const group = new THREE.Object3D();
const objects = [];
const clickables = [];
const blobs = [];

const scene = new THREE.Scene();
scene.add(group);
let controls = new THREE.ObjectControls(group, renderer.domElement , hasHover, config.restrictMobile);




const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.4);
const directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.5);
var directionalLightHelper1;
var directionalLightHelper2;
var directionalLightHelper3;
var directionalLightHelper4;

var blobMaterial = fresnelMaterial(config.blobFresnelColour, config.blobFresnelAmount1, config.blobFresnelAmount2, config.blobFresnelAmount3, config.blobFresnelAmount4, config.blobFresnelAmount5, config.blobFresnelAmount6, config.blobFresnelAmount7, config.blobFresnelAmount8);

const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 0.8 );

const objLoader = new THREE.OBJLoader();
const fbxLoader = new THREE.FBXLoader();
const textureLoader = new THREE.TextureLoader()

var videos = [];
var videoTexture;
var videoMaterial;
var videoObj;
const mouse = new THREE.Vector2(-100, -100);
const raycaster = new THREE.Raycaster();

var selectedObj;

var hoverObj;
var hoverObjPosition0 = new THREE.Vector3();

const gui = new dat.GUI({ autoPlace: true });
const cameraGUI = gui.addFolder('Camera');
const controlsGUI = gui.addFolder('Controls');
const colourGUI = gui.addFolder('Colour');
const lightsGUI = gui.addFolder('Lights');

let infiniteFloorMaterial;

// Used to stop clicking too fast which causes bugs
var clickBusy = false;

const clock = new THREE.Clock();

let fadePlaneMesh;

// End variables and definitions

// Init the light helpers: visual aids to see where the light is shining from
function initLightHelpers(){
	directionalLightHelper1 = new THREE.DirectionalLightHelper( directionalLight1, 1 , 'purple');
	directionalLightHelper2 = new THREE.DirectionalLightHelper( directionalLight2, 1 , 'blue');
	directionalLightHelper3 = new THREE.DirectionalLightHelper( directionalLight3, 1 , 'red');
	directionalLightHelper4 = new THREE.DirectionalLightHelper( directionalLight4, 1 , 'green');
	scene.add(directionalLightHelper1);
	scene.add(directionalLightHelper2);
	scene.add(directionalLightHelper3);
	scene.add(directionalLightHelper4);
	config.showLightHelpers = true;
}

// Remove light helpers
function disposeLightHelpers(){
	if (directionalLightHelper1){
		directionalLightHelper1.dispose();
		scene.remove(directionalLightHelper1);
	}
	if (directionalLightHelper2){
		directionalLightHelper2.dispose();
		scene.remove(directionalLightHelper2);
	}
	if (directionalLightHelper3){
		directionalLightHelper3.dispose();
		scene.remove(directionalLightHelper3);
	}
	if (directionalLightHelper4){
		directionalLightHelper4.dispose();
		scene.remove(directionalLightHelper4);
	}
	config.showLightHelpers = false;
}

// Init the directional lights and add them to the scene
function initLights(){
	directionalLight1.position.set(0, 2.5, 3.9);
	directionalLight2.position.set(4, 1, -4);
	directionalLight3.position.set(-4, 1, -4);
	directionalLight4.position.set(0, -4, 0);
	scene.add(directionalLight1)
	scene.add(directionalLight2)
	scene.add(directionalLight3)
	scene.add(directionalLight4)
}

function initInfiniteFloor(){


	const texture = textureLoader.load('/assets/images/tiles.png')
	texture.anisotrophy = 2;
	texture.minFilter = THREE.LinearFilter;
	texture.wrapS = THREE.RepeatWrapping
	texture.wrapT = THREE.RepeatWrapping
	// texture.repeat = new THREE.Vector2(config.infiniteFloorSize, config.infiniteFloorSize)
	const alphaMap = textureLoader.load('/assets/images/infiniteTilesAlphaMap.png');
	alphaMap.wrapS = THREE.RepeatWrapping
	alphaMap.wrapT = THREE.RepeatWrapping
	alphaMap.repeat.set(1, 1);
	// infiniteFloorMaterial = new THREE.MeshBasicMaterial({
	// 	map: texture,
	// 	alphaMap: alphaMap,
	// 	transparent: true,
	// })

	infiniteFloorMaterial = new THREE.MeshBasicMaterial( {
		side: THREE.DoubleSide,
		transparent: true,
		map: texture,
		alphaMap: alphaMap,
		opacity: 0.0,
	} );

	infiniteFloorMaterial.onBeforeCompile = function( shader ) {

		// vertex modifications
		var vertex_pars = 'attribute vec2 uvB;\nvarying vec2 vUvB;\n';
		var vertex_uv = shader.vertexShader.replace(
			'#include <uv_vertex>',
			[
				'#include <uv_vertex>',
				'vUvB = uvB;'
			].join( '\n' )
		);

		shader.vertexShader = vertex_pars + vertex_uv;


		// fragment modifications
		var frag_pars = 'varying vec2 vUvB;\n';
		var frag_uv = shader.fragmentShader.replace(
			'#include <map_fragment>',
			[
				'vec4 texelColor = texture2D( map, vUvB );',
				'texelColor = mapTexelToLinear( texelColor );',
				'diffuseColor *= texelColor;'
			].join( '\n' )
		);

		shader.fragmentShader = frag_pars + frag_uv;

	}
	const roomPlaneGeo = new THREE.PlaneBufferGeometry(config.infiniteFloorSize, config.infiniteFloorSize);
	roomPlaneGeo.rotateX(-Math.PI/2);
	roomPlaneGeo.translate(0,-2.01,0);
	var uvb = new Float32Array( [
		0.0, config.infiniteFloorSize,
		config.infiniteFloorSize, config.infiniteFloorSize,
		0.0, 0.0,
		config.infiniteFloorSize, 0.0
	] );
	console.log(roomPlaneGeo);
	roomPlaneGeo.setAttribute( 'uvB', new THREE.BufferAttribute( uvb, 2 ) );
	const room = new THREE.Mesh(roomPlaneGeo, infiniteFloorMaterial);
	room.name = "infiniteFloor";
	scene.add(room);
	group.add(room);
	objects.push(room);
}

// Init the floor tilig
function initFloor(){
	const texture = textureLoader.load('/assets/images/tiles.png')
	texture.anisotrophy = 16;
	texture.minFilter = THREE.NearestFilter;
	texture.wrapS = THREE.RepeatWrapping
	texture.wrapT = THREE.RepeatWrapping
	texture.repeat = new THREE.Vector2(6, 6)
	const roomMaterial = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		map: texture,
		side: THREE.DoubleSide,
	})
	const roomPlaneGeo = new THREE.PlaneGeometry(6, 6);
	roomPlaneGeo.rotateX(Math.PI/2);
	roomPlaneGeo.translate(0,-2,0);
	const room = new THREE.Mesh(roomPlaneGeo, roomMaterial);
	scene.add(room);
	group.add(room);
	objects.push(room);
	initInfiniteFloor();

	// const size = 6;
	// const divisions = 6;
	// const colorGrid = 0x000000;
	//
	// const gridHelper = new THREE.GridHelper( size, divisions, colorGrid, colorGrid );
	// gridHelper.position.y = -2.1;
	// scene.add(gridHelper);
	// group.add(gridHelper);
	// objects.push(gridHelper);
}

// Handle resize
	function onResize() {
	console.log('resizing');
	const cWidth = canvas.clientWidth;
	const cHeight = canvas.clientHeight;
	if (canvas.width !== cWidth || canvas.height !== cHeight) {
	    // you must pass false here or three.js sadly fights the browser
	    renderer.setSize(cWidth, cHeight, false);
	    // update any render target sizes here
	  }
	camera.aspect = cWidth / cHeight,
	camera.updateProjectionMatrix();
}

// Handle mouse move
function onMouseMove( event ) {
	mouse.x = ( event.offsetX / renderer.domElement.scrollWidth ) * 2 - 1;
	mouse.y = - ( event.offsetY / renderer.domElement.scrollHeight ) * 2 + 1;
	// console.log(event.offsetY);
	// console.log(renderer.domElement.scrollHeight);
}

// Fade canvas and fade 3d objects
function applyFadeToAllExcept(exceptMesh){
	let canvasBg = document.getElementById('canvasBg');
	canvasBg.classList.add('faded');
	// for (let mesh of objects){

		// if (mesh.name == "blob"){
		// 	const x = {
		// 		v: 3
		// 	}
		// 	const ogColour = new THREE.Color(config.blobFresnelColour);
		// 	const colourTween = new TWEEN.Tween(x)
		// 	.to({v:1.0}, 500)
		// 	.easing(TWEEN.Easing.Quadratic.InOut)
		// 	.onUpdate(() => {
		// 		const colour = new THREE.Color(config.blobFresnelColour);
		// 		colour.g = ogColour.g * x.v;
		// 		colour.b = ogColour.g * x.v;
		// 		console.log(colour.getHex());
		// 		blobMaterial = fresnelMaterial(colour.getHex(), config.blobFresnelAmount1, config.blobFresnelAmount2, config.blobFresnelAmount3, config.blobFresnelAmount4, config.blobFresnelAmount5, config.blobFresnelAmount6, config.blobFresnelAmount7, config.blobFresnelAmount8);
		// 		mesh.material = blobMaterial;
		// 	})
		// 	colourTween.start();
		// }

	// }
	// fadePlaneMesh.material.opacity = 0.3
	const opacityTween = new TWEEN.Tween(fadePlaneMesh.material)
	.to({opacity: 0.3}, 300)
	.delay(300)
	.easing(TWEEN.Easing.Quadratic.InOut)
	.start();
}

// Remove effects of applyFadeToAllExcept()
function removeFadeFromAll(){
	let canvasBg = document.getElementById('canvasBg');
	canvasBg.classList.remove('faded');
	const opacityTween = new TWEEN.Tween(fadePlaneMesh.material)
	.to({opacity: 0.0}, 500)
	.easing(TWEEN.Easing.Quadratic.InOut)
	// .delay(250)
	.start();
	// fadePlaneMesh.material.opacity = 0.0
	// for (let mesh of objects){


		// mesh.material.opacity = 1;
		// const opacityTween = new TWEEN.Tween(mesh.material)
		// .to({opacity:1.0}, 500)
		// .easing(TWEEN.Easing.Quadratic.InOut)
		// opacityTween.start();

		// if (mesh.name == "blob"){
		// 	const x = {
		// 		v: 3
		// 	}
		// 	const ogColour = new THREE.Color(config.blobFresnelColour);
		// 	const colourTween = new TWEEN.Tween(x)
		// 	.to({v:1.0}, 500)
		// 	.easing(TWEEN.Easing.Quadratic.InOut)
		// 	.onUpdate(() => {
		// 		const colour = new THREE.Color(config.blobFresnelColour);
		// 		colour.g = ogColour.g * x.v;
		// 		colour.b = ogColour.g * x.v;
		// 		console.log(colour.getHex());
		// 		blobMaterial = fresnelMaterial(colour.getHex(), config.blobFresnelAmount1, config.blobFresnelAmount2, config.blobFresnelAmount3, config.blobFresnelAmount4, config.blobFresnelAmount5, config.blobFresnelAmount6, config.blobFresnelAmount7, config.blobFresnelAmount8);
		// 		mesh.material = blobMaterial;
		// 	})
		// 	colourTween.start();
		// }

	// }
}

// Bring selected object to focus
function handleImgClicked(obj){
	selectedObj = obj;
	scene.attach(obj);
	obj.selected = true;
	selectedObj.bringToFocus(camera, config.selectedDist, config.selectedScale);
	fadePlaneMesh.position.set(0, camera.position.y - (config.selectedDist+0.01),  camera.position.z - (config.selectedDist+0.01));
	fadePlaneMesh.quaternion.copy(camera.quaternion);
	applyFadeToAllExcept(selectedObj);

}

// Put selected object back
function putSelectedBack(){
	group.attach(selectedObj);
	selectedObj.putSelectedBack(800);
	removeFadeFromAll();
	selectedObj = null;
}

// Handle click, use delay to stop overclicking, if there is a selected obj,
// put it back, else check if an object is clicked
function handleClick(){
	if (!clickBusy){
		setTimeout(function(){
			clickBusy = false;
		}, 200);
		clickBusy = true;
		if (selectedObj){
			putSelectedBack();
		}
		else {
			if (clickables.length > 0){
				raycaster.setFromCamera(mouse, camera);
				const intersects = raycaster.intersectObjects( clickables );
				console.log(intersects);
				if (intersects.length > 0){
					handleImgClicked(intersects[0].object);
				}
			}
		}
	}
}

// Update controls, video texture, objects
function animate() {
	if (videoTexture){
		videoTexture.update();
	}
	controls.update(clock.getDelta());
	if (selectedObj){
		animateSelectedObj();
	}
}

// Slowly rotate selected object
function animateSelectedObj(){
	let t = clock.getElapsedTime();
	selectedObj.position.y += Math.sin(t) * 0.001* (Math.pow(config.selectedDist, 1));
	selectedObj.rotation.x += Math.sin(t*1.2) * 0.0002;
	selectedObj.rotation.y += Math.sin(t*0.7) * 0.0005;
	// fadePlaneMesh.position.y += Math.sin(t) * 0.001 * (Math.pow(config.selectedDist, 1));
	// fadePlaneMesh.rotation.x += Math.sin(t*1.2) * 0.0002;
	// fadePlaneMesh.rotation.y += Math.sin(t*0.7) * 0.0005;
}

// Check if mouse is over the top of an object, then hover or unhover
// respectively + change cursor
function handleRaycast(){
	raycaster.setFromCamera(mouse, camera);
	if (!this.selectedObj){
		if (clickables.length > 0){
			const intersects = raycaster.intersectObjects( clickables );
			if (intersects.length > 0){
				renderer.domElement.style.cursor = 'pointer';
				controls.mouseBusy = true;
				for (let imageMesh of clickables){
					if (intersects[0].object == imageMesh && !imageMesh.tweening && !imageMesh.selected ){
						imageMesh.hovered = true;
						imageMesh.liftUp();
					} else {
						imageMesh.hovered = false;
						if (imageMesh.up && !imageMesh.tweening && !imageMesh.selected){
							imageMesh.putBack();
						}
					}
				}
			} else {
				controls.mouseBusy = false;
				renderer.domElement.style.cursor = 'grab';
				for (let imageMesh of clickables){
					imageMesh.hovered = false;
					if (imageMesh.up && !imageMesh.tweening && !imageMesh.selected){
						imageMesh.putBack();
					}
				}
			}
		}
	}
}

function showInfiniteFloor(){
	const showTween = new TWEEN.Tween(infiniteFloorMaterial)
	.to({opacity: 0.2}, 200)
	.easing(TWEEN.Easing.Quadratic.InOut)
	.start();
	// infiniteFloorMaterial.opacity = 0.11;
}

function hideInfiniteFloor(){
	const showTween = new TWEEN.Tween(infiniteFloorMaterial)
	.to({opacity: 0.0}, 200)
	.easing(TWEEN.Easing.Quadratic.InOut)
	.start();
	// infiniteFloorMaterial.opacity = 0.0;
}

// Render loop
function render() {
	animate();
	renderer.render(scene, camera);
	TWEEN.update();
	requestAnimationFrame(render);
	if (hasHover){
		handleRaycast();
	}
}

// Handle mobile touch
function handleTouchStart(event){
	if(config.restrictMobile){
		giveUsASpin();
	} else {
		console.log(event.touches[0]);
		var rect = renderer.domElement.getBoundingClientRect();
		mouse.x = ( (event.touches[0].pageX - rect.left) / renderer.domElement.scrollWidth ) * 2 - 1;
		mouse.y = - ( (event.touches[0].pageY - rect.top) / renderer.domElement.scrollHeight ) * 2 + 1;
		
		console.log(mouse);
		handleClick();
	}
}

// Add event listeners
function addEvents() {
	window.addEventListener('resize', onResize, false);
	if (hasHover){
		renderer.domElement.addEventListener( 'mousemove', onMouseMove, false );
		renderer.domElement.addEventListener( 'mousedown', handleClick, false );
	} else {
		renderer.domElement.addEventListener( 'touchstart', handleTouchStart, false );
	}
	let minimap = document.getElementById('minimap');
	minimap.addEventListener('mouseenter', function(){
		showInfiniteFloor()
	});
	minimap.addEventListener('mouseleave', function(){
		hideInfiniteFloor();
	});
}

// Configure the loading manager
function configLoadingManager(){
	THREE.DefaultLoadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
		console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
	};
	THREE.DefaultLoadingManager.onLoad = function ( ) {
		console.log( 'Loading Complete!');
		let c = document.getElementById("threeCanvas");
		c.style.opacity = 1;
		let l = document.getElementById("loader");
		l.style.opacity = 0;
		spinIn();
		setTimeout(function(){
			l.remove();
		}, 2000)
	};
	THREE.DefaultLoadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
		console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
	};
	THREE.DefaultLoadingManager.onError = function ( url ) {
		console.log( 'There was an error loading ' + url );
	};
}

// Add .obj file from path, then callback
function addObj(path, manipFunction){
	objLoader.load(
		path,
		function ( object ) {
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh ) {
					manipFunction(child);
				}
			})
		},
		function ( xhr ) {
			// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
		},
		function ( error ) {
			console.log(error);
		}
	)
}

// Add .fbx file from path, then callback
function addFbx(path, manipFunction){
	fbxLoader.load(
		path,
		function ( object ) {
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh ) {
					manipFunction(child);
				}
			})
		},
		function ( xhr ) {
			// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
		},
		function ( error ) {
			console.log(error);
		}
	)
}

// Add image from path, creates very thin cuboid
function addImage(path, manipFunction){
	try {
		const frontMaterial = new THREE.MeshBasicMaterial({alphaTest: 0.5});
		const texture = textureLoader.load(path);
		texture.anisotrophy = 8;
		frontMaterial.map = texture;
		const sideMaterial = new THREE.MeshBasicMaterial({color: 0x000000, transparent: true, opacity: 0, depthWrite: false});
		const materials = [sideMaterial, sideMaterial, sideMaterial, sideMaterial, frontMaterial, frontMaterial];
		const img = new Image()
		img.onload = () => {
			const imgRatio = img.height / img.width
			const cubeGeometry = new THREE.BoxGeometry(1, imgRatio * 1, 0.0001)
			const cube = new ImageMesh(cubeGeometry, materials, imgRatio);
			manipFunction(cube);
		}
		img.src = path
	} catch(e){
		console.log(e);
	}
}

// Add video from path, creates very thin cuboid
function addVideo(path, manipFunction){
	try {
		// const frontMaterial = new THREE.MeshBasicMaterial({transparent: false});
		// const texture = textureLoader.load(path);
		// texture.anisotrophy = 4;
		// frontMaterial.map = texture;
		// const sideMaterial = new THREE.MeshBasicMaterial({color: 0x000000, transparent: true, opacity: 0});
		// const materials = [sideMaterial, sideMaterial, sideMaterial, sideMaterial, frontMaterial, frontMaterial];
		// const vid = new Image()
		// img.onload = () => {
		// 	const imgRatio = img.height / img.width
		// 	const cubeGeometry = new THREE.BoxGeometry(1, imgRatio * 1, 0.0001)
		// 	const cube = new ImageMesh(cubeGeometry, materials);
		// 	manipFunction(cube);
		// }
		// img.src = path
		const video = document.createElement('video');
		const source = document.createElement('source');
		source.setAttribute('src', path);
		video.appendChild(source);
		video.classList.add("3dVideoTexture");
		video.setAttribute("autoplay", "");
		video.autoplay = true;
		video.setAttribute("muted", "");
		video.muted=true;
		video.setAttribute("loop", "");
		video.loop=true;
		const videoTextureContainer = document.getElementById("videoTextureContainer");
		videoTextureContainer.appendChild(video);
		// video.play();
		const videoTexture = new THREE.VideoTexture(video);
		const frontMaterial = new THREE.MeshBasicMaterial({transparent: false});
		frontMaterial.map  = videoTexture;
		const sideMaterial = new THREE.MeshBasicMaterial({color: 0x000000, transparent: true, opacity: 0});
		const materials = [sideMaterial, sideMaterial, sideMaterial, sideMaterial, frontMaterial, frontMaterial];
		video.addEventListener( "loadedmetadata", function (e) {
			const ratio = video.videoHeight / video.videoWidth;
			console.log(ratio);
			const cubeGeometry = new THREE.BoxGeometry(1, ratio * 1, 0.0001)
			const cube = new ImageMesh(cubeGeometry, materials, ratio);
			manipFunction(cube);
		});
		// }
	} catch(e){
		console.log(e);
	}
}

// Handle spin when tapped on mobile
function giveUsASpin(){
	// !!!!Replace this with actual value once decided!!!!
	const prevSpeed = 0.1;
	const tweenUp = new TWEEN.Tween(controls).to({autoSpeed: prevSpeed*30*config.mobileTapRotateAmount}, 100).easing(TWEEN.Easing.Quadratic.In)
	.onComplete(() => {
		tweenDown.start();
	});
	const tweenDown = new TWEEN.Tween(controls).to({autoSpeed: prevSpeed}, 2000*config.mobileTapRotateAmount).easing(TWEEN.Easing.Quadratic.Out)
	.onComplete(() => {
	});
	tweenUp.start();
}

// Spin in from small on load
function spinIn(){
	const prevSpeed = 0.1;
	const tweenUp = new TWEEN.Tween(controls).to({autoSpeed: prevSpeed*150}, 100).easing(TWEEN.Easing.Quadratic.In)
	.onComplete(() => {
		tweenDown.start();
	});
	const tweenDown = new TWEEN.Tween(controls).to({autoSpeed: prevSpeed}, 2000).easing(TWEEN.Easing.Quadratic.Out)
	.onComplete(() => {
	});
	tweenUp.start();
	const tweenSize = new TWEEN.Tween(group.scale).to({x: 1, y:1, z: 1}, 2000).easing(TWEEN.Easing.Quadratic.Out)
	.onComplete(() => {
	});
	tweenSize.start();
	tweenUp.start();
}

// Called when colour is changed via GUI
function handleBlobColourChange(){
	for (let blob of blobs){
		blobMaterial = fresnelMaterial(config.blobFresnelColour, config.blobFresnelAmount1, config.blobFresnelAmount2, config.blobFresnelAmount3, config.blobFresnelAmount4, config.blobFresnelAmount5, config.blobFresnelAmount6, config.blobFresnelAmount7, config.blobFresnelAmount8);
		blob.material = blobMaterial;
	}
}

// Called when camera is updated via GUI
function handleUpdateCameraMatrix(){
	camera.updateProjectionMatrix();
}

// Called when camera is updated via GUI
function handleUpdateCameraDist(){
	camera.position.z = Math.sqrt((config.cameraDist*config.cameraDist)/2);
	camera.position.y = Math.sqrt((config.cameraDist*config.cameraDist)/2);
	camera.lookAt(0,0,0);
	handleUpdateCameraMatrix();
}

// Called when selected object dist is updated via GUI
function handleSelectedDistUpdate(){
	if (selectedObj){
		selectedObj.position.y = camera.position.y - config.selectedDist;
		selectedObj.position.z = camera.position.z - config.selectedDist;
		fadePlaneMesh.position.set(0, camera.position.y - (config.selectedDist*1.01),  camera.position.z - (config.selectedDist*1.01));
		camera.near = Math.pow(config.selectedDist*0.999, 2);
	}
}

function handleSelectedScaleUpdate(){
	if (selectedObj){
		selectedObj.scale.set(config.selectedScale, config.selectedScale,config.selectedScale);
	}
}

// Show/hide light helpers
function handleToggleLightHelpers(){
	if (config.showLightHelpers){
		initLightHelpers();
	} else {
		disposeLightHelpers();
	}
}

function handleControlsChange(){
	console.log(config.restrictMobile);
	controls = new THREE.ObjectControls(group, renderer.domElement , hasHover, config.restrictMobile);
}

// Init dat.gui
function initGUI(){
	controlsGUI.add(controls, 'autoSpeed', -1, 1, 0.05).name("Auto Rotate Speed");
	controlsGUI.add(controls, 'rotationSpeed', 0, 0.1, 0.01).name("Drag Rotate Speed");
	controlsGUI.add(config, 'mobileTapRotateAmount', 0, 3, 0.1).name("Mobile Tap Speed");
	controlsGUI.add(config, 'restrictMobile').name("Restrict Mobile Controls").onChange(handleControlsChange);
	viewContraintsGUI = controlsGUI.addFolder('View Angle Contraints');
	viewContraintsGUI.add(controls.maxRotationAngles.x, 'from', Math.PI / 4, Math.PI, 0.01).name("Min Angle");
	viewContraintsGUI.add(controls.maxRotationAngles.x, 'to', 0, Math.PI, 0.01).name("Max Angle");
	controlsGUI.add(config, 'simulateMobileTap').onChange(giveUsASpin).name("Simulate Mobile Tap");
	// colourGUI.addColor(config, 'blobFresnelColour').onChange( handleBlobColourChange).name("Fresnel Colour");
	// colourGUI.add(config, 'blobFresnelAmount1', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 1");
	// colourGUI.add(config, 'blobFresnelAmount2', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 2");
	// colourGUI.add(config, 'blobFresnelAmount3', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 3");
	// colourGUI.add(config, 'blobFresnelAmount4', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 4");
	// colourGUI.add(config, 'blobFresnelAmount5', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 5");
	// colourGUI.add(config, 'blobFresnelAmount6', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 6");
	// colourGUI.add(config, 'blobFresnelAmount7', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 7");
	// colourGUI.add(config, 'blobFresnelAmount8', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 8");
	// colourGUI.add(infiniteFloorMaterial, 'opacity', 0.0, 1.0, 0.01).name("Infinite Floor Opacity");
	cameraGUI.add(camera, 'fov', 0, 150, 1).onChange( handleUpdateCameraMatrix ).name("FOV");
	cameraGUI.add(config, 'cameraDist', 1, 20, 0.1).onChange( handleUpdateCameraDist ).name("Camera Dist");
	cameraGUI.add(config, 'selectedDist', 0.0, 0.8, 0.001).onChange( handleSelectedDistUpdate ).name("Selected Obj Dist");
	cameraGUI.add(config, 'selectedScale', 0.0, 2, 0.001).onChange( handleSelectedScaleUpdate ).name("Selected Obj Scale");
	lightsGUI.add(config, 'showLightHelpers').onChange( handleToggleLightHelpers ).name("Show Light Helpers");
	directionalLight1GUI = lightsGUI.addFolder('Directional Light 1');
	directionalLight1GUI.add(directionalLight1, 'intensity', 0, 1, 0.1)  .name("Intensity");
	directionalLight1GUI.add(directionalLight1.position, 'x', -3, 3, 0.1).name("X position");
	directionalLight1GUI.add(directionalLight1.position, 'y', 0, 8, 0.1) .name("Y position");
	directionalLight1GUI.add(directionalLight1.position, 'z', 0, 10, 0.1).name("Z position");
	directionalLight2GUI = lightsGUI.addFolder('Directional Light 2');
	directionalLight2GUI.add(directionalLight2, 'intensity', 0, 1, 0.1).name("Intensity");
	directionalLight2GUI.add(directionalLight2.position, 'x', 0, 8, 0.1).name("X position");
	directionalLight2GUI.add(directionalLight2.position, 'y', 0, 8, 0.1).name("Y position");
	directionalLight2GUI.add(directionalLight2.position, 'z', -10, 0, 0.1).name("Z position");
	directionalLight3GUI = lightsGUI.addFolder('Directional Light 3');
	directionalLight3GUI.add(directionalLight3, 'intensity', 0, 1, 0.1);
	directionalLight3GUI.add(directionalLight3.position, 'x', -8, 0, 0.1);
	directionalLight3GUI.add(directionalLight3.position, 'y', 0, 8, 0.1);
	directionalLight3GUI.add(directionalLight3.position, 'z', -10, 0, 0.1);
	directionalLight4GUI = lightsGUI.addFolder('Directional Light 4');
	directionalLight4GUI.add(directionalLight4, 'intensity', 0, 1, 0.1);
	directionalLight4GUI.add(directionalLight4.position, 'x', -8, 0, 0.1);
	directionalLight4GUI.add(directionalLight4.position, 'y', 0, 8, 0.1);
	directionalLight4GUI.add(directionalLight4.position, 'z', -10, 0, 0.1);
}


function initRoomFromConfig(){
	for (let i of roomConfig.images){
		addImage(i.path, function(mesh){
			mesh.scale.set(i.scale,i.scale,i.scale);
			mesh.position.set(i.position.x, i.position.y, i.position.z);
			mesh.rotation.set(i.rotation.x, i.rotation.y, i.rotation.z);
			mesh.position0.copy(mesh.position);
			mesh.rotation0.copy(mesh.rotation);
			mesh.quaternion0.copy(mesh.quaternion)
			mesh.scale0.copy(mesh.scale);
			group.add(mesh);
			objects.push(mesh);
			clickables.push(mesh);
		});
	}
	for (let b of roomConfig.blobs){
		addFbx(b.path, function(mesh){
			let vertex = `
			varying vec3 vPositionW;
			varying vec3 vNormalW;
			
			void main() {
				vPositionW = vec3( vec4( position, 1.0 ) * modelMatrix);
				vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`
			
			let fragment = `
			varying vec3 vPositionW;
			varying vec3 vNormalW;
			uniform vec3 colorInside;
			uniform vec3 colorFresnel;
			uniform float treshold;
			
			void main() {
				vec3 color = vec3(1., 1., 1.);
				vec3 viewDirectionW = normalize(cameraPosition - vPositionW);
				float fresnelTerm = dot(viewDirectionW, vNormalW);
				fresnelTerm = clamp(1.0 - fresnelTerm, 0., treshold);
				gl_FragColor = vec4( mix(colorInside,colorFresnel,fresnelTerm), 1.);
			}
			`
			let material = new THREE.ShaderMaterial({
				uniforms: {
					treshold: { type: 'f', value: 1. },
					colorInside: { type: 'c3', value: new THREE.Color(0xff3c1e) },
					colorFresnel: { type: 'c3', value: new THREE.Color(0xf3b1ab) },
				},
				vertexShader: vertex,
				fragmentShader: fragment,
			})
			mesh.material = material;
			// mesh.geometry.computeVertexNormals();
			mesh.scale.set(b.scale,b.scale,b.scale);
			mesh.position.set(b.position.x, b.position.y, b.position.z);
			mesh.rotation.set(b.rotation.x, b.rotation.y, b.rotation.z);
			group.add(mesh);
			mesh.name = "blob";
			objects.push(mesh);
			blobs.push(mesh);
		});
	}
	if (roomConfig.videos){
		for (let v of roomConfig.videos){
			console.log(v);
			addVideo(v.path, function(mesh){
				mesh.scale.set(v.scale,v.scale,v.scale);
				mesh.position.set(v.position.x, v.position.y, v.position.z);
				mesh.rotation.set(v.rotation.x, v.rotation.y, v.rotation.z);
				mesh.position0.copy(mesh.position);
				mesh.rotation0.copy(mesh.rotation);
				mesh.quaternion0.copy(mesh.quaternion)
				mesh.scale0.copy(mesh.scale);
				group.add(mesh);
				objects.push(mesh);
				clickables.push(mesh);
				videos.push(mesh);
			})
		}
	}
}

// Shrink the group (ready for spinning to large)
function initGroup(){
	group.scale.set(0.05, 0.05, 0.05);
}

function initFadePlaneMesh(){
	const geo = new THREE.PlaneGeometry(10, 10);
	const material = new THREE.MeshBasicMaterial({color: 0xffffff, opacity: 0.0, transparent: true, depthWrite: false});
	fadePlaneMesh = new THREE.Mesh(geo, material);
	fadePlaneMesh.renderOrder = 0;
	fadePlaneMesh.position.set(0, camera.position.y - (config.selectedDist),  camera.position.z - (config.selectedDist));
	fadePlaneMesh.quaternion.copy(camera.quaternion);
	scene.add(fadePlaneMesh);
}

// Init
function init(){
	initGroup();
	initLights();
	initFloor();
	initRoomFromConfig();
	addEvents();
	initGUI();
	configLoadingManager();
	render();
	initFadePlaneMesh();
}

init();
