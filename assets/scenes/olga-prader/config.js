var path = '/assets/scenes/olga-prader/'
roomConfig = {
  images: [
    {
      path: path+'3d_Olga-Prader_01.jpg',
      scale: 2.,
      position: {
        x: -2,
        y: 1.2,
        z: -1.6,
      },
      rotation: {
        x: 0,
        y: 30*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_Olga-Prader_02.jpg',
	  scale: 2.,
      position: {
        x: -2,
        y: -0.7,
        z: 1.4,
      },
      rotation: {
        x: 0,
        y: -30*Math.PI/180,
        z: 0,
      }
    },
    {
      path: path+'3d_Olga-Prader_03.jpg',
      scale: 2,
      position: {
        x: 0,
        y: -0.7,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      }
    },
	{
      path: path+'3d_Olga-Prader_04.jpg',
	  scale: 2.,
      position: {
        x: 2,
        y: -0.7,
        z: 1.4,
      },
      rotation: {
        x: 0,
        y: 30*Math.PI/180,
        z: 0,
      }
    },
	{
      path: path+'3d_Olga-Prader_05.jpg',
	  scale: 2.,
      position: {
        x: 2,
        y: 1.2,
        z: -1.6,
      },
      rotation: {
        x: 0,
        y: -30*Math.PI/180,
        z: 0,
      }
    },
  ],
  blobs: [
    {
      path: path+'Olga-Prader.fbx',
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
