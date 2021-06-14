var path = '/assets/scenes/ottolinger/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/ottolinger/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Ottolinger_01.jpg'+compression,
      scale: 2.9,
      position: {
        x: 1.5,
        y: 0.2,
        z: 1.5,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Ottolinger_02.jpg'+compression,
      scale: 2.9,
      position: {
		  x: -1.5,
          y: 0.2,
          z: -1.5,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Ottolinger_03.jpg'+compression,
      scale: 2.9,
      position: {
        x: 0,
        y: 0.0,
        z: 1.8,
      },
      rotation: {
        x: 0,
        y: Math.PI/2,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Ottolinger_04.jpg'+compression,
      scale: 2.9,
      position: {
		  x: -1.5,
          y: 0.0,
          z: 1.5,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Ottolinger_05.jpg'+compression,
      scale: 2.7,
      position: {
		  x: 1.5,
          y: 0.0,
          z: -1.5,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Ottolinger_06.jpg'+compression,
      scale: 2.9,
      position: {
        x: 0,
        y: 0.0,
        z: -1.8,
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
      path: path+'Ottolinger.fbx',
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
