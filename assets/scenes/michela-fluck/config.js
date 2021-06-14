var path = '/assets/scenes/michela-fluck/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/michela-fluck/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Michela-Fluck_01.JPG'+compression,
      scale: 3,
      position: {
        x: -0.5,
        y: -0.8,
        z: -2.2,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Michela-Fluck_02.jpg'+compression,
      scale: 3,
      position: {
        x: 0.9,
        y: -0.9,
        z: 2.5,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Michela-Fluck_03.jpg'+compression,
      scale: 3,
      position: {
        x: -2.4,
        y: -0.8,
        z: -0,
      },
      rotation: {
        x: 0,
        y: Math.PI/2,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Michela-Fluck_04.jpg'+compression,
      scale: 3,
	  position: {
		x: -2.7,
		y: -0.8,
		z: 1.1,
	  },
	  rotation: {
		x: 0,
		y: Math.PI/2,
		z: 0,
	  }
    },
	{
      path: cdn+'3d_Michela-Fluck_05.JPG'+compression,
	  scale: 3,
	  position: {
		x: 2.7,
		y: -0.8,
		z: 0.6,
	  },
	  rotation: {
		x: 0,
		y: Math.PI/2,
		z: 0,
	  }
    },
	{
      path: cdn+'3d_Michela-Fluck_06.jpg'+compression,
      scale: 3,
      position: {
        x: 2.2,
        y: 1,
        z: -2.2,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Michela-Fluck_07.jpg'+compression,
      scale: 2.2,
      position: {
        x: -0.8,
        y: -1.2,
        z: 1.6,
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
      path: path+'Michela-Fluck.fbx',
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
