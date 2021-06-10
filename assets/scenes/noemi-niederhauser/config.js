var path = '/assets/scenes/noemi-niederhauser/'
roomConfig = {
  images: [
    {
      path: path+'3d_Noemi-Niederhauser_01.jpg',
      scale: 2.9,
      position: {
        x: -2,
        y: -0.9,
        z: 1.7,
      },
      rotation: {
        x: 0,
        y: -60*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_Noemi-Niederhauser_02.jpg',
	  scale: 2.9,
	  position: {
		x: 2,
		y: -0.9,
		z: 1.7,
	  },
	  rotation: {
		x: 0,
		y: 60*Math.PI/180,
		z: 0,
	  }
    },
    {
      path: path+'3d_Noemi-Niederhauser_03.jpg',
	  scale: 2.9,
	  position: {
		x: 2.5,
		y: -0.9,
		z: -1.3,
	  },
	  rotation: {
		x: 0,
		y: 90*Math.PI/180,
		z: 0,
	  }
    },
	{
      path: path+'3d_Noemi-Niederhauser_04.jpg',
      scale: 2.0,
      position: {
        x: 0,
        y: 0.0,
        z: 2,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: path+'3d_Noemi-Niederhauser_05.jpg',
      scale: 3.0,
      position: {
        x: -1.7,
        y: -0.0,
        z: -1.3,
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
      path: path+'Noemi-Niederhauser.fbx',
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
        path: path+'3d_Noemi-Niederhauser_06.mp4',
        scale: 2.1,
        position: {
          x: 0.5,
          y: -0.1,
          z: -1.2,
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        }
      },
  ]
}
