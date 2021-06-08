var path = '/assets/scenes/edition-moderne/'
roomConfig = {
  images: [
    {
      path: path+'3d_Edition-Moderne_01.jpg',
      scale: 2.3,
      position: {
        x: -3.7/4,
        y: -0.4,
        z: 8.9/4,
      },
      rotation: {
        x: 0,
        y: 35*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_Edition-Moderne_02.jpg',
      scale: 3.3,
      position: {
        x: 6*0.25,
        y: 0.2,
        z: 0,
      },
      rotation: {
        x: 0,
        y: -35*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_Edition-Moderne_03.jpg',
      scale: 2.2,
      position: {
        x: -1.7,
        y: 0.3,
        z: -1.6,
      },
      rotation: {
        x: 0,
        y: 55*Math.PI/180,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Edition-Moderne.fbx',
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
