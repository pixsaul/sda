/* --------------------------------------------------------
ObjectControls
version: 1.2.6
author: Alberto Piras
email: a.piras.ict@gmail.com
github: https://github.com/albertopiras
license: MIT
description: module for ThreeJS that allows you to rotate an Object(mesh) independently from the rest of the scene, and to zoom in/out moving the camera; for desktop and mobile.
----------------------------------------------------------*/


THREE.ObjectControls = function(objectToMove, domElement, hasHover, restrictMobile) {

  /**
  * setObjectToMove
  * @description changes the object to control
  * @param newMesh
  **/
  this.setObjectToMove = function (newMesh) {
    mesh = newMesh;
  };



  this.autoSpeed = 0.1;
  this.rotationSpeed = 0.07;
  // Set to true when mouse hovering over something else
  this.mouseBusy = false;

  /**
  * setRotationSpeed
  * @param {number} newRotationSpeed - (1 == fast)  (0.01 == slow)
  **/
  this.setRotationSpeed = function (newRotationSpeed) {
    this.rotationSpeed = newRotationSpeed;
  };

  /**
  * setRotationSpeedTouchDevices
  * @param {number} newRotationSpeed - (1 == fast)  (0.01 == slow)
  **/
  this.setRotationSpeedTouchDevices = function (newRotationSpeed) {
    rotationSpeedTouchDevices = newRotationSpeed;
  };

  this.enableVerticalRotation = function () {
    verticalRotationEnabled = true;
  };

  this.disableVerticalRotation = function () {
    verticalRotationEnabled = false;
  };

  this.enableHorizontalRotation = function () {
    horizontalRotationEnabled = true;
  };

  this.disableHorizontalRotation = function () {
    horizontalRotationEnabled = false;
  };

  this.setMaxVerticalRotationAngle = function (min, max) {
    this.maxRotationAngles.x.from = min;
    this.maxRotationAngles.x.to = max;
    this.maxRotationAngles.x.enabled = true;
  };

  this.setMaxHorizontalRotationAngle = function (min, max) {
    this.maxRotationAngles.y.from = min;
    this.maxRotationAngles.y.to = max;
    this.maxRotationAngles.y.enabled = true;
  };

  this.disableMaxHorizontalAngleRotation = function () {
    this.maxRotationAngles.y.enabled = false;
  };

  this.disableMaxVerticalAngleRotation = function () {
    this.maxRotationAngles.x.enabled = false;
  };

  this.update = function(delta) {
    if (!isDragging){
      mesh.rotation.y += this.autoSpeed * delta;
    }
  }



  domElement = (domElement !== undefined) ? domElement : document;

  /********************* Private control variables *************************/

  this.maxRotationAngles = {
    x: {
      // Vertical from bottom to top.
      enabled: true,
      from: 0.92,
      to: 0.74,
    },
    y: {
      // Horizontal from left to right.
      enabled: false,
      from: Math.PI / 4,
      to: Math.PI / 4
    }
  };

  let
  flag,
  mesh = objectToMove,
  rotationSpeedTouchDevices = 0.05,
  isDragging = false,
  verticalRotationEnabled = true,
  horizontalRotationEnabled = true,
  mouseFlags = { MOUSEDOWN: 0, MOUSEMOVE: 1 },
  previousMousePosition = { x: 0, y: 0 },
  /**
  * CurrentTouches
  * length 0 : no zoom
  * length 2 : is zoomming
  */
  currentTouches = [];

  /***************************** Private shared functions **********************/

  let scope = this;

  /**
  * isWithinMaxAngle
  * @description Checks if the rotation in a specific axe is within the maximum
  * values allowed.
  * @param delta is the difference of the current rotation angle and the
  *     expected rotation angle
  * @param axe is the axe of rotation: x(vertical rotation), y (horizontal
  *     rotation)
  * @return true if the rotation with the new delta is included into the
  *     allowed angle range, false otherwise
  */
  function isWithinMaxAngle(delta, axe) {
    if (scope.maxRotationAngles[axe].enabled) {
      const condition = ((scope.maxRotationAngles[axe].from * -1) <
      (mesh.rotation[axe] + delta)) &&
      ((mesh.rotation[axe] + delta) < scope.maxRotationAngles[axe].to);
      return condition ? true : false;
    }
    return true;
  }

  function resetMousePosition() {
    previousMousePosition = { x: 0, y: 0 };
  }

  /******************  MOUSE interaction functions - desktop  *****/
  function mouseDown(e) {
    if (!scope.mouseBusy){
      isDragging = true;
      flag = mouseFlags.MOUSEDOWN;
      domElement.style.cursor = 'grabbing';
    }
  }

  function mouseMove(e) {
    if (isDragging) {
      const deltaMove = {
        x: e.offsetX - previousMousePosition.x,
        y: e.offsetY - previousMousePosition.y
      };

      previousMousePosition = { x: e.offsetX, y: e.offsetY };

      if (horizontalRotationEnabled && deltaMove.x != 0)
      // && (Math.abs(deltaMove.x) > Math.abs(deltaMove.y))) {
      // enabling this, the mesh will rotate only in one specific direction
      // for mouse movement
      {
        if (!isWithinMaxAngle(Math.sign(deltaMove.x) * scope.rotationSpeed, 'y'))
        return;

        mesh.rotation.y += Math.sign(deltaMove.x) * scope.rotationSpeed;
        flag = mouseFlags.MOUSEMOVE;
      }

      if (verticalRotationEnabled && deltaMove.y != 0)
      // &&(Math.abs(deltaMove.y) > Math.abs(deltaMove.x)) //
      // enabling this, the mesh will rotate only in one specific direction for
      // mouse movement
      {
        if (!isWithinMaxAngle(Math.sign(deltaMove.y) * scope.rotationSpeed, 'x'))
        return;
        mesh.rotation.x += Math.sign(deltaMove.y) * scope.rotationSpeed;
        flag = mouseFlags.MOUSEMOVE;
      }
    }
  }

  function mouseUp() {
    isDragging = false;
    resetMousePosition();
    domElement.style.cursor = 'grab';
  }


  /****************** TOUCH interaction functions - mobile  *****/

  function onTouchStart(e) {
    e.preventDefault();
    flag = mouseFlags.MOUSEDOWN;
    if (e.touches.length === 2) {
    } else {
      previousMousePosition = { x: e.touches[0].pageX, y: e.touches[0].pageY };
    }
  }

  function onTouchEnd(e) {



    if (currentTouches.length > 0) {
      currentTouches.pop();
    } else {
      currentTouches = [];
    }
    e.preventDefault();
    if (flag === mouseFlags.MOUSEDOWN) {
      // TouchClick
      // You can invoke more other functions for animations and so on...
    } else if (flag === mouseFlags.MOUSEMOVE) {
      // Touch drag
      // You can invoke more other functions for animations and so on...
    }
    resetMousePosition();
  }

  function onTouchMove(e) {
    e.preventDefault();
    flag = mouseFlags.MOUSEMOVE;
    // Touch zoom.
    // If two pointers are down, check for pinch gestures.
    if (currentTouches.length === 0) {

      const deltaMove = {
        x: e.touches[0].pageX - previousMousePosition.x,
        y: e.touches[0].pageY - previousMousePosition.y
      };
      previousMousePosition = { x: e.touches[0].pageX, y: e.touches[0].pageY };

      if (horizontalRotationEnabled && deltaMove.x != 0) {
        if (!isWithinMaxAngle(
          Math.sign(deltaMove.x) * rotationSpeedTouchDevices, 'y'))
          return;
          mesh.rotation.y += Math.sign(deltaMove.x) * rotationSpeedTouchDevices;
        }

        if (verticalRotationEnabled && deltaMove.y != 0) {
          if (!isWithinMaxAngle(
            Math.sign(deltaMove.y) * rotationSpeedTouchDevices, 'x'))
            return;
            mesh.rotation.x += Math.sign(deltaMove.y) * rotationSpeedTouchDevices;
          }
        }
      }


      /********************* Event Listeners *************************/

      /** Mouse Interaction Controls (rotate & zoom, desktop **/
      // Mouse - move
      if (hasHover || !restrictMobile){
        domElement.addEventListener('mousedown', mouseDown, false);
        domElement.addEventListener('mousemove', mouseMove, false);
        domElement.addEventListener('mouseup', mouseUp, false);
        domElement.addEventListener('mouseout', mouseUp, false);


        /** Touch Interaction Controls (rotate & zoom, mobile) **/
        // Touch - move
        domElement.addEventListener('touchstart', onTouchStart, false);
        domElement.addEventListener('touchmove', onTouchMove, false);
        domElement.addEventListener('touchend', onTouchEnd, false);
      }
    };
