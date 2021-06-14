var path = '/assets/scenes/aatb/'
roomConfig = {
  images: [
    {
      path: path+'3d_AATB_01.jpg',
      scale: 2.6,
      position: {
        x: -1.5,
        y: 0.7,
        z: -2,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: path+'3d_AATB_02.jpg',
      scale: 2.3,
      position: {
        x: -0.5,
        y: -0.8,
        z: -0.5,
      },
      rotation: {
        x: 0,
        y: 80*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_AATB_03.jpg',
	  scale: 2.3,
      position: {
        x: 0.5,
        y: -0.8,
        z: -0.5,
      },
      rotation: {
        x: 0,
        y: -80*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_AATB_04.jpg',
	  scale: 2.6,
      position: {
        x: 1.5,
        y: 0.7,
        z: -2,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'AATB.fbx',
      scale: 0.25,
      position: {
        x: 0,
        y: -2,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
  ]
}
