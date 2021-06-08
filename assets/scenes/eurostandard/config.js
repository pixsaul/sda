var path = '/assets/scenes/eurostandard/'
roomConfig = {
  images: [
    {
      path: path+'3d_Eurostandard_01.jpg',
      scale: 1.8,
      position: {
        x: 0.9,
        y: -0.4,
        z: -0.3,
      },
      rotation: {
        x: 0,
        y: 22.7*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_Eurostandard_02.jpg',
      scale: 1.8,
      position: {
        x: -0.5,
        y: 1.0,
        z: 0.8,
      },
      rotation: {
        x: 0,
        y: 67.7*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_Eurostandard_03.jpg',
      scale: 1.8,
      position: {
        x: -1.15,
        y: 2.0,
        z: -0.66,
      },
      rotation: {
        x: 0,
        y: -22.3*Math.PI/180,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Eurostandard.fbx',
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
