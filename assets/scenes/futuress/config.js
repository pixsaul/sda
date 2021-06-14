var path = '/assets/scenes/futuress/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/futuress/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Futuress_01.jpg'+compression,
      scale: 2.0,
      position: {
        x: 0,
        y: -0.6,
        z: 2.5,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Futuress_02.png'+compression,
      scale: 5.9,
      position: {
        x: 0,
        y: -0.1,
        z: -2.8,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Futuress_03.jpg'+compression,
      scale: 3.7,
      position: {
        x: 0.475,
        y: -0.7,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 75*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Futuress_04.jpg'+compression,
	  scale: 3.7,
      position: {
        x: -0.475,
        y: -0.7,
        z: 0,
      },
      rotation: {
        x: 0,
        y: -75*Math.PI/180,
        z: 0,
      },
      
    },
	{
      path: cdn+'3d_Futuress_05.jpg'+compression,
	  scale: 3.0,
      position: {
        x: -2.8,
        y: -0.9,
        z: 0,
      },
      rotation: {
        x: 0,
        y: Math.PI/2,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Futuress_06.jpg'+compression,
      scale: 2.6,
      position: {
        x: 2.8,
        y: -0.0,
        z: 0,
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
      path: path+'Futuress.fbx',
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
