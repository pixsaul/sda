// Image Mesh class, contains properties and functions for helping to
// hover and select

class ImageMesh extends THREE.Mesh {
  constructor(geometry, materials){
    super(geometry, materials);
    this.hovered = false;
    this.selected = false;
    this.up = false;
    this.tweening = false;
    this.position0 = new THREE.Vector3();
    this.rotation0 = new THREE.Vector3();
    this.quaternion0 = new THREE.Quaternion();
    this.scale0 = new THREE.Vector3();
    this.tweens = [];
  }

  // Cancel all tweens
  cancelTweens(){
    this.tweens.forEach((t, i) => {
      t.stop();
      this.tweens.splice(i, 1);
    });
  }

  // Lift up when hovered
  liftUp(){
    this.tweening = true;
    this.cancelTweens();
    const tweenUp = new TWEEN.Tween(this.position)
    .to({y: this.position0.y + 0.1}, 200)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onStart(() => {
      this.tweening = true;
    })
    .onComplete(() => {
      this.up = true;
      this.tweening = false;
    });
    tweenUp.start();
    this.tweens.push(tweenUp);
  }

  // Put back (when not hovered)
  putBack(time = 200){
    console.log("putting back");
    this.tweening = true;
    this.cancelTweens();
    const tweenPosition = new TWEEN.Tween(this.position)
    .to({x: this.position0.x, y: this.position0.y, z: this.position0.z}, time)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onStart(() => {
      this.tweening = true;
    })
    .onComplete(() => {
      this.up = false;
      this.tweening = false;
    });
    tweenPosition.start();
    this.tweens.push(tweenPosition);
    const timeR = {
      t: 0,
    }
    const tweenquaternion = new TWEEN.Tween(timeR)
    .to({ t: 1 }, 500)
    .easing(TWEEN.Easing.Linear.None)
    .onStart(() => {
      this.tweening = true;
      // console.log(this.quaternion);
      // console.log(this.quaternion0);
    })
    .onUpdate(() => {
      this.quaternion.slerp(this.quaternion0, timeR.t);
    })
    .onComplete(() => {
      this.up = false;
      // console.log(this.quaternion);
      this.quaternion.copy(this.quaternion0);
      this.selected = false;
      this.tweening = false;
    });
    this.tweens.push(tweenquaternion);
    tweenquaternion.start();
    const tweenScale = new TWEEN.Tween(this.scale)
    .to({x: this.scale0.x, y: this.scale0.y, z: this.scale0.z}, time)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onStart(() => {
      this.tweening = true;
    })
    .onComplete(() => {
      this.up = false;
      this.tweening = false;
    });
    tweenScale.start();
    this.tweens.push(tweenScale);
  }
  // Put selected back when clicked off
  putSelectedBack(time = 800){
    this.tweening = true;
    this.cancelTweens();
    const tweenPosition = new TWEEN.Tween(this.position)
    .to({x: this.position0.x, y: this.position0.y, z: this.position0.z}, time)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onStart(() => {
      this.tweening = true;
    })
    .onComplete(() => {
      this.up = false;
      this.tweening = false;
    });
    tweenPosition.start();
    this.tweens.push(tweenPosition);
    // const tweenRotation = new TWEEN.Tween(this.rotation)
    // .to({x: this.rotation0.x, y: this.rotation0.y, z: this.rotation0.z}, time)
    // .easing(TWEEN.Easing.Quadratic.Out)
    // .onStart(() => {
    // 	this.tweening = true;
    // })
    // .onComplete(() => {
    // 	this.up = false;
    // 	this.selected = false;
    // 	this.tweening = false;
    // });
    // tweenRotation.start();
    if (this.quaternion.angleTo(this.quaternion0) >= Math.PI/2){
      this.rotateY(Math.PI);
    }
    // console.log(this.rotation.toVector3());
    // console.log(this.rotation.toVector3().angleTo(this.rotation0));
    const timeR = {
      t: 0,
    }
    const tweenquaternion = new TWEEN.Tween(timeR)
    .to({ t: 1 }, 500)
    .easing(TWEEN.Easing.Linear.None)
    .onStart(() => {
      this.tweening = true;
      // console.log(this.quaternion);
      // console.log(this.quaternion0);
    })
    .onUpdate(() => {
      this.quaternion.slerp(this.quaternion0, timeR.t);
    })
    .onComplete(() => {
      this.up = false;
      // console.log(this.quaternion);
      this.selected = false;
      this.tweening = false;
      // this.quaternion.copy(this.quaternion0);
    });
    tweenquaternion.start();
    this.tweens.push(tweenquaternion);
    const tweenScale = new TWEEN.Tween(this.scale)
    .to({x: this.scale0.x, y: this.scale0.y, z: this.scale0.z}, time)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onStart(() => {
      this.tweening = true;
    })
    .onComplete(() => {
      this.up = false;
      this.tweening = false;
    });
    tweenScale.start();
    this.tweens.push(tweenScale);
  }

  // When image clicked, bring to front
  bringToFocus(camera, dist){
    this.cancelTweens();
    this.tweening = true;
    const tweenPosition = new TWEEN.Tween(this.position)
    .to({x: 0, y: camera.position.y - dist, z: camera.position.z - dist}, 500)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onStart(() => {
      this.tweening = true;
      // console.log(this.quaternion);
    })
    .onComplete(() => {
      this.tweening = false;
      // console.log(this.quaternion);
    });
    tweenPosition.start();
    this.tweens.push(tweenPosition);
    // console.log(this);
    // console.log(camera.rotation);
    // if (this.rotation.x >= Math.PI/2){
    // 	this.rotation.x -= 2*(Math.PI)
    // } else if (this.rotation.x <= -Math.PI/2){
    // 	this.rotation.x += 2*(Math.PI)
    // }
    // console.log(this.rotation.toVector3());
    console.log(this.rotation.toVector3().angleTo(this.rotation0));
    if (this.quaternion.angleTo(this.quaternion0) >= Math.PI/2){
      this.rotateY(Math.PI);
    }
    const time = {
      t: 0,
    }
    const tweenquaternion = new TWEEN.Tween(time)
    .to({ t: 1 }, 500)
    .easing(TWEEN.Easing.Exponential.In)
    .onStart(() => {
      this.tweening = true;
    })
    .onUpdate(() => {
      this.quaternion.slerp(camera.quaternion, time.t);
    })
    .onComplete(() => {
      this.tweening = false;
      this.quaternion.copy(camera.quaternion);
    });
    tweenquaternion.start();
    this.tweens.push(tweenquaternion);
    const tweenScale = new TWEEN.Tween(this.scale)
    .to({x: 1, y: 1, z: 1}, 500)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onStart(() => {
      this.tweening = true;
    })
    .onComplete(() => {
      this.tweening = false;
    });
    tweenScale.start();
    this.tweens.push(tweenScale);
  }



}
