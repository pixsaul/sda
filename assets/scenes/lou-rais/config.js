var path = '/assets/scenes/lou-rais/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/lou-rais/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Lou-Rais_01.jpg'+compression,
      scale: 2.3,
      position: {
        x: 2,
        y: -0.24,
        z: 2,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Lou-Rais_02.jpg'+compression,
      scale: 5.3,
      position: {
        x: 0,
        y: -0.2,
        z: 0,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Lou-Rais_03.jpg'+compression,
      scale: 3.0,
      position: {
        x: 1.5,
        y: 1.2,
        z: -2,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Lou-Rais_04.jpg'+compression,
      scale: 2.6,
      position: {
        x: -2,
        y: -0.2,
        z: -2
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Lou-Rais.fbx',
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
