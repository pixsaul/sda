var path = '/assets/scenes/mariel-manuel/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/mariel-manuel/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Mariel-Manuel_01.jpg'+compression,
      scale: 2.3,
      position: {
        x: -2,
        y: 0,
        z: -2,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Mariel-Manuel_02.jpg'+compression,
      scale: 1.7,
      position: {
        x: 0,
        y: -0.4,
        z: 2,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Mariel-Manuel_03.jpg'+compression,
      scale: 1.6,
      position: {
        x: 2.4,
        y: -0.3,
        z: -1.3,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Mariel-Manuel_04.jpg'+compression,
      scale: 2.0,
      position: {
        x: -0.3,
        y: 0.2,
        z: -1.2,
      },
      rotation: {
        x: 0,
        y: -Math.PI/4,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Mariel-Manuel_05.jpg'+compression,
      scale: 2.5,
      position: {
		  x: -1.5,
          y: -1,
          z: 1.7,
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
      path: path+'mariel-manuel.fbx',
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
  videos: [
	  {
        path: path+'3d_Mariel-Manuel_BTS.mp4',
		scale: 1.6,
        position: {
          x: 1.3,
          y: -0.3,
          z: -0.4,
        },
        rotation: {
          x: 0,
          y: Math.PI/4,
          z: 0,
        }
	}
  ],

}
