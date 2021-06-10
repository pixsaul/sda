var path = '/assets/scenes/marc-asekhame/'
roomConfig = {
  images: [
    {
      path: path+'3d_Marc-Asekhame_01.jpg',
      scale: 2.4,
      position: {
        x: 0,
        y: -0.4,
        z: 0.00,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: path+'3d_Marc-Asekhame_02.jpg',
      scale: 2.9,
      position: {
        x: 1.5,
        y: -0.2,
        z: -1.5,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
    {
      path: path+'3d_Marc-Asekhame_03.jpg',
	  scale: 2.9,
      position: {
        x: -1.5,
        y: -0.2,
        z: 1.5,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Marc-Asekhame.fbx',
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
