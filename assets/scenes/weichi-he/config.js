var path = '/assets/scenes/weichi-he/'
var cdn = 'https://media-196c5.kxcdn.com/assets/scenes/weichi-he/'
var compression = '?width=800&quality=70'
roomConfig = {
  images: [
    {
      path: cdn+'3d_Weichi-He_01.jpg'+compression,
      scale: 3.8,
      position: {
        x: 1,
        y: -0.75,
        z: 1.9,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
    {
      path: cdn+'3d_Weichi-He_02.jpg'+compression,
      scale: 3.4,
      position: {
        x: -2,
        y: 0.2,
        z: 1,
      },
      rotation: {
        x: 0,
        y: 60*Math.PI/180,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: cdn+'Weichi-He.fbx',
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
  path: path+'3d_Weichi-He_03.mp4',
  scale: 2.5,
  position: {
	x: 0.8,
	y: 0.2,
	z: -0.8,
  },
  rotation: {
	x: 0,
	y: -60*Math.PI/180,
	z: 0,
  }
},
]
}
