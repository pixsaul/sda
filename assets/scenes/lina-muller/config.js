var path = '/assets/scenes/lina-muller/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/lina-muller/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Lina-Muller_01.jpg'+compression,
      scale: 3.3,
      position: {
        x: 0.5,
        y: 0.35,
        z: 2,
      },
      rotation: {
        x: 0,
        y: -39.4*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Lina-Muller_02.jpg'+compression,
      scale: 2.8,
      position: {
        x: 1.5,
        y: 0.0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 15.6*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Lina-Muller_03.jpg'+compression,
      scale: 3.0,
      position: {
        x: 0.5,
        y: 0.2,
        z: -1.5,
      },
      rotation: {
        x: 0,
        y: -124*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Lina-Muller_04.jpg'+compression,
      scale: 1.8,
      position: {
        x: -1,
        y: -0.7,
        z: -2,
      },
      rotation: {
        x: 0,
        y: -19.4*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Lina-Muller_05.jpg'+compression,
      scale: 2.4,
      position: {
        x: -2,
        y: -0.35,
        z: -1,
      },
      rotation: {
        x: 0,
        y: -54.4*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Lina-Muller_06.jpg'+compression,
      scale: 1.6,
      position: {
        x: -2,
        y: -0.8,
        z: 0.5,
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
      path: path+'Lina-Muller.fbx',
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
