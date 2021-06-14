var path = '/assets/scenes/thomas-clement/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/thomas-clement/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Thomas-Clement_01.jpg'+compression,
      scale: 2.3,
      position: {
        x: 1.8,
        y: -0.4,
        z: 1.8,
      },
      rotation: {
        x: 0,
        y: 40*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Thomas-Clement_02.jpg'+compression,
	  scale: 2.5,
	  position: {
		x: -0.5,
		y: 1.2,
		z: -0.5,
	  },
	  rotation: {
		x: 0,
		y: -140*Math.PI/180,
		z: 0,
	  }
    },
    {
      path: cdn+'3d_Thomas-Clement_03.jpg'+compression,
	  scale: 2.5,
	  position: {
		x: 1.2,
		y: 1.2,
		z: -0.2,
	  },
	  rotation: {
		x: 0,
		y: 105*Math.PI/180,
		z: 0,
	  }
    },
	{
      path: cdn+'3d_Thomas-Clement_04.jpg'+compression,
	  scale: 2.5,
	  position: {
		x: 0.0,
		y: 1.2,
		z: 1,
	  },
	  rotation: {
		x: 0,
		y: -15*Math.PI/180,
		z: 0,
	  }
    },
	{
      path: cdn+'3d_Thomas-Clement_05.jpg'+compression,
	  scale: 2.3,
	  position: {
		x: 0.7,
		y: -0.4,
		z: -2,
	  },
	  rotation: {
		x: 0,
		y: 170*Math.PI/180,
		z: 0,
	  }
    },
	{
      path: cdn+'3d_Thomas-Clement_06.jpg'+compression,
      scale: 2.3,
      position: {
        x: -2.0,
        y: -0.3,
        z: 1.5,
      },
      rotation: {
        x: 0,
        y: -69*Math.PI/180,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Thomas-Clement.fbx',
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
