var path = '/assets/scenes/kaj-lehmann/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/kaj-lehmann/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Kaj-Lehmann_01.jpg'+compression,
      scale: 2.3,
      position: {
        x: 0,
        y: -1,
        z: 1,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Kaj-Lehmann_02.jpg'+compression,
      scale: 1.8,
      position: {
        x: -2,
        y: 1,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Kaj-Lehmann_03.jpg'+compression,
      scale: 2.6,
      position: {
        x: 0,
        y: 2,
        z: -1.25,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Kaj-Lehmann_04.jpg'+compression,
      scale: 1.6,
      position: {
        x: -2,
        y: -0.9,
        z: 2,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Kaj-Lehmann_05.jpg'+compression,
      scale: 2.4,
      position: {
        x: -1.5,
        y: -1.2,
        z: -2,
      },
      rotation: {
        x: 0,
        y: Math.PI,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Kaj-Lehmann_06.jpg'+compression,
      scale: 1.6,
      position: {
        x: 2.9,
        y: -0.3,
        z: -1.8,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Kaj-Lehmann_07.jpg'+compression,
      scale: 1.6,
      position: {
        x: 2.0,
        y: -0.9,
        z: 2,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Kaj-Lehmann_08.jpg'+compression,
      scale: 2.6,
      position: {
		  x: 2,
          y: 1,
          z: 0,
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
      path: path+'Kaj-Lehmann.fbx',
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
      path: path+'3d_Kaj-Lehmann_06.mp4',
	  scale: 2.4,
      position: {
        x: 1.5,
        y: -1.2,
        z: -2,
      },
      rotation: {
        x: 0,
        y: Math.PI,
        z: 0,
      }
  }
]
}
