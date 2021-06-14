var path = '/assets/scenes/niki-paltenghi/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/niki-paltenghi/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Niki-Paltenghi_01.jpg'+compression,
      scale: 2.5,
      position: {
        x: -1,
        y: -0.2,
        z: -1,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Niki-Paltenghi_02.jpg'+compression,
      scale: 3.0,
      position: {
        x: 0.5,
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
      path: cdn+'3d_Niki-Paltenghi_03.jpg'+compression,
      scale: 3,
      position: {
        x: -2.5,
        y: -1.0,
        z: -0.5,
      },
      rotation: {
        x: 0,
        y: Math.PI/2,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Niki-Paltenghi_04.jpg'+compression,
      scale: 3,
      position: {
        x: -0.5,
        y: -1,
        z: -2.5,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Niki-Paltenghi_05.jpg'+compression,
      scale: 3,
      position: {
        x: 2.5,
        y: -1,
        z: 0.5,
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
      path: path+'Niki-Paltenghi.fbx',
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
        path: path+'3d_Niki-Paltenghi_06.mp4',
        scale: 2.1,
        position: {
          x: 0.5,
          y: -0.0,
          z: 0.5,
        },
        rotation: {
          x: 0,
          y: -Math.PI/4,
          z: 0,
        }
      },
  ]
}
