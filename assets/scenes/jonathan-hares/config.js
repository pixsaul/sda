var path = '/sda/assets/scenes/jonathan-hares/'
roomConfig = {
  images: [
    {
      path: path+'3d_Jonathan-Hares_1.jpg',
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
      path: path+'3d_Jonathan-Hares_2.jpg',
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
  ],
  blobs: [
    {
      path: path+'jonathan-hares.fbx',
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
