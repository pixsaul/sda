// Begin variables and definitions

const config = {
	simulateMobileTap: false,
	mobileTapRotateAmount: 1,
	blobFresnelColour: 0xff4208,
	blobFresnelAmount1: 0.27,
	blobFresnelAmount2: 0.47,
	blobFresnelAmount3: 1.07,
	blobFresnelAmount4: 0.19,
	initialFov: 92,
	cameraDist: 4,
	selectedDist: 0.6,
	showLightHelpers: false,
}

// True if user device can hover (i.e mouse opposed to touch)
const hasHover = window.matchMedia("(hover: hover)").matches;

const renderer = new THREE.WebGLRenderer({
	alpha: true,
	canvas: document.getElementById('threeCanvas')
});
renderer.setPixelRatio(window.devicePixelRatio * 2);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xFFFFFF, 0);

const camera = new THREE.PerspectiveCamera(
	config.initialFov,
	window.innerWidth / window.innerHeight,
	0.01,
	1000
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
const controls = new THREE.ObjectControls(group, renderer.domElement , hasHover);


const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1);
var directionalLightHelper1;
var directionalLightHelper2;
var directionalLightHelper3;
var directionalLightHelper4;

var blobMaterial = fresnelMaterial();

const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 0.8 );

const objLoader = new THREE.OBJLoader();
const fbxLoader = new THREE.FBXLoader();
const textureLoader = new THREE.TextureLoader()

var video;
var videoTexture;
var videoMaterial;
var videoObj;
const mouse = new THREE.Vector2(-100, -100);
const raycaster = new THREE.Raycaster();

var selectedObj;

var hoverObj;
var hoverObjPosition0 = new THREE.Vector3();

/*
const gui = new dat.GUI({ autoPlace: true });
const cameraGUI = gui.addFolder('Camera');
const controlsGUI = gui.addFolder('Controls');
const colourGUI = gui.addFolder('Colour');
const lightsGUI = gui.addFolder('Lights');
*/

// Used to stop clicking too fast which causes bugs
var clickBusy = false;

const clock = new THREE.Clock();

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

// Init the floor tilig
function initFloor(){
	const texture = textureLoader.load('/sda/assets/scenes/scene-1/tiles.png')
	texture.anisotrophy = 8;
	texture.minFilter = THREE.LinearFilter;
	texture.wrapS = THREE.RepeatWrapping
	texture.wrapT = THREE.RepeatWrapping
	texture.repeat = new THREE.Vector2(6, 6)
	const roomMaterial = new THREE.MeshBasicMaterial({
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

	const size = 6;
	const divisions = 6;
	const colorGrid = 0x000000;

	const gridHelper = new THREE.GridHelper( size, divisions, colorGrid, colorGrid );
	gridHelper.position.y = -2.1;
	scene.add(gridHelper);
	group.add(gridHelper);
	objects.push(gridHelper);
}

// Handle resize
function onResize() {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight)
}

// Handle mouse move
function onMouseMove( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

// Fade canvas and fade 3d objects
function applyFadeToAllExcept(exceptMesh){
	let canvasBg = document.getElementById('canvasBg');
	canvasBg.classList.add('faded');
	for (let mesh of objects){
		if (mesh !== exceptMesh){
			if (Array.isArray(mesh.material)){
				for (let m of mesh.material){
					m.transparent = true;
					const opacityTween = new TWEEN.Tween(m)
					.to({opacity:0.25}, 500)
					.easing(TWEEN.Easing.Quadratic.InOut)
					opacityTween.start();
				}
			} else {
				mesh.material.transparent = true;
				const opacityTween = new TWEEN.Tween(mesh.material)
				.to({opacity:0.25}, 500)
				.easing(TWEEN.Easing.Quadratic.InOut)
				opacityTween.start();
			}
		}
	}
}

// Remove effects of applyFadeToAllExcept()
function removeFadeFromAll(){
	let canvasBg = document.getElementById('canvasBg');
	canvasBg.classList.remove('faded');
	for (let mesh of objects){
		if (Array.isArray(mesh.material)){
			for (let m of mesh.material){
				m.opacity = 1;
				const opacityTween = new TWEEN.Tween(m)
				.to({opacity:1.0}, 500)
				.easing(TWEEN.Easing.Quadratic.InOut)
				opacityTween.start();
			}
		} else {
			mesh.material.opacity = 1;
			const opacityTween = new TWEEN.Tween(mesh.material)
			.to({opacity:1.0}, 500)
			.easing(TWEEN.Easing.Quadratic.InOut)
			opacityTween.start();
		}
	}
}

// Bring selected object to focus
function handleImgClicked(obj){
	selectedObj = obj;
	scene.attach(obj);
	obj.selected = true;
	selectedObj.bringToFocus(camera, config.selectedDist);
	applyFadeToAllExcept(selectedObj);

}

// Put selected object back
function putSelectedBack(){
	group.attach(selectedObj);
	selectedObj.putSelectedBack(700);
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
				const intersects = raycaster.intersectObjects( clickables );
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
	// selectedObj.position.y += Math.sin(clock.getElapsedTime()) * 0.001;
	// selectedObj.rotation.x += Math.sin(clock.getElapsedTime()*1.2) * 0.0002;
	// selectedObj.rotation.y += Math.sin(clock.getElapsedTime()*0.7) * 0.0005;
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
				//renderer.domElement.style.cursor = 'grab';
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
function handleTouchStart(){
	giveUsASpin();
}

// Add event listeners
function addEvents() {
	renderer.domElement.addEventListener('resize', onResize, false);
	if (hasHover){
		renderer.domElement.addEventListener( 'mousemove', onMouseMove, false );
		renderer.domElement.addEventListener( 'mousedown', handleClick, false );
	} else {
		renderer.domElement.addEventListener( 'touchstart', handleTouchStart, false );
	}

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
		const frontMaterial = new THREE.MeshBasicMaterial();
		frontMaterial.map = textureLoader.load(path);
		const sideMaterial = new THREE.MeshBasicMaterial({color: 0x000000, transparent: true, opacity: 0});
		const materials = [sideMaterial, sideMaterial, sideMaterial, sideMaterial, frontMaterial, frontMaterial];
		const img = new Image()
		img.onload = () => {
			const imgRatio = img.height / img.width
			const cubeGeometry = new THREE.BoxGeometry(1, imgRatio * 1, 0.0001)
			const cube = new ImageMesh(cubeGeometry, materials);
			manipFunction(cube);
		}
		img.src = path
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
		blobMaterial = fresnelMaterial(config.blobFresnelColour, config.blobFresnelAmount1, config.blobFresnelAmount2, config.blobFresnelAmount3, config.blobFresnelAmount4);
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

// Init dat.gui
function initGUI(){
	controlsGUI.add(controls, 'autoSpeed', -1, 1, 0.05).name("Auto Rotate Speed");
	controlsGUI.add(controls, 'rotationSpeed', 0, 0.1, 0.01).name("Drag Rotate Speed");
	controlsGUI.add(config, 'mobileTapRotateAmount', 0, 3, 0.1).name("Mobile Tap Speed");
	viewContraintsGUI = controlsGUI.addFolder('View Angle Contraints');
	viewContraintsGUI.add(controls.maxRotationAngles.x, 'from', Math.PI / 4, Math.PI, 0.01).name("Min Angle");
	viewContraintsGUI.add(controls.maxRotationAngles.x, 'to', 0, Math.PI, 0.01).name("Max Angle");
	controlsGUI.add(config, 'simulateMobileTap').onChange(giveUsASpin).name("Simulate Mobile Tap");
	colourGUI.addColor(config, 'blobFresnelColour').onChange( handleBlobColourChange).name("Fresnel Colour");
	colourGUI.add(config, 'blobFresnelAmount1', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 1");
	colourGUI.add(config, 'blobFresnelAmount2', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 2");
	colourGUI.add(config, 'blobFresnelAmount3', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 3");
	colourGUI.add(config, 'blobFresnelAmount4', 0.0, 2.0, 0.01).onChange( handleBlobColourChange).name("Fresel Mod 4");
	cameraGUI.add(camera, 'fov', 0, 150, 1).onChange( handleUpdateCameraMatrix ).name("FOV");
	cameraGUI.add(config, 'cameraDist', 1, 20, 0.1).onChange( handleUpdateCameraDist ).name("Camera Dist");
	cameraGUI.add(config, 'selectedDist', 0.0, 5, 0.1).onChange( handleSelectedDistUpdate ).name("Selected Obj Dist");
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

// Add all the images
function initImages(){
	addImage('/sda/assets/scenes/scene-1/sceneImg1.jpg', function(mesh){
		mesh.scale.set(2.3,2.3,2.3);
		mesh.position.set(-1.7, -0.3, -1.7)
		mesh.position0.copy(mesh.position);
		mesh.rotateY(Math.PI/4);
		mesh.rotation0.copy(mesh.rotation);
		mesh.quaternion0.copy(mesh.quaternion)
		mesh.scale0.copy(mesh.scale);
		group.add(mesh);
		objects.push(mesh);
		clickables.push(mesh);
	});
	addImage('/sda/assets/scenes/scene-1/sceneImg3.jpg', function(mesh){
		mesh.scale.set(2.3,2.3,2.3);
		mesh.position.set(1.7, -0.3, -1.7);

		mesh.position0.copy(mesh.position);
		mesh.rotateY(-Math.PI/4);
		mesh.rotation0.copy(mesh.rotation);
		mesh.quaternion0.copy(mesh.quaternion)
		mesh.scale0.copy(mesh.scale);
		group.add(mesh);
		objects.push(mesh);
		clickables.push(mesh);
	});
	addImage('/sda/assets/scenes/scene-1/sceneImg4.jpg', function(mesh){
		mesh.scale.set(2.3,2.3,2.3);

		mesh.position.set(-1.7, -0.3, 1.7);
		mesh.position0.copy(mesh.position);

		mesh.rotateY(-Math.PI/4);
		mesh.rotation0.copy(mesh.rotation);
		mesh.quaternion0.copy(mesh.quaternion)
		mesh.scale0.copy(mesh.scale);
		group.add(mesh);
		objects.push(mesh);
		clickables.push(mesh);
	});
	addImage('/sda/assets/scenes/scene-1/sceneImg5.jpg', function(mesh){
		mesh.scale.set(2.3,2.3,2.3);
		mesh.position.set(1.7, -0.3, 1.7);
		mesh.position0.copy(mesh.position);

		mesh.rotateY(Math.PI/4);
		mesh.rotation0.copy(mesh.rotation);
		mesh.quaternion0.copy(mesh.quaternion)
		mesh.scale0.copy(mesh.scale);
		group.add(mesh);
		objects.push(mesh);
		clickables.push(mesh);
	});
	addImage('/sda/assets/scenes/scene-1/sceneImg2.jpg', function(mesh){
		mesh.scale.set(2.7,2.7,2.7);
		mesh.position.set(0, 0, 0);
		mesh.position0.copy(mesh.position);
		mesh.rotation0.copy(mesh.rotation);
		mesh.quaternion0.copy(mesh.quaternion)
		mesh.scale0.copy(mesh.scale);
		mesh.rotateY(Math.PI/4);
		group.add(mesh);
		objects.push(mesh);
		clickables.push(mesh);
	});
	addFbx('/sda/assets/scenes/scene-1/blobsOnly2.fbx', function(mesh){
		mesh.material = blobMaterial;
		mesh.scale.set(0.25,0.25,0.25);
		mesh.position.y -= 2;
		group.add(mesh);
		objects.push(mesh);
		blobs.push(mesh);
	});
}

// Shrink the group (ready for spinning to large)
function initGroup(){
	group.scale.set(0.05, 0.05, 0.05);
}

// Init
function init(){
	initGroup();
	initLights();
	initFloor();
	initImages();
	addEvents();
	//initGUI();
	configLoadingManager();
	render();
	spinIn();
}

init();
