var path = '/assets/scenes/sebastian-gross/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/sebastian-gross/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Sebastian-Gross_01.jpg'+compression,
      scale: 3.3,
      position: {
        x: -0.5,
        y: -0.85,
        z: 0.5,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Sebastian-Gross_02.jpg'+compression,
      scale: 2.3,
      position: {
        x: -2,
        y: -0.36,
        z: -2,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Sebastian-Gross_03.jpg'+compression,
      scale: 1.9,
      position: {
        x: 2,
        y: -1.3,
        z: 1,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
	{
      path: cdn+'3d_Sebastian-Gross_04.jpg'+compression,
      scale: 1.6,
      position: {
        x: -1,
        y: -0.8,
        z: 2,
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
      path: path+'Sebastian-Gross.fbx',
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
      path: path+'3d_Sebastian-Gross_05.mp4',
      scale: 1.3,
      position: {
        x: 2.3,
        y: -0.8,
        z: -2.3,
      },
      rotation: {
        x: 0,
        y: Math.PI/4,
        z: 0,
      }
    },
]
}
