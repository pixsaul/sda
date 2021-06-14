var path = '/assets/scenes/quentin-lacombe/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/quentin-lacombe/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Quentin-Lacombe_01.jpg'+compression,
      scale: 2.4,
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
      path: cdn+'3d_Quentin-Lacombe_02.jpg'+compression,
      scale: 2.3,
      position: {
        x: 0.3,
        y: 0.5,
        z: -2.3,
      },
      rotation: {
        x: 0,
        y: 70*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Quentin-Lacombe_03.jpg'+compression,
      scale: 2.3,
      position: {
        x: 2.0,
        y: 1.2,
        z: -0.2,
      },
      rotation: {
        x: 0,
        y: 27*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Quentin-Lacombe_04.jpg'+compression,
      scale: 2.1,
      position: {
        x: -2.3,
        y: 0.7,
        z: 0.4,
      },
      rotation: {
        x: 0,
        y: 20*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Quentin-Lacombe_05.jpg'+compression,
	  scale: 2.1,
      position: {
        x: 0,
        y: -0.6,
        z: 2.1,
      },
      rotation: {
        x: 0,
        y: 78*Math.PI/180,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Quentin-Lacombe.fbx',
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
