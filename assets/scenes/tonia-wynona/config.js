var path = '/assets/scenes/tonia-wynona/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/tonia-wynona/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Tonia-Wynona_01.jpg'+compression,
      scale: 3.1,
      position: {
        x: -1.2,
        y: -1.0,
        z: -0.4,
      },
      rotation: {
        x: 0,
        y: 60*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Tonia-Wynona_02.jpg'+compression,
	  scale: 3.1,
      position: {
        x: 0.3,
        y: -1.0,
        z: -0.4,
      },
      rotation: {
        x: 0,
        y: 60*Math.PI/180,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Tonia-Wynona_03.jpg'+compression,
	  scale: 2.0,
      position: {
        x: -1.5,
        y: -0.6,
        z: 2.6,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Tonia-Wynona_04.jpg'+compression,
	  scale: 3.1,
	  position: {
		x: 1.1,
		y: -1.0,
		z: 1.2,
	  },
	  rotation: {
		x: 0,
		y: 60*Math.PI/180,
		z: 0,
	  }
    },
  ],
  videos: [
	  {
        path: path+'3d_Tonia-Wynona_05.mp4',
		scale: 2.0,
        position: {
          x: 1.5,
          y: -0.2,
          z: -2.6,
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
      path: path+'Tonia-Wynona.fbx',
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
