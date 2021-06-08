var path = '/assets/scenes/marc-asekhame/'
roomConfig = {
  images: [
    {
      path: path+'3d_Marc-Asekhame_01.jpg',
      scale: 2.3,
      position: {
        x: -2,
        y: 1,
        z: 0.01,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: path+'3d_Marc-Asekhamei_02.jpg',
      scale: 2.3,
      position: {
        x: 0,
        y: 0.2,
        z: -2.7,
      },
      rotation: {
        x: 0,
        y: Math.PI/-1.1,
        z: 0,
      }
    },
    {
      path: path+'3d_Marc-Asekhame_03.jpg',
      scale: 1.6,
      position: {
        x: 2.3,
        y: -0.3,
        z: -1.8,
      },
      rotation: {
        x: 0,
        y: Math.PI/3,
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
