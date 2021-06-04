var path = '/sda/assets/scenes/after-work-studio/'
roomConfig = {
  images: [
    {
      path: path+'3d_After-Work_01.jpg',
      scale: 2.3,
      position: {
        x: -1.7,
        y: -0.3,
        z: -1.7,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    }
  ],
  blobs: [
    {
      path: path+'metaballs.fbx',
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
