var path = '/assets/scenes/mathias-renner/'
roomConfig = {
  images: [
    {
      path: path+'3d_Mathias-Renner_01.jpg',
      scale: 3.75,
      position: {
        x: 0,
        y: 0.4,
        z: -2.5,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: path+'3d_Mathias-Renner_02.jpg',
	  scale: 3.75,
      position: {
        x: -2.50,
        y: 0.3,
        z: 0,
      },
      rotation: {
        x: 0,
        y: Math.PI/2,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Mathias-Renner.fbx',
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
