function isObj(path){
	const parts = path.split('.');
	return parts[parts.length-1] === 'obj'
}

function isFbx(path){
	const parts = path.split('.');
	return parts[parts.length-1] === 'fbx'
}

ZackControls = function(pivot, camera, domElement) {
	
	this.pivot = pivot;
	this.camera = camera;
	this.domElement = domElement;
	this.enabled = true;
	this.target = new THREE.Vector3();
	this.autoRotate = false;
	this.autoSpeed = 0.2;
	this.damping = true;
	this.dampingFactor = 0.5;
	this.mouseMove = true;
	this.xCurrent = pivot.rotation.x;
	this.yCurrent = pivot.rotation.y;
	this.xBase = pivot.rotation.x;
	this.yBase = pivot.rotation.y;
	this.xMouse = 0.0;
	this.yMouse = 0.0;
	this.tweening = false;
	this.mode = 1;
	this.tweens = [];
	var scope = this;
	this.update = function(delta = 0, time = 0){
		// console.log(delta + "+" + scope.autoSpeed);
		scope.xCurrent += (scope.xMouse-scope.xCurrent) * scope.dampingFactor * delta;
		scope.yCurrent += (scope.yMouse-scope.yCurrent) * scope.dampingFactor * delta;
		
		scope.pivot.rotation.x = scope.yBase + (scope.yCurrent * 1);
		// console.log(scope.autoSpeed * delta);
		if (scope.autoRotate && !this.tweening){
			// console.log(scope.pivot.rotation.y);
			scope.xBase -= scope.autoSpeed * delta;
			scope.pivot.rotation.y = scope.xBase - (scope.xCurrent * 1);
			// console.log(scope.xBase);
			// console.log(scope.pivot.rotation.y);
			// console.log(scope.autoSpeed * delta);
			// scope.camera.position.x += Math.sin(time * scope.autoSpeed)*0.005;
			// scope.camera.position.z += Math.cos(time * scope.autoSpeed)*0.005;
		} else  {
			scope.pivot.rotation.y = scope.xBase - (scope.xCurrent * 1);
			// if (scope.pivot.rotation.y > 0.2){
			// 	scope.pivot.rotation.y = 0.2;
			// }
			// if (scope.pivot.rotation.y < -0.2){
			// 	scope.pivot.rotation.y = -0.2;
			// }
			// if (scope.pivot.rotation.x > 0.2){
			// 	scope.pivot.rotation.x = 0.2;
			// }
			// if (scope.pivot.rotation.x < -0.2){
			// 	scope.pivot.rotation.x = -0.2;
			// }
			if (scope.mode !== 3 || this.tweening){
				scope.camera.lookAt(scope.target);
			}
		}
		// console.log(pivot.rotation.y);
		// console.log(pivot.rotation.x);
		// console.log(scope.xCurrent);
		
		scope.pivot.updateMatrixWorld();
		scope.camera.updateProjectionMatrix();
		
	}
	this.handleMouseMove = function(event){
		// Gets xR and xY in the range -1,1
		scope.xMouse = ((((event.clientX / window.innerWidth)*2)-1)*-1)*0.2;
		scope.yMouse = (((event.clientY / window.innerHeight)*2)-1)*0.2;
		console.log(scope.camera.rotation.y);
	}
	this.init = function(){
		// console.log("attaching mouse move event");
		scope.domElement.addEventListener('mousemove', this.handleMouseMove, false);
	}
	this.resetTarget = function(time){
		// scope.target.set(0,0,0);
		this.setTarget(0,0,0,time);
	}
	this.setTarget = function(x,y,z,time){
		// scope.tweening = true;
		const tween = new TWEEN.Tween(scope.target).to({x: x, y: y, z: z}, time).easing(TWEEN.Easing.Quadratic.InOut)
		.onComplete(() => {
			// scope.tweening = false;
		}); 
		tween.start();
	}
	this.setCameraPos = function(x,y,z, time){
		console.log(time);
		scope.tweening = true;
		const tween = new TWEEN.Tween(scope.camera.position).to({x: x, y: y, z: z}, time).easing(TWEEN.Easing.Quadratic.InOut)
		.onComplete(() => {
			scope.tweening = false;
		});
		scope.xBase = scope.xBase % (2*Math.PI);
		const pivotTween = new TWEEN.Tween(scope).to({xBase: 0}, time).easing(TWEEN.Easing.Quadratic.InOut);
		console.log(tween);
		tween.start();
		pivotTween.start();
	}
	this.cancelTweens = function(){
		for (const tween of scope.tweens){
			tween.stop();
		}
	}
}

class SdaCuboid extends THREE.Mesh {
	constructor(frontMaterial,x=0,y=0,z=0,width=1, height=1, yRotation=0){
		const sideMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff});
		const materials = [sideMaterial, sideMaterial, sideMaterial, sideMaterial, frontMaterial, sideMaterial];
		const geometry = new THREE.BoxGeometry(width, height, 0.1);
		super(geometry, materials);
		this.height = height;
		this.x = x;
		this.y = y;
		this.z = z;
		this.yRotation = yRotation;
		this.position.set(x,y,z);
		this.rotateY(yRotation);
		this.castShadow = true;
	}
	getCameraPos(offset){
		var y = this.y;
		var x = this.x + (Math.cos( (Math.PI/2) - this.yRotation) * offset);
		console.log(this.yRotation)
		var z = this.z + (Math.sin( (Math.PI/2) - this.yRotation) * offset);
		console.log(z)
		return new THREE.Vector3(x, y, z);
	}
}

class Sketch {
	constructor() {
		this.renderer = new THREE.WebGLRenderer({
			alpha: true,
			canvas: document.getElementById('threeCanvas')
		});
		this.renderer.setPixelRatio(window.devicePixelRatio * 2);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor(0xFFFFFF, 1);
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
		this.cameraPivot = new THREE.Object3D();
		this.cameraPivot.position.set(0,0,0);
		this.camera = new THREE.PerspectiveCamera(
			90,
			window.innerWidth / window.innerHeight,
			1,
			1000
		);
		this.cameraPivot.add(this.camera);
		this.camera.position.z = 10;
		// this.camera.position.y = 10;
		this.camera.lookAt(0,0,0);
		
		this.scene = new THREE.Scene();
		this.controls = new ZackControls(this.cameraPivot, this.camera, this.renderer.domElement);
		// this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
		
		// this.controls.dampingFactor(0.02);
		this.clock = new THREE.Clock();
		this.directionalLight = new THREE.DirectionalLight(0xffffff, 1)
		this.sphere = new THREE.Mesh(new THREE.SphereGeometry( 5, 32, 32 ), new THREE.MeshPhongMaterial( {color: 0xffff00} ));
		this.roomSize = 8;
		this.roomHeight = this.roomSize * 3/4;
		this.roomGeo = new THREE.BoxGeometry(this.roomSize, this.roomHeight, this.roomSize);
		this.roomPlaneGeo = new THREE.PlaneGeometry(this.roomSize, this.roomSize);
		this.roomMaterial;
		this.objects = [];
		this.room;
		this.objLoader = new THREE.OBJLoader();
		this.fbxLoader = new THREE.FBXLoader();
		this.composer;
		// set to 0 to use expanded shape outlining, 1 to use shader outlining, 2 for none
		this.outlineMode = 3;
		this.separateOutlines = false;
		this.outlinePass;
		this.outlinePasses = [];
		this.outlinedObjs = [];
		this.video;
		this.videoTexture;
		this.videoMaterial;
		this.videoObj;
		this.mouse = new THREE.Vector2();
		this.raycaster = new THREE.Raycaster();
		this.gltfLoader = new THREE.GLTFLoader();
	}
	
	init() {
		
		this.directionalLight.position.set(1.5, 5, 3)
		this.directionalLight.castShadow = true
		this.directionalLight.shadow.mapSize.width = 2048
		this.directionalLight.shadow.mapSize.height = 2048
		this.directionalLight.shadow.camera.near = 5
		// this.controls.lookAt(0,0,0);
		this.scene.add(this.directionalLight)
		const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 0.8 );
		this.scene.add( hemiLight );
		
		// this.roomMaterial = new THREE.MeshPhongMaterial( {color: 0x00ff00, side: THREE.BackSide} );
		const loader = new THREE.TextureLoader()
		const texture = loader.load('./tiles.png')
		texture.anisotrophy = 8;
		texture.minFilter = THREE.LinearFilter;
		texture.wrapS = THREE.RepeatWrapping
		texture.wrapT = THREE.RepeatWrapping
		texture.repeat = new THREE.Vector2(this.roomSize, this.roomSize)
		this.roomMaterial = new THREE.MeshLambertMaterial({
			transparent: true,
			map: texture,
			side: THREE.BackSide,
		})
		this.roomGeo.faces.splice(4, 2);
		this.roomPlaneGeo.rotateX(Math.PI/2);
		this.roomPlaneGeo.translate(0,-this.roomHeight/2,0);
		this.room = new THREE.Mesh(this.roomPlaneGeo, this.roomMaterial);
		
		
		this.room.receiveShadow = true;
		this.scene.add(this.room);
		
		this.composer = new THREE.EffectComposer( this.renderer );
		const renderPass = new THREE.RenderPass( this.scene, this.camera );
		this.composer.addPass( renderPass );
		if (! this.separateOutlines){
			this.outlinePass = new THREE.OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), this.scene, this.camera );
			this.outlinePass.edgeStrength = 100.0;
			this.outlinePass.edgeThickness = 4.0;
			this.outlinePass.visibleEdgeColor.set('#000000');
			this.outlinePass.hiddenEdgeColor.set('#000000');
			this.composer.addPass( this.outlinePass );
			// const effectFXAA = new THREE.ShaderPass( THREE.FXAAShader );
			// effectFXAA.uniforms[ 'resolution' ].value.set( 2 / window.innerWidth, 2 / window.innerHeight );
			// this.composer.addPass( effectFXAA );
			this.outlinePass.selectedObjects = this.outlinedObjs;
		} 
		this.animate();
		window.addEventListener('resize', onResize, false)
		function onResize() {
			sketch.camera.aspect = window.innerWidth / window.innerHeight
			sketch.camera.updateProjectionMatrix();
			sketch.renderer.setSize(window.innerWidth, window.innerHeight)
		}
	}
	
	
	animate() {
		requestAnimationFrame(this.animate.bind(this));
		TWEEN.update();
		if (this.videoTexture){
			this.videoTexture.update();
		}
		this.render();
	}
	
	render() {
		// this.controls.update(this.clock.getDelta());
		
		this.controls.update(this.clock.getDelta(), this.clock.getElapsedTime());
		this.composer.render();
		// this.composer.render();
		// this.renderer.render(this.scene, this.camera);
		this.raycaster.setFromCamera(this.mouse, this.camera);
		if (this.videoObj){
			const intersects = this.raycaster.intersectObject( this.videoObj );
			if (intersects.length > 0){
				this.renderer.domElement.style.cursor = 'pointer';
			} else {
				this.renderer.domElement.style.cursor = 'default';
			}
		}
		
	}
	
	onMouseMove( event ) {
		sketch.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		sketch.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	}
	
	handleClick(){
		if (sketch.videoObj){
			const intersects = sketch.raycaster.intersectObject( sketch.videoObj );
			if (intersects.length > 0){
				sketch.togglePlayVid();
			} else {
				sketch.renderer.domElement.style.cursor = 'default';
			}
		}
	}
	
	
	handleControlSwitch(c){
		if (!this.controls.tweening && this.controls.mode != c){
			var buttons = document.querySelectorAll('#buttonsContainer button');
			console.log(buttons);
			for (let button of buttons){
				button.classList.remove("selected");
			}
			switch (c){
				case 1:
				// do
				let btn1 = document.getElementById("btn1");
				btn1.classList.add("selected");
				this.controls.resetTarget(3000);
				this.controls.autoRotate = false;
				// this.camera.position.x = 0;
				// this.camera.position.y = 0;
				// this.camera.position.z = 10;
				this.controls.setCameraPos(0,0,10, 3000);
				this.controls.mode = 1;
				// this.camera.lookAt(0,0,0);
				// this.controls.update();
				
				break;
				case 2:
				// do
				let btn2 = document.getElementById("btn2");
				btn2.classList.add("selected");
				this.controls.resetTarget(3000);
				// this.camera.position.x = 0;
				// this.camera.position.y = 0;
				// this.camera.position.z = 2;
				this.controls.setCameraPos(0,0,2, 3000);
				this.controls.mode = 2;
				// this.camera.lookAt(0,0,0);
				this.controls.autoRotate = true;
				// this.controls.update();
				break;
				case 3:
				// do
				let btn3 = document.getElementById("btn3");
				btn3.classList.add("selected");
				this.controls.setCameraPos(0,10,0, 3000);
				this.controls.resetTarget(3000);
				this.controls.mode = 3;
				this.controls.autoRotate = false;
				// this.controls.update();
				break;
				case 4:
				// do
				let btn4 = document.getElementById("btn4");
				btn4.classList.add("selected");
				this.controls.autoRotate = false;
				this.controls.mode = 4;
				// this.controls.camera.position.copy(this.videoObj.getCameraPos(5));
				this.controls.setCameraPos(this.videoObj.getCameraPos(3).x,this.videoObj.getCameraPos(3).y,this.videoObj.getCameraPos(3).z, 3000);
				// this.controls.target.copy(this.videoObj.position);
				this.controls.setTarget(this.videoObj.position.x, this.videoObj.position.y, this.videoObj.position.z, 3000)
				// this.controls.update();
				this.playVid();
				break;
			}
		}
	}
	
	addEvents() {
		window.addEventListener("resize", this.resize.bind(this));
	}
	
	resize() {
		let width = window.innerWidth;
		let height = window.innerHeight;
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(width, height);
	}
	
	addObject(oPath, x=0, y=0, z=0, scale=1, isBlob=false, rotation=0){
		const scene = this.scene;
		if (isObj(oPath)){
			this.objLoader.load(
				oPath,
				// called when resource is loaded
				function ( object ) {
					object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							// child.geometry.center();
							// child.geometry.computeBoundingSphere();
							// const phongMaterial = new THREE.MeshPhongMaterial( { color: 0xec4d32, specular: 0x111111, shininess: 0 } );
							child.castShadow = true;
							child.geometry.scale(scale,scale,scale);
							if (rotation !== 0){
								child.geometry.rotateY(rotation);
							}
							if (isBlob){
								const phongMaterial = new THREE.MeshBasicMaterial( { color: 0xfe4d32} );
								child.material = phongMaterial;
								
								if (sketch.outlineMode === 0){
									var outlineMaterial2 = new THREE.MeshLambertMaterial( { color: 0x00000, side: THREE.BackSide } );
									outlineMaterial2.onBeforeCompile = (shader) => {
										// console.log(shader);
										const token = `#include <begin_vertex>`
										const customTransform = `
										vec3 transformed = position + objectNormal*0.06;
										`
										shader.vertexShader = 
										shader.vertexShader.replace(token,customTransform)
									}
									var outlineMesh2 = new THREE.Mesh( child.geometry, outlineMaterial2 );
									outlineMesh2.position.x =  x;
									outlineMesh2.position.y = y;
									outlineMesh2.position.z = z;
									// outlineMesh2.position.copy(object.position);
									// outlineMesh2.scale.multiplyScalar(1.05);
									// console.log(outlineMesh2);
									sketch.scene.add( outlineMesh2 );
								}
							}
							
						}
					} );
					sketch.scene.add( object );
					object.position.x = x;
					object.position.y =  y;
					object.position.z =  z;
					if (sketch.outlineMode === 1 && isBlob) {
						if (sketch.separateOutlines){
							const outlinePass = new THREE.OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), sketch.scene, sketch.camera );
							outlinePass.edgeStrength = 100.0;
							outlinePass.edgeThickness = 4.0;
							outlinePass.visibleEdgeColor.set('#000000');
							outlinePass.hiddenEdgeColor.set('#FE4D32');
							outlinePass.selectedObjects = [object];
							sketch.outlinePasses.push(outlinePass);
							sketch.composer.addPass(outlinePass)
						} else {
							sketch.outlinedObjs.push(object);
						}
						// sketch.outlinePass.selectedObjects.push(object);
					}
				},
				// called when loading is in progresses
				function ( xhr ) {
					
					// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
					
				},
				// called when loading has errors
				function ( error ) {
					
					console.log( error);
					
				}
			)
		} else if (isFbx(oPath)){
			this.fbxLoader.load(
				oPath,
				// called when resource is loaded
				function ( object ) {
					object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							// child.geometry.center();
							// child.geometry.computeBoundingSphere();
							// const phongMaterial = new THREE.MeshPhongMaterial( { color: 0xec4d32, specular: 0x111111, shininess: 0 } );
							child.geometry.scale(scale,scale,scale);
							if (isBlob){
								const phongMaterial = new THREE.MeshBasicMaterial( { color: 0xfe4d32} );
								child.material = phongMaterial;
								child.castShadow = true;	
								if (sketch.outlineMode === 0){
									var outlineMaterial2 = new THREE.MeshLambertMaterial( { color: 0x00000, side: THREE.BackSide } );
									outlineMaterial2.onBeforeCompile = (shader) => {
										// console.log(shader);
										const token = `#include <begin_vertex>`
										const customTransform = `
										vec3 transformed = position + objectNormal*0.06;
										`
										shader.vertexShader = 
										shader.vertexShader.replace(token,customTransform)
									}
									var outlineMesh2 = new THREE.Mesh( child.geometry, outlineMaterial2 );
									outlineMesh2.position.x = 0 - sketch.roomSize/2 + x;
									outlineMesh2.position.y = 0 - sketch.roomHeight/2 + y;
									outlineMesh2.position.z = 0 - sketch.roomSize/2 + z;
									// outlineMesh2.position.copy(object.position);
									// outlineMesh2.scale.multiplyScalar(1.05);
									// console.log(outlineMesh2);
									sketch.scene.add( outlineMesh2 );
								}		
							}			
						}
					} );
					sketch.scene.add( object );
					object.position.x = 0 - sketch.roomSize/2 + x;
					object.position.y = 0 - sketch.roomHeight/2 + y;
					object.position.z = 0 - sketch.roomSize/2 + z;
					if (sketch.outlineMode === 1 && isBlob) {
						if (sketch.separateOutlines){
							const outlinePass = new THREE.OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), sketch.scene, sketch.camera );
							outlinePass.edgeStrength = 100.0;
							outlinePass.edgeThickness = 4.0;
							outlinePass.visibleEdgeColor.set('#000000');
							outlinePass.hiddenEdgeColor.set('#FE4D32');
							outlinePass.selectedObjects = [object];
							sketch.outlinePasses.push(outlinePass);
							sketch.composer.addPass(outlinePass)
						} else {
							sketch.outlinedObjs.push(object);
						}
					}
					// sketch.outlinePass.selectedObjects.push(object);
				},
				// called when loading is in progresses
				function ( xhr ) {
					
					// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
					
				},
				// called when loading has errors
				function ( error ) {
					
					console.log( error);
					
				}
			)
		} else {
			throw new Error("Unspported file type. Only files with .fbx and .obj extensions are allowed.")
		}
	}
	
	addImage(iPath, x=0, y=0, z=0, width=1, rotation=0){
		console.log('trying to add '+iPath);
		try {
			const frontMaterial = new THREE.MeshBasicMaterial();
			frontMaterial.map = new THREE.TextureLoader().load(iPath);
			const sideMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
			const materials = [sideMaterial, sideMaterial, sideMaterial, sideMaterial, frontMaterial, sideMaterial];
			const img = new Image()
			img.onload = () => {
				const imgRatio = img.height / img.width
				const cubeGeometry = new THREE.BoxGeometry(width, imgRatio * width, 0.1)
				cubeGeometry.rotateY(rotation)
				const cube = new THREE.Mesh(cubeGeometry, materials)
				cube.position.set(x, y, z)
				cube.castShadow = true
				sketch.scene.add(cube)
			}
			img.src = iPath
		} catch(e){
			console.log(e);
		}
	}
	
	addVideo(vPath, x=0, y=0, z=0, width=1, height=1, rotation=0){
		console.log('trying to add '+vPath);
		try {
			
			const video = document.createElement('video')
			// playsinline webkit-playsinline muted loop autoplay
			video.setAttribute("playsinline", "true");
			video.setAttribute("webkit-playsinline", "true");
			video.setAttribute("muted", "muted");
			video.setAttribute("loop", "true");
			video.setAttribute("autoplay", "true");
			video.style.display = "none";
			video.id= "video"
			this.video = video;
			document.body.appendChild(video);
			video.onloadeddata = () => {
				console.log("vid loaded");
				const videoTexture = new THREE.VideoTexture(video);
				// sketch.videoTextures.push(videoTexture);
				this.videoTexture = videoTexture;
				const thumbnailTexture = new THREE.TextureLoader().load("./images/videoThumbnails/video1.png");
				const videoMaterial = new THREE.MeshBasicMaterial({map: thumbnailTexture, side: THREE.FrontSide});
				this.videoMaterial = videoMaterial;
				const cube = new SdaCuboid(videoMaterial, x, y, z, width, height, rotation)
				this.videoObj = cube;
				sketch.scene.add(cube)
				console.log(cube);
				// document.addEventListener('click', function(){
				// 	console.log("trying to play");
				// 	// frontMaterial.map = videoTexture;
				// 	video.play();
				// 	video.pause();
				// });
			}
			video.src = vPath
			window.addEventListener( 'mousemove', sketch.onMouseMove, false );
			window.addEventListener( 'click', sketch.handleClick, false );
		} catch(e){
			console.log(e);
		}
	}
	togglePlayVid(){
		if (this.video && this.videoTexture){
			if (this.videoMaterial.map !== this.videoTexture){
				this.videoMaterial.map = this.videoTexture;
			}
			let playBtn = document.getElementById("playBtn");
			if (this.video.paused){
				this.video.play();
				playBtn.innerHTML = "❚❚";
			} else {
				this.video.pause();
				playBtn.innerHTML = "►";
			}
		} else {
			console.log("Video or video texture not found");
		}
	}
	playVid(){
		if (this.video && this.videoTexture){
			if (this.videoMaterial.map !== this.videoTexture){
				this.videoMaterial.map = this.videoTexture;
			}
			this.video.play();
			let playBtn = document.getElementById("playBtn");
			playBtn.innerHTML = "❚❚";
		} else {
			console.log("Video or video texture not found");
		}
	}
	
	addGLTF(path){
		this.gltfLoader.load(
			// resource URL
			path,
			// called when the resource is loaded
			function ( gltf ) {
				
				sketch.scene.add( gltf.scene );
				
				gltf.animations; // Array<THREE.AnimationClip>
				gltf.scene; // THREE.Group
				gltf.scenes; // Array<THREE.Group>
				gltf.cameras; // Array<THREE.Camera>
				gltf.asset; // Object
				
			},
			// called while loading is progressing
			function ( xhr ) {
				
				console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
				
			},
			// called when loading has errors
			function ( error ) {
				
				console.log( error );
				
			}
		);
	}
}

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


var sketch = new Sketch();
sketch.addObject('./blobs.obj', 0.1, -2.5, 0.5, 0.9, true);
// sketch.addObject('./blobs3.obj', 0.5, -2.5, -2.0, 0.9, true);
// sketch.addImage('./images/image1.jpg', -2.5,-1.0,-2.5,3, Math.PI/6);
// sketch.addImage('./images/image2.jpg', 1.5,-2.0,1.25,2.5, -Math.PI/6);
// sketch.addVideo('./videos/video1.mp4', -2.5,-1.5,2.5,1.2,2.1333336);
// sketch.addObject('./blobCase.obj', -2.5, -1.5, 2.5, 0.6, true, Math.PI/2);
sketch.addGLTF('./shaderBalls.glb');
sketch.init();
console.log(sketch.videoObj);
// const cuboid = new Cuboid();

sketch.controls.init();