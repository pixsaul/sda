var path = '/assets/scenes/weichi-he/'
roomConfig = {
  images: [
    {
      path: path+'3d_Weichi-He_01.jpg',
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
      path: path+'3d_Weichi-He_02.jpg',
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
      path: path+'Weichi-He.fbx',
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
