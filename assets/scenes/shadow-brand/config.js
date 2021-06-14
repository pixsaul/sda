var path = '/assets/scenes/shadow-brand/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/shadow-brand/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Shadow-Brand_01.jpg'+compression,
      scale: 2,
      position: {
        x: 2,
        y: -0.52,
        z: -2.5,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Shadow-Brand_02.jpg'+compression,
      scale: 2.0,
      position: {
        x: 0,
        y: 0.3,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Shadow-Brand_03.jpg'+compression,
      scale: 3,
      position: {
        x: 0.5,
        y: -0.6,
        z: -1,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Shadow-Brand_04.png'+compression,
	  scale: 3,
	  position: {
		x: -0.5,
		y: -0.6,
		z: 1,
	  },
	  rotation: {
		x: 0,
		y: 0,
		z: 0,
	  }
    },
	{
      path: cdn+'3d_Shadow-Brand_05.png'+compression,
	  scale: 2.0,
      position: {
        x: -1.5,
        y: -0.42,
        z: 2.5,
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
      path: path+'Shadow-Brand.fbx',
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
