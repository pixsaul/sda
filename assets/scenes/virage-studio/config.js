var path = '/assets/scenes/virage-studio/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/virage-studio/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Virage_01.jpg'+compression,
      scale: 3,
      position: {
        x: 0,
        y: 0.0,
        z: -2.5,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Virage_02.jpg'+compression,
      scale: 1.3,
      position: {
        x: 1.76,
        y: 0.2,
        z: -1.90,
      },
      rotation: {
        x: 0,
        y: -65*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virage_03.jpg'+compression,
      scale: 3.0,
      position: {
        x: 2,
        y: 0.2,
        z: 0.176,
      },
      rotation: {
        x: 0,
        y: 90*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virage_04.jpg'+compression,
      scale: 1.5,
      position: {
        x: 1.3,
        y: -0.85,
        z: 1.96,
      },
      rotation: {
        x: 0,
        y: 25*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virage_05.png'+compression,
      scale: 1.5,
      position: {
        x: 0.61,
        y: -0.85,
        z: 2,
      },
      rotation: {
        x: 0,
        y: 90*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virage_06.jpg'+compression,
      scale: 1.23,
      position: {
        x: 0,
        y: -0.56,
        z: 1.245,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virage_07.jpg'+compression,
	  scale: 1.5,
      position: {
        x: -0.61,
        y: -0.85,
        z: 2,
      },
      rotation: {
        x: 0,
        y: 90*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virage_08.jpg'+compression,
	  scale: 1.5,
	  position: {
		x: -1.3,
		y: -0.85,
		z: 1.96,
	  },
	  rotation: {
		x: 0,
		y: -25*Math.PI/180,
		z: 0,
	  }
    },
	{
      path: cdn+'3d_Virage_09.jpg'+compression,
	  scale: 3.0,
      position: {
        x: -2,
        y: 0,
        z: 0.176,
      },
      rotation: {
        x: 0,
        y: 90*Math.PI/180,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Virage_10.jpg'+compression,
	  scale: 1.3,
	  position: {
		x: -1.76,
		y: 0.2,
		z: -1.90,
	  },
	  rotation: {
		x: 0,
		y: 65*Math.PI/180,
		z: 0,
	  }
    },
  ],
  blobs: [
    {
      path: path+'Virage.fbx',
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
],
}
